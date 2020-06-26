const modalOverlay = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.card');

for (const card of cards) {
  card.addEventListener('click', () => {
    const cardId = card.id;
    modalOverlay.classList.add('active');
    modalOverlay.querySelector(
      'iframe'
    ).src = `https://rocketseat.com.br/${cardId}`;
  });
}

document
  .querySelector('.close-modal')
  .addEventListener('click', () => modalOverlay.classList.remove('active'));
