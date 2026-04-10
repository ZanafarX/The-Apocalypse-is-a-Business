// ============================================
// SPOILER FILTER — Include on every page
// Hides any element with data-chapter="N" where N > selected max.
// Persists selection in localStorage across pages.
// ============================================
(function() {
  var STORAGE_KEY = 'spoilerChapter';
  var filterSelect = document.getElementById('chapterFilter');
  if (!filterSelect) return;

  // Load saved preference
  var saved = localStorage.getItem(STORAGE_KEY);
  if (saved) filterSelect.value = saved;

  function apply() {
    var max = parseInt(filterSelect.value, 10);
    localStorage.setItem(STORAGE_KEY, max);

    var items = document.querySelectorAll('[data-chapter]');
    for (var i = 0; i < items.length; i++) {
      var ch = parseInt(items[i].getAttribute('data-chapter'), 10);
      items[i].style.display = ch > max ? 'none' : '';
    }
  }

  filterSelect.addEventListener('change', apply);

  // Run on page load
  apply();
})();
