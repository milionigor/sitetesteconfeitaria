document.addEventListener("DOMContentLoaded", () => {
  // =========================================
  // 1. MENU HAMBÚRGUER RESPONSIVO
  // =========================================
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  });

  // Fechar o menu ao clicar em um link (no mobile)
  document.querySelectorAll(".nav-menu a").forEach((link) => {
    link.addEventListener("click", () => {
      if (hamburger.classList.contains("active")) {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
      }
    });
  });

  // =========================================
  // 2. ANIMAÇÕES SUAVES AO ROLAR (Intersection Observer)
  // Isso aplica a classe 'visible' no CSS
  // =========================================
  const sections = document.querySelectorAll("section");

  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.15, // 15% da seção visível para ativar
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  sections.forEach((section) => {
    observer.observe(section);
  });

  // =========================================
  // 3. SLIDER DE IMAGENS (Home)
  // =========================================
  const sliderContainer = document.querySelector(".slider-container");
  if (sliderContainer) {
    const sliderImages = sliderContainer.querySelectorAll(".slider-img");
    let currentSlide = 0;

    function showSlide(index) {
      sliderImages.forEach((img, i) => {
        img.style.display = "none";
        if (i === index) {
          img.style.display = "block";
        }
      });
    }

    function nextSlide() {
      currentSlide = (currentSlide + 1) % sliderImages.length;
      showSlide(currentSlide);
    }

    // Inicializa o slider
    showSlide(currentSlide);

    // Troca de imagem a cada 4 segundos
    setInterval(nextSlide, 4000);
  }
});
