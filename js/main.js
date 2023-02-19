/*========= PROFLE DROPDOWN =========*/
document.querySelectorAll(".nav_profile_dropdown").forEach(multiAction => {
    const menuButton = multiAction.querySelector(".nav_profile");
    const list = multiAction.querySelector(".nav_profile_dropdown_list");

    menuButton.addEventListener("click", () => {
        list.classList.toggle("active");
    });
});

document.addEventListener("click", e => {
    const keepOpen = (
        e.target.matches(".nav_profile_dropdown_list")
        || e.target.matches(".nav_profile")
        || e.target.matches(".nav_profile_img")
    );

    if (keepOpen) return;

    document.querySelectorAll(".nav_profile_dropdown_list").forEach(list => {
        list.classList.remove("active");
    });
});

/*========= MENU SIDEBAR =========*/
const navMenu = document.getElementById('nav-menu'),
   navToggle = document.getElementById('nav-toggle'),
   navClose = document.getElementById('nav-close')

/*========= MENU SHOW =========*/
if(navToggle){
   navToggle.addEventListener('click', () =>{
       navMenu.classList.add('rubizco-show-menu')
   })
}

/*========= MENU HIDE =========*/
if(navClose){
   navClose.addEventListener('click', () =>{
       navMenu.classList.remove('rubizco-show-menu')
   })
}

/*========= REMOVE MENU MOBILE =========*/
const navLink = document.querySelectorAll('.nav_link')

function linkAction(){
    navMenu.classList.remove('rubizco-show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))