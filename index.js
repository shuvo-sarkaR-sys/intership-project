console.log("hello world")
const menuBtn = document.getElementById('menuBtn');
const closeBtn = document.getElementById('closeBtn');
const navbar = document.getElementById('navbar');


menuBtn.addEventListener('click', function() {
  navbar.classList.add('active');
});


closeBtn.addEventListener('click', function() {
  navbar.classList.remove('active');
});

function countUp(el, end, suffix = "") {
    let start = 0;
    const duration = 2000;
    const startTime = performance.now();

    function animate(time) {
        const progress = Math.min((time - startTime) / duration, 1);
        const value = Math.floor(progress * end);
        el.textContent = value + suffix;

        if (progress < 1) requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);
}

const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const stats = entry.target.querySelectorAll("h1");

            stats.forEach(stat => {
                const target = parseFloat(stat.dataset.target);
                if (stat.textContent.includes('%')) {
                    countUp(stat, target, '%');
                } else if (stat.textContent.includes('+')) {
                    countUp(stat, target, '+');
                } else if (stat.textContent.includes('M')) {
                    countUp(stat, target , '.82M');
                }
            });

            obs.unobserve(entry.target); // count once
        }
    });
}, { threshold: 0.5 });

observer.observe(document.querySelector("#stats"));

const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
      item.querySelector('.faq-question').addEventListener('click', () => {
        faqItems.forEach(i => {
          if (i !== item) i.classList.remove('active');
        });

        item.classList.toggle('active');
      });
    });



const scrollToTopBtn = document.getElementById('scrollToTopBtn');


window.onscroll = function() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
};


scrollToTopBtn.addEventListener('click', function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
