function renderHeader(pageKey) {
  const header = document.getElementById("site-header");
  if (!header) return;

  const activeKey =
    pageKey === "blog-post"
      ? "blog"
      : pageKey === "project-detail"
      ? "projects"
      : pageKey;

  // Determine base path based on environment
  const basePath = window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1" ? "" : "/iron-portfolio";

  const links = [
    { key: "home", href: `index.html`, label: "Home" },
    { key: "projects", href: `projects.html`, label: "Projects" },
    { key: "blog", href: `blogs.html`, label: "Blog" },
    { key: "resume", href: `resume.html`, label: "Resume" },
    { key: "contact", href: `contact.html`, label: "Contact" },
  ];

  const navLinksHtml = links
    .map((link) => {
      const classes = [
        "nav__link",
        link.key === activeKey ? "nav__link--active" : "",
      ]
        .filter(Boolean)
        .join(" ");
      return `<a href="${link.href}" class="${classes}">${link.label}</a>`;
    })
    .join("");

  header.innerHTML = `
    <div class="site-header__inner">
      <a href="index.html" class="brand">
        <img
          src="images/logo.png"
          alt="Manas logo"
          class="brand__logo"
        />
        <span class="brand__name">Manas Sinha</span>
      </a>
      <nav class="nav">
        ${navLinksHtml}
      </nav>
    </div>
  `;
}

function renderFooter(noteText) {
  const footer = document.getElementById("site-footer");
  if (!footer) return;

  const year = new Date().getFullYear().toString();

  footer.innerHTML = `
    <div class="site-footer__inner">
      <span>&copy; <span>${year}</span> Manas S.</span>
      <span class="site-footer__note">${noteText}</span>
    </div>
  `;
}

function initSlider() {
  const slider = document.querySelector(".slider");
  if (!slider) return;

  const track = slider.querySelector(".slider__track");
  const cards = slider.querySelectorAll(".blog-card");
  const prevBtn = slider.querySelector('.slider__button--prev');
  const nextBtn = slider.querySelector('.slider__button--next');
  const dots = slider.querySelectorAll('.slider__dot');

  let currentIndex = 0;

  function updateSlider() {
    const translateX = -currentIndex * 100;
    track.style.transform = `translateX(${translateX}%)`;

    dots.forEach((dot, index) => {
      dot.classList.toggle('slider__dot--active', index === currentIndex);
    });
  }

  function goToSlide(index) {
    currentIndex = Math.max(0, Math.min(index, cards.length - 1));
    updateSlider();
  }

  prevBtn?.addEventListener('click', () => {
    goToSlide(currentIndex - 1);
  });

  nextBtn?.addEventListener('click', () => {
    goToSlide(currentIndex + 1);
  });

  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      const slideIndex = parseInt(dot.dataset.slide);
      goToSlide(slideIndex);
    });
  });

  updateSlider();
}

document.addEventListener("DOMContentLoaded", () => {
  const body = document.body || document.querySelector("body");
  const pageKey = (body && body.dataset.page) || "home";
  const footerNote =
    (body && body.dataset.footerNote) ||
    "Built with a quiet fantasy theme.";

  renderHeader(pageKey);
  renderFooter(footerNote);
  initSlider();
});

