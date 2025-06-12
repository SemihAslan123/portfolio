function toggleSection(header) {
  const content = header.nextElementSibling;
  const button = header.querySelector('.toggle-button');

  // Fermer toutes les sections ouvertes
  const allSections = document.querySelectorAll('.competence-section .content');
  allSections.forEach(section => {
    if (section !== content && section.style.display === "block") {
      section.style.display = "none";
      const otherButton = section.previousElementSibling.querySelector('.toggle-button');
      otherButton.textContent = "+";
    }
  });

  // Basculer la section actuelle
  if (content.style.display === "block") {
    content.style.display = "none";
    button.textContent = "+";
  } else {
    content.style.display = "block";
    button.textContent = "-";
    // Ajouter une animation
    content.style.animation = "fadeIn 0.5s";
  }
}
