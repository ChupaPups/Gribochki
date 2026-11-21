// секция модальных окон

let shadow = document.getElementById('shadow')
let modal = document.getElementById("modal")
let mod_btn = document.getElementById("modal_btn")
let mod_close_btn = document.getElementById("modal_close")

mod_btn.addEventListener('click', () => {
    modal.classList.remove('hidden')
    shadow.classList.remove('shadow')
})
mod_close_btn.addEventListener('click', () => {
    modal.classList.add('hidden')
    shadow.classList.add('shadow')
})

// секция переключения фото

let img_cont = document.getElementById("img")
let btn_fwd = document.getElementById("fwd")
let btn_bwd = document.getElementById("bwd")
let current_img = 0;

let time_switch = setInterval(() => {
    switch_img_forward()
}, 5000);

img_cont.addEventListener('mouseenter', () => {
    clearInterval(time_switch);
})

img_cont.addEventListener('mouseleave', () => {
    time_switch = setInterval(() => {
        switch_img_forward()
    }, 5000);
})

btn_fwd.addEventListener('click', () => {
    switch_img_forward()
})

btn_bwd.addEventListener('click', () => {
    switch_img_backward()
})

function switch_img_forward() {
    current_img += 1
    img_cont.style.backgroundImage = `url('${current_img}.png')`
}

function switch_img_backward() {
    current_img -= 1
    img_cont.style.backgroundImage = `url('${current_img}.png')`
}
