//your JS code here. If required.
function findDomLevel() {
    let element = document.getElementById("level"); // Get the target element
    let level = 1; // Start from level 1 (itself)

    while (element.parentElement) { // Traverse up the DOM tree
        level++; // Increment level count
        element = element.parentElement;  // Move to parent
    }

    alert("The level of the element is: " + level); // Display the result
}

findDomLevel(); // Call the function
