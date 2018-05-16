// HW12_Javascript Aliens

var $tbody = document.querySelector("tbody"); // The HTML table body 
var $userInput = document.querySelector("#searchbox"); // The input text box
var $searchBtn = document.querySelector("#search"); // The search button

$searchBtn.addEventListener("click", handleSearchButtonClick); // When the search button is clicked, run the named function

//document.write('<script src="data.js" type="text/javascript"></script>');
var sightingData = dataSet; // Object to hold data from the data.js file

// Function to make the full table
function renderTable() {
    $tbody.innerHTML = "";
    for (var i = 0; i < sightingData.length; i++) { // Loop through the data object items
        var sighting = sightingData[i]; // Get each data item object
        var fields = Object.keys(sighting); // Get the fields in each data item
        var $row = $tbody.insertRow(i); // Insert a row in the table object
        for (var j = 0; j < fields.length; j++) { // Add a cell for each field in the data item object and populate its content
            var field = fields[j];
            var $cell = $row.insertCell(j);
            $cell.innerText = sighting[field];
        }
    }
}

// function handleSearchButtonClick() {
//    var userSearch = $userInput.value.trim(); // Object to hold the user input content (strip formatting)
//    var sightingData = dataSet.filter(function (sighting) { // Set the working data to those items matching the user input for datetime
//        var ufoSighting = sighting.datetime; // Removed .ToLowerCase() because these are numbers
//        return ufoSighting == userSearch; // If data item field datetime matches the user input
//    });
//    renderTable(); // Call the renderTable function to make a table of the filtered data
//}

function handleSearchButtonClick() {
    var userSearch = $userInput.value.trim().ToLowerCase(); // Object to hold the user input content (strip formatting)

    var sightingData = dataSet.filter(function(sighting) { // Set the working data to those items matching the user input
        switch(userSearch) {
            case sighting.datetime:
                ufoSighting = sighting.datetime;
                break;
            case sighting.city:
                ufoSighting = sighting.city;
                break;
            case sighting.state:
                ufoSighting = sighting.state;
                break;
            case sighting.country:
                ufoSighting = sighting.country;
                break;
            case sighting.shape:
                ufoSighting = sighting.shape;
                break;
        }
    return ufoSighting == userSearch;
    });

    renderTable(); // Call the renderTable function to make a table of the filtered data
}

renderTable();