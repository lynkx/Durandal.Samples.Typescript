define(["require", "exports", 'knockout'], function (require, exports, ko) {
    var itemToAdd = ko.observable("");
    var allItems = ko.observableArray(["Fries", "Eggs Benedict", "Ham", "Cheese"]);
    var selectedItems = ko.observableArray(["Ham"]);
    var vm = {
        itemToAdd: itemToAdd,
        allItems: allItems,
        selectedItems: selectedItems,
        addItem: function () {
            var value = itemToAdd();
            if (value != "" && allItems.indexOf(value) < 0) {
                allItems.push(value);
            }
            itemToAdd(""); // Clear the text box
        },
        removeSelected: function () {
            allItems.removeAll(selectedItems());
            selectedItems([]); // Clear selection
        },
        sortItems: function () {
            allItems.sort();
        }
    };
    return vm;
});
//# sourceMappingURL=index.js.map