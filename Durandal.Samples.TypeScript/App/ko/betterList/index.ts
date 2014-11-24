import ko = require('knockout');
var itemToAdd = ko.observable("");
var allItems = ko.observableArray(["Fries", "Eggs Benedict", "Ham", "Cheese"]);
var selectedItems = ko.observableArray(["Ham"]);

var vm = {
    itemToAdd: itemToAdd,
    allItems: allItems,
    selectedItems: selectedItems,
    addItem: () => {
        var value = itemToAdd();

        if (value != "" && allItems.indexOf(value) < 0) { // Prevent blanks and duplicates
            allItems.push(value);
        }

        itemToAdd(""); // Clear the text box
    },
    removeSelected: () => {
        allItems.removeAll(selectedItems());
        selectedItems([]); // Clear selection
    },
    sortItems: () => {
        allItems.sort();
    }
}
export = vm;