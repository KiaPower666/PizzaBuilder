export function createPopup() {
    const popup = document.createElement("div");
    const message = document.createElement("p");
    const closeButton = document.createElement("button");
  
    message.textContent = "Спасибо за покупку!";
    closeButton.textContent = "Закрыть";
  
    popup.style.position = "fixed";
    popup.style.top = "50%";
    popup.style.left = "50%";
    popup.style.transform = "translate(-50%, -50%)";
    popup.style.background = "#f1f1f1";
    popup.style.padding = "20px";
    popup.style.border = "1px solid #888";
    popup.style.borderRadius = "5px";
    popup.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.3)";
    popup.style.textAlign = "center";
  
    closeButton.style.background = "#4caf50";
    closeButton.style.color = "white";
    closeButton.style.padding = "10px 20px";
    closeButton.style.border = "none";
    closeButton.style.borderRadius = "4px";
    closeButton.style.cursor = "pointer";
    closeButton.style.marginTop = "10px";
  
    closeButton.addEventListener("click", function() {
      document.body.removeChild(popup);
    });

    popup.appendChild(message);
    popup.appendChild(closeButton);
    document.body.appendChild(popup);
  }
  
  const orderButton = document.getElementById("btn");
  
  orderButton.addEventListener("click", function() {
    createPopup();
    orderButton.disabled = true;
  });