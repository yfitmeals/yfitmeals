/*
 * YFIT Meals – English / Bahasa Melayu switch
 *
 * English lives in the HTML. Any element with data-i18n="key" swaps to MS[key] in Malay.
 * data-i18n-ph="key" and data-i18n-aria="key" do the same for placeholder and aria-label.
 * Text built by the page's scripts (order lines, errors, WhatsApp message) comes from DYN.
 * If a key has no Malay text, the English stays, so nothing ever shows blank.
 */
(function () {
  var MS = {
    /* ---------- main page ---------- */
    title: 'YFIT Meals | Makanan Siap Tinggi Protein, Singapura',
    'nav.week': 'Minggu Ini',
    'nav.order': 'Tempah',
    'nav.how': 'Cara Tempah',
    'nav.faq': 'Soalan Lazim',
    'nav.cta': 'Tempah Sekarang',

    'hero.eyebrow': 'Makanan siap tinggi protein &middot; Singapura',
    'hero.h1': 'Makan sihat.<br><em>Berlatih keras.</em><br>Tak perlu masak.',
    'hero.lead': 'Makanan segar tinggi protein, disediakan untuk matlamat kecergasan dan minggu sibuk anda. Dua menu baharu setiap minggu, dengan kalori dan makro dikira hingga ke gram.',
    'hero.cta': 'Tempah makanan minggu ini',
    'hero.menu': 'Lihat menu',
    'dl.close': 'Tempahan ditutup',
    'dl.fri': 'Jumaat, 9 malam',
    'dl.ready': 'Makanan siap',
    'dl.sun': 'Ahad, 2 petang',
    'dl.both': 'Penghantaran atau ambil sendiri',
    'chip.protein': 'protein setiap hidangan',
    'chip.kcal': 'kcal &middot; dikira hingga ke gram',

    'strip.1': '<b>40g+ protein</b>dalam setiap hidangan utama',
    'strip.2': '<b>Jejak makro percuma</b>kalori hingga ke gram',
    'strip.3': '<b>2 menu baharu</b>bertukar setiap minggu',
    'strip.4': '<b>Hantar atau ambil</b>setiap Ahad, 2 petang',

    'menu.eyebrow': 'Menu minggu ini',
    'menu.h2': 'Dua hidangan. <span style="color:var(--lime-dk)">Tepat setiap gram.</span>',
    'menu.p': 'Setiap hidangan disukat dan ditimbang, jadi anda tahu dengan tepat apa yang anda makan. Tambah daging dan nasi untuk mana-mana hidangan dengan $2.',
    'menu.note': 'Menu bertukar setiap minggu. Ikuti kami supaya anda tidak terlepas hidangan kegemaran.',

    'closed.h': 'Tempahan untuk minggu ini telah ditutup',
    'closed.p': 'Tempahan untuk minggu hadapan dibuka pada hari Ahad, 2 petang. Anda masih boleh melihat menu, atau WhatsApp kami jika ada soalan.',
    'order.eyebrow': 'Tempah sekarang',
    'order.h2': 'Buat tempahan anda',
    'order.p': 'Pilih hidangan, isi butiran anda dan bayar melalui PayNow. Hanya ambil masa kira-kira seminit. Tempahan ditutup Jumaat, 9 malam.',
    'fs.1': 'Pilih hidangan anda',
    'fs.2': 'Butiran anda',
    'fs.3': 'Penghantaran atau ambil sendiri',
    'fs.4': 'Pembayaran',
    'addon': 'Tambahan daging &amp; nasi <small>+$2 / hidangan</small>',
    'aria.remA': 'Kurangkan satu hidangan Menu A',
    'aria.addA': 'Tambah satu hidangan Menu A',
    'aria.remB': 'Kurangkan satu hidangan Menu B',
    'aria.addB': 'Tambah satu hidangan Menu B',
    'aria.remAddon': 'Kurangkan satu tambahan',
    'aria.addAddon': 'Tambah satu tambahan',
    'err.meals': 'Sila tambah sekurang-kurangnya satu hidangan.',
    'f.name': 'Nama penuh *',
    'err.name': 'Sila masukkan nama anda.',
    'f.phone': 'Nombor telefon *',
    'ph.phone': 'cth. 9123 4567',
    'err.phone': 'Sila masukkan nombor telefon yang sah.',
    'f.email': 'E-mel <span class="opt">(pilihan)</span>',
    'err.email': 'Sila semak alamat e-mel anda.',
    'seg.collect': 'Ambil sendiri &middot; Percuma',
    'seg.deliver': 'Penghantaran &middot; $15',
    'f.addr': 'Alamat penghantaran *',
    'ph.addr': 'Blok, jalan, nombor unit, poskod',
    'err.addr': 'Sila masukkan alamat penghantaran anda.',
    'f.notes': 'Nota <span class="opt">(pilihan)</span>',
    'ph.notes': 'Alahan, permintaan khas, masa ambil',
    'pay.to': 'kepada <strong>+65 9818 8807</strong> &middot; catatan <strong>YF Prep</strong>',
    'pay.copy': 'Salin nombor',
    'err.shot': 'Sila muat naik tangkapan skrin bayaran anda.',
    'shot.note': 'Selepas anda membuat tempahan, WhatsApp akan dibuka dengan butiran tempahan anda. Lampirkan tangkapan skrin PayNow anda di sana.',
    'sum.h': 'Tempahan anda',
    'sum.total': 'Jumlah',
    'sum.submit': 'Buat tempahan',
    'sum.consent': 'Dengan membuat tempahan, anda bersetuju dengan <a href="privacy.html">Notis Privasi</a> kami. Kami hanya menggunakan butiran anda untuk menyediakan, menghantar dan mengesahkan tempahan anda.',
    'sum.fine': 'Tempahan anda disahkan sebaik sahaja kami menerima bayaran. Maksimum 4 hidangan bagi setiap menu untuk setiap tempahan. Makanan siap pada hari Ahad, 2 petang.',
    'done.h': 'Tempahan diterima!',
    'done.order': 'Tempahan',
    'done.again': 'Buat tempahan lain',
    'mbar.go': 'Teruskan',

    'how.eyebrow': 'Cara tempah',
    'how.h2': 'Tempah Jumaat. Makan sihat sepanjang minggu.',
    'how.1.h': 'Pilih hidangan anda',
    'how.1.p': 'Tempah terus di laman web kami. Pilih daripada dua menu minggu ini dan tambah daging dan nasi jika perlu.',
    'how.1.w': 'Sebelum Jumaat, 9 malam',
    'how.2.h': 'Bayar melalui PayNow',
    'how.2.p': 'PayNow ke +65 9818 8807 dengan catatan &ldquo;YF Prep&rdquo;, kemudian hantar tangkapan skrin anda semasa membuat tempahan.',
    'how.2.w': 'Mengesahkan tempahan anda',
    'how.3.h': 'Kami sedia &amp; bungkus',
    'how.3.p': 'Setiap hidangan dimasak segar, disukat dan ditimbang, dengan kalori dan makro dikira.',
    'how.3.w': 'Hujung minggu',
    'how.4.h': 'Ambil atau terima',
    'how.4.p': 'Ambil sendiri atau dapatkan penghantaran. Kami akan WhatsApp anda apabila makanan anda dalam perjalanan.',
    'how.4.w': 'Ahad, 2 petang',

    'gal.eyebrow': 'Dari dapur kami',
    'gal.h2': 'Makanan sebenar. Hidangan sebenar.',
    'gal.p': 'Lihat apa yang keluar dari dapur YFIT setiap minggu. Tanpa penapis, hanya makanan yang jujur.',
    'gal.1': 'Ayam gochujang &amp; nasi',
    'gal.2': 'Timbunan pancake',
    'gal.3': 'Stik &amp; nasi kimchi',
    'gal.4': 'Pancake segar',

    'rev.eyebrow': 'Kata pelanggan',
    'rev.h2': 'Bertenaga bersama YFIT',
    'rev.p': 'Maklum balas sebenar daripada mereka yang menikmati makanan kami setiap minggu.',

    'about.eyebrow': 'Kisah kami',
    'about.h2': 'Makanan siap untuk mereka yang berlatih.',
    'about.p1': 'YFIT Meals ialah dapur dari rumah di Singapura. Kami memasak makanan segar tinggi protein untuk mereka yang mahu mencapai matlamat tanpa menghabiskan hari Ahad di dapur.',
    'about.p2': 'Setiap minggu ada dua menu baharu, jadi anda dapat kepelbagaian dan pemakanan seimbang tanpa rasa bosan. Bahan yang bersih, hidangan yang jujur, dan angka yang membuktikannya.',
    'about.role': 'Pengasas, YFIT Meals',

    'care.1.h': 'Makan minggu ini?',
    'care.1.p': 'Simpan makanan anda dalam peti sejuk sebaik sahaja anda menerima atau mengambilnya.',
    'care.2.h': 'Simpan untuk kemudian?',
    'care.2.p': 'Bekukan sehingga 3 minggu supaya kekal segar dan sedap.',
    'care.3.h': 'Sedia untuk makan?',
    'care.3.p': 'Panaskan dalam ketuhar gelombang mikro selama 2&ndash;3 minit supaya tekstur dan rasanya kekal elok.',

    'faq.eyebrow': 'Soalan Lazim',
    'faq.h2': 'Perlu tahu',
    'faq.1.q': 'Bilakah tarikh akhir tempahan?',
    'faq.1.a': 'Tempahan ditutup setiap Jumaat pada 9 malam. Makanan siap untuk dihantar atau diambil sendiri pada hari Ahad berikutnya, 2 petang.',
    'faq.2.q': 'Berapakah harganya?',
    'faq.3.q': 'Apakah jejak makro percuma?',
    'faq.3.a': 'Setiap pembelian disertakan dengan kalori, protein, karbohidrat dan lemak bagi hidangan anda, dikira hingga ke gram. Mudah dicatat, mudah kekal di landasan.',
    'faq.4.q': 'Bagaimana cara membayar?',
    'faq.4.a': 'PayNow atau QR ke +65 9818 8807 dengan catatan &ldquo;YF Prep&rdquo;, kemudian hantar tangkapan skrin bayaran anda semasa membuat tempahan. Tempahan anda disahkan sebaik sahaja kami menerima bayaran.',
    'faq.5.q': 'Adakah menu bertukar?',
    'faq.5.a': 'Ya. Ada dua menu baharu setiap minggu, jadi anda dapat kepelbagaian tanpa perlu fikir.',
    'faq.6.q': 'Bagaimana saya tahu penghantaran sedang dalam perjalanan?',
    'faq.6.a': 'Kami akan memaklumkan anda melalui WhatsApp sebaik sahaja makanan anda keluar untuk dihantar.',

    'cta.h2': 'Makanan seminggu anda, beres.',
    'cta.p': 'Tempahan ditutup Jumaat, 9 malam. Tempah sekarang sebelum slot minggu ini habis.',
    'cta.order': 'Tempah sekarang',
    'cta.wa': 'WhatsApp kami',

    'ft.tagline': 'Makanan siap segar tinggi protein dari dapur rumah kami di Singapura.',
    'ft.explore': 'Terokai',
    'ft.menu': 'Menu minggu ini',
    'ft.pricing': 'Tempahan &amp; harga',
    'ft.how': 'Cara tempah',
    'ft.faq': 'Soalan Lazim',
    'ft.privacy': 'Notis Privasi',
    'ft.order': 'Tempah',
    'ft.place': 'Buat tempahan',
    'ft.close': 'Tempahan ditutup Jum, 9 malam',
    'ft.ready': 'Siap Ahad, 2 petang',
    'ft.rights': 'Hak cipta terpelihara.',
    'ft.made': '<a href="privacy.html">Notis Privasi</a> &middot; Dibuat segar di Singapura',

    /* ---------- privacy page ---------- */
    'p.title': 'Notis Privasi | YFIT Meals',
    'p.back': '&larr; Kembali ke laman',
    'p.h1': 'Notis Privasi',
    'p.updated': 'Kemas kini terakhir: 21 Oktober 2026',
    'p.summary': '<strong>Ringkasnya:</strong> kami hanya mengumpul maklumat yang diperlukan untuk menyediakan, menghantar dan mengesahkan tempahan makanan anda. Kami tidak menjual data anda atau menggunakannya untuk tujuan lain tanpa persetujuan anda, dan anda boleh meminta untuk melihat, membetulkan atau memadamnya pada bila-bila masa.',
    'p.intro': 'YFIT Meals (&ldquo;kami&rdquo;) ialah perniagaan makanan siap dari rumah di Singapura. Notis ini menerangkan cara kami mengendalikan data peribadi anda di bawah Akta Perlindungan Data Peribadi 2012 (PDPA) Singapura.',
    'p.langnote': 'Notis ini tersedia dalam Bahasa Inggeris dan Bahasa Melayu. Jika terdapat sebarang perbezaan, versi Bahasa Inggeris akan diguna pakai.',
    'p.collect.h': 'Apa yang kami kumpul',
    'p.collect.lead': 'Apabila anda membuat tempahan, kami mengumpul:',
    'p.collect.1': 'nama dan nombor telefon anda',
    'p.collect.2': 'alamat e-mel anda, jika anda memilih untuk memberikannya',
    'p.collect.3': 'alamat penghantaran anda, jika anda memilih penghantaran',
    'p.collect.4': 'sebarang nota yang anda tambah, seperti alahan atau permintaan khas',
    'p.collect.5': 'butiran tempahan dan tangkapan skrin bayaran PayNow anda',
    'p.why.h': 'Mengapa kami mengumpulnya',
    'p.why.lead': 'Kami menggunakan data peribadi anda hanya untuk:',
    'p.why.1': 'menyediakan dan mengesahkan tempahan anda, serta menyemak bayaran anda',
    'p.why.2': 'menghantar makanan anda atau mengatur pengambilan sendiri',
    'p.why.3': 'menghubungi anda tentang tempahan anda, contohnya melalui WhatsApp apabila makanan anda dalam perjalanan',
    'p.why.4': 'mengendalikan sebarang soalan, maklum balas atau masalah berkaitan tempahan anda',
    'p.why.mkt': 'Kami tidak akan menghantar mesej pemasaran kecuali anda telah bersetuju untuk menerimanya, dan anda boleh berhenti melanggan pada bila-bila masa.',
    'p.consent.h': 'Persetujuan anda',
    'p.consent.p': 'Dengan membuat tempahan, anda bersetuju bahawa kami boleh mengumpul, menggunakan dan mendedahkan data peribadi anda bagi tujuan di atas. Anda boleh menarik balik persetujuan anda pada bila-bila masa dengan menghubungi kami. Jika anda berbuat demikian, kami mungkin tidak dapat memenuhi tempahan yang sedang diproses.',
    'p.share.h': 'Dengan siapa kami berkongsi',
    'p.share.lead': 'Kami tidak menjual, menyewakan atau memperdagangkan data peribadi anda. Kami hanya berkongsinya apabila perlu untuk tempahan anda:',
    'p.share.1': '<strong>Penghantaran:</strong> nama, nombor telefon dan alamat anda diberikan kepada orang yang menghantar tempahan anda.',
    'p.share.2': '<strong>Perkhidmatan yang kami gunakan:</strong> tempahan dihantar kepada kami melalui WhatsApp, dan mungkin disimpan dalam perkhidmatan Google (seperti Google Sheets dan Google Drive). Penyedia ini mengendalikan data mengikut terma privasi mereka sendiri.',
    'p.share.3': '<strong>Jika dikehendaki oleh undang-undang:</strong> kami mungkin mendedahkan data jika dikehendaki oleh undang-undang Singapura.',
    'p.keep.h': 'Berapa lama kami menyimpannya',
    'p.keep.p': 'Kami menyimpan butiran tempahan anda hanya selama yang diperlukan untuk melayani anda dan untuk rekod perniagaan kami, iaitu tidak lebih daripada 12 bulan selepas tempahan terakhir anda. Selepas itu, kami memadamnya.',
    'p.protect.h': 'Cara kami melindunginya',
    'p.protect.p': 'Maklumat tempahan anda disimpan dalam akaun yang hanya boleh diakses oleh YFIT Meals, dan kami mengambil langkah yang munasabah untuk melindunginya daripada akses, penggunaan atau pendedahan tanpa kebenaran.',
    'p.rights.h': 'Hak anda',
    'p.rights.lead': 'Anda boleh meminta kami untuk:',
    'p.rights.1': 'memberitahu anda data peribadi yang kami simpan tentang anda dan bagaimana ia telah digunakan',
    'p.rights.2': 'membetulkan sebarang data peribadi yang salah atau lapuk',
    'p.rights.3': 'memadam data peribadi anda, atau berhenti menggunakannya',
    'p.rights.time': 'Kami akan membalas secepat yang munasabah, biasanya dalam tempoh 30 hari.',
    'p.site.h': 'Laman web ini',
    'p.site.p': 'Laman web ini tidak menggunakan kuki penjejakan atau pengiklanan. Ia hanya mengingati pilihan mod cerah atau gelap dan bahasa anda, dan tetapan itu kekal pada peranti anda sendiri. Fon dimuatkan daripada Google Fonts, yang mungkin dapat melihat alamat IP peranti anda.',
    'p.contact.h': 'Hubungi kami',
    'p.contact.lead': 'Untuk sebarang soalan atau permintaan tentang data peribadi anda, hubungi Pegawai Perlindungan Data kami:',
    'p.changes.h': 'Perubahan pada notis ini',
    'p.changes.p': 'Kami mungkin mengemas kini notis ini dari semasa ke semasa. Versi terkini akan sentiasa berada di halaman ini, bersama tarikh kemas kini terakhir.',
    'p.footer': 'Kembali ke YFIT Meals'
  };

  // Text the page scripts build on the fly
  var DYN = {
    en: {
      perMeal: 'per meal', kcalPer: 'kcal per meal', protein: 'Protein', carbs: 'Carbs', fats: 'Fats',
      faqPrice: function (parts, addon, delivery) {
        return parts.join(' ') + ' Extra meat and rice is $' + addon + ' per meal, and delivery is a flat $' + delivery + '. Self-collection is free.';
      },
      faqMenu: function (k, one, four) {
        return 'Menu ' + k + ' is $' + one + ' per meal' + (four ? ', or $' + four + ' for 4 meals.' : '.');
      },
      closedShort: 'Closed · reopens Sun, 2pm', closedBtn: 'Orders closed',
      addonLine: function (n, k) { return 'Extra meat & rice × ' + n + ' (Menu ' + k + ')'; },
      delivery: 'Delivery', collect: 'Self-collection', free: 'Free', total: 'Total',
      empty: 'Add a meal to get started.',
      meals: function (n) { return n + (n === 1 ? ' meal' : ' meals'); },
      copy: 'Copy number', copied: 'Copied!',
      shotDefault: '<b>Upload payment screenshot *</b><br>Tap to choose an image of your PayNow confirmation',
      shotAdded: function (name) { return '<b>Screenshot added</b><br>' + name + ' &middot; tap to change'; },
      placeOrder: 'Place order', sending: 'Sending your order…',
      sendFail: function (wa) { return 'Sorry, we couldn’t send your order. Please try again, or <a href="https://wa.me/' + wa + '" target="_blank" rel="noopener">WhatsApp us</a>.'; },
      doneSheet: 'Thank you for supporting YFIT Meals. We’ll confirm your order once we’ve checked your payment, and update you on WhatsApp when your meals are on the way.',
      doneWa: 'We’ve opened WhatsApp with your order. Please tap Send and attach your PayNow screenshot in the chat so we can confirm it.',
      waHi: function (id) { return 'Hi YFIT Meals! New order ' + id + ':'; },
      waTotal: 'Total', waName: 'Name', waPhone: 'Phone', waEmail: 'Email', waAddress: 'Address', waNotes: 'Notes',
      waShot: 'I will send my PayNow screenshot here.',
      closesIn: function (d, h, m) { return 'Closes in ' + (d ? d + 'd ' : '') + h + 'h ' + m + 'm'; },
      toLight: 'Switch to light mode', toDark: 'Switch to dark mode',
      langBtn: 'BM', langAria: 'Tukar ke Bahasa Melayu'
    },
    ms: {
      perMeal: 'setiap hidangan', kcalPer: 'kcal setiap hidangan', protein: 'Protein', carbs: 'Karbohidrat', fats: 'Lemak',
      faqPrice: function (parts, addon, delivery) {
        return parts.join(' ') + ' Tambahan daging dan nasi ialah $' + addon + ' setiap hidangan, dan penghantaran ialah $' + delivery + '. Ambil sendiri adalah percuma.';
      },
      faqMenu: function (k, one, four) {
        return 'Menu ' + k + ' ialah $' + one + ' setiap hidangan' + (four ? ', atau $' + four + ' untuk 4 hidangan.' : '.');
      },
      closedShort: 'Ditutup · dibuka semula Ahad, 2 petang', closedBtn: 'Tempahan ditutup',
      addonLine: function (n, k) { return 'Tambahan daging & nasi × ' + n + ' (Menu ' + k + ')'; },
      delivery: 'Penghantaran', collect: 'Ambil sendiri', free: 'Percuma', total: 'Jumlah',
      empty: 'Tambah hidangan untuk mula.',
      meals: function (n) { return n + ' hidangan'; },
      copy: 'Salin nombor', copied: 'Disalin!',
      shotDefault: '<b>Muat naik tangkapan skrin bayaran *</b><br>Ketik untuk pilih gambar pengesahan PayNow anda',
      shotAdded: function (name) { return '<b>Tangkapan skrin ditambah</b><br>' + name + ' &middot; ketik untuk tukar'; },
      placeOrder: 'Buat tempahan', sending: 'Menghantar tempahan anda…',
      sendFail: function (wa) { return 'Maaf, kami tidak dapat menghantar tempahan anda. Sila cuba lagi, atau <a href="https://wa.me/' + wa + '" target="_blank" rel="noopener">WhatsApp kami</a>.'; },
      doneSheet: 'Terima kasih kerana menyokong YFIT Meals. Kami akan mengesahkan tempahan anda selepas menyemak bayaran, dan memaklumkan anda melalui WhatsApp apabila makanan anda dalam perjalanan.',
      doneWa: 'Kami telah membuka WhatsApp dengan tempahan anda. Sila tekan Hantar dan lampirkan tangkapan skrin PayNow anda dalam chat supaya kami boleh mengesahkannya.',
      waHi: function (id) { return 'Salam YFIT Meals! Tempahan baharu ' + id + ':'; },
      waTotal: 'Jumlah', waName: 'Nama', waPhone: 'Telefon', waEmail: 'E-mel', waAddress: 'Alamat', waNotes: 'Nota',
      waShot: 'Saya akan hantar tangkapan skrin PayNow di sini.',
      closesIn: function (d, h, m) { return 'Ditutup dalam ' + (d ? d + ' hari ' : '') + h + 'j ' + m + 'm'; },
      toLight: 'Tukar ke mod cerah', toDark: 'Tukar ke mod gelap',
      langBtn: 'EN', langAria: 'Switch to English'
    }
  };

  var root = document.documentElement, lang = 'en';
  try { if (localStorage.getItem('yfit-lang') === 'ms') lang = 'ms'; } catch (e) {}

  // Swap one property, remembering the English original the first time
  function swap(el, key, store, get, set) {
    if (el.dataset[store] === undefined) el.dataset[store] = get(el);
    set(el, lang === 'ms' && MS[key] != null ? MS[key] : el.dataset[store]);
  }

  function apply() {
    root.lang = lang === 'ms' ? 'ms' : 'en';
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      swap(el, el.dataset.i18n, 'en', function (e) { return e.innerHTML; }, function (e, v) { e.innerHTML = v; });
    });
    document.querySelectorAll('[data-i18n-ph]').forEach(function (el) {
      swap(el, el.dataset.i18nPh, 'enPh', function (e) { return e.placeholder; }, function (e, v) { e.placeholder = v; });
    });
    document.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
      swap(el, el.dataset.i18nAria, 'enAria', function (e) { return e.getAttribute('aria-label'); }, function (e, v) { e.setAttribute('aria-label', v); });
    });
    var btn = document.getElementById('langBtn');
    if (btn) { btn.textContent = t('langBtn'); btn.setAttribute('aria-label', t('langAria')); }
    document.dispatchEvent(new Event('yfit:lang'));
  }

  function t(key) {
    var v = DYN[lang][key];
    return typeof v === 'function' ? v.apply(null, [].slice.call(arguments, 1)) : v;
  }

  window.YFIT_I18N = { t: t, lang: function () { return lang; } };

  document.addEventListener('DOMContentLoaded', function () {
    var btn = document.getElementById('langBtn');
    if (btn) btn.addEventListener('click', function () {
      lang = lang === 'ms' ? 'en' : 'ms';
      try { localStorage.setItem('yfit-lang', lang); } catch (e) {}
      apply();
    });
    apply();
  });
})();
