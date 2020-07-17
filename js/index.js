//mob nav bar
const toggleMobNav = () => {
    const navLinks =  document.querySelector('.nav-links');
    const toggleNav = () => navLinks.classList.toggle('nav-active');
    const hideNav = () => {if (navLinks.classList.contains('nav-active')) navLinks.classList.remove('nav-active')};
    document.querySelector('#svg-hamburger').onclick = toggleNav;
    window.addEventListener('resize', hideNav);
}

// toggle emergency pop up
const toggleModal = () => {
    const openPopup = () => {
        const popup = sessionStorage.getItem('popup');
        if (popup === null) document.querySelector('.popupBox').classList.add('popup-active');
    }
    const closePopup = () => {
        document.querySelector('.popupBox').classList.remove('popup-active');
        sessionStorage.setItem('popup', 'hide');
    }
    document.querySelector('#popupClose').onclick = closePopup;
    openPopup()
}

// text for emergency pop up
const alertText = "<h1><i class='fa fa-exclamation-circle'></i> Covid-19 update</h1><p>Visit our <a href='#'>Coronavirus help and support</a> page for frequently asked questions about COVID-19 - we want to help you. </p><p>If you’re driving less, you may be able to temporarily lower your mileage and could be entitled to a refund. Find out more on our <a href='#'>lockdown car insurance refund</a> page.</p>";
const setModalText = () => document.querySelector('.popupText').innerHTML = alertText;

toggleMobNav();
toggleModal();
setModalText();

module.exports = { toggleMobNav, toggleModal, setModalText };