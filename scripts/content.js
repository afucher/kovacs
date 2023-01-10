const container = document.querySelector("div.container");
const sideCard = document.createElement("div");

if (container) {
    const wrapper = document.createElement("div");

    sideCard.classList.add("side-card");

    sideCard.innerHTML = '<textarea class="title">Kovacs</textarea><textarea class="body">Altered Carbon</textarea>'

    const containerChildren = [...container.childNodes]
    containerChildren.forEach(el => {
        wrapper.appendChild(el);
    })

    container.style.display = "flex";
    container.appendChild(sideCard);

    container.appendChild(wrapper);
}

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if(request == 'getState') {
      sendResponse({enabled: sideCard.style.display !== "none"})
    } else if(request.hasOwnProperty('enabled')) {
      const display = request.enabled ? "block" : "none";
      sideCard.style.display = display;
    } 
  }
);