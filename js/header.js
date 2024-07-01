let sectionsAndFooters = document.querySelectorAll('section, footer');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    let top = window.scrollY;
    let windowHeight = window.innerHeight;

    sectionsAndFooters.forEach(sec => {
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (document.querySelector('header nav a[href*=' + id + ']')) {
                    document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
                }
            });
        }
    });
};
