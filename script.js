document.addEventListener('DOMContentLoaded', () => {
  // SCROLL REVEAL
  const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.classList.contains('visible')) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.15 });

  revealElements.forEach(element => {
    observer.observe(element);
  });

  // NAVBAR DINÂMICA
  window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // CONTADORES ANIMADOS
  const countElements = document.querySelectorAll('[data-count]');
  countElements.forEach(element => {
    let targetValue = parseInt(element.getAttribute('data-count'));
    let currentValue = 0;
    let duration = 2000; // 2 seconds
    let step = duration / (targetValue * 10);
    let timer = setInterval(() => {
      currentValue += Math.ceil(step);
      element.textContent = currentValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      if (currentValue >= targetValue) {
        clearInterval(timer);
      }
    }, step);
  });

  // FAQ ACCORDION
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    item.addEventListener('click', () => {
      faqItems.forEach(faqItem => {
        if (faqItem !== item) {
          faqItem.classList.remove('active');
        }
      });
      item.classList.toggle('active');
    });
  });

  // SMOOTH SCROLL para links internos
  const smoothScrollLinks = document.querySelectorAll('.scroll-link');
  smoothScrollLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80, // Adjust for navbar height
          behavior: 'smooth'
        });
      }
    });
  });

  // CURSOR GLOW (opcional)
  const cursorGlow = document.createElement('div');
  cursorGlow.classList.add('cursor-glow');
  document.body.appendChild(cursorGlow);

  window.addEventListener('mousemove', (e) => {
    cursorGlow.style.left = `${e.clientX}px`;
    cursorGlow.style.top = `${e.clientY}px`;
  });

  // FLOATING WHATSAPP
  const whatsappButton = document.createElement('a');
  whatsappButton.href = 'https://wa.me/551298765432';
  whatsappButton.classList.add('whatsapp-button');
  whatsappButton.innerHTML = '<i class="fab fa-whatsapp"></i>';
  document.body.appendChild(whatsappButton);

  const tooltip = document.createElement('span');
  tooltip.textContent = 'WhatsApp';
  tooltip.classList.add('tooltip');
  whatsappButton.appendChild(tooltip);
});