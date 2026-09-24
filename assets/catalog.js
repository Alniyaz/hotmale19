/*
  HOTMALE CATALOG
  ----------------
  THIS IS THE ONLY FILE YOU NEED TO EDIT FOR COLLECTIONS AND PRODUCTS.

  1. Copy one complete collection block to add a collection.
  2. Give it a unique lowercase slug, for example: 'formal-wear'.
  3. Upload its photos into /assets/products/<slug>/.
  4. New collections automatically appear on the home page and use the reusable collection page.
  5. If a product photo is missing, its demo fallback image is shown automatically.
*/
(() => {
  const local = (category, filename) => `/assets/products/${category}/${filename}`;
  const demo = (id) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1000&q=86`;

  window.HOTMALE_CATALOG = {
    'new-arrivals': {
      title: 'New Arrivals',
      description: 'Fresh silhouettes, sharper layers and the newest HOTMALE drops.',
      watermark: 'NEW',
      href: '/collections/new-arrivals/',
      coverImage: demo('photo-1617137968427-85924c800a22'),
      products: [
        { id: 'na-01', name: 'Premium Noir Overshirt', price: 1499, sizes: ['M','L','XL','XXL'], image: local('new-arrivals','na-01.jpg'), fallbackImage: demo('photo-1617137968427-85924c800a22'), fresh: true },
        { id: 'na-02', name: 'Urban Sand Jacket', price: 2299, sizes: ['S','M','L','XL'], image: local('new-arrivals','na-02.jpg'), fallbackImage: demo('photo-1516257984-b1b4d707412e'), fresh: true },
        { id: 'na-03', name: 'Classic Black Polo', price: 999, sizes: ['M','L','XL','XXL'], image: local('new-arrivals','na-03.jpg'), fallbackImage: demo('photo-1500648767791-00dcc994a43e'), fresh: false },
        { id: 'na-04', name: 'Linen Occasion Shirt', price: 1399, sizes: ['S','M','L','XL'], image: local('new-arrivals','na-04.jpg'), fallbackImage: demo('photo-1519085360753-af0119f7cbe7'), fresh: true },
 
        { id: 'na-06', name: 'Tapered City Trouser', price: 1799, sizes: ['S','M','L','XL'], image: local('new-arrivals','na-06.jpg'), fallbackImage: demo('photo-1473966968600-fa801b869a1a'), fresh: false }
      ]
    },
    'gen-z-fits': {
      title: 'Gen Z Fits',
      description: 'Oversized energy, street-led layers and relaxed fits built for now.',
      watermark: 'Z',
      href: '/collections/gen-z-fits/',
      coverImage: demo('photo-1523398002811-999ca8dec234'),
      products: [
        { id: 'gz-01', name: 'Oversized Graphic Hoodie', price: 1899, sizes: ['S','M','L','XL'], image: local('gen-z-fits','gz-01.jpg'), fallbackImage: demo('photo-1556821840-3a63f95609a7'), fresh: true },
        { id: 'gz-02', name: 'Good Vibes Boxy Tee', price: 1299, sizes: ['S','M','L','XL','XXL'], image: local('gen-z-fits','gz-02.jpg'), fallbackImage: demo('photo-1523398002811-999ca8dec234'), fresh: true },
        { id: 'gz-03', name: 'Relaxed Cargo Trouser', price: 1599, sizes: ['S','M','L','XL'], image: local('gen-z-fits','gz-03.jpg'), fallbackImage: demo('photo-1473966968600-fa801b869a1a'), fresh: false },
        { id: 'gz-04', name: 'Varsity Night Jacket', price: 2499, sizes: ['M','L','XL'], image: local('gen-z-fits','gz-04.jpg'), fallbackImage: demo('photo-1551488831-00ddcb6c6bd3'), fresh: true },
        { id: 'gz-05', name: 'Washed Street Tee', price: 1099, sizes: ['S','M','L','XL'], image: local('gen-z-fits','gz-05.jpg'), fallbackImage: demo('photo-1521572163474-6864f9cf17ab'), fresh: false },
        { id: 'gz-06', name: 'Utility Layer Shirt', price: 1699, sizes: ['M','L','XL','XXL'], image: local('gen-z-fits','gz-06.jpg'), fallbackImage: demo('photo-1576566588028-4147f3842f27'), fresh: true }
      ]
    },
    'ethnic-wear': {
      title: 'Ethnic Wear',
      description: 'Contemporary ceremony pieces with traditional texture and a modern edge.',
      watermark: 'E',
      href: '/collections/ethnic-wear/',
      coverImage: demo('photo-1610189012906-4c0aa9b9781e'),
      products: [
        { id: 'et-01', name: 'Ivory Embroidered Kurta', price: 2499, sizes: ['S','M','L','XL'], image: local('ethnic-wear','et-01.jpg'), fallbackImage: demo('photo-1610189012906-4c0aa9b9781e'), fresh: true },
        { id: 'et-02', name: 'Black Gold Celebration Shirt', price: 1999, sizes: ['M','L','XL','XXL'], image: local('ethnic-wear','et-02.jpg'), fallbackImage: demo('photo-1617137968427-85924c800a22'), fresh: true },
        { id: 'et-03', name: 'Sandstone Waistcoat Set', price: 2299, sizes: ['S','M','L','XL'], image: local('ethnic-wear','et-03.jpg'), fallbackImage: demo('photo-1506629082955-511b1aa562c8'), fresh: false },
        { id: 'et-04', name: 'Festive Noir Kurta', price: 2199, sizes: ['M','L','XL','XXL'], image: local('ethnic-wear','et-04.jpg'), fallbackImage: demo('photo-1519085360753-af0119f7cbe7'), fresh: false },
        { id: 'et-05', name: 'Heritage Jacquard Jacket', price: 2999, sizes: ['M','L','XL'], image: local('ethnic-wear','et-05.jpg'), fallbackImage: demo('photo-1560250097-0b93528c311a'), fresh: true },
        { id: 'et-06', name: 'Classic Ceremony Set', price: 3499, sizes: ['S','M','L','XL'], image: local('ethnic-wear','et-06.jpg'), fallbackImage: demo('photo-1598808503746-f34c53b9323e'), fresh: false }
      ]
    },
    'plus-size-wear': {
      title: 'Plus-Size Wear',
      description: 'Confident cuts, considered comfort and style without compromise.',
      watermark: '+',
      href: '/collections/plus-size-wear/',
      coverImage: demo('photo-1622286342621-4bd786c2447c'),
      products: [
        { id: 'ps-01', name: 'Plus-Size Essential Polo', price: 1199, sizes: ['XL','XXL','3XL','4XL'], image: local('plus-size-wear','ps-01.jpg'), fallbackImage: demo('photo-1622286342621-4bd786c2447c'), fresh: true },
        { id: 'ps-02', name: 'Plus-Size Utility Shirt', price: 1599, sizes: ['XL','XXL','3XL','4XL'], image: local('plus-size-wear','ps-02.jpg'), fallbackImage: demo('photo-1560250097-0b93528c311a'), fresh: false },
        { id: 'ps-03', name: 'Plus-Size City Hoodie', price: 1899, sizes: ['XL','XXL','3XL','4XL'], image: local('plus-size-wear','ps-03.jpg'), fallbackImage: demo('photo-1556821840-3a63f95609a7'), fresh: true },
        { id: 'ps-04', name: 'Plus-Size Formal Shirt', price: 1499, sizes: ['XL','XXL','3XL','4XL'], image: local('plus-size-wear','ps-04.jpg'), fallbackImage: demo('photo-1562157873-818bc0726f68'), fresh: false },
        { id: 'ps-05', name: 'Plus-Size Weekend Tee', price: 999, sizes: ['XL','XXL','3XL','4XL'], image: local('plus-size-wear','ps-05.jpg'), fallbackImage: demo('photo-1500648767791-00dcc994a43e'), fresh: true },
        { id: 'ps-06', name: 'Plus-Size Smart Jacket', price: 2699, sizes: ['XL','XXL','3XL'], image: local('plus-size-wear','ps-06.jpg'), fallbackImage: demo('photo-1516257984-b1b4d707412e'), fresh: false }
      ]
    },
    'combo-collections': {
      title: 'Combo Collections',
      description: 'Choose your quantity, mix your favourites and unlock the combo price.',
      watermark: '4X',
      href: '/collections/combo-collections/',
      coverImage: demo('photo-1523381210434-271e8be1f52b'),
      cardWide: true,
      cardCta: 'Shop the complete look',
      type: 'combo',
      products: [
        { id: 'co-01', name: 'Essential Tee Combo', price: 599, dealQty: 2, dealPrice: 599, sizes: ['M','L','XL','XXL'], image: local('combo-collections','co-01.jpg'), fallbackImage: demo('photo-1523381210434-271e8be1f52b'), fresh: true },
        { id: 'co-02', name: 'Weekend Shirt Combo', price: 599, dealQty: 2, dealPrice: 599, sizes: ['S','M','L','XL'], image: local('combo-collections','co-02.jpg'), fallbackImage: demo('photo-1551488831-00ddcb6c6bd3'), fresh: true },
        { id: 'co-03', name: 'Streetwear Mix Combo', price: 799, dealQty: 3, dealPrice: 799, sizes: ['M','L','XL'], image: local('combo-collections','co-03.jpg'), fallbackImage: demo('photo-1610189012906-4c0aa9b9781e'), fresh: false },
        { id: 'co-04', name: 'Smart-Casual Mix Combo', price: 799, dealQty: 3, dealPrice: 799, sizes: ['S','M','L','XL','XXL'], image: local('combo-collections','co-04.jpg'), fallbackImage: demo('photo-1445205170230-053b83016050'), fresh: false },
        { id: 'co-05', name: 'Anniversary Mega Combo', price: 990, dealQty: 4, dealPrice: 990, sizes: ['M','L','XL','XXL'], image: local('combo-collections','co-05.jpg'), fallbackImage: demo('photo-1490578474895-699cd4e2cf59'), fresh: true },
        { id: 'co-06', name: 'Four-Fit Value Combo', price: 990, dealQty: 4, dealPrice: 990, sizes: ['S','M','L','XL'], image: local('combo-collections','co-06.jpg'), fallbackImage: demo('photo-1527719327859-c6ce80353573'), fresh: false }
      ]
    }
  };
})();
