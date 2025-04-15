const showModalButtons = document.querySelectorAll('.show-modal'); // Use a more descriptive name
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.close-modal'); // Fixed selector
const overlay = document.querySelector('.overlay');

showModalButtons.forEach(button => {
    button.addEventListener('click', function() {
        modal.classList.remove('hidden'); // Show modal
        overlay.classList.remove('hidden'); // Show overlay (if used)
    });
});

closeModal.addEventListener('click', function() {
    modal.classList.add('hidden'); // Hide modal
    overlay.classList.add('hidden'); // Hide overlay (if used)
});

// Close modal when clicking outside (overlay)
overlay.addEventListener('click', function() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
});
