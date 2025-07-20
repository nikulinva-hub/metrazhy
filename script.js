document.addEventListener('DOMContentLoaded', function() {
  const modal = document.getElementById('modal');
  const openBtn = document.getElementById('consultBtn');
  const closeBtn = document.querySelector('.close');
  const toggleReviews = document.getElementById('toggleReviews');
  const reviews = document.querySelectorAll('.review.hidden');
  const phoneInput = document.getElementById('phone');

  openBtn.addEventListener('click', () => {
    modal.classList.remove('hidden');
  });

  closeBtn.addEventListener('click', () => {
    modal.classList.add('hidden');
  });

  modal.addEventListener('click', e => {
    if (e.target === modal) modal.classList.add('hidden');
  });

  toggleReviews.addEventListener('click', () => {
    reviews.forEach(r => r.classList.toggle('hidden'));
    if (toggleReviews.textContent.includes('Показать')) {
      toggleReviews.textContent = 'Свернуть отзывы';
    } else {
      toggleReviews.textContent = 'Показать все отзывы';
    }
  });

  phoneInput.addEventListener('input', () => {
    let x = phoneInput.value.replace(/\D/g,'').slice(0,11);
    if (x.startsWith('8')) x = '7' + x.slice(1);
    let formatted = '+7';
    if (x.length > 1) formatted += ' (' + x.slice(1,4);
    if (x.length >= 4) formatted += ') ' + x.slice(4,7);
    if (x.length >= 7) formatted += '-' + x.slice(7,9);
    if (x.length >= 9) formatted += '-' + x.slice(9,11);
    phoneInput.value = formatted;
  });

  document.getElementById('consultForm').addEventListener('submit', e => {
    e.preventDefault();
    alert('Спасибо! Наш специалист свяжется с вами.');
    modal.classList.add('hidden');
    e.target.reset();
  });
});
