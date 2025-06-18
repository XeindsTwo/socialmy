export function modalQuote() {
  document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('modal-quote');
    const modalClose = modal.querySelector('.modal__close');
    const focusableElements = modal.querySelectorAll('button, input, textarea, select, a');

    const setTabIndex = (state) => {
      const allFocusableOutside = document.querySelectorAll('button, input, textarea, select, a');
      allFocusableOutside.forEach((element) => {
        if (state === 'enable') {
          element.tabIndex = -1;
        } else {
          element.removeAttribute('tabindex');
        }
      });

      const allFocusableInside = modal.querySelectorAll('button, input, textarea, select, a');
      allFocusableInside.forEach((element) => {
        element.tabIndex = state === 'enable' ? 0 : -1;
      });
    };

    const openModal = () => {
      modal.classList.add('active');
      document.body.classList.add('modal-active');
      document.documentElement.classList.add('active');
      setTabIndex('enable');
      focusableElements[0]?.focus();
    };

    const closeModal = () => {
      modal.classList.remove('active');
      document.body.classList.remove('modal-active');
      document.documentElement.classList.remove('active');
      setTabIndex('disable');
    };

    document.querySelectorAll('[data-btn-quote]').forEach((button) => {
      button.addEventListener('click', openModal);
    });

    modalClose.addEventListener('click', closeModal);

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
      }
    });

    document.addEventListener('click', (event) => {
      if (modal.classList.contains('active')) {
        const target = event.target;
        if (!target.closest('#modal-quote') && !target.closest('[data-btn-quote]')) {
          closeModal();
        }
      }
    });
  });
}