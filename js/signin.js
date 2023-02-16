const del = document.querySelector(".delete");
const inputText = document.querySelector("#input-text"); 

function testFunction() {
  inputText.value = "";
}

del.addEventListener("click", testFunction); 
