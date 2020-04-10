// Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>

var textToPaste = "";
var inputName = "";

chrome.storage.sync.get(
  {
    textToPaste: "",
    inputName: "",
  },
  function (items) {
    textToPaste = items.textToPaste;
    inputName = items.inputName;
  }
);

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.message === "clicked_browser_action") {
    console.log("textToPaste", textToPaste);
    console.log("textToPaste", inputName);
    var name = document.querySelector("input[name='" + inputName + "']");

    name.value = textToPaste;
  }
});
