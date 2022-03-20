const imageWrapper = document.getElementById('nft_image').parentElement;
const image = document.getElementById('nft_image')

imageWrapper.addEventListener('click', e => {
  image.classList.toggle('clicked')
})