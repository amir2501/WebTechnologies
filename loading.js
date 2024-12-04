const loading = document.createElement("div");
loading.classList.add("loading");
loading.innerHTML = "<h1>Loading...</h1>";

// Add CSS styles to the loading element dynamically
const style = document.createElement("style");
style.textContent = `
      .loading {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: "Bodoni Moda", serif;
        font-optical-sizing: auto;
        font-size: 2rem;
        z-index: 1000;
      }
    `;
document.head.appendChild(style);

document.body.appendChild(loading);

// Wait for the page to load, then remove the loading element
window.addEventListener("load", () => {
    loading.remove();
});