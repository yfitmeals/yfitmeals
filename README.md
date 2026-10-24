# YFIT Meals

Website for **YFIT Meals**, a home-based, high-protein meal prep business in Singapore.
*Fuel. Prepare. Perform.*

- `index.html` is the whole website: menu, on-site ordering, FAQ, and light/dark mode.
- `images/` holds the logo and meal photos.
- `order-sheet-script.gs` and `SETUP-ORDERS.md` are optional. They save website orders to a Google Sheet. Without them, orders are sent through WhatsApp.

## Updating the weekly menu
Edit `menu.js`. It holds this week's two dishes (English and Malay names), prices, calories, macros and photos, and the menu cards, order form, price FAQ and hero stats all update from it. Put new photos in `images/`, at most ~1200px wide.

Orders close automatically from Friday 9pm to Sunday 2pm (Singapore time). Add `?closed=1` to the address to preview the closed state.

Other text, in both languages, lives in `index.html` (English) and `i18n.js` (Malay).

## Viewing locally
Open `index.html` in a browser. No build step is needed.
