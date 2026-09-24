# Editing HOTMALE Collections

All collection and product content is managed from one file:

`dist/assets/catalog.js`

You do not need to edit the home page or create another collection page. New collections automatically appear on the home page and open in the reusable collection layout.

## Add a new collection

1. Open `dist/assets/ADD-COLLECTION-TEMPLATE.js`.
2. Copy the example collection entry into `window.HOTMALE_CATALOG` inside `dist/assets/catalog.js`.
3. Change the slug, title, description, products and prices.
4. Create a matching image folder, for example `dist/assets/products/formal-wear`.
5. Add `cover.jpg` and the product images to that folder.

The slug must be lowercase and use hyphens, for example `formal-wear`. The product image folder must use exactly the same slug.

Do not add an `href` field for a new collection. The website will automatically use:

`/collections/view/?collection=your-slug`

## Collection fields

```js
'formal-wear': {
  title: 'Formal Wear',
  description: 'Sharp formal styles for work and occasions.',
  watermark: 'FORMAL',
  coverImage: local('formal-wear', 'cover.jpg'),
  products: []
}
```

- `title`: collection name shown on the website.
- `description`: short collection introduction.
- `watermark`: large faded text behind the collection heading.
- `coverImage`: home-page collection image.
- `products`: products inside the collection.
- `hidden: true`: optional; hides the collection from the home page.
- `cardWide: true`: optional; makes the home-page card wider.
- `type: 'combo'`: optional; enables combo-offer labels.

## Add or edit products

```js
{
  id: 'fw-01',
  name: 'Classic Formal Shirt',
  price: 1499,
  sizes: ['M', 'L', 'XL', 'XXL'],
  image: local('formal-wear', 'fw-01.jpg'),
  fallbackImage: demo('photo-1617137968427-85924c800a22'),
  fresh: true
}
```

Copy a product entry to add another product. Every product needs a unique `id` and image filename.

Recommended product image size: portrait JPG, approximately 1200 × 1600 pixels. Recommended cover image size: landscape JPG, approximately 1600 × 1000 pixels.

## Combo offers

Add these fields to a combo product:

```js
dealQty: 4,
dealPrice: 990
```

This displays **BUY 4 @ ₹990** on the product.
