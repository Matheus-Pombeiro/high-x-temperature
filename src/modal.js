// Modal (Pop-up) settings
const openModal = (modal, modalClose) => {

    window.addEventListener("load", () => {     // Open modal

        modal.showModal();

    });

    modalClose.addEventListener("click", () => {    // Close modal

        modal.close();

    });

};

export default openModal;