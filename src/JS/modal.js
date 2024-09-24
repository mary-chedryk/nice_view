// var modal = document.getElementById("myModal");

//     var btn = document.getElementById("myBtn");

//     var span = document.getElementsByClassName("close")[0];

//     btn.onclick = function () {
//         modal.style.display = "block";
//         modal.style.visibility = "visible";
//     }
//     span.onclick = function () {
//         modal.style.display = "none";
//     }
//     window.onclick = function (event) {
//         if (event.target == modal) {
//             modal.style.display = "none";
//         }
//     }

document.addEventListener("DOMContentLoaded", () => {
    const openModalButtons = document.querySelectorAll(".open-modal");
    const closeModalButtons = document.querySelectorAll(".close-modal");
    const modals = document.querySelectorAll(".modal");
  
    // Функція для відкриття модального вікна
    const openModal = (modalId) => {
      const modal = document.getElementById(modalId);
      if (modal) {
        modal.classList.add("active");
      }
    };
  
    // Функція для закриття модального вікна
    const closeModal = (modal) => {
      modal.classList.remove("active");
    };
  
    // Додаємо слухачі на кнопки для відкриття модалок
    openModalButtons.forEach((button) => {
      button.addEventListener("click", (e) => {
        const modalId = button.getAttribute("data-modal");
        openModal(modalId);
      });
    });
  
    // Додаємо слухачі на кнопки для закриття модалок
    closeModalButtons.forEach((button) => {
      button.addEventListener("click", (e) => {
        const modal = button.closest(".modal");
        closeModal(modal);
      });
    });
  
    // Закриття модалки при кліку поза вікном
    modals.forEach((modal) => {
      modal.addEventListener("click", (e) => {
        if (e.target === modal) {
          closeModal(modal);
        }
      });
    });
  
    // Закриття модалки при натисканні клавіші "Escape"
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        modals.forEach((modal) => {
          if (modal.classList.contains("active")) {
            closeModal(modal);
          }
        });
      }
    });
  });