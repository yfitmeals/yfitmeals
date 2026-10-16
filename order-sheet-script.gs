/**
 * YFIT Meals – website order receiver
 *
 * Paste this into Extensions > Apps Script of your "YFIT Meals Orders" Google Sheet,
 * then deploy it as a Web app (see SETUP-ORDERS.md).
 * Every order from the website becomes a new row in the "Orders" tab, and the
 * PayNow screenshot is saved to a Google Drive folder with a link in the row.
 */

var SHEET_NAME = 'Orders';
var FOLDER_NAME = 'YFIT Meals - Payment Screenshots';
// Put your email here to get an email for every new order, e.g. 'you@gmail.com'
var NOTIFY_EMAIL = '';

// Keep these in sync with the prices on the website
var PRICES = { A: [0, 8, 16, 24, 32], B: [0, 13, 26, 39, 51] };
var ADDON = 2;
var DELIVERY = 15;

var HEADERS = ['Received', 'Order ID', 'Name', 'Phone', 'Email', 'Menu A meals', 'Menu A add-ons',
  'Menu B meals', 'Menu B add-ons', 'Delivery / Collection', 'Address', 'Notes', 'Total ($)',
  'Payment screenshot', 'Status'];

function doPost(e) {
  try {
    var d = JSON.parse(e.postData.contents);
    var a = clamp_(d.menuA, 4), b = clamp_(d.menuB, 4);
    if (!a && !b) throw new Error('No meals in order');
    if (!d.name || !d.phone) throw new Error('Missing name or phone');
    if (d.screenshot && d.screenshot.length > 8000000) throw new Error('Screenshot too large');

    // Work out the total here too, so a tampered total on the website can't change the price
    var addA = Math.min(clamp_(d.addonA, 4), a), addB = Math.min(clamp_(d.addonB, 4), b);
    var delivery = d.fulfilment === 'Delivery';
    var total = PRICES.A[a] + PRICES.B[b] + ADDON * (addA + addB) + (delivery ? DELIVERY : 0);

    var lock = LockService.getScriptLock();
    lock.waitLock(20000);
    try {
      var sheet = getSheet_();
      var shotUrl = '';
      if (d.screenshot) {
        var blob = Utilities.newBlob(Utilities.base64Decode(d.screenshot), 'image/jpeg',
          clean_(d.orderId) + ' - ' + clean_(d.name) + '.jpg');
        shotUrl = getFolder_().createFile(blob).getUrl();
      }
      sheet.appendRow([new Date(), clean_(d.orderId), clean_(d.name), clean_(d.phone), clean_(d.email),
        a, addA, b, addB, delivery ? 'Delivery' : 'Self-collection', clean_(d.address), clean_(d.notes),
        total, shotUrl, 'Pending payment check']);
    } finally {
      lock.releaseLock();
    }

    if (NOTIFY_EMAIL) {
      MailApp.sendEmail(NOTIFY_EMAIL, 'New YFIT order ' + clean_(d.orderId) + ' – $' + total,
        'Name: ' + clean_(d.name) + '\nPhone: ' + clean_(d.phone) +
        '\nMenu A: ' + a + ' (+' + addA + ' add-ons)\nMenu B: ' + b + ' (+' + addB + ' add-ons)' +
        '\n' + (delivery ? 'Delivery to: ' + clean_(d.address) : 'Self-collection') +
        '\nNotes: ' + clean_(d.notes) + '\nTotal: $' + total +
        '\n\nOpen your Orders sheet: ' + SpreadsheetApp.getActiveSpreadsheet().getUrl());
    }

    return json_({ ok: true, orderId: d.orderId, total: total });
  } catch (err) {
    return json_({ ok: false, error: String(err.message || err) });
  }
}

// Visiting the web app link in a browser shows this, so you can check it's live
function doGet() {
  return ContentService.createTextOutput('YFIT Meals order receiver is running.');
}

function getSheet_() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(SHEET_NAME) || ss.insertSheet(SHEET_NAME);
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS);
    sheet.setFrozenRows(1);
    sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight('bold').setBackground('#a8d332');
    sheet.getRange('D:D').setNumberFormat('@'); // keep phone numbers as text
  }
  return sheet;
}

function getFolder_() {
  var it = DriveApp.getFoldersByName(FOLDER_NAME);
  return it.hasNext() ? it.next() : DriveApp.createFolder(FOLDER_NAME);
}

function clamp_(n, max) {
  n = Math.floor(Number(n) || 0);
  return Math.max(0, Math.min(max, n));
}

// Trim, limit length, and stop text starting with = + - @ being treated as a formula
function clean_(s) {
  s = String(s == null ? '' : s).trim().slice(0, 500);
  return /^[=+\-@]/.test(s) ? "'" + s : s;
}

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
