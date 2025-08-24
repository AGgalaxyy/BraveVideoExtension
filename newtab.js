function applyToggle(active) {
  document.getElementById('bg-video').style.display = active ? '' : 'none';
  document.getElementById('clock').style.display = active ? '' : 'none';
  document.getElementById('deactivated-message').style.display = active ? 'none' : '';
  document.body.style.background = active ? 'transparent' : '#222222';
  document.documentElement.style.background = active ? 'transparent' : '#222222';
}
chrome.storage.sync.get('active', ({ active }) => {
  applyToggle(active !== false);
});
chrome.storage.onChanged.addListener((changes, area) => {
  if (area === 'sync' && changes.active) {
    applyToggle(changes.active.newValue !== false);
  }
});