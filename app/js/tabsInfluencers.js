document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('.influencers__tab');
  const cards = document.querySelectorAll('.influencer-card');
  const cardsContainer = document.querySelector('.influencers__cards');
  const loadMoreBtn = document.querySelector('.cases__more-btn');
  const influencersMore = document.querySelector('.cases__more');

  const noInfluencersMessage = document.createElement('p');
  noInfluencersMessage.classList.add('influencers__not-found');
  noInfluencersMessage.textContent = 'No influencers found';
  noInfluencersMessage.style.display = 'none';
  cardsContainer.parentNode.insertBefore(noInfluencersMessage, cardsContainer);

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

    noInfluencersMessage.style.display = hasVisibleCards ? 'none' : 'block';

    if (tabIndex === '0' && !loadMoreClicked && visibleCards < cards.length) {
      influencersMore.style.display = 'flex';
    } else {
      influencersMore.style.display = 'none';
    }
  };

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(tab => tab.classList.remove('influencers__tab--active'));
      tab.blur();
      tab.classList.add('influencers__tab--active');

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
    const activeTab = document.querySelector('.influencers__tab--active').getAttribute('data-tab');
    updateCardsVisibility(activeTab);
  });

  updateCardsVisibility('0');
});