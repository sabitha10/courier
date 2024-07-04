
document.addEventListener('DOMContentLoaded', () => {
    // Contact Form Submission
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault();

        // Validate Form Inputs
        let name = document.getElementById('name').value.trim();
        let email = document.getElementById('email').value.trim();
        let message = document.getElementById('message').value.trim();

        if (name === '' || email === '' || message === '') {
            alert('Please fill in all fields.');
            return;
        }

        // Prepare Form Data
        let formData = {
            name: name,
            email: email,
            message: message
        };

        // Simulate Sending Form Data (Replace with actual backend integration)
        setTimeout(() => {
            // Display Submission Message
            let formResponse = document.getElementById('formResponse');
            formResponse.innerHTML = `<p>Thank you, ${name}! We have received your message.</p>`;

            // Clear Form Inputs
            document.getElementById('contactForm').reset();

            // Optional: Scroll to the response message
            formResponse.scrollIntoView({ behavior: 'smooth' });
        }, 1000); // Simulate a 1 second delay, replace with actual AJAX request
        document.addEventListener('DOMContentLoaded', (event) => {
            const modal = document.getElementById("modal");
            const btn = document.getElementById("openModalBtn");
            const span = document.getElementsByClassName("close")[0];
        
            btn.onclick = function() {
                modal.style.display = "block";
            }
        
            span.onclick = function() {
                modal.style.display = "none";
            }
        
            window.onclick = function(event) {
                if (event.target == modal) {
                    modal.style.display = "none";
                }
            }
        });
        

    });
});
