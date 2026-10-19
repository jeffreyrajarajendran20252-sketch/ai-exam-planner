// ===== Watch Product Data =====
const watches = [
  {
    id: 1,
    name: "Submariner Date",
    brand: "Rolex",
    price: "₹10,50,000",
    category: "luxury",
    image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=600&h=600&fit=crop",
    description: "The Oyster Perpetual Submariner Date in Oystersteel with a Cerachrom bezel insert in black ceramic. A reference among divers' watches, the Submariner was introduced in 1953.",
    specs: {
      "Movement": "Automatic",
      "Case Size": "41mm",
      "Water Resist": "300m",
      "Material": "Oystersteel"
    },
    links: {
      amazon: "https://www.amazon.in/s?k=Rolex+Submariner",
      flipkart: "https://www.flipkart.com/search?q=rolex+submariner",
      official: "https://www.rolex.com/watches/submariner"
    }
  },
  {
    id: 2,
    name: "Speedmaster Moonwatch",
    brand: "Omega",
    price: "₹5,80,000",
    category: "luxury",
    image: "https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?w=600&h=600&fit=crop",
    description: "The legendary Moonwatch that was part of all six moon landings. Features the Omega Calibre 3861, the latest evolution of the iconic Moonwatch movement.",
    specs: {
      "Movement": "Manual",
      "Case Size": "42mm",
      "Water Resist": "50m",
      "Material": "Steel"
    },
    links: {
      amazon: "https://www.amazon.in/s?k=Omega+Speedmaster",
      flipkart: "https://www.flipkart.com/search?q=omega+speedmaster",
      official: "https://www.omegawatches.com/watches/speedmaster"
    }
  },
  {
    id: 3,
    name: "Carrera Chronograph",
    brand: "TAG Heuer",
    price: "₹3,25,000",
    category: "sport",
    image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=600&h=600&fit=crop",
    description: "Inspired by the Carrera Panamericana road race, this chronograph blends motor racing heritage with cutting-edge design and Swiss precision.",
    specs: {
      "Movement": "Automatic",
      "Case Size": "44mm",
      "Water Resist": "100m",
      "Material": "Steel"
    },
    links: {
      amazon: "https://www.amazon.in/s?k=TAG+Heuer+Carrera",
      flipkart: "https://www.flipkart.com/search?q=tag+heuer+carrera",
      official: "https://www.tagheuer.com/watches/carrera"
    }
  },
  {
    id: 4,
    name: "Apple Watch Ultra 2",
    brand: "Apple",
    price: "₹89,900",
    category: "smart",
    image: "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=600&h=600&fit=crop",
    description: "The most rugged and capable Apple Watch. Built for extreme adventures with precision dual-frequency GPS, up to 36 hours of battery life, and the brightest Apple display ever.",
    specs: {
      "Display": "OLED 49mm",
      "Battery": "36 hrs",
      "Water Resist": "100m",
      "Material": "Titanium"
    },
    links: {
      amazon: "https://www.amazon.in/s?k=Apple+Watch+Ultra+2",
      flipkart: "https://www.flipkart.com/search?q=apple+watch+ultra+2",
      official: "https://www.apple.com/apple-watch-ultra-2/"
    }
  },
  {
    id: 5,
    name: "G-Shock MR-G",
    brand: "Casio",
    price: "₹1,85,000",
    category: "sport",
    image: "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?w=600&h=600&fit=crop",
    description: "The pinnacle of G-SHOCK craftsmanship. Handcrafted in Japan using traditional metalworking techniques, combining legendary toughness with luxury finishing.",
    specs: {
      "Movement": "Solar Quartz",
      "Case Size": "49.8mm",
      "Water Resist": "200m",
      "Material": "Titanium"
    },
    links: {
      amazon: "https://www.amazon.in/s?k=Casio+G-Shock+MR-G",
      flipkart: "https://www.flipkart.com/search?q=casio+g-shock+mr-g",
      official: "https://www.casio.com/intl/watches/gshock/"
    }
  },
  {
    id: 6,
    name: "Presage Cocktail Time",
    brand: "Seiko",
    price: "₹32,000",
    category: "classic",
    image: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=600&h=600&fit=crop",
    description: "Inspired by the art of cocktail making, this Presage features a mesmerizing dial that resembles a frosty cocktail glass with beautiful textured patterns.",
    specs: {
      "Movement": "Automatic",
      "Case Size": "40.5mm",
      "Water Resist": "50m",
      "Material": "Steel"
    },
    links: {
      amazon: "https://www.amazon.in/s?k=Seiko+Presage+Cocktail",
      flipkart: "https://www.flipkart.com/search?q=seiko+presage+cocktail",
      official: "https://www.seikowatches.com/global-en/products/presage"
    }
  },
  {
    id: 7,
    name: "Tank Française",
    brand: "Cartier",
    price: "₹7,20,000",
    category: "luxury",
    image: "https://images.unsplash.com/photo-1548171915-e79a380a2a4b?w=600&h=600&fit=crop",
    description: "An icon of refined elegance. The Tank Française features fluid, sculptural lines with integrated bracelet and the distinctive Cartier blue hands.",
    specs: {
      "Movement": "Quartz",
      "Case Size": "32mm",
      "Water Resist": "30m",
      "Material": "Steel"
    },
    links: {
      amazon: "https://www.amazon.in/s?k=Cartier+Tank",
      flipkart: "https://www.flipkart.com/search?q=cartier+tank",
      official: "https://www.cartier.com/en-us/watches/tank/"
    }
  },
  {
    id: 8,
    name: "Galaxy Watch 6 Classic",
    brand: "Samsung",
    price: "₹36,999",
    category: "smart",
    image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=600&h=600&fit=crop",
    description: "The classic smartwatch with rotating bezel returns. Featuring advanced health monitoring, sapphire crystal glass, and seamless Galaxy ecosystem integration.",
    specs: {
      "Display": "AMOLED 47mm",
      "Battery": "40 hrs",
      "Water Resist": "50m",
      "Material": "Steel"
    },
    links: {
      amazon: "https://www.amazon.in/s?k=Samsung+Galaxy+Watch+6+Classic",
      flipkart: "https://www.flipkart.com/search?q=samsung+galaxy+watch+6+classic",
      official: "https://www.samsung.com/global/galaxy/galaxy-watch6-classic/"
    }
  },
  {
    id: 9,
    name: "Seamaster Planet Ocean",
    brand: "Omega",
    price: "₹4,90,000",
    category: "dive",
    image: "https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=600&h=600&fit=crop",
    description: "Born from ocean exploration heritage, the Planet Ocean features a unidirectional rotating bezel with Liquidmetal® and Master Chronometer certification.",
    specs: {
      "Movement": "Automatic",
      "Case Size": "43.5mm",
      "Water Resist": "600m",
      "Material": "Steel"
    },
    links: {
      amazon: "https://www.amazon.in/s?k=Omega+Seamaster+Planet+Ocean",
      flipkart: "https://www.flipkart.com/search?q=omega+seamaster+planet+ocean",
      official: "https://www.omegawatches.com/watches/seamaster/planet-ocean-600m"
    }
  },
  {
    id: 10,
    name: "Khaki Field Mechanical",
    brand: "Hamilton",
    price: "₹52,000",
    category: "classic",
    image: "https://images.unsplash.com/photo-1585123334904-845d60e97b29?w=600&h=600&fit=crop",
    description: "A tribute to Hamilton's military watchmaking heritage. Clean, legible dial with hand-wound movement offering an impressive 80-hour power reserve.",
    specs: {
      "Movement": "Manual",
      "Case Size": "38mm",
      "Water Resist": "50m",
      "Material": "Steel"
    },
    links: {
      amazon: "https://www.amazon.in/s?k=Hamilton+Khaki+Field",
      flipkart: "https://www.flipkart.com/search?q=hamilton+khaki+field",
      official: "https://www.hamiltonwatch.com/en-int/collection/khaki-field.html"
    }
  },
  {
    id: 11,
    name: "Pelagos FXD",
    brand: "Tudor",
    price: "₹3,60,000",
    category: "dive",
    image: "https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?w=600&h=600&fit=crop",
    description: "Developed in collaboration with the Marine Nationale, the Pelagos FXD is a fixed bar diver's watch built for military-grade underwater operations.",
    specs: {
      "Movement": "Automatic",
      "Case Size": "42mm",
      "Water Resist": "200m",
      "Material": "Titanium"
    },
    links: {
      amazon: "https://www.amazon.in/s?k=Tudor+Pelagos",
      flipkart: "https://www.flipkart.com/search?q=tudor+pelagos",
      official: "https://www.tudorwatch.com/en/watches/pelagos"
    }
  },
  {
    id: 12,
    name: "Neutra Chronograph",
    brand: "Fossil",
    price: "₹12,495",
    category: "classic",
    image: "https://images.unsplash.com/photo-1619134778706-7015533a6150?w=600&h=600&fit=crop",
    description: "A modern classic with minimalist design and chronograph functionality. The Neutra features a clean, easy-to-read dial with a vintage-inspired aesthetic.",
    specs: {
      "Movement": "Quartz",
      "Case Size": "44mm",
      "Water Resist": "50m",
      "Material": "Steel"
    },
    links: {
      amazon: "https://www.amazon.in/s?k=Fossil+Neutra+Chronograph",
      flipkart: "https://www.flipkart.com/search?q=fossil+neutra+chronograph",
      official: "https://www.fossil.com/en-us/watches/mens-watches/"
    }
  }
];

// ===== DOM Elements =====
const productGrid = document.getElementById('productGrid');
const filterBar = document.getElementById('filterBar');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const noResults = document.getElementById('noResults');
const modalOverlay = document.getElementById('modalOverlay');
const modalClose = document.getElementById('modalClose');
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
const navbar = document.getElementById('navbar');
const newsletterForm = document.getElementById('newsletterForm');
const heroParticles = document.getElementById('heroParticles');

let currentFilter = 'all';
let currentSearch = '';

// ===== Render Products =====
function renderProducts() {
  const filtered = watches.filter(w => {
    const matchCategory = currentFilter === 'all' || w.category === currentFilter;
    const matchSearch = currentSearch === '' ||
      w.name.toLowerCase().includes(currentSearch) ||
      w.brand.toLowerCase().includes(currentSearch) ||
      w.category.toLowerCase().includes(currentSearch);
    return matchCategory && matchSearch;
  });

  if (filtered.length === 0) {
    productGrid.innerHTML = '';
    noResults.style.display = 'block';
    return;
  }

  noResults.style.display = 'none';
  productGrid.innerHTML = filtered.map(watch => `
    <div class="product-card" data-id="${watch.id}" onclick="openModal(${watch.id})">
      <div class="product-card-image">
        <img src="${watch.image}" alt="${watch.name}" loading="lazy">
        <span class="product-card-badge">${watch.category}</span>
      </div>
      <div class="product-card-body">
        <p class="product-card-brand">${watch.brand}</p>
        <h3 class="product-card-name">${watch.name}</h3>
        <p class="product-card-price">${watch.price}</p>
        <div class="product-card-actions">
          <a href="${watch.links.amazon}" target="_blank" rel="noopener" class="card-btn card-btn-primary" onclick="event.stopPropagation()">Buy Now</a>
          <button class="card-btn card-btn-secondary" onclick="event.stopPropagation(); openModal(${watch.id})">Details</button>
        </div>
      </div>
    </div>
  `).join('');
}

// ===== Filter Logic =====
filterBar.addEventListener('click', (e) => {
  if (e.target.classList.contains('filter-btn')) {
    filterBar.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    e.target.classList.add('active');
    currentFilter = e.target.dataset.filter;
    renderProducts();
  }
});

function filterByCategory(cat) {
  currentFilter = cat;
  filterBar.querySelectorAll('.filter-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.filter === cat);
  });
  renderProducts();
  document.getElementById('collection').scrollIntoView({ behavior: 'smooth' });
}

// ===== Search =====
searchInput.addEventListener('input', (e) => {
  currentSearch = e.target.value.toLowerCase().trim();
  renderProducts();
});
searchBtn.addEventListener('click', () => {
  currentSearch = searchInput.value.toLowerCase().trim();
  renderProducts();
  if (currentSearch) {
    document.getElementById('collection').scrollIntoView({ behavior: 'smooth' });
  }
});

// ===== Modal =====
function openModal(id) {
  const watch = watches.find(w => w.id === id);
  if (!watch) return;

  document.getElementById('modalImage').src = watch.image;
  document.getElementById('modalImage').alt = watch.name;
  document.getElementById('modalCategory').textContent = watch.category;
  document.getElementById('modalTitle').textContent = watch.name;
  document.getElementById('modalBrand').textContent = `by ${watch.brand}`;
  document.getElementById('modalPrice').textContent = watch.price;
  document.getElementById('modalDesc').textContent = watch.description;

  // Specs
  const specsEl = document.getElementById('modalSpecs');
  specsEl.innerHTML = Object.entries(watch.specs).map(([label, value]) => `
    <div class="spec-item">
      <p class="spec-label">${label}</p>
      <p class="spec-value">${value}</p>
    </div>
  `).join('');

  // Buy buttons
  const actionsEl = document.getElementById('modalActions');
  actionsEl.innerHTML = `
    <a href="${watch.links.amazon}" target="_blank" rel="noopener" class="buy-btn buy-btn-amazon">
      🛒 Buy on Amazon
    </a>
    <a href="${watch.links.flipkart}" target="_blank" rel="noopener" class="buy-btn buy-btn-flipkart">
      🛍️ Buy on Flipkart
    </a>
    <a href="${watch.links.official}" target="_blank" rel="noopener" class="buy-btn buy-btn-official">
      🌐 Official Website
    </a>
  `;

  modalOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modalOverlay.classList.remove('active');
  document.body.style.overflow = '';
}
modalClose.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', (e) => {
  if (e.target === modalOverlay) closeModal();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});

// ===== Mobile Menu =====
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('open');
});
navLinks.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navLinks.classList.remove('open');
  });
});

// ===== Navbar Scroll =====
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// ===== Active Nav Link =====
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const top = section.offsetTop - 100;
    if (window.scrollY >= top) current = section.id;
  });
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
  });
});

// ===== Scroll Reveal =====
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// ===== Hero Stats Counter =====
function animateCounters() {
  document.querySelectorAll('.stat-number').forEach(el => {
    const target = parseInt(el.dataset.target);
    const increment = Math.ceil(target / 60);
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      el.textContent = current;
    }, 30);
  });
}

const heroObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounters();
      heroObserver.disconnect();
    }
  });
}, { threshold: 0.3 });
heroObserver.observe(document.querySelector('.hero'));

// ===== Hero Particles =====
function createParticles() {
  for (let i = 0; i < 20; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = Math.random() * 100 + '%';
    particle.style.animationDelay = Math.random() * 6 + 's';
    particle.style.animationDuration = (4 + Math.random() * 4) + 's';
    heroParticles.appendChild(particle);
  }
}
createParticles();

// ===== Newsletter =====
newsletterForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const btn = newsletterForm.querySelector('button');
  const originalText = btn.textContent;
  btn.textContent = '✓ Subscribed!';
  btn.style.background = 'linear-gradient(135deg, #2ecc71, #27ae60)';
  setTimeout(() => {
    btn.textContent = originalText;
    btn.style.background = '';
    newsletterForm.reset();
  }, 2500);
});

// ===== Init =====
renderProducts();
