document.addEventListener('DOMContentLoaded', () => {
    // Contact Form Submission
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault();

        let name = document.getElementById('name').value;
        let email = document.getElementById('email').value;
        let message = document.getElementById('message').value;

        let responseDiv = document.getElementById('formResponse');
        responseDiv.innerHTML = `Thank you, ${name}! We have received your message.`;

        // Clear the form
        document.getElementById('contactForm').reset();

        // Here you would typically send the form data to a server
        // Example:
        // fetch('your-server-endpoint', {
        //     method: 'POST',
        //     body: JSON.stringify({ name, email, message }),
        //     headers: { 'Content-Type': 'application/json' }
        // }).then(response => response.json()).then(data => {
        //     console.log(data);
        // }).catch(error => {
        //     console.error('Error:', error);
        // });
    });
});
