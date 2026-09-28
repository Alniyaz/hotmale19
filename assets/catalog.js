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

  /*
    STORE ENQUIRY CONTACTS
    Replace the two names and phone numbers below with the real details.
    Keep the country code in each phone number, for example: +91 98765 43210.
    The Call button stays disabled while a phone number is empty.
  */
  window.HOTMALE_STORE_CONTACTS = [
    { name: 'Narayanan', role: 'For Wanarpet Store', phone: '+91 99406 29831' },
    { name: 'Jaya Prakesh', role: 'For Anna Nagar Store', phone: '+91 99406 29832' }
  ];

  window.HOTMALE_CATALOG = {
    'new-arrivals': {
      title: 'New Arrivals',
      description: 'Fresh silhouettes, sharper layers and the newest HOTMALE drops.',
      watermark: 'NEW',
      href: '/collections/new-arrivals/',
      coverImage: local('new-arrivals','denim t-shirt.png'),
      products: [
        
          {id: 'sh-01',
          name: 'Semi - Formal Shirt',
          price: 499,
          sizes: ['38 - 44'],
          image: local('new-arrivals', 'ChatGPT Image Sep 24, 2026, 04_01_51 PM.png'),
          fresh: true },
        
          { id: 'na-02', 
          name: 'Denim Shirt', 
          price: 849, 
          sizes: ['S - XXL'], 
          image: local('new-arrivals','denim shirt.png'), 
          fresh: false },

          { id: 'na-03', 
          name: 'Striped Shirt', 
          price: 749, 
          sizes: ['S - XXL'], 
          image: local('new-arrivals','stripe shirt.png'), 
          fresh: true },

          { id: 'na-04', 
          name: 'Party Wear Shirt', 
          price: 1049, 
          sizes: ['M - XXL'], 
          image: local('new-arrivals','party wear shirt.png'), 
          fresh: false },

          { id: 'na-05', 
          name: 'Half Sleeve Round-Neck T-Shirt', 
          price: 222, 
          sizes: ['M - XXL'], 
          image: local('new-arrivals','ChatGPT Image Sep 27, 2026, 04_13_03 PM.png'), 
          fresh: false },

          { id: 'na-06', 
          name: 'Full Sleeve Round-Neck T-Shirt', 
          price: 333, 
          sizes: ['M - XXL'], 
          image: local('new-arrivals','fulll sleeve.jpg'), 
          fresh: false },

          { id: 'na-07', 
          name: 'Denim T-Shirt', 
          price: 899, 
          sizes: ['M - XXL'], 
          image: local('new-arrivals','denim t-shirt.png'), 
          fresh: true },

          { id: 'na-08', 
          name: 'Raglan Full-Sleeve T-Shirt', 
          price: 333, 
          sizes: ['M - XXL'], 
          image: local('new-arrivals','full sleeve t-shirt.png'), 
          fresh: false },

          { id: 'na-09', 
          name: 'Half-Sleeve T-Shirt', 
          price: 290, 
          sizes: ['M - XXL'], 
          image: local('new-arrivals','half sleeve t shirt.jpg'), 
          fresh: false },

          { id: 'na-10', 
          name: 'Polo T-Shirt', 
          price: 290, 
          sizes: ['M - XXL'], 
          image: local('new-arrivals','polo type.png'), 
          fresh: false },

          { id: 'na-11', 
          name: 'V-Neck T-Shirt', 
          price: 469, 
          sizes: ['M - XXL'], 
          image: local('new-arrivals','v neck t-shirt.png'), 
          fresh: false },

          { id: 'na-12', 
          name: 'Formal Pant', 
          price: 649, 
          sizes: ['28 - 38'], 
          image: local('new-arrivals','formal.jpg'), 
          fresh: false },

          { id: 'na-13', 
          name: 'Gurkha Pant', 
          price: 699, 
          sizes: ['28 - 36'], 
          image: local('new-arrivals','Gurkha pant.jpg'), 
          fresh: false },

          { id: 'na-14', 
          name: 'Imported Lycra Pant', 
          price: 1099, 
          sizes: ['30 - 38'], 
          image: local('new-arrivals','imported lycra.jpg'), 
          fresh: false },

          { id: 'na-15', 
          name: 'Linen Pant', 
          price: 1099, 
          sizes: ['28 - 38'], 
          image: local('new-arrivals','linen.jpg'), 
          fresh: false },

          { id: 'na-16', 
          name: 'Traveller Pant', 
          price: 1099, 
          sizes: ['S - XXL'], 
          image: local('new-arrivals','TRAVELLER PANT.jpg'), 
          fresh: false },

          { id: 'na-17', 
          name: 'Cargo Joggers', 
          price: 799, 
          sizes: [' '], 
          image: local('new-arrivals','cargo with joggers.jpg'), 
          fresh: false },

          { id: 'na-18', 
          name: 'Cotton Track Pant', 
          price: 799, 
          sizes: ['S - XXL'], 
          image: local('new-arrivals','cotton track pant.jpg'), 
          fresh: false },

          { id: 'na-19', 
          name: 'Joggers', 
          price: 799, 
          sizes: ['28 - 38'], 
          image: local('new-arrivals','joggers.jpg'), 
          fresh: false },

          
      ]
    },
    'gen-z-fits': {
      title: 'Gen Z Fits',
      description: 'Oversized energy, street-led layers and relaxed fits built for now.',
      watermark: 'Z',
      href: '/collections/gen-z-fits/',
      coverImage: local('gen-z-fits','down shoulder t shirt.jpg'),
      products: [
        { id: 'gz-01',
          name: 'Down Shoulder T Shirt', 
          price: 390, sizes: ['S - XXL'], 
          image: local('gen-z-fits','down shoulder t shirt.jpg'),
          fresh: true },

          { id: 'gz-02',
          name: 'High-Neck T-Shirt', 
          price: 390, sizes: ['M - XXL'], 
          image: local('gen-z-fits','high neck t shirt.png'),
          fresh: 0 },

          { id: 'gz-03', 
          name: 'Hoodie', 
          price: 499, sizes: ['M - XXL'], 
          image: local('gen-z-fits','hoodie t-shirt.png'),
          fresh: true },

          { id: 'gz-04',
          name: 'Baggy Track Pant', 
          price: 699, sizes: ['M - XXL'], 
          image: local('gen-z-fits','Alisha Moda Men Baggy Training Track Pants.jpg'),
          fresh: true },

          { id: 'gz-05',
          name: 'Baggy Pant', 
          price: 649, sizes: ['28 - 38'], 
          image: local('gen-z-fits','baggy.png'),
          fresh: 0 },

          { id: 'gz-06',
          name: 'Bootcut Pant', 
          price: 649, sizes: ['30 - 36'], 
          image: local('gen-z-fits','BOOT PANT.jpg'),
          fresh: true },

          { id: 'gz-07',
          name: 'Cargo Track Pant', 
          price: 899, sizes: ['M - XXL'], 
          image: local('gen-z-fits','TJ99  Men Beige Cargo Track Pants.jpg'),
          fresh: true },

          { id: 'gz-08',
          name: 'Hooded Shrug', 
          price: 999, sizes: ['M - XXL'], 
          image: local('gen-z-fits','hoodie shrug.png'),
          fresh: 0 },

          { id: 'gz-09',
          name: 'Shrug', 
          price: 749, sizes: ['M - XXL'], 
          image: local('gen-z-fits','Shrug.png'),
          fresh: 0 },

          { id: 'gz-10',
          name: 'Bomber Jacket', 
          price: 1649, sizes: ['M - 3XL'], 
          image: local('gen-z-fits','bomber jacket.png'),
          fresh: 0 },
                   
      ]
    },
    'ethnic-wear': {
      title: 'Ethnic Wear',
      description: 'Contemporary ceremony pieces with traditional texture and a modern edge.',
      watermark: 'E',
      href: '/collections/ethnic-wear/',
      coverImage: local('ethnic-wear','jodhpuri.png'),
      products: [
        
        { id: 'et-02', 
          name: 'Coat suit - 3 Pcs', 
          price: 3299, 
          sizes: ['M - XXL'], 
          image: local('ethnic-wear','coat suit.png'), 
          fresh: true },

          { id: 'et-03', 
          name: 'Coat Suit - 4 Pcs', 
          price: 6999, 
          sizes: ['M - 3XL'], 
          image: local('ethnic-wear','4pc coat.png'), 
          fresh: true },

          { id: 'et-03', 
          name: 'Stone Work Coat Suit', 
          price: 7999, 
          sizes: ['M - 3XL'], 
          image: local('ethnic-wear','coat suit stone work.png'), 
          fresh: true },

          { id: 'et-01', 
          name: 'Blazer', 
          price: 1999, 
          sizes: ['36 - 46'], 
          image: local('ethnic-wear','blazzer.png'), 
          fresh: true },

          { id: 'et-01', 
          name: 'Stone Work Blazer', 
          price: 3299, 
          sizes: ['36 - 46'], 
          image: local('ethnic-wear','stone blazer.png'), 
          fresh: true },


        { id: 'et-03', 
          name: 'Kutha Set - 2 Pcs - ', 
          price: 999, 
          sizes: ['36 - 40'], 
          image: local('ethnic-wear','kurtha set.png'), 
          fresh: false },

          { id: 'et-03', 
          name: 'Kutha Set - 3 Pcs - ', 
          price: 1299, 
          sizes: ['36 - 40'], 
          image: local('ethnic-wear','3 kurtha.png'), 
          fresh: false },

        { id: 'et-04', 
          name: 'Jodhpuri', 
          price: 1799, 
          sizes: ['38 - 46'], 
          image: local('ethnic-wear','jodhpuri.png'), 
          fresh: true },


        { id: 'et-05', 
          name: 'STONE WORK SHIRT', 
          price: 1799, 
          sizes: ['38 - 42'], 
          image: local('ethnic-wear','party wear shirt.png'), 
          fresh: false }
      ]
    },
    'plus-size-wear': {
      title: 'Plus-Size Wear',
      description: 'Confident cuts, considered comfort and style without compromise.',
      watermark: '+',
      href: '/collections/plus-size-wear/',
      coverImage: local('plus-size-wear','casual shrt.png'),
      products: [
        { id: 'ps-01', 
          name: 'Casual Shirt', 
          price: 799, 
          sizes: ['3XL - 5XL'], 
          image: local('plus-size-wear','casual shrt.png'),
          fresh: 0 },

          { id: 'ps-01', 
          name: 'Half-Sleeve Formal Shirt', 
          price: 799, 
          sizes: ['3XL - 5XL'], 
          image: local('plus-size-wear','formal shirt half sleeve.png'),
          fresh: 0 },

        { id: 'ps-01', 
          name: 'Full-Sleeve Formal Shirt', 
          price: 799, 
          sizes: ['3XL - 5XL'], 
          image: local('plus-size-wear','full formal.png'),
          fresh: 0 },

          { id: 'ps-01', 
          name: ' Denim T-Shirt', 
          price: 1049, 
          sizes: ['3XL - 5XL'], 
          image: local('plus-size-wear','denim t-shirt big size.png'),
          fresh: 0 },

          { id: 'ps-01', 
          name: 'T-Shirt', 
          price: 469, 
          sizes: ['3XL - 5XL'], 
          image: local('plus-size-wear','t-shi.png'),
          fresh: 0 },

          { id: 'ps-01', 
          name: ' Cotton Pant', 
          price: 849, 
          sizes: ['40 - 50'], 
          image: local('plus-size-wear','cotton pant 2.png'),
          fresh: 0 },

          { id: 'ps-01', 
          name: 'Denim Pant', 
          price: 1199, 
          sizes: ['40 - 50'], 
          image: local('plus-size-wear','denim pant 2.png'),
          fresh: 0 },

          { id: 'ps-01', 
          name: 'Formal Pant', 
          price: 999, 
          sizes: ['40-46'], 
          image: local('plus-size-wear','formal pant 2.png'),
          fresh: 0 },

          { id: 'ps-01', 
          name: ' Track Pant', 
          price: 390, 
          sizes: ['3XL - 5XL'], 
          image: local('plus-size-wear','track pant 2.png'),
          fresh: 0 },

          { id: 'ps-01', 
          name: 'Shorts', 
          price: 369, 
          sizes: ['3XL - 5XL'], 
          image: local('plus-size-wear','shorts big size.png'),
          fresh: 0 },
                
      ]
    },
    'combo-collections': {
      title: 'Combo Collections',
      description: 'Choose your quantity, mix your favourites and unlock the combo price.',
      watermark: 'CSK',
      href: '/collections/combo-collections/',
      coverImage: demo('photo-1523381210434-271e8be1f52b'),
      cardWide: true,
      cardCta: 'Shop the complete look',
      type: 'combo',
      products: [
        { id: 'co-01', name: 'T Shirt', price: 590, dealQty: 3, dealPrice: 590, sizes: ['M','L','XL'], image: local('combo-collections','t shirt.png'), fallbackImage: demo('photo-1523381210434-271e8be1f52b'), fresh: true },
        { id: 'co-02', name: 'T Shirt', price: 690, dealQty: 3, dealPrice: 690, sizes: ['M','L','XL'], image: local('combo-collections','t shirt 2.png'), fallbackImage: demo('photo-1551488831-00ddcb6c6bd3'), fresh: true },
        { id: 'co-03', name: 'Formal Shirt', price: 990, dealQty: 3, dealPrice: 990, sizes: ['M','L','XL'], image: local('combo-collections','shirt 1.png'), fallbackImage: demo('photo-1610189012906-4c0aa9b9781e'), fresh: false },
        { id: 'co-04', name: 'Formal Shirt', price: 990, dealQty: 2, dealPrice: 990, sizes: ['M','L','XL'], image: local('combo-collections','shirt 2.png'), fallbackImage: demo('photo-1445205170230-053b83016050'), fresh: false },
        { id: 'co-05', name: 'Formal Pant', price: 990, dealQty: 2, dealPrice: 990, sizes: ['30','32','34','36'], image: local('combo-collections','fromal pant.jpg'), fallbackImage: demo('photo-1490578474895-699cd4e2cf59'), fresh: true },
        { id: 'co-06', name: 'Cotton Pant', price: 1199, dealQty: 2, dealPrice: 1199, sizes: ['30','32','34','36'], image: local('combo-collections','Cotton pant.png'), fallbackImage: demo('photo-1490578474895-699cd4e2cf59'), fresh: true },
        { id: 'co-07', name: 'Denim Pant', price: 1199, dealQty: 2, dealPrice: 1199, sizes: ['30','32','34','36'], image: local('combo-collections','denim.png'), fallbackImage: demo('photo-1527719327859-c6ce80353573'), fresh: false },
        { id: 'co-08', name: 'Boxer Shorts', price: 990, dealQty: 3, dealPrice: 990, sizes: ['30','32','34','36'], image: local('combo-collections','shorts.jpg'), fallbackImage: demo('photo-1527719327859-c6ce80353573'), fresh: false }
      ]
    }
  };
})();
