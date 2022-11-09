// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

const hideModal = () => {
  let modal = document.getElementById("modal");
  modal.classList.add('hidden')
}

hideModal()

mimicServerCall()
.then(res => {
  hideModal()

  let hearts = document.getElementsByClassName('like-glyph')
  Array.from(hearts).forEach(heart => heart.classList.add('activated-heart'))
  Array.from(hearts).forEach(heart => heart.textContent = FULL_HEART)

  document.addEventListener('click', (event) => {
    console.log(event.target)
    event.target.classList.remove('activated-heart')
    event.target.textContent = EMPTY_HEART
  })
})

.catch((error) => {
  let showModal = document.getElementById("modal")
  showModal.classList.remove('hidden')
  
  setTimeout(() => hideModal, '3000')

  console.log(error)
})


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
