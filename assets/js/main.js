(() => {
  const revealItems = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealItems.forEach((item) => observer.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add('is-visible'));
  }

  document.querySelectorAll('[data-copy]').forEach((button) => {
    button.addEventListener('click', async () => {
      const text = button.getAttribute('data-copy') || '希望です';
      try {
        await navigator.clipboard.writeText(text);
        button.classList.add('is-copied');
        const original = button.textContent;
        button.textContent = 'コピーしました：' + text;
        setTimeout(() => {
          button.textContent = original;
          button.classList.remove('is-copied');
        }, 1800);
      } catch (error) {
        button.textContent = 'キーワード：' + text;
      }
    });
  });
})();
