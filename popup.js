document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('toggle-btn');
  chrome.storage.sync.get('active', ({ active }) => {
    btn.textContent = active === false ? 'Activate Extension' : 'Deactivate Extension';
  });
  btn.onclick = () => {
    chrome.storage.sync.get('active', ({ active }) => {
      const newState = active === false;
      chrome.storage.sync.set({ active: newState });
      btn.textContent = newState ? 'Deactivate Extension' : 'Activate Extension';
    });
  };
});