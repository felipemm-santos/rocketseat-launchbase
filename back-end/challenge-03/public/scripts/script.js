const cards = document.querySelectorAll('.card');

for (const card of cards) {
  card.addEventListener('click', () => {
    const courseid = card.id;
    window.location.href = `/course/${courseid}`;
  });
}
