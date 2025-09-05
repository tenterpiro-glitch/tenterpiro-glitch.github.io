const copyBtn = document.querySelector("#download .btn");
copyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText("play.tentermc.fun");
  copyBtn.textContent = "IP Copied!";
  setTimeout(() => { copyBtn.textContent = "Copy IP"; }, 2000);
});
