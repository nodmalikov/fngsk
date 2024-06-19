const elDesktopBtn = document.querySelector('.js-desktop-btn');
const elMobileBtn = document.querySelector('.js-mobile-btn');
const elHeaderMobile = document.querySelector('.site-header__mobile');

// DESKTOP-MENU
if (elDesktopBtn) {
    elDesktopBtn.addEventListener('click', function () {
        elHeaderMobile.classList.add('sitenav-mobile__active');
    });
}

// MOBILE-MENU
if (elMobileBtn) {
    elMobileBtn.addEventListener('click', function () {
        elHeaderMobile.classList.remove('sitenav-mobile__active');
    });
}

// LOADER
document.onreadystatechange = function () {
    if (document.readyState !== "complete") {
        document.querySelector(
            "body").style.visibility = "hidden";
        document.querySelector(
            "#loader").style.visibility = "visible";
    } else {
        document.querySelector(
            "#loader").style.display = "none";
        document.querySelector(
            "body").style.visibility = "visible";
    }
};