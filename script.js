// Versatility section carousel (unique IDs — was conflicting with hero / HDPE buttons)
function initVersatilityCarousel() {
  const track = document.getElementById("carouselTrack");
  const prevBtn = document.getElementById("carouselPrevBtn");
  const nextBtn = document.getElementById("carouselNextBtn");
  const wrapper = document.querySelector(".versatility-section .carousel-wrapper");
  const items = document.querySelectorAll(".versatility-section .carousel-item");
  if (!track || !prevBtn || !nextBtn || !wrapper || !items.length) return;

  const gap = 16;
  const getCardWidth = () => items[0].offsetWidth + gap;
  let visibleCount = Math.max(
    1,
    Math.floor(wrapper.offsetWidth / Math.max(getCardWidth(), 1))
  );
  let index = 0;

  function updateButtons() {
    const maxIndex = Math.max(0, items.length - visibleCount);
    prevBtn.disabled = index <= 0;
    nextBtn.disabled = index >= maxIndex;
  }

  function updatePosition() {
    const w = getCardWidth();
    track.style.transform = `translateX(-${index * w}px)`;
    updateButtons();
  }

  nextBtn.addEventListener("click", () => {
    const maxIndex = Math.max(0, items.length - visibleCount);
    if (index < maxIndex) {
      index++;
      updatePosition();
    }
  });

  prevBtn.addEventListener("click", () => {
    if (index > 0) {
      index--;
      updatePosition();
    }
  });

  window.addEventListener("resize", () => {
    visibleCount = Math.max(
      1,
      Math.floor(wrapper.offsetWidth / Math.max(getCardWidth(), 1))
    );
    const maxIndex = Math.max(0, items.length - visibleCount);
    if (index > maxIndex) index = maxIndex;
    updatePosition();
  });

  updatePosition();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initVersatilityCarousel);
} else {
  initVersatilityCarousel();
}

// Tab system for manufacturing process steps (desktop section only)
const hdpeSection = document.querySelector(".advanced-hdpe-section .hdpe-tab");
const tabs = hdpeSection ? hdpeSection.querySelectorAll(".tab[data-index]") : [];
const textContent = hdpeSection ? hdpeSection.querySelector("#textContent") : null;
const stepImage = hdpeSection ? hdpeSection.querySelector("#stepImage") : null;

// Manufacturing process data - each step has title, description, key points, and image
const data = [
  {
    title: "High-Grade Raw Material Selection",
    desc: "Vacuum sizing tanks ensure precise outer diameter while internal pressure maintains perfect roundness and wall thickness uniformity.",
    points: ["PE100 grade material", "Optimal molecular weight distribution"],
    img: "assets/img/fishnet-carousel.jpg",
  },
  {
    title: "Extrusion Process",
    desc: "Vacuum sizing tanks ensure precise outer diameter while internal pressure maintains perfect roundness and wall thickness uniformity.",
    points: ["Uniform thickness", "High-speed operation"],
    img: "assets/img/fishnet-carousel.jpg",
  },
  {
    title: "Cooling",
    desc: "Vacuum sizing tanks ensure precise outer diameter while internal pressure maintains perfect roundness and wall thickness uniformity.",
    points: ["Controlled temperature", "Prevents deformation"],
    img: "assets/img/fishnet-carousel.jpg",
  },
  {
    title: "Sizing",
    desc: "Vacuum sizing tanks ensure precise outer diameter while internal pressure maintains perfect roundness and wall thickness uniformity.",
    points: ["Accurate calibration", "Vacuum sizing"],
    img: "assets/img/fishnet-carousel.jpg",
  },
  {
    title: "Quality Control",
    desc: "Vacuum sizing tanks ensure precise outer diameter while internal pressure maintains perfect roundness and wall thickness uniformity..",
    points: ["Pressure tests", "Dimension checks"],
    img: "assets/img/fishnet-carousel.jpg",
  },
  {
    title: "Marking",
    desc: "Vacuum sizing tanks ensure precise outer diameter while internal pressure maintains perfect roundness and wall thickness uniformity..",
    points: ["Laser printing", "Batch codes"],
    img: "assets/img/fishnet-carousel.jpg",
  },
  {
    title: "Cutting",
    desc: "Vacuum sizing tanks ensure precise outer diameter while internal pressure maintains perfect roundness and wall thickness uniformity.",
    points: ["Clean edges", "Consistent length"],
    img: "assets/img/fishnet-carousel.jpg",
  },
  {
    title: "Packaging",
    desc: "Vacuum sizing tanks ensure precise outer diameter while internal pressure maintains perfect roundness and wall thickness uniformity.",
    points: ["Eco-friendly materials", "Secured wrapping"],
    img: "assets/img/fishnet-carousel.jpg",
  },
];

// Tab click handlers - switch active tab and update content
tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");
    const index = parseInt(tab.getAttribute("data-index"));
    if (Number.isNaN(index)) return;
    updateContent(index);
  });
});

// Update the content area with selected step data
function updateContent(index) {
  if (!textContent || !stepImage || !data[index]) return;
  const step = data[index];
  textContent.innerHTML = `
    <h4>${step.title}</h4>
    <p>${step.desc}</p>
    <div class="quote-features">
      ${step.points.map((p) => `<div><img aria-label="Checked Circle" src="./assets/icons/circle-check.svg"><p>${p}</p></div>`).join("")}
    </div>
  `;
  stepImage.src = step.img;
  currentImage = index;
}

let currentImage = 0;

// Previous/next image navigation for the step content
function prevImage() {
  if (!tabs.length) return;
  currentImage = (currentImage - 1 + data.length) % data.length;
  tabs[currentImage].click();
}

function nextImage() {
  if (!tabs.length) return;
  currentImage = (currentImage + 1) % data.length;
  tabs[currentImage].click();
}

// Product features data - icons, titles, and descriptions
const featuresData = [
  {
    icon: "assets/icons/bag.svg",
    title: "Superior Chemical Resistance",
    description:
      "HDPE pipes resist a wide range of chemicals, acids, and alkalis. Unlike metal pipes, they won't corrode, rust, or scale, ensuring pure water quality and extended service life in aggressive environments.",
  },
  {
    icon: "assets/icons/welding.svg",
    title: "Exceptional Flexibility & Durability",
    description:
      "HDPE pipes resist a wide range of chemicals, acids, and alkalis. Unlike metal pipes, they won't corrode, rust, or scale, ensuring pure water quality and extended service life in aggressive environments.",
  },
  {
    icon: "assets/icons/box.svg",
    title: "Leak-Proof Fusion Welding",
    description:
      "HDPE pipes resist a wide range of chemicals, acids, and alkalis. Unlike metal pipes, they won't corrode, rust, or scale, ensuring pure water quality and extended service life in aggressive environments.",
  },
  {
    icon: "assets/icons/setting.svg",
    title: "Cost-Effective Long-Term Solution",
    description:
      "HDPE pipes resist a wide range of chemicals, acids, and alkalis. Unlike metal pipes, they won't corrode, rust, or scale, ensuring pure water quality and extended service life in aggressive environments.",
  },
  {
    icon: "assets/icons/setting.svg",
    title: "Environmentally Sustainable",
    description:
      "HDPE pipes resist a wide range of chemicals, acids, and alkalis. Unlike metal pipes, they won't corrode, rust, or scale, ensuring pure water quality and extended service life in aggressive environments.",
  },
  {
    icon: "assets/icons/setting.svg",
    title: "Certified Quality Assurance",
    description:
      "HDPE pipes resist a wide range of chemicals, acids, and alkalis. Unlike metal pipes, they won't corrode, rust, or scale, ensuring pure water quality and extended service life in aggressive environments.",
  },
];

// Dynamically generate feature cards from data
const container = document.getElementById("features-container");

featuresData.forEach((feature) => {
  const card = document.createElement("div");
  card.className = "feature-card";

  card.innerHTML = `
    <div class="feature-data">
      <div class="feature-icon">
        <img src="${feature.icon}" alt="${feature.title}">
      </div>
      <div class="feature-title">${feature.title}</div>
      <div class="feature-description">${feature.description}</div>
    </div>
  `;

  container.appendChild(card);
});

// Image zoom functionality
const mainImage = document.getElementById("mainImage");
const magnifier = document.getElementById("magnifier");

let heroGalleryIndex = 0;

function heroSlideSources() {
  const thumbs = document.querySelectorAll(
    ".product-gallery .thumbnail-carousel img"
  );
  if (thumbs.length) return Array.from(thumbs).map((el) => el.src);
  return mainImage ? [mainImage.src] : [];
}

// Switch main image and update magnifier
function changeImage(src) {
  if (!mainImage) return;
  mainImage.src = src;
  if (magnifier) magnifier.style.backgroundImage = `url(${src})`;
  const srcs = heroSlideSources();
  const idx = srcs.indexOf(src);
  if (idx >= 0) heroGalleryIndex = idx;
}

function heroPrevImage() {
  const srcs = heroSlideSources();
  if (!mainImage || !srcs.length) return;
  heroGalleryIndex = (heroGalleryIndex - 1 + srcs.length) % srcs.length;
  changeImage(srcs[heroGalleryIndex]);
}

function heroNextImage() {
  const srcs = heroSlideSources();
  if (!mainImage || !srcs.length) return;
  heroGalleryIndex = (heroGalleryIndex + 1) % srcs.length;
  changeImage(srcs[heroGalleryIndex]);
}

// True when cursor is over carousel arrow buttons (no zoom there)
function isOverNavArrow(target) {
  if (!target || !target.closest) return false;
  return Boolean(target.closest(".nav-btn"));
}

// Show magnified view on mouse move
function magnify(e) {
  if (!mainImage) return;
  if (isOverNavArrow(e.target)) {
    hideZoom();
    return;
  }

  const rect = mainImage.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  const xPercent = (x / rect.width) * 100;
  const yPercent = (y / rect.height) * 100;

  if (!magnifier) return;
  magnifier.style.display = "block";
  magnifier.style.left = `${x + 20}px`;
  magnifier.style.top = `${y - 75}px`;
  magnifier.style.backgroundImage = `url(${mainImage.src})`;
  magnifier.style.backgroundPosition = `${xPercent}% ${yPercent}%`;
}

// Hide magnifier when mouse leaves
function hideZoom() {
  if (magnifier) magnifier.style.display = "none";
}

// Custom cursor for zoom functionality
const magnifierCursor = document.getElementById("magnifier-cursor");
const imageContainer = document.querySelector(".main-image-container");

// Track mouse position for custom cursor (disabled over nav arrows)
if (imageContainer && magnifierCursor) {
  imageContainer.addEventListener("mousemove", (e) => {
    if (isOverNavArrow(e.target)) {
      magnifierCursor.style.display = "none";
      hideZoom();
      return;
    }

    const rect = imageContainer.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    magnifierCursor.style.display = "block";
    magnifierCursor.style.left = `${x - magnifierCursor.offsetWidth / 2}px`;
    magnifierCursor.style.top = `${y - magnifierCursor.offsetHeight / 2}px`;
  });

  imageContainer.addEventListener("mouseleave", () => {
    magnifierCursor.style.display = "none";
  });
}

// Testimonials data - customer reviews and feedback
const testimonialsData = [
  {
    title: "Excellent support for specialized applications.",
    text: "The durability and performance of Meera's fishnet processing equipment has significantly improved our marine product quality. Excellent support for specialized applications.",
    name: "Carlos Mendoza",
    designation: "Operations Manager",
    avatar: "",
  },
  {
    title: "Excellent support for specialized applications.",
    text: "The durability and performance of Meera's fishnet processing equipment has significantly improved our marine product quality. Excellent support for specialized applications.",
    name: "Carlos Mendoza",
    designation: "Operations Manager",
    avatar: "",
  },
  {
    title: "Excellent support for specialized applications.",
    text: "The durability and performance of Meera's fishnet processing equipment has significantly improved our marine product quality. Excellent support for specialized applications.",
    name: "Carlos Mendoza",
    designation: "Operations Manager",
    avatar: "",
  },
  {
    title: "Excellent support for specialized applications.",
    text: "The durability and performance of Meera's fishnet processing equipment has significantly improved our marine product quality. Excellent support for specialized applications.",
    name: "Carlos Mendoza",
    designation: "Operations Manager",
    avatar: "",
  },
  {
    title: "Excellent support for specialized applications.",
    text: "The durability and performance of Meera's fishnet processing equipment has significantly improved our marine product quality. Excellent support for specialized applications.",
    name: "Carlos Mendoza",
    designation: "Operations Manager",
    avatar: "",
  },
  {
    title: "Excellent support for specialized applications.",
    text: "The durability and performance of Meera's fishnet processing equipment has significantly improved our marine product quality. Excellent support for specialized applications.",
    name: "Carlos Mendoza",
    designation: "Operations Manager",
    avatar: "",
  },
  {
    title: "Excellent support for specialized applications.",
    text: "The durability and performance of Meera's fishnet processing equipment has significantly improved our marine product quality. Excellent support for specialized applications.",
    name: "Carlos Mendoza",
    designation: "Operations Manager",
    avatar: "",
  },
  {
    title: "Excellent support for specialized applications.",
    text: "The durability and performance of Meera's fishnet processing equipment has significantly improved our marine product quality. Excellent support for specialized applications.",
    name: "Carlos Mendoza",
    designation: "Operations Manager",
    avatar: "",
  },
];

// Generate testimonial cards dynamically
const containerElement = document.getElementById("testemonies-carousel");

testimonialsData.forEach((item) => {
  const testimonialHTML = `
    <div class="carousel-item">
      <div class="testimonial-card">
        <div class="quote-icon">
          <img src="assets/icons/quote.svg" alt="Quote">
        </div>
        <div class="testimonial-hedings">
          <h3 class="testimonial-title">${item.title}</h3>
          <p class="testimonial-text">${item.text}</p>
        </div>
        <div class="testimonial-footer">
          <div class="avatar-placeholder">
            ${item.avatar ? `<img src="${item.avatar}" alt="${item.name}"/>` : ""}
          </div>
          <div class="name-tag">
            <div class="name"><p>${item.name}</p></div>
            <div class="designation"><label>${item.designation}</label></div>
          </div>
        </div>
      </div>
    </div>`;

  containerElement.insertAdjacentHTML("beforeend", testimonialHTML);
});

// Sticky header behavior - show/hide based on scroll direction
const header = document.getElementById("stickyHeader");
let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
  const currentScroll = window.scrollY;

  // Show header when scrolling down past 1000px, hide when scrolling up
  if (currentScroll > 1000 && currentScroll > lastScrollY) {
    header.classList.add("visible");
    header.classList.remove("hidden");
  } else if (currentScroll < lastScrollY) {
    header.classList.remove("visible");
    header.classList.add("hidden");
  }

  lastScrollY = currentScroll;
});

// FAQ functionality
document.querySelectorAll(".faq-question").forEach((question) => {
  question.addEventListener("click", () => {
    const item = question.parentElement;
    item.classList.toggle("open");
  });
});

function openModal() {
  const el = document.getElementById("callbackModal");
  if (el) el.style.display = "flex";
  document.body.style.overflow = "hidden";
}

function openingModal() {
  const el = document.getElementById("callbackModal2");
  if (el) el.style.display = "flex";
  document.body.style.overflow = "hidden";
}

function closeModal() {
  const m1 = document.getElementById("callbackModal");
  const m2 = document.getElementById("callbackModal2");
  if (m1) m1.style.display = "none";
  if (m2) m2.style.display = "none";
  document.body.style.overflow = "";
}

window.addEventListener("click", function (event) {
  const t = event.target;
  if (t && t.id === "callbackModal") closeModal();
  if (t && t.id === "callbackModal2") closeModal();
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") closeModal();
});

// HDPE process arrows (same prev/next tab behavior — uses unique IDs)
(function bindHdpeStepNav() {
  const prev = document.getElementById("hdpePrevBtn");
  const next = document.getElementById("hdpeNextBtn");
  if (prev) prev.addEventListener("click", prevImage);
  if (next) next.addEventListener("click", nextImage);
})();
