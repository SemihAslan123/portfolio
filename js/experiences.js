function filterSelection(category) {
    const experiences = document.querySelectorAll('.experience');
    const buttons = document.querySelectorAll('.filter-button');
  
    buttons.forEach(button => {
      button.classList.remove('active');
    });
    event.currentTarget.classList.add('active');
  
    experiences.forEach(experience => {
      experience.classList.remove('show');
    });
  
    setTimeout(() => {
      experiences.forEach(experience => {
        if (category === 'all' || experience.classList.contains(category)) {
          experience.classList.add('show');
        }
      });
    }, 10);
}

document.addEventListener('DOMContentLoaded', () => {
    filterSelection('all');
    document.querySelector('.filter-button').classList.add('active');
});
  