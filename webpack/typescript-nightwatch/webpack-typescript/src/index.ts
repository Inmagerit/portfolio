import './main.css'

alert('hello')

//cambiar color de la página
document.addEventListener('DOMContentLoaded', () => {
    const colorSelector = document.getElementById('colorSelector') as HTMLInputElement;

        colorSelector.addEventListener('input', (event) => {
        const selectedColor = (event.target as HTMLInputElement).value;

        
        document.body.style.backgroundColor = selectedColor;
    });})

    //añadir titulo o p
    document.addEventListener("DOMContentLoaded", () => {
        const addButton = document.getElementById("addButton");
        if (!addButton) {
          console.error("Button not found.");
          return;
        }
      
        addButton.addEventListener("click", () => {
          const textInput = document.getElementById("textInput") as HTMLInputElement;
          const contentDiv = document.getElementById("content");
          if (!textInput || !contentDiv) {
            console.error("Input or content div not found.");
            return;
          }
      
          if (textInput.value.trim() === "") {
            alert("Please enter some text.");
            return;
          }
      
          const type = (document.querySelector('input[name="type"]:checked') as HTMLInputElement).value;
      
          let element: HTMLElement;
          if (type === "title") {
            element = document.createElement("h2");
          } else {
            element = document.createElement("p");
          }
          element.textContent = textInput.value;
      
          contentDiv.appendChild(element);
      
          textInput.value = "";
        });
      });
      