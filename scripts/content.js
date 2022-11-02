const container = document.querySelector("div.container");

// `document.querySelector` may return null if the selector doesn't match anything.
if (container) {
    const wrapper = document.createElement("div");
    const sideCard = document.createElement("div");

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