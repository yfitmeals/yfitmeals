/*
 * ===== THIS WEEK'S MENU =====
 * This is the only file you need to change each week.
 *
 * For each menu:
 *   name    – full dish name, in English (en) and Malay (ms)
 *   short   – shorter name used in the order form and WhatsApp message
 *   prices  – the TOTAL price for 1, 2, 3 and 4 meals (so a 4-meal deal is easy)
 *   kcal, protein, carbs, fats – per meal (grams)
 *   photo   – a file in the images folder, max ~1200px wide
 *   alt     – a short description of the photo, for screen readers
 *
 * If you change prices here and you use the Google Sheet orders,
 * also update the PRICES line in order-sheet-script.gs.
 */
window.YFIT_MENU = {
  A: {
    name:  { en: 'Gochujang Chicken with Rice', ms: 'Ayam Gochujang dengan Nasi' },
    short: { en: 'Gochujang Chicken',           ms: 'Ayam Gochujang' },
    prices: [8, 16, 24, 32],
    kcal: 523, protein: 43.9, carbs: 62, fats: 8.6,
    photo: 'images/chicken-rice.jpg',
    alt: 'Glazed grilled chicken thigh with white rice and long beans'
  },
  B: {
    name:  { en: 'Beef Steak Stir Fry with Rice', ms: 'Stik Daging Tumis dengan Nasi' },
    short: { en: 'Beef Steak Stir Fry',           ms: 'Stik Daging Tumis' },
    prices: [13, 26, 39, 51],
    kcal: 575, protein: 46.7, carbs: 58.4, fats: 14.9,
    photo: 'images/steak-kimchi-rice.jpg',
    alt: 'Sliced seared beef steak over kimchi fried rice'
  }
};
