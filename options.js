function save_options() {
  var textToPaste = document.getElementById("text-to-paste").value;
  var inputName = document.getElementById("input-name").value;
  chrome.storage.sync.set(
    {
      textToPaste: textToPaste,
      inputName: inputName,
    },
    function () {
      var status = document.getElementById("status");
      status.textContent = "Options saved.";
      setTimeout(function () {
        status.textContent = "";
      }, 750);
    }
  );
}

function restore_options() {
  chrome.storage.sync.get(
    {
      textToPaste: "",
      inputName: "",
    },
    function (items) {
      document.getElementById("text-to-paste").value = items.textToPaste;
      document.getElementById("input-name").value = items.inputName;
    }
  );
}
document.addEventListener("DOMContentLoaded", restore_options);
document.getElementById("save").addEventListener("click", save_options);
