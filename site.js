// Track the same dataset downloads as the original site.
document.querySelectorAll('[data-download-label]').forEach(function (link) {
  link.addEventListener('click', function () {
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'download', {
        event_category: 'Data',
        event_label: link.dataset.downloadLabel
      });
    }
  });
});
