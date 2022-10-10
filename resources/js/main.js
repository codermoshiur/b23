// MENU
function openMenu() {
    document.getElementById('hb-menu').style.width = "100%";
}

function closeMenu() {
    document.getElementById('hb-menu').style.width = "0";
}

// MIX IT UP
var mixer = mixitup('.work-grid');

// WOW
wow = new WOW(
    {
    mobile: false
  }
  )
wow.init();