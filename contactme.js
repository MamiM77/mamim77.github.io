document.getElementById("contact").addEventListener("submit", function(event){
 event.preventDefault()

console.log(event.target[0])

const name = event.target[0].value

console.log (name)

const email = event.target[1].value

const modalText=document.querySelector(".modal-text")

console.log (modalText)

modalText.innerHTML= "Thanks for contact me <br> I will respond to you within 48 hours (weekdays)"

 modal.style.display = "block";
});

 

// Get the modal
const modal = document.getElementById("myModal");

// Get the button that opens the modal
const btn = document.getElementById("contact-submit");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];


// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}