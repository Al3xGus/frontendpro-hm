document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form data
    const formData = new FormData(this);

    // Create table
    let tableHTML = '<table border="1">';
    formData.forEach((value, key) => {
        tableHTML += `<tr><td>${key}</td><td>${value}</td></tr>`;
    });
    tableHTML += '</table>';

    // Display table
    document.getElementById('table-container').innerHTML = tableHTML;
});
