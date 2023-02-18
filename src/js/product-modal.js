(() => {
  const refs = {
    openModalList: document.querySelectorAll('[data-product-modal-open]'),
    closeModalBtn: document.querySelector('[data-product-modal-close]'),
    modal: document.querySelector('[data-product-modal]'),
    body: document.querySelector('body'),
  };

  for (item of refs.openModalList) {
    item.addEventListener('click', toggleModal);
  }
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }
})();
