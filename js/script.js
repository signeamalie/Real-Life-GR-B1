document.addEventListener('DOMContentLoaded', () => {
  const track = document.querySelector('.product-track');
  const leftArrow = document.querySelector('.arrow.left');
  const rightArrow = document.querySelector('.arrow.right');

  const scrollAmount = track.offsetWidth / 3;

  rightArrow.addEventListener('click', () => {
    track.scrollBy({
      left: scrollAmount,
      behavior: 'smooth'
    });
  });

  leftArrow.addEventListener('click', () => {
    track.scrollBy({
      left: -scrollAmount,
      behavior: 'smooth'
    });
  });
});
