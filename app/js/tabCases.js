document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('.cases__tab');
  const cards = document.querySelectorAll('.cases__card');
  const cardsContainer = document.querySelector('.cases__cards');
  const loadMoreBtn = document.querySelector('.cases__more-btn');
  const casesMore = document.querySelector('.cases__more');

  const noCasesMessage = document.createElement('p');
  noCasesMessage.classList.add('cases__not-found');
  noCasesMessage.textContent = 'No cases found';
  noCasesMessage.style.display = 'none';
  cardsContainer.parentNode.insertBefore(noCasesMessage, cardsContainer);

  let initialVisibleCards = 15;
  let loadMoreClicked = false;

  const updateCardsVisibility = (tabIndex) => {
    let visibleCards = 0;
    let hasVisibleCards = false;

    cards.forEach((card) => {
      if (
        (card.getAttribute('data-tab-content') === tabIndex || tabIndex === '0') &&
        (loadMoreClicked || visibleCards < initialVisibleCards)
      ) {
        card.style.display = 'flex';
        visibleCards++;
        hasVisibleCards = true;
      } else {
        card.style.display = 'none';
      }
    });

    noCasesMessage.style.display = hasVisibleCards ? 'none' : 'block';

    if (tabIndex === '0' && !loadMoreClicked && visibleCards < cards.length) {
      casesMore.style.display = 'flex';
    } else {
      casesMore.style.display = 'none';
    }
  };

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(tab => tab.classList.remove('cases__tab--active'));
      tab.blur();
      tab.classList.add('cases__tab--active');

      const tabIndex = tab.getAttribute('data-tab');
      if (tabIndex !== '0') {
        initialVisibleCards = 15;
      }
      updateCardsVisibility(tabIndex);
    });
  });

  loadMoreBtn.addEventListener('click', () => {
    initialVisibleCards = cards.length;
    loadMoreClicked = true;
    const activeTab = document.querySelector('.cases__tab--active').getAttribute('data-tab');
    updateCardsVisibility(activeTab);
  });

  updateCardsVisibility('0');
});