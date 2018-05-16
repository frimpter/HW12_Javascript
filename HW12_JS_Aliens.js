// HW12_Javascript Aliens

var $tbody = document.querySelector("tbody");
var $stateInput = document.querySelector("#state");
var dateTime = dataSet;
var $searchBtn = document.querySelector("#search");

$searchBtn.addEventListener("click", handleSearchButtonClick);

function renderTable() {
    $tbody.innerHTML = "";
    for (var i = 0; i < dateTime.length; i++) {
        // Get get the current address object and its fields
        var sighting = dateTime[i];
        var fields = Object.keys(datetime);
        // Create a new row in the tbody, set the index to be i + startingIndex
        var $row = $tbody.insertRow(i);
        for (var j = 0; j < fields.length; j++) {
            // For every field in the address object, create a new cell at set its inner text to be the current value at the current address's field
            var field = fields[j];
            var $cell = $row.insertCell(j);
            $cell.innerText = datetime[field];
        }
    }
}

function handleSearchButtonClick() {
    var userSearch = $userInput.value.trim().toLowerCase();

    dateTime = Data.filter(function (sighting) {
        var ufoSighting = sighting.toLowerCase();

        // If true, add the address to the filteredAddresses, otherwise don't add it to filteredAddresses
        return ufoSighting === userSearch;
    });
    renderTable();
}

renderTable();
