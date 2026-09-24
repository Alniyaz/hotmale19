(() => {
  const doc = document;
  const body = doc.body;
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const toast = doc.querySelector('[data-toast]');
  let toastTimer;

  const showToast = (message) => {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('is-visible');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('is-visible'), 2600);
  };

  const menuButton = doc.querySelector('[data-menu-button]');
  const mobileMenu = doc.querySelector('[data-mobile-menu]');
  const closeMenu = () => {
    if (!menuButton || !mobileMenu) return;
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open menu');
    mobileMenu.classList.remove('is-open');
  };

  menuButton?.addEventListener('click', () => {
    const open = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!open));
    menuButton.setAttribute('aria-label', open ? 'Open menu' : 'Close menu');
    mobileMenu.classList.toggle('is-open', !open);
  });
  mobileMenu?.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));

  const header = doc.querySelector('[data-header]');
  addEventListener('scroll', () => header?.classList.toggle('is-compact', scrollY > 30), { passive: true });

  doc.addEventListener('pointerdown', (event) => {
    const target = event.target.closest('.ripple');
    if (!target) return;
    const rect = target.getBoundingClientRect();
    const ink = doc.createElement('span');
    const size = Math.max(rect.width, rect.height);
    ink.className = 'ripple-ink';
    ink.style.width = `${size}px`;
    ink.style.height = `${size}px`;
    ink.style.left = `${event.clientX - rect.left - size / 2}px`;
    ink.style.top = `${event.clientY - rect.top - size / 2}px`;
    target.append(ink);
    ink.addEventListener('animationend', () => ink.remove(), { once: true });
  });

  const reveals = [...doc.querySelectorAll('.reveal')];
  if (reducedMotion || !('IntersectionObserver' in window)) {
    reveals.forEach((el) => el.classList.add('is-visible'));
  } else {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: .14 });
    reveals.forEach((el) => observer.observe(el));
  }

  const attachPageTransition = (link) => {
    link.addEventListener('click', (event) => {
      const url = new URL(link.href, location.href);
      if (url.origin !== location.origin || url.hash || reducedMotion) return;
      event.preventDefault();
      body.classList.add('is-leaving');
      setTimeout(() => { location.href = link.href; }, 420);
    });
  };

  doc.querySelectorAll('a.transition-link').forEach(attachPageTransition);

  doc.querySelector('[data-ticket]')?.addEventListener('click', (event) => {
    const ticket = event.currentTarget;
    const expanded = ticket.getAttribute('aria-expanded') === 'true';
    ticket.setAttribute('aria-expanded', String(!expanded));
  });

  doc.querySelectorAll('[data-calendar]').forEach((button) => {
    button.addEventListener('click', () => {
      const locationName = button.dataset.location;
      const start = button.dataset.date;
      const endDate = new Date(Date.parse(start.replace(/(\d{4})(\d{2})(\d{2})T(\d{2})(\d{2})(\d{2})Z/, '$1-$2-$3T$4:$5:$6Z')) + 2 * 60 * 60 * 1000);
      const pad = (value) => String(value).padStart(2, '0');
      const end = `${endDate.getUTCFullYear()}${pad(endDate.getUTCMonth() + 1)}${pad(endDate.getUTCDate())}T${pad(endDate.getUTCHours())}${pad(endDate.getUTCMinutes())}${pad(endDate.getUTCSeconds())}Z`;
      const content = ['BEGIN:VCALENDAR','VERSION:2.0','BEGIN:VEVENT',`DTSTART:${start}`,`DTEND:${end}`,'SUMMARY:HOTMALE 19th Anniversary Celebration',`LOCATION:${locationName}`,'END:VEVENT','END:VCALENDAR'].join('\r\n');
      const anchor = doc.createElement('a');
      anchor.href = URL.createObjectURL(new Blob([content], { type: 'text/calendar' }));
      anchor.download = `hotmale-${locationName.toLowerCase().replace(/\s+/g, '-')}.ics`;
      anchor.click();
      URL.revokeObjectURL(anchor.href);
      showToast(`Date saved for ${locationName}`);
    });
  });

  const collections = window.HOTMALE_CATALOG || {};

  const formatPrice = (value) => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(value);

  const initHomeCollections = () => {
    const grid = doc.querySelector('[data-collection-grid]');
    if (!grid) return;

    const visibleCollections = Object.entries(collections).filter(([, collection]) => collection.hidden !== true);
    grid.innerHTML = visibleCollections.map(([slug, collection], index) => {
      const product = collection.products?.[0] || {};
      const coverImage = collection.coverImage || product.fallbackImage || product.image || '';
      const safeCover = encodeURI(coverImage).replace(/'/g, '%27');
      const href = collection.href || `/collections/view/?collection=${encodeURIComponent(slug)}`;
      const wideClass = collection.cardWide ? ' collection-card-wide' : '';
      const cardNumber = String(index + 1).padStart(2, '0');
      const cardCta = collection.cardCta || 'Explore';
      return `<a class="collection-card${wideClass} reveal is-visible transition-link" href="${href}" style="--card-image:url('${safeCover}')"><span class="collection-index">${cardNumber}</span><span class="collection-name">${collection.title}</span><span class="collection-cta">${cardCta} <i>→</i></span></a>`;
    }).join('');

    grid.querySelectorAll('a.transition-link').forEach(attachPageTransition);
  };

  const initCollectionPage = () => {
    if (body.dataset.page !== 'collection') return;
    const slug = body.dataset.collection || new URLSearchParams(location.search).get('collection');
    const collection = collections[slug];
    if (!collection) {
      doc.querySelector('[data-collection-title]').textContent = 'Collection not found';
      doc.querySelector('[data-collection-description]').textContent = 'Check the collection name in assets/catalog.js.';
      return;
    }

    const title = doc.querySelector('[data-collection-title]');
    const description = doc.querySelector('[data-collection-description]');
    const hero = doc.querySelector('.collection-hero');
    const grid = doc.querySelector('[data-product-grid]');
    const count = doc.querySelector('[data-product-count]');
    const empty = doc.querySelector('[data-empty-state]');
    const filterButton = doc.querySelector('[data-filter-button]');
    const filterPanel = doc.querySelector('[data-filter-panel]');
    const sort = doc.querySelector('[data-sort]');
    const modal = doc.querySelector('[data-quick-view]');
    const modalContent = doc.querySelector('[data-modal-content]');
    const isCombo = collection.type === 'combo' || slug === 'combo-collections';
    let selectedSize = 'ALL';
    let sortMode = 'featured';

    title.textContent = collection.title;
    description.textContent = collection.description;
    hero.dataset.watermark = collection.watermark;
    doc.title = `${collection.title} — HOTMALE`;
    doc.querySelectorAll(`a[href="../${slug}/"]`).forEach((link) => link.setAttribute('aria-current', 'page'));

    const saved = new Set(JSON.parse(localStorage.getItem('hotmale-wishlist') || '[]'));
    const saveWishlist = () => localStorage.setItem('hotmale-wishlist', JSON.stringify([...saved]));

    const getVisibleProducts = () => {
      let visible = collection.products.filter((product) => {
        const sizeMatch = selectedSize === 'ALL' || product.sizes.includes(selectedSize);
        return sizeMatch;
      });
      const effectivePrice = (product) => product.dealPrice ?? product.price;
      if (sortMode === 'low') visible = [...visible].sort((a, b) => effectivePrice(a) - effectivePrice(b));
      if (sortMode === 'high') visible = [...visible].sort((a, b) => effectivePrice(b) - effectivePrice(a));
      if (sortMode === 'newest') visible = [...visible].sort((a, b) => Number(b.fresh) - Number(a.fresh));
      return visible;
    };

    const cardTemplate = (product) => {
      const offerLabel = isCombo && product.dealQty ? `BUY ${product.dealQty} @ ${formatPrice(product.dealPrice)}` : '';
      return `
      <article class="product-card">
        <div class="product-image-wrap">
          <img class="product-image" src="${product.image}" data-fallback="${product.fallbackImage || ''}" alt="${product.name}" loading="lazy">
          ${offerLabel ? `<span class="combo-badge">${offerLabel}</span>` : product.fresh ? '<span class="new-badge">New</span>' : ''}
          <button class="heart-button ${saved.has(product.id) ? 'is-saved' : ''}" type="button" data-heart="${product.id}" aria-label="${saved.has(product.id) ? 'Remove from saved styles' : 'Save style'}" aria-pressed="${saved.has(product.id)}">♥</button>
        </div>
        <div class="product-info">
          <h2 class="product-name">${product.name}</h2>
          <p class="product-price">${offerLabel || formatPrice(product.price)}</p>
          <div class="product-sizes" aria-label="Available sizes">${product.sizes.map((size) => `<span>${size}</span>`).join('')}</div>
          <button class="view-button ripple" type="button" data-view="${product.id}">${isCombo ? 'Choose offer' : 'Quick view'}</button>
        </div>
      </article>`;
    };

    const renderProducts = () => {
      const visible = getVisibleProducts();
      grid.innerHTML = visible.map(cardTemplate).join('');
      count.textContent = visible.length;
      empty.hidden = visible.length > 0;
      grid.querySelectorAll('img').forEach((imgEl) => imgEl.addEventListener('error', () => {
        const fallback = imgEl.dataset.fallback;
        if (fallback) {
          imgEl.removeAttribute('data-fallback');
          imgEl.src = fallback;
          return;
        }
        imgEl.parentElement.classList.add('image-fallback');
        imgEl.remove();
      }));
    };

    filterButton.addEventListener('click', () => {
      const open = filterButton.getAttribute('aria-expanded') === 'true';
      filterButton.setAttribute('aria-expanded', String(!open));
      filterPanel.classList.toggle('is-open', !open);
    });

    doc.querySelector('[data-size-filters]').addEventListener('click', (event) => {
      const button = event.target.closest('button[data-size]');
      if (!button) return;
      selectedSize = button.dataset.size;
      doc.querySelectorAll('[data-size]').forEach((item) => item.classList.toggle('is-active', item === button));
      renderProducts();
      showToast(selectedSize === 'ALL' ? 'Showing every available size' : `Showing size ${selectedSize}`);
    });

    sort.addEventListener('change', () => {
      sortMode = sort.value;
      renderProducts();
    });

    grid.addEventListener('click', (event) => {
      const heart = event.target.closest('[data-heart]');
      if (heart) {
        const id = heart.dataset.heart;
        saved.has(id) ? saved.delete(id) : saved.add(id);
        heart.classList.toggle('is-saved', saved.has(id));
        heart.setAttribute('aria-pressed', String(saved.has(id)));
        heart.setAttribute('aria-label', saved.has(id) ? 'Remove from saved styles' : 'Save style');
        saveWishlist();
        showToast(saved.has(id) ? 'Style saved' : 'Style removed');
        return;
      }

      const view = event.target.closest('[data-view]');
      if (!view) return;
      const product = collection.products.find((item) => item.id === view.dataset.view);
      const modalPrice = isCombo && product.dealQty ? `BUY ${product.dealQty} @ ${formatPrice(product.dealPrice)}` : formatPrice(product.price);
      modalContent.innerHTML = `<article class="modal-product"><img src="${product.image}" data-fallback="${product.fallbackImage || ''}" alt="${product.name}"><div class="modal-copy"><p class="eyebrow"><span></span>${collection.title}</p><h2>${product.name}</h2><p class="modal-price ${isCombo ? 'modal-deal' : ''}">${modalPrice}</p><p>Available in ${product.sizes.join(', ')}. Visit the anniversary celebration to explore the fit in person.</p><button class="button button-primary ripple" type="button" data-enquire>${isCombo ? 'Choose this offer' : 'Enquire in store'} <span>→</span></button></div></article>`;
      const modalImage = modalContent.querySelector('img[data-fallback]');
      modalImage?.addEventListener('error', () => {
        if (modalImage.dataset.fallback) {
          modalImage.src = modalImage.dataset.fallback;
          modalImage.removeAttribute('data-fallback');
        }
      });
      modal.showModal();
    });

    modal.addEventListener('click', (event) => {
      if (event.target === modal) modal.close();
      if (event.target.closest('[data-enquire]')) {
        modal.close();
        showToast('Added to your store enquiry list');
      }
    });
    doc.querySelector('[data-modal-close]').addEventListener('click', () => modal.close());
    renderProducts();
  };

  initHomeCollections();
  initCollectionPage();
})();
