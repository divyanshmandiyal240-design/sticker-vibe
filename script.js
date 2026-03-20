// ═══════════════════════════════════════════════════════
//  STICKER VIBE — script.js
//
//  SETUP CHECKLIST:
//  1. Replace WHATSAPP_NUMBER below with your number (digits only, with country code)
//     e.g. "919876543210" for India or "12025551234" for USA
//
//  2. For Stripe payments: create a Stripe account at stripe.com,
//     create products there, copy each product's Payment Link URL,
//     and paste it into the stripeLink field of each product below.
//     Then change PAYMENT_METHOD from 'whatsapp' to 'stripe'.
// ═══════════════════════════════════════════════════════

const WHATSAPP_NUMBER = "918278793811"; // ← CHANGE THIS to your WhatsApp number
const PAYMENT_METHOD  = "whatsapp";     // "whatsapp" or "stripe"

// ═══ PRODUCTS ═══
const products = [
  // ── MEME ──────────────────────────────────────────
  {
    id: 1, name: "This Is Fine", cat: "meme", emoji: "🔥", img: "images/fire.svg",
    price: 4.99, bg: "linear-gradient(135deg,#ff6b6b,#ee5a24)",
    badge: "HOT", stripeLink: "#"
  },
  {
    id: 2, name: "No Cap Fr Fr", cat: "meme", emoji: "🧢", img: "images/cap.svg",
    price: 3.99, bg: "linear-gradient(135deg,#f7d794,#f19066)",
    badge: null, stripeLink: "#"
  },
  {
    id: 3, name: "Drake Approved", cat: "meme", emoji: "👆", img: "images/thumbsup.svg",
    price: 4.99, bg: "linear-gradient(135deg,#a29bfe,#6c5ce7)",
    badge: "NEW", stripeLink: "#"
  },
  {
    id: 4, name: "Ratio'd 💀", cat: "meme", emoji: "💀", img: "images/skull.svg",
    price: 3.99, bg: "linear-gradient(135deg,#fd79a8,#d63031)",
    badge: null, stripeLink: "#"
  },

  // ── AESTHETIC ─────────────────────────────────────
  {
    id: 5, name: "Y2K Butterfly", cat: "aesthetic", emoji: "🦋", img: "images/butterfly.svg",
    price: 5.99, bg: "linear-gradient(135deg,#c7ecee,#778beb)",
    badge: "TREND", stripeLink: "#"
  },
  {
    id: 6, name: "Retro Sun", cat: "aesthetic", emoji: "☀️", img: "images/sun.svg",
    price: 4.99, bg: "linear-gradient(135deg,#f6e58d,#f9ca24)",
    badge: null, stripeLink: "#"
  },
  {
    id: 7, name: "Cloud Core", cat: "aesthetic", emoji: "☁️", img: "images/cloud.svg",
    price: 4.99, bg: "linear-gradient(135deg,#636e72,#b2bec3)",
    badge: null, stripeLink: "#"
  },
  {
    id: 8, name: "Vaporwave", cat: "aesthetic", emoji: "🌊", img: "images/wave.svg",
    price: 5.99, bg: "linear-gradient(135deg,#a29bfe,#fd79a8)",
    badge: "HOT", stripeLink: "#"
  },

  // ── ANIME ─────────────────────────────────────────
  {
    id: 9, name: "Chibi Chaos", cat: "anime", emoji: "🌸", img: "images/flower.svg",
    price: 5.99, bg: "linear-gradient(135deg,#fd79a8,#e84393)",
    badge: "NEW", stripeLink: "#"
  },
  {
    id: 10, name: "Manga Panel", cat: "anime", emoji: "💥", img: "images/bolt.svg",
    price: 4.99, bg: "linear-gradient(135deg,#2d3436,#636e72)",
    badge: null, stripeLink: "#"
  },
  {
    id: 11, name: "Kawaii Mode", cat: "anime", emoji: "💖", img: "images/heart.svg",
    price: 4.99, bg: "linear-gradient(135deg,#fdcb6e,#e17055)",
    badge: null, stripeLink: "#"
  },
  {
    id: 12, name: "Oni Mask", cat: "anime", emoji: "👹", img: "images/mask.svg",
    price: 6.99, bg: "linear-gradient(135deg,#d63031,#e17055)",
    badge: "LTD", stripeLink: "#"
  },
  {
    id: 21, name: "Sakura Dreams", cat: "anime", emoji: "🌸", img: "images/sakura.svg",
    price: 5.99, bg: "linear-gradient(135deg,#fda4af,#fb7185)",
    badge: "NEW", stripeLink: "#"
  },
  {
    id: 22, name: "Demon Eye", cat: "anime", emoji: "👁️", img: "images/demon-eye.svg",
    price: 6.99, bg: "linear-gradient(135deg,#7f1d1d,#dc2626)",
    badge: "LTD", stripeLink: "#"
  },
  {
    id: 23, name: "Forest Spirit", cat: "anime", emoji: "🌿", img: "images/totoro.svg",
    price: 5.99, bg: "linear-gradient(135deg,#4ade80,#16a34a)",
    badge: "FAV", stripeLink: "#"
  },
  {
    id: 24, name: "Shonen Spirit", cat: "anime", emoji: "⚡", img: "images/shonen.svg",
    price: 5.99, bg: "linear-gradient(135deg,#3b82f6,#1d4ed8)",
    badge: "HOT", stripeLink: "#"
  },

  // ── MOTIVATIONAL ──────────────────────────────────
  {
    id: 13, name: "Main Character", cat: "motivational", emoji: "⭐", img: "images/star.svg",
    price: 4.99, bg: "linear-gradient(135deg,#55efc4,#00b894)",
    badge: "FAV", stripeLink: "#"
  },
  {
    id: 14, name: "You Got This", cat: "motivational", emoji: "💪", img: "images/fist.svg",
    price: 3.99, bg: "linear-gradient(135deg,#74b9ff,#0984e3)",
    badge: null, stripeLink: "#"
  },
  {
    id: 15, name: "Slay All Day", cat: "motivational", emoji: "👑", img: "images/crown.svg",
    price: 4.99, bg: "linear-gradient(135deg,#ffeaa7,#fdcb6e)",
    badge: null, stripeLink: "#"
  },
  {
    id: 16, name: "Glow Up Era", cat: "motivational", emoji: "✨", img: "images/sparkle.svg",
    price: 3.99, bg: "linear-gradient(135deg,#a29bfe,#6c5ce7)",
    badge: null, stripeLink: "#"
  },

  // ── FUNNY ─────────────────────────────────────────
  {
    id: 17, name: "Vibe Check", cat: "funny", emoji: "✅", img: "images/check.svg",
    price: 3.99, bg: "linear-gradient(135deg,#55efc4,#00cec9)",
    badge: "HOT", stripeLink: "#"
  },
  {
    id: 18, name: "No Thoughts", cat: "funny", emoji: "🧠", img: "images/brain.svg",
    price: 3.99, bg: "linear-gradient(135deg,#fd79a8,#e84393)",
    badge: null, stripeLink: "#"
  },
  {
    id: 19, name: "Understood 📝", cat: "funny", emoji: "📝", img: "images/notepad.svg",
    price: 4.99, bg: "linear-gradient(135deg,#fdcb6e,#e17055)",
    badge: null, stripeLink: "#"
  },
  {
    id: 20, name: "It's Giving 💅", cat: "funny", emoji: "💅", img: "images/nailpolish.svg",
    price: 4.99, bg: "linear-gradient(135deg,#a29bfe,#fd79a8)",
    badge: "NEW", stripeLink: "#"
  },

  // ── COFFEE ────────────────────────────────────────
  {
    id: 25, name: "Latte Art", cat: "coffee", emoji: "☕", img: "images/latte.svg",
    price: 4.99, bg: "linear-gradient(135deg,#fef3c7,#f59e0b)",
    badge: "NEW", stripeLink: "#"
  },
  {
    id: 26, name: "Espresso Shot", cat: "coffee", emoji: "☕", img: "images/espresso.svg",
    price: 3.99, bg: "linear-gradient(135deg,#292524,#7c2d12)",
    badge: null, stripeLink: "#"
  },
  {
    id: 27, name: "Matcha Energy", cat: "coffee", emoji: "🍵", img: "images/matcha.svg",
    price: 4.99, bg: "linear-gradient(135deg,#d1fae5,#4ade80)",
    badge: "TREND", stripeLink: "#"
  },
  {
    id: 28, name: "Cozy Cup", cat: "coffee", emoji: "☕", img: "images/cozy-cup.svg",
    price: 4.99, bg: "linear-gradient(135deg,#1c1008,#f97316)",
    badge: "FAV", stripeLink: "#"
  },
];

// ═══ CART STATE ═══
let cart = JSON.parse(localStorage.getItem('sv_cart') || '[]');

function saveCart() {
  localStorage.setItem('sv_cart', JSON.stringify(cart));
  renderCartUI();
}

// ═══ RENDER PRODUCTS ═══
function renderProducts(filter = 'all') {
  const grid = document.getElementById('products-grid');
  grid.innerHTML = '';

  const list = filter === 'all' ? products : products.filter(p => p.cat === filter);

  list.forEach((p, i) => {
    const card = document.createElement('div');
    card.className = 'product-card showing';
    card.style.animationDelay = `${i * 0.05}s`;

    const badgeMap = { HOT: 'badge-hot', NEW: 'badge-new', LTD: 'badge-ltd', FAV: 'badge-fav', TREND: 'badge-trend' };
    const badgeHtml = p.badge
      ? `<div class="sticker-badge ${badgeMap[p.badge] || ''}">${p.badge}</div>` : '';

    card.innerHTML = `
      <div class="sticker-img">
        <img src="${p.img}" alt="${p.name}" class="sticker-svg" loading="lazy">
        ${badgeHtml}
      </div>
      <div class="sticker-info">
        <span class="sticker-cat">${p.cat}</span>
        <h3 class="sticker-name">${p.name}</h3>
        <div class="sticker-footer">
          <span class="sticker-price">$${p.price.toFixed(2)}</span>
          <button class="add-btn" data-id="${p.id}">+ Add</button>
        </div>
      </div>
    `;

    card.querySelector('.add-btn').addEventListener('click', () => addToCart(p.id));
    grid.appendChild(card);
  });
}

// ═══ CART ACTIONS ═══
function addToCart(id) {
  const product = products.find(p => p.id === id);
  if (!product) return;

  const existing = cart.find(i => i.id === id);
  if (existing) { existing.qty++; } else { cart.push({ id, qty: 1 }); }

  saveCart();
  showToast(`${product.emoji} ${product.name} added!`);
  openCart();
}

function removeFromCart(id) {
  cart = cart.filter(i => i.id !== id);
  saveCart();
}

function changeQty(id, delta) {
  const item = cart.find(i => i.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) cart = cart.filter(i => i.id !== id);
  saveCart();
}

// ═══ RENDER CART UI ═══
function renderCartUI() {
  const countEl   = document.getElementById('cart-count');
  const itemsEl   = document.getElementById('cart-items');
  const footerEl  = document.getElementById('cart-footer');
  const emptyEl   = document.getElementById('cart-empty');
  const totalEl   = document.getElementById('cart-total');
  const noteEl    = document.getElementById('cart-note');

  const totalQty = cart.reduce((s, i) => s + i.qty, 0);
  countEl.textContent = totalQty;
  countEl.classList.toggle('hidden', totalQty === 0);

  if (cart.length === 0) {
    itemsEl.innerHTML = '';
    footerEl.style.display = 'none';
    emptyEl.style.display = 'flex';
    return;
  }

  emptyEl.style.display = 'none';
  footerEl.style.display = 'block';

  let total = 0;
  itemsEl.innerHTML = '';

  cart.forEach(item => {
    const p = products.find(pr => pr.id === item.id);
    if (!p) return;
    total += p.price * item.qty;

    const el = document.createElement('div');
    el.className = 'cart-item';
    el.innerHTML = `
      <div class="cart-item-img"><img src="${p.img}" alt="${p.name}"></div>
      <div class="cart-item-info">
        <div class="cart-item-name">${p.name}</div>
        <div class="cart-item-price">$${(p.price * item.qty).toFixed(2)}</div>
      </div>
      <div class="cart-item-controls">
        <button class="qty-btn" data-id="${p.id}" data-delta="-1">−</button>
        <span class="qty-num">${item.qty}</span>
        <button class="qty-btn" data-id="${p.id}" data-delta="1">+</button>
      </div>
      <button class="cart-item-remove" data-id="${p.id}" title="Remove">✕</button>
    `;

    el.querySelectorAll('.qty-btn').forEach(btn =>
      btn.addEventListener('click', () => changeQty(Number(btn.dataset.id), Number(btn.dataset.delta)))
    );
    el.querySelector('.cart-item-remove').addEventListener('click', () =>
      removeFromCart(Number(el.querySelector('.cart-item-remove').dataset.id))
    );

    itemsEl.appendChild(el);
  });

  totalEl.textContent = `$${total.toFixed(2)}`;
  if (noteEl) {
    noteEl.textContent = total >= 25
      ? '🎉 You qualify for free shipping!'
      : `🚀 Add $${(25 - total).toFixed(2)} more for free shipping!`;
  }
}

// ═══ CHECKOUT ═══
document.getElementById('btn-checkout').addEventListener('click', () => {
  if (cart.length === 0) return;

  if (PAYMENT_METHOD === 'stripe') {
    // If all items are same, go to that product's Stripe link
    if (cart.length === 1) {
      const p = products.find(pr => pr.id === cart[0].id);
      if (p && p.stripeLink !== '#') { window.open(p.stripeLink, '_blank'); return; }
    }
    alert('For multi-item Stripe checkout, please set up a Stripe Payment Link for your full catalog, or switch to WhatsApp checkout.');
    return;
  }

  // WhatsApp checkout (works out of the box)
  const lines = cart.map(item => {
    const p = products.find(pr => pr.id === item.id);
    return `• ${p.emoji} ${p.name} x${item.qty} — $${(p.price * item.qty).toFixed(2)}`;
  });
  const total = cart.reduce((s, item) => {
    const p = products.find(pr => pr.id === item.id);
    return s + p.price * item.qty;
  }, 0);

  const msg = [
    `Hi! I'd like to order from *Sticker Vibe* 🎨`,
    ``,
    ...lines,
    ``,
    `*Total: $${total.toFixed(2)}*`,
    ``,
    `Please confirm my order! 🙏`
  ].join('\n');

  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank');
});

// ═══ FILTER ═══
function setFilter(filter) {
  document.querySelectorAll('.filter-btn').forEach(btn =>
    btn.classList.toggle('active', btn.dataset.filter === filter)
  );
  document.querySelectorAll('.cat-card').forEach(card =>
    card.classList.toggle('active', card.dataset.filter === filter)
  );
  renderProducts(filter);
}

document.querySelectorAll('.filter-btn').forEach(btn =>
  btn.addEventListener('click', () => setFilter(btn.dataset.filter))
);

document.querySelectorAll('.cat-card').forEach(card =>
  card.addEventListener('click', () => {
    setFilter(card.dataset.filter);
    document.getElementById('shop').scrollIntoView({ behavior: 'smooth' });
  })
);

// ═══ CART OPEN / CLOSE ═══
function openCart()  {
  document.getElementById('cart-sidebar').classList.add('open');
  document.getElementById('cart-overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeCart() {
  document.getElementById('cart-sidebar').classList.remove('open');
  document.getElementById('cart-overlay').classList.remove('open');
  document.body.style.overflow = '';
}

document.getElementById('cart-btn').addEventListener('click', openCart);
document.getElementById('cart-close').addEventListener('click', closeCart);
document.getElementById('cart-overlay').addEventListener('click', closeCart);

// ═══ TOAST ═══
let toastTimer;
function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2800);
}

// ═══ NAV SCROLL ═══
window.addEventListener('scroll', () => {
  document.getElementById('nav').classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });

// ═══ HAMBURGER ═══
document.getElementById('hamburger').addEventListener('click', function () {
  this.classList.toggle('open');
  document.getElementById('mobile-menu').classList.toggle('open');
});
document.querySelectorAll('.mob-link').forEach(link =>
  link.addEventListener('click', () => {
    document.getElementById('hamburger').classList.remove('open');
    document.getElementById('mobile-menu').classList.remove('open');
  })
);

// ═══ REVEAL ON SCROLL ═══
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('visible'); revealObserver.unobserve(e.target); }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.feat-card, .section-head').forEach(el => {
  el.classList.add('reveal');
  revealObserver.observe(el);
});

// ═══ NEWSLETTER ═══
document.getElementById('nl-form').addEventListener('submit', e => {
  e.preventDefault();
  e.target.querySelector('input').value = '';
  showToast('🎉 You\'re subscribed! Stay tuned for drops.');
});

// ═══ INIT ═══
renderProducts();
renderCartUI();
