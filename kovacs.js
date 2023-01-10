let state = {}

function updateCheckboxWithLocalState() {
  document.getElementById('enabled').checked = state.enabled;
}

async function sendState() {
  let queryOptions = { active: true, lastFocusedWindow: true };
  
  let [tab] = await chrome.tabs.query(queryOptions);
  
  if (tab == undefined) return;
  
  chrome.tabs.sendMessage(tab.id, state);
}

async function syncWithUIState() {
  let queryOptions = { active: true, lastFocusedWindow: true };
  
  let [tab] = await chrome.tabs.query(queryOptions);
  
  if (tab == undefined) return;
  
  let response = await chrome.tabs.sendMessage(tab.id, "getState");
  updateState(response.enabled)
}

function updateState( newEnabledValue ) {
  state = {...state, enabled : newEnabledValue}
  sync()
}

function sync() {
  updateCheckboxWithLocalState()
  sendState()
}

window.addEventListener('DOMContentLoaded', () => {
  document.getElementById('enabled').addEventListener('change', (event) => {
    updateState(event.currentTarget.checked)
  })
  syncWithUIState()
})