// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function() {

// Generate random values for oil production statistics
function generateRandomValues() {
    var today = Math.floor(Math.random()*(900-700 +1)) + 700;
    var average = 834;
    var required = 800;
    var monthlyTarget = 23750;
    var yearlyTarget = 2850000;
  
    // Update the HTML elements with the new values
    document.getElementById('today').innerHTML = 'Today: ' + today + ' MT';
    document.getElementById('average').innerHTML = 'Avg. Rate: ' + average + ' MT';
    document.getElementById('required').innerHTML = 'Req. Rate: ' + required + ' MT';
    document.getElementById('monthlyTarget').innerHTML = 'Monthly Target: ' + monthlyTarget + ' MT';
    document.getElementById('yearlyTarget').innerHTML = 'Yearly Target: ' + yearlyTarget + ' MT';
  }
  
  // Call the function to generate initial random values
  generateRandomValues();

});