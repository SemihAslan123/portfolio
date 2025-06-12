function toggleSection(header) {
  const content = header.nextElementSibling;
  const button = header.querySelector('.toggle-button');
  if (content.style.display === "block") {
    content.style.display = "none";
    button.textContent = "+";
  } else {
    content.style.display = "block";
    button.textContent = "-";
  }
}