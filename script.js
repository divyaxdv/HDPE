// Carousel setup and controls
const track = document.getElementById("carouselTrack");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const items = document.querySelectorAll(".carousel-item");
const wrapper = document.querySelector(".carousel-wrapper");

// Calculate card width including margin, and how many cards fit in viewport
const cardWidth = items[0].offsetWidth + 16;
let visibleCount = Math.floor(wrapper.offsetWidth / cardWidth);
let index = 0;

// Enable/disable navigation buttons based on current position
function updateButtons() {
  prevBtn.disabled = index === 0;
  nextBtn.disabled = index >= items.length - visibleCount;
}

// Move carousel to current index position
function updatePosition() {
  track.style.transform = `translateX(-${index * cardWidth}px)`;
  updateButtons();
}

// Navigation event handlers
nextBtn.addEventListener("click", () => {
  if (index < items.length - visibleCount) {
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

// Handle window resize - recalculate visible cards and update position
window.addEventListener("resize", () => {
  visibleCount = Math.floor(wrapper.offsetWidth / cardWidth);
  updateButtons();
  updatePosition();
});

updateButtons();

// Tab system for manufacturing process steps
const tabs = document.querySelectorAll(".tab");
const textContent = document.getElementById("textContent");
const stepImage = document.getElementById("stepImage");

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
    updateContent(index);
  });
});

// Update the content area with selected step data
function updateContent(index) {
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
  currentImage = (currentImage - 1 + data.length) % data.length;
  tabs[currentImage].click();
}

function nextImage() {
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

// Switch main image and update magnifier
function changeImage(src) {
  mainImage.src = src;
  magnifier.style.backgroundImage = `url(${src})`;
}

// Show magnified view on mouse move
function magnify(e) {
  const rect = mainImage.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  const xPercent = (x / rect.width) * 100;
  const yPercent = (y / rect.height) * 100;

  magnifier.style.display = "block";
  magnifier.style.left = `${x + 20}px`;
  magnifier.style.top = `${y - 75}px`;
  magnifier.style.backgroundImage = `url(${mainImage.src})`;
  magnifier.style.backgroundPosition = `${xPercent}% ${yPercent}%`;
}

// Hide magnifier when mouse leaves
function hideZoom() {
  magnifier.style.display = "none";
}

// Custom cursor for zoom functionality
const magnifierCursor = document.getElementById("magnifier-cursor");
const imageContainer = document.querySelector(".main-image-container");

// Track mouse position for custom cursor
imageContainer.addEventListener("mousemove", (e) => {
  const rect = imageContainer.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  magnifierCursor.style.display = "block";
  magnifierCursor.style.left = `${x - magnifierCursor.offsetWidth / 2}px`;
  magnifierCursor.style.top = `${y - magnifierCursor.offsetHeight / 2}px`;
});

// Hide custom cursor when mouse leaves image area
imageContainer.addEventListener("mouseleave", () => {
  magnifierCursor.style.display = "none";
});

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
  document.getElementById("callbackModal").style.display = "flex";
}

function closeModal() {
  document.getElementById("callbackModal").style.display = "none";
}

window.onclick = function (event) {
  const modal = document.getElementById("callbackModal");
  if (event.target === modal) {
    closeModal();
  }
};

function openingModal() {
  document.getElementById("callbackModal2").style.display = "flex";
}

function closeModal() {
  document.getElementById("callbackModal2").style.display = "none";
}

window.onclick = function (event) {
  const modal = document.getElementById("callbackModal2");
  if (event.target === modal) {
    closeModal();
  }
};
