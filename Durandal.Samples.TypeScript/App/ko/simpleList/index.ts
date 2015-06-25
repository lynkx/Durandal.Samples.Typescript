import ko = require('knockout');

var items = ko.observableArray(["Alpha", "Beta", "Gamma"]);
var itemToAdd = ko.observable("");


var vm = {
    items: items,
    itemToAdd: itemToAdd,
    addItem: () => {
        if (itemToAdd() != '') {
            items.push(itemToAdd()); // Adds the item. Writing to the "items" observableArray causes any associated UI to update.
            itemToAdd(''); // Clears the text box, because it's bound to the "itemToAdd" observable
        }
    }

};

export = vm;