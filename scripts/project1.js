document.addEventListener('DOMContentLoaded', function () {
    // Animation for cards on scroll
    const cards = document.querySelectorAll('.activity-card, .review-card');

    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.6s ease-out';
        observer.observe(card);
    });

    // Add hover effects to cards
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-5px)';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });

    // Function to load activity files
    function loadActivityFile(activityCard) {
        const fileInput = document.createElement('input');
        fileInput.type = 'file';
        fileInput.accept = '.pdf,.doc,.docx';

        const fileDisplay = document.createElement('div');
        fileDisplay.className = 'file-display';
        activityCard.appendChild(fileDisplay);

        fileInput.addEventListener('change', function (e) {
            const file = e.target.files[0];
            if (file) {
                fileDisplay.textContent = `File attached: ${file.name}`;
            }
        });
    }

    // Add file upload functionality to each activity card
    document.querySelectorAll('.activity-card').forEach(loadActivityFile);

    // Function to save peer reviews
    function initializePeerReviews() {
        const reviewCards = document.querySelectorAll('.review-card');

        reviewCards.forEach(card => {
            

            const reviewContent = card.querySelector('.review-content');

            editButton.addEventListener('click', function () {
                const isEditing = reviewContent.contentEditable === 'true';

                if (isEditing) {
                    // Save changes
                    editButton.textContent = 'Edit Review';
                    reviewContent.contentEditable = 'false';
                    reviewContent.style.backgroundColor = '';
                } else {
                    // Enable editing
                    editButton.textContent = 'Save Review';
                    reviewContent.contentEditable = 'true';
                    reviewContent.style.backgroundColor = '#fff8dc';
                }
            });

            card.appendChild(editButton);
        });
    }

    // Initialize peer review functionality
    initializePeerReviews();
}); 
