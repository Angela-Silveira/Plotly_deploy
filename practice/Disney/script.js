// event listener one selection is made on page
d3.selectAll("body").on("change", updatePage);

function updatePage() {
    var dropdownMenu = d3.selectAll("#selectOption").node();
    var selectedOption = dropdownMenu.value;

    console.log(selectedOption);
};