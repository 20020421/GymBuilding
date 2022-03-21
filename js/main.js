
function addClassActive(element) {
    element.classList.add("active");
}
const tabContents = document.getElementsByClassName("nav-link");
const tables = document.getElementsByClassName("tab-hide");
console.log(tables)
// function toggleTable() {
    
//     for (const table of tabContents) {
//         table.addEventListener('click', addClassActive(table)); 
//     }
// }

// toggleTable();
function addActiveClass(element) {
    var n;
    for (var i = 0; i < tabContents.length; ++i) {
        tabContents[i].classList.remove("active");
        tables[i].classList.remove("active")
        if (element === tabContents[i]) {
            n = i;
        }

    }

    element.classList.add("active");
    tables[n].classList.add("active");
}