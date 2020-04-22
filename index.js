const burgerNav = () => {
    const toggleNav = () => {
        console.log("clicked");
        document.querySelector('.nav-links').classList.toggle('nav-active');
    }
    document.querySelector('#svg-hamburger').addEventListener('click', toggleNav)
}

burgerNav();