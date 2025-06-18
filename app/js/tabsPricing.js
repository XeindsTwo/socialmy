document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('.pricing__tab');
  const cards = document.querySelectorAll('.tariff-card');

  const tabData = [
    {
      premium: [
        'Premium YouTube Gold <span>(15 channels with 2M+ combined)</span>',
        '2 Tweet Posts <span>(25K+ audience)</span>',
        '1 Telegram Call <span>(5K+ members)</span>',
        'Exclusive Telegram Group Post',
        'Full Launch Support + Updates'
      ],
      standard: [
        'YouTube Gold <span>(12 channels with 1.5M+ combined)</span>',
        '1 Tweet Post <span>(20K+ audience)</span>',
        '1 Telegram Call <span>(4K+ members)</span>',
        'Private Telegram Group Post',
        'Update Post + Full Launch Support'
      ]
    },
    {
      premium: [
        'Premium YouTube Silver <span>(10 channels with 1.2M+ combined)</span>',
        '2 Tweet Posts <span>(15K+ audience)</span>',
        'Telegram Call <span>(4K+ members)</span>',
        'Exclusive Group Post',
        'Custom Launch Support'
      ],
      standard: [
        'YouTube Silver <span>(8 channels with 1M+ combined)</span>',
        '1 Tweet Post <span>(10K+ audience)</span>',
        '1 Telegram Call <span>(3K+ members)</span>',
        'Exclusive Telegram Post',
        'Full Launch Support'
      ]
    },
    {
      premium: [
        'Premium X Silver <span>(7 channels with 900K+ combined)</span>',
        '3 Tweet Posts <span>(20K+ audience)</span>',
        'Telegram Call <span>(4K+ members)</span>',
        'Group Post + Exclusive Content',
        'Custom Support Package'
      ],
      standard: [
        'X Silver <span>(6 channels with 800K+ combined)</span>',
        '2 Tweet Posts <span>(15K+ audience)</span>',
        'Telegram Call <span>(3.5K+ members)</span>',
        'Group Post',
        'Custom Support Package'
      ]
    },
    {
      premium: [
        'Premium Telegram Gold <span>(6 channels with 600K+ combined)</span>',
        '2 Tweet Posts <span>(18K+ audience)</span>',
        'Exclusive Telegram Call',
        'Private Group Post + Updates',
        'Launch Support & Updates'
      ],
      standard: [
        'Telegram Gold <span>(5 channels with 500K+ combined)</span>',
        '1 Tweet Post <span>(12K+ audience)</span>',
        'Exclusive Telegram Call',
        'Private Group Post',
        'Launch Support & Updates'
      ]
    }
  ];

  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => {
        t.classList.remove('pricing__tab--active');
        t.setAttribute('tabindex', '0');
      });

      tab.classList.add('pricing__tab--active');
      tab.blur();
      tab.tabIndex = -1;

      const currentData = tabData[index];
      if (currentData) {
        cards.forEach(card => {
          const list = card.querySelector('.tariff-card__list');
          if (list) {
            if (card.classList.contains('tariff-card--premium')) {
              list.innerHTML = currentData.premium
                .map(item => `
                  <li class="tariff-card__item">
                    <img src="images/icons/check-tariff.svg" width="15" height="14" alt="check icon">
                    <p>${item}</p>
                  </li>
                `)
                .join('');
            } else if (card.classList.contains('tariff-card--standard')) {
              list.innerHTML = currentData.standard
                .map(item => `
                  <li class="tariff-card__item">
                     <img src="images/icons/check-tariff.svg" width="15" height="14" alt="check icon">
                    <p>${item}</p>
                  </li>
                `)
                .join('');
            }
          }
        });
      }
    });
  });

  tabs[0].click();
});