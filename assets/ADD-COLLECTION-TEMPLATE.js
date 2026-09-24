/*
  COPY THE COLLECTION ENTRY BELOW INTO window.HOTMALE_CATALOG
  in catalog.js, just before the final closing brace.

  Then create this folder and add the images:
  /assets/products/formal-wear/

  You may rename the slug, folder, titles, products and image filenames.
*/

const COLLECTION_TO_COPY = {
  'formal-wear': {
    title: 'Formal Wear',
    description: 'Sharp formal styles for work and occasions.',
    watermark: 'FORMAL',
    coverImage: local('formal-wear', 'cover.jpg'),
    products: [
      {
        id: 'fw-01',
        name: 'Classic Formal Shirt',
        price: 1499,
        sizes: ['M', 'L', 'XL', 'XXL'],
        image: local('formal-wear', 'fw-01.jpg'),
        fallbackImage: demo('photo-1617137968427-85924c800a22'),
        fresh: true
      },
      {
        id: 'fw-02',
        name: 'Tailored Formal Trouser',
        price: 1799,
        sizes: ['M', 'L', 'XL'],
        image: local('formal-wear', 'fw-02.jpg'),
        fallbackImage: demo('photo-1473966968600-fa801b869a1a'),
        fresh: false
      }
    ]
  }
};
