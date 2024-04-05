'use strict';
// Get all description containers
const descriptionContainers = document.querySelectorAll('.description');

// Add click event listeners to each description container
descriptionContainers.forEach(container => {
  container.addEventListener('click', () => {
    // Toggle the hidden class on the paragraph description
    const paragraphDescription = container.nextElementSibling;
    paragraphDescription.classList.toggle('hidden');

    // Toggle the hidden class on the plus and minus icons
    const plusIcon = container.querySelector('.plus-icon');
    const minusIcon = container.querySelector('.minus-icon');
    plusIcon.classList.toggle('hidden');
    minusIcon.classList.toggle('hidden');
  });
});
document.addEventListener('DOMContentLoaded', function () {
  const descriptions = document.querySelectorAll('.description');
  descriptions.forEach(function (description) {
    description.addEventListener('click', function () {
      // Toggle visibility of the corresponding paragraph
      const paragraph = this.nextElementSibling;
      paragraph.classList.toggle('visible');
    });
  });
});
