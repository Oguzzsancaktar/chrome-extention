window.onload = () => {
  const button = document.createElement("button");
  button.id = "darkModeButton";
  button.textContent = "Do it dark!";

  const input = document.createElement("input");
  input.type = "checkbox";
  input.id = "darkSetting";

  document.querySelector("#end").prepend(button, input, "auto apply");

  button.addEventListener("click", () => enableDarkMode());
  input.addEventListener("change", () => storeSetting());

  checkSetting();
};

function checkSetting() {
  chrome.storage.local.get(["enabled"], (result) => {
    const isEnabled = result.enabled;
    document.querySelector("#darkSetting").checked = isEnabled;

    if (isEnabled) {
      enableDarkMode();
    }
  });
}

function storeSetting() {
  const isEnabled = document.getElementById("darkSetting").checked;
  const setting = {
    enabled: isEnabled,
  };

  chrome.storage.local.set(setting, () => {
    console.log("stored", setting);
  });
}

function enableDarkMode() {
  document.getElementsByTagName("ytd-app")[0].style.backgroundColor = "wheat";
}
