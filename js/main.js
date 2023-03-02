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

/*========= CHANGE BACKGROUND HEADER =========*/
function scrollHeader(){
    const header = document.getElementById('header')

    if(this.scrollY >= 100) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*========= MODAL =========*/
/*===== SHOW MODAL =====*/
const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')

openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget)
        openModal(modal)
    })
})

function openModal(modal) {
    if (modal == null) return
    modal.classList.add('show-modal')
}

/*===== CLOSE MODAL =====*/
closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal_container')
        closeModal(modal)
    })
})

function closeModal(modal) {
    if (modal == null) return
    modal.classList.remove('show-modal')
}

/*========= SELECT INPUT =========*/
const selectedBox = document.querySelectorAll('.select_box')

/*===== SELECT BOX TOGGLE =====*/
selectedBox.forEach((select) => {
    const selected = select.querySelector('.option_selected')

    selected.addEventListener('click', () => {
        const openSelect = document.querySelector('.select-active')

        toggleSelect(select)

        if (openSelect && openSelect!= select) {
            toggleSelect(openSelect)
        }

        /*===== OPTION SELECT =====*/
        const optionList = select.querySelectorAll('.option')
        optionList.forEach( o => {
            o.addEventListener('click', () => {
                selected.innerHTML = o.querySelector('label').innerHTML;
                select.classList.remove('select-active')
                selected.classList.add('active')
            })
        })

        /*===== SEARCH OPTION =====*/
        const selectSearch = select.querySelector('.option_search input')
        selectSearch.addEventListener('keyup', function(e) {
            filterList(e.target.value);
        })
        
        const filterList = searchTerm => {
            searchTerm = searchTerm.toLowerCase();
            optionList.forEach( option => {
                let label = option.firstElementChild.nextElementSibling.innerText.toLowerCase();
                if (label.indexOf(searchTerm) != -1) {
                    option.style.display = 'block';
                } else {
                    option.style.display = 'none';
                }
            })
        }

        selectSearch.value = '';
        filterList('');
    })
})

const toggleSelect = (select) => {
    const optionContainer = select.querySelector('.option_container')

    if (select.classList.contains('select-active')) {
        select.classList.remove('select-active')
    } else {
        select.classList.add('select-active')
    }
}

/*========= OTP CODE VERIFY =========*/
const otpInputs = document.querySelectorAll('.otp_field input')
const otpBtn = document.querySelector('.otp_container form button')

// iterate over all inputs
otpInputs.forEach((input, index1) => {
    input.addEventListener("keyup", (e) => {
        const currentInput = input
        const nextInput = input.nextElementSibling
        const prevInput = input.previousElementSibling

        if(currentInput.value.length > 1) {
            currentInput.value = '';
            return;
        }

        if(nextInput && nextInput.hasAttribute('disabled') && currentInput.value != '') {
            nextInput.removeAttribute('disabled')
            nextInput.focus()
        }

        if(e.key === "Backspace") {
            otpInputs.forEach((input, index2) => {
                if(index1 <= index2 && prevInput) {
                    input.setAttribute('disabled', true)
                    currentInput.value = ''
                    prevInput.focus()
                }
            })
        }

        if(!otpInputs[3].disabled && otpInputs[3].value !== '') {
            otpBtn.classList.remove('disabled')
            return
        }
        otpBtn.classList.add('disabled')
    })
})

// focus the first input field
window.addEventListener('load', () => otpInputs[0].focus())

/*========= DATA TABLE =========*/
// let table = new DataTable('#table_id');