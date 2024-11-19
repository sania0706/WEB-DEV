
    // 1. Typed.js Effect Customization
    var typed = new Typed('#element', {
        strings: ['<i>Web</i> Developer', 'Programmer', 'UI/UX Enthusiast'],
        typeSpeed: 50,
        backSpeed: 30,
        loop: true,
        startDelay: 500
    });

    // 2. Smooth Scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // 3. Responsive Navbar Toggle for mobile view
    document.addEventListener("DOMContentLoaded", function() {
        const nav = document.querySelector('nav');
        const toggleButton = document.createElement('button');
        toggleButton.className = 'menu-toggle';
        toggleButton.innerText = '☰';
        nav.insertAdjacentElement('afterbegin', toggleButton);

        toggleButton.addEventListener('click', function() {
            document.querySelector('.right').classList.toggle('open');
        });
    });

    // 4. Dynamic Year in Footer
    const footerYear = document.createElement('span');
    footerYear.innerHTML = `&copy; ${new Date().getFullYear()} saniakhanportfolio.com | All rights reserved.`;
    document.querySelector('.footer-right').innerHTML = '';
    document.querySelector('.footer-right').appendChild(footerYear);

