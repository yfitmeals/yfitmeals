# Connect website orders to a Google Sheet

Do this once, in about 5 minutes. Afterwards, every order placed on the website appears as a new row in your Google Sheet, and the customer's PayNow screenshot is saved in your Google Drive.

Until you finish these steps, the website still takes orders by sending them to your WhatsApp (+65 9818 8807).

## 1. Make the sheet
1. Go to https://sheets.new while signed in to your Google account.
2. Name it **YFIT Meals Orders**.

## 2. Add the script
1. In the sheet, click **Extensions → Apps Script**.
2. Delete everything in the code box.
3. Open `order-sheet-script.gs` from this folder, copy all of it, and paste it in.
4. Optional: to get an email for every order, put your email between the quotes on the `NOTIFY_EMAIL` line.
5. Click the **Save** icon.

## 3. Publish it
1. Click **Deploy → New deployment**.
2. Click the gear icon next to "Select type" and choose **Web app**.
3. Set **Execute as: Me** and **Who has access: Anyone**.
4. Click **Deploy**, then **Authorize access**, and choose your Google account.
   - If you see "Google hasn't verified this app", click **Advanced → Go to (project name) (unsafe)**. That warning appears because it's your own script, which is normal.
5. Copy the **Web app URL**. It ends in `/exec`.

## 4. Send me the link
Send the URL to Claude, or paste it yourself into `index.html` on this line:

```js
var ORDERS_URL = '';
```

so it looks like `var ORDERS_URL = 'https://script.google.com/macros/s/.../exec';`

## Day to day
- New orders arrive with the status **Pending payment check**. Open the screenshot link, check the payment, and change the status to **Confirmed**.
- The sheet works out each total itself from the prices in the script, so a customer can't change the price.
- **When your menu or prices change:** update them in `index.html` and in the `PRICES` line of the script. After editing the script, click **Deploy → Manage deployments → Edit (pencil) → Version: New version → Deploy**. The URL stays the same.
