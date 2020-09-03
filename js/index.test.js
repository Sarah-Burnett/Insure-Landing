document.body.innerHTML = 
    '<div id="svg-hamburger"></div>' +
    '<div class="nav-links"><div>' + 
    '<div class="popupBox"></div>' +
    '<div id="popupClose" class="popup-active"></div>' +
    '<div class="popupText"></div>';

require("./index");

const burger = document.querySelector('#svg-hamburger');
const navLinks =  document.querySelector('.nav-links');
const popupBox = document.querySelector('.popupBox');
const popupClose = document.querySelector('#popupClose');
const popupText = document.querySelector('.popupText');

//mobile nav
test('click burger opens mob nav', () => {
    burger.click();
    expect(navLinks.classList.contains('nav-active')).toBe(true);
})

//TODO: test resize - test with resizeTo() failed


//TODO: mock up session storage to test popup

// pop up alert 
test('clicking close pop up removes pop up', () => {
    document.querySelector('#popupClose').click();
    expect(popupBox.classList.contains('popup-active')).toBe(false);
})


test('set alert updates text', () => {
    expect(popupText.innerHTML).toBe("<h1><i class=\"fa fa-exclamation-circle\"></i> Covid-19 update</h1><p>Visit our <a href=\"#\">Coronavirus help and support</a> page for frequently asked questions about COVID-19 - we want to help you. </p><p>If you’re driving less, you may be able to temporarily lower your mileage and could be entitled to a refund. Find out more on our <a href=\"#\">lockdown car insurance refund</a> page.</p>");
})
