function goToSection(sectionId) {
  const sectionElement = document.getElementById(sectionId);
  sectionElement.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
}