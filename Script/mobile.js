let bgMobile = document.getElementById("bg-behind-mobile-navbar");
function openNavbar() {
  document.getElementById("navbar-mobile").style.left = "0";
  document.getElementById("navbar-mobile").style.width = "80%";
  bgMobile.classList.add("active");
}

function closeNavbar() {
  document.getElementById("navbar-mobile").style.left = "-100%";
  document.getElementById("bg-behind-mobile-navbar").classList.remove("active");
}
SeeAllMenu();
function SeeAllMenu() {
  let SeeAllMenu = document.querySelector("#see-all-menu");
  let NavlinkSeeAllMenu = document.getElementById("navlink-see-all-menu");

  SeeAllMenu.addEventListener("click", () => {
    alert("1");
    NavlinkSeeAllMenu.classList.add("active");
  });
}
