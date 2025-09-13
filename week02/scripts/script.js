const username = "";

const scripture = document.getElementById("script1");

scripture.textContent += username === "" ? `Guest` : username;

const botton = document.getElementById("my-button");
botton.addEventListener("keyup", func);

function func()
{
    alert("Hello World!")
}
