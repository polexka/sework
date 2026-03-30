const resultEl = document.getElementById('result');

if ('serviceWorker' in navigator) {
  resultEl.textContent = 'Service Worker is supported ✅';

  navigator.serviceWorker.register('./sw.js')
    .then(() => {
      console.log('SW registered');
    })
    .catch((err) => {
      console.error('SW registration failed:', err);
    });

} else {
  resultEl.textContent = 'Service Worker is NOT supported ❌';
}
