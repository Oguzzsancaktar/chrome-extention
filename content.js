window.onload = () => {
  const button = document.createElement("button");
  button.id = "darkModeButton";
  button.textContent = "Do it dark!";
  button.addEventListener('click', ()=> enableDarkMode())
  document.querySelector("#end").prepend(button);
};

function enableDarkMode  (){
  document.getElementsByTagName('ytd-app')[0].style.backgroundColor = 'black';
}