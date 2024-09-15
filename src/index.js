(() => {
    const refs = {
      openModalBtn: document.querySelector(".js-open-modal"),
      closeModalBtn: document.querySelector(".js-close-modal"),
      modal: document.querySelector(".js-modal"),
    };
  
    refs.openModalBtn.addEventListener("click",  toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
      document.body.classList.toggle("no-scroll");
    }
  })();