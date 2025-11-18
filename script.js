document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', function() {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (window.pageYOffset >= sectionTop - 100) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    const searchBtn = document.querySelector('.search-btn');
    if (searchBtn) {
        searchBtn.addEventListener('click', function(e) {
            e.preventDefault();
            const location = document.querySelector('.search-item span')?.textContent || 'Anywhere';
            alert(`Đang tìm kiếm: ${location}`);
        });
    }

    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 50) {
            navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        } else {
            navbar.style.boxShadow = 'none';
        }
    });

    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const packageCards = document.querySelectorAll('.package-card');
    let currentIndex = 0;

    if (prevBtn && nextBtn && packageCards.length > 0) {
        nextBtn.addEventListener('click', function() {
            if (currentIndex < packageCards.length - 3) {
                currentIndex += 3;
                packageCards.forEach((card, index) => {
                    card.style.display = (index >= currentIndex && index < currentIndex + 3) ? 'block' : 'none';
                });
            }
        });

        prevBtn.addEventListener('click', function() {
            if (currentIndex > 0) {
                currentIndex -= 3;
                packageCards.forEach((card, index) => {
                    card.style.display = (index >= currentIndex && index < currentIndex + 3) ? 'block' : 'none';
                });
            }
        });
    }

});
