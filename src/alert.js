window.onload = () => {
  // document.addEventListner('scrool', function () {
  if (window.pageYOffset !== 0) {
    console.log('aaa')
  }
  // })
  const h1 = document.getElementsByTagName('h1')
  h1[0].addEventListener('click', () => {
    if (h1[0].className !== 'active') {
      return h1[0].classList.add('active')
    }
    h1[0].classList.remove('active')
  })

  const overlay = document.getElementsByTagName('h3')[0]
  const Overlay = document.getElementsByClassName('overlay')[0]
  overlay.addEventListener('click', () => {
    if (Overlay.className === 'overlay') {
      return Overlay.classList.add('active')
    }
  })

  const button = document.getElementsByClassName('button')[0]
  button.addEventListener('click', () => {
    Overlay.classList.remove('active')
  })
}
