// For Navigation Tabs

let navList = document.getElementById("nav-list");

navList.style.maxHeight = '0px';

function toggleMenu() {
    if (navList.style.maxHeight == "0px")
        {
        navList.style.maxHeight = "300px";
        }
    else {
        navList.style.maxHeight = "0px";
    }
}




// 

const tabItems = document.querySelectorAll('.tab-item');
const tabPoints = document.querySelectorAll('.Point');

// Function to remove 'show' class from all .Point elements
function RemoveShowClass() {
    tabPoints.forEach((point) => point.classList.remove('show'));
}

// Function to handle tab click
function SelectItems(e) {
    RemoveShowClass();
    // Get the tab id and map to the corresponding Point id
    let pointId = '';
    if (this.classList.contains('drink')) pointId = 'Drink-Point';
    else if (this.classList.contains('Food')) pointId = 'Food-Point';
    else if (this.classList.contains('Dessert')) pointId = 'Dessert-Point';
    // Show the corresponding Point section
    const point = document.getElementById(pointId);
    if (point) point.classList.add('show');
}

// Add click event listeners to tab items
tabItems.forEach((item) => {
    item.addEventListener("click", SelectItems);
});