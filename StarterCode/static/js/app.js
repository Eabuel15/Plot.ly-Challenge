// Function for change on dropdown menu
function optinoChanged(selectedID) {

    // Check if value is selected in dropdown
    console.log(selectedID);

    // Read json file
    d3.json('data/samples.json').then((data) => {
        
     console.log(data);
    })
}