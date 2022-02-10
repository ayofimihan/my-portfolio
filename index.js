const navBtn = document.getElementById('nav-Bar')
const toggleBtn = document.getElementById('toggleId')
const closeBtn = document.getElementById('closeIconID')

toggleBtn.addEventListener('click', () => {
  navBtn.classList.add('show')
})
closeBtn.addEventListener('click', () => {
  navBtn.classList.remove('show')
})

const nav = document.querySelectorAll('.navBar')
function takeAction() {
  navBtn.classList.remove('show')
}
nav.forEach((n) => n.addEventListener('click', takeAction))

const topBtn = document.querySelector('.toTopBtn')
function showBtn() {
  if (scrollY >= 100) {
    topBtn.style.display = 'block'
  } else {
    topBtn.style.display = 'none'
  }
}
window.addEventListener('scroll', showBtn)
