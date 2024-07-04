document.addEventListener('DOMContentLoaded', () => {
    // Handle Review Form Submission
    document.getElementById('reviewForm').addEventListener('submit', function(event) {
        event.preventDefault();

        // Get form values
        const name = document.getElementById('reviewName').value.trim();
        const text = document.getElementById('reviewText').value.trim();
        const rating = document.getElementById('reviewRating').value;

        // Validate form
        if (name === '' || text === '' || rating === '') {
            alert('Please fill in all fields.');
            return;
        }

        // Prepare review data
        const review = {
            name: name,
            text: text,
            rating: rating,
            date: new Date().toLocaleDateString()
        };

        // Display the new review
        displayReview(review);

        // Save the review to localStorage
        saveReview(review);

        // Clear form
        document.getElementById('reviewForm').reset();

        // Show response message
        const reviewResponse = document.getElementById('reviewResponse');
        reviewResponse.innerHTML = `<p>Thank you, ${name}! Your review has been submitted.</p>`;
        reviewResponse.scrollIntoView({ behavior: 'smooth' });
    });

    // Load and display existing reviews from localStorage
    loadReviews();
});

function displayReview(review) {
    const reviewList = document.getElementById('reviewsDisplay');
    const reviewItem = document.createElement('li');
    reviewItem.innerHTML = `
        <div class="review-name">${review.name}</div>
        <div class="review-rating">${'★'.repeat(review.rating)}</div>
        <div class="review-text">${review.text}</div>
        <div class="review-date">${review.date}</div>
    `;
    reviewList.appendChild(reviewItem);
}

function saveReview(review) {
    let reviews = JSON.parse(localStorage.getItem('reviews')) || [];
    reviews.push(review);
    localStorage.setItem('reviews', JSON.stringify(reviews));
}

function loadReviews() {
    let reviews = JSON.parse(localStorage.getItem('reviews')) || [];
    reviews.forEach(displayReview);
}
