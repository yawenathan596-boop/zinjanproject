document.addEventListener('DOMContentLoaded', () => {
    const bookingForm = document.querySelector('#your-form-id'); // Change this to your Form's ID

    if (bookingForm) {
        bookingForm.addEventListener('submit', async (e) => {
            e.preventDefault(); // Prevents the page from refreshing

            // 1. Gather data from the form fields
            const formData = new FormData(bookingForm);
            
            // 2. Convert FormData into a clean JSON Object
            const data = Object.fromEntries(formData.entries());

            try {
                // 3. Send the JSON to your service
                const response = await fetch('YOUR_BACKEND_URL_HERE', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json', // This tells the server "Here is JSON!"
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify(data) // Turns the JS object into a JSON string
                });

                if (response.ok) {
                    alert('Booking request sent successfully!');
                    bookingForm.reset(); // Clears the form
                } else {
                    const errorData = await response.json();
                    console.error('Server Error:', errorData);
                    alert('Oops! The server didn\'t like that. Check the console.');
                }
            } catch (error) {
                console.error('Connection Error:', error);
                alert('Could not connect to the server.');
            }
        });
    }
});
