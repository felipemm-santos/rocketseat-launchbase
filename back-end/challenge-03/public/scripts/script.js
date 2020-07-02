const cards = document.querySelectorAll('.card');

const modalOverlay = document.querySelector('.modal-overlay');

const modal = document.querySelector('.modal');

const maximizeModal = document.querySelector('.maximize-modal');

const maximizeModalExit = document.querySelector('.maximize-modal-exit');

// Open modal
for (const card of cards) {
  card.addEventListener('click', () => {
    const cardId = card.id;
    modalOverlay.classList.add('active');
    modalOverlay.querySelector(
      'iframe'
    ).src = `https://rocketseat.com.br/${cardId}`;
  });
}

// Close modal

document.querySelector('.close-modal').addEventListener('click', () => {
  modalOverlay.classList.remove('active');
  modalOverlay.querySelector('iframe').src = '';
  modal.classList.remove('maximize');
  maximizeModal.classList.remove('hidden');
  maximizeModalExit.classList.add('hidden');
});

// Maximize mdoal

maximizeModal.addEventListener('click', () => {
  modal.classList.add('maximize');
  maximizeModal.classList.add('hidden');
  maximizeModalExit.classList.remove('hidden');
});

// Maximize mdoal exit
maximizeModalExit.addEventListener('click', () => {
  modal.classList.remove('maximize');
  maximizeModalExit.classList.add('hidden');
  maximizeModal.classList.remove('hidden');
});
