const openModal = document.querySelector("#open__registerModal")
const modal = document.querySelector(".modal")

function toggleModal(){
    modal.classList.toggle("hide")
}
openModal.addEventListener("click", toggleModal)
