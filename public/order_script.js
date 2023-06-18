$(document).ready(function() {
    // Load the orders and circulars from the text file
    $.get('orders_and_circulars.txt', function(data) {
        var headlines = data.split('\n'); // Split the data by new lines to get an array of headlines
        var randomHeadlines = getRandomHeadlines(headlines, 7); // Get 7 random headlines from the array
        displayHeadlines(randomHeadlines); // Display the headlines in the designated div
    });
});

// Function to get random headlines from the array
function getRandomHeadlines(headlines, count) {
    var randomHeadlines = [];
    var maxIndex = headlines.length - 1;
    for (var i = 0; i < count; i++) {
        var randomIndex = Math.floor(Math.random() * maxIndex);
        randomHeadlines.push(headlines[randomIndex]);
    }
    return randomHeadlines;
}

// Function to display the headlines in the div
function displayHeadlines(headlines) {
    var div = document.getElementById('orders_and_circulars');
    div.innerHTML = ''; // Clear the existing content

    for (var i = 0; i < headlines.length; i++) {
        var paragraph = document.createElement('p');
        paragraph.textContent = headlines[i];
        paragraph.innerHTML = paragraph.innerHTML + "<a href=''>    download</a>";
        div.appendChild(paragraph);
    }
}

