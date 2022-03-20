const imageWrapper = document.getElementById('nft_image').parentElement;
const image = document.getElementById('nft_image')
const body = document.querySelector('body')

imageWrapper.addEventListener('click', e => {
  image.classList.toggle('clicked')
  console.log(e.currentTarget)
})

body.addEventListener('click', e => {
  if (e.target !== imageWrapper) {
    image.classList.remove('clicked')
  }
})
