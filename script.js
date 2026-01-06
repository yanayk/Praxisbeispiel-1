btn = document.getElementById("menuBtn")
btn.addEventListener("click", () => {
    const pressed = btn.getAttribute("aria-pressed") === "true";
    btn.setAttribute("aria-pressed", !pressed);
  });

btn1 = document.getElementById("close")
btn1.addEventListener("click", () => {
    const pressed1 = btn1.getAttribute("aria-pressed") === "true";
    const pressed = btn.getAttribute("aria-pressed") === "true";
    btn1.setAttribute("aria-pressed", !pressed1);
    btn.setAttribute("aria-pressed", !pressed);
  });

  let modalBox = document.getElementById("modalbox");

function showModal() {
  if (!localStorage.getItem("modalClosed")) {
    setTimeout(() => {
      modalBox.style.display = "block";
    }, 1000);
  }
}

function closeModal() {
  modalBox.style.display = "none";
  localStorage.setItem("modalClosed", "true");
}
