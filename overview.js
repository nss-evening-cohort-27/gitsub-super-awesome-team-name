// overview.js

// Function to handle form submission
function handleFormSubmit(event) {
    event.preventDefault(); // Prevent the form from submitting
    const repoUrl = document.getElementById('repoUrl').value; // Get the repository URL from the input field

    // Validate the URL (you can add more validation if needed)
    if (!isValidUrl(repoUrl)) {
        alert('Please enter a valid URL');
        return;
    }

    // Add your logic to process the repository URL (e.g., add it to a list of pinned repositories)
    console.log('Adding pinned repository:', repoUrl);
}

// Function to validate URL
function isValidUrl(url) {
    // Simple URL validation for demonstration purposes
    return url.startsWith('http://') || url.startsWith('https://');
}

// Add event listener to the form for form submission
document.getElementById('pinForm').addEventListener('submit', handleFormSubmit);
