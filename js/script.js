// секция модальных окон

let modal = document.getElementById("modal")
let mod_btn = document.getElementById("modal")
let mod_close_btn = document.getElementById("modal_close")

mod_btn.addEventListener('click', () => {
    modal.classList.add('hidden')
})
mod_close_btn.addEventListener('click', () => {
    modal.classList.remove('hidden')
})

// секция калькулятора

let kalc_btn = document.getElementById("kalc_btn")
