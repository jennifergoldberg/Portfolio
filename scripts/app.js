// Nav Links Toggle

const navToggle = document.querySelector('.nav-toggle');

const navLinks = document.querySelectorAll('.nav__link');

navToggle.addEventListener('click', () => {
  document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    document.body.classList.remove('nav-open');
  })
});


// Scroll to Top Button
// TODO Fix This!
const target = document.querySelector('footer');

const scrollTopBtn = document.querySelector('.scroll-to-top');

const rootElement = document.documentElement;

function callback(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      scrollTopBtn.classList.add('show-btn');
    } else {
      scrollTopBtn.classList.remove('show-btn');
    }
  })
}

function scrollToTop() {
  rootElement.scrollTo({
    top: 0,
  });
}

scrollTopBtn.addEventListener('click', scrollToTop);

let observer = new IntersectionObserver(callback);

observer.observe(target);