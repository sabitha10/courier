
document.addEventListener('DOMContentLoaded', () => {
    // Tracking Form Submission
    document.getElementById('trackingForm').addEventListener('submit', function(event) {
        event.preventDefault();

        let trackingNumber = document.getElementById('trackingNumber').value;

        // Simulating a response (replace with actual API call)
        let mockResponse = {
            status: 'In Transit',
            location: 'New York, NY',
            estimatedDelivery: 'June 30, 2024',
            details: [
                { time: '10:00 AM', event: 'Package picked up' },
                { time: '11:30 AM', event: 'In transit' },
                { time: '3:00 PM', event: 'Arrived at sorting facility' }
            ]
        };

        displayTrackingInfo(mockResponse);
    });

    function displayTrackingInfo(data) {
        let trackingResponse = document.getElementById('trackingResponse');
        trackingResponse.innerHTML = `
            <h3>Tracking Information</h3>
            <p><strong>Status:</strong> ${data.status}</p>
            <p><strong>Location:</strong> ${data.location}</p>
            <p><strong>Estimated Delivery:</strong> ${data.estimatedDelivery}</p>
            <h4>Tracking Details:</h4>
            <ul>
                ${data.details.map(detail => `<li><strong>${detail.time}</strong>: ${detail.event}</li>`).join('')}
            </ul>
        `;
        trackingResponse.classList.add('active');
    }
});
