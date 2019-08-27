var modal = document.getElementById('formcontent');

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}