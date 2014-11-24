define(["require", "exports", 'knockout'], function(require, exports, ko) {
    var firstName = ko.observable("Planet"), lastName = ko.observable("Earth");
    var fullName = ko.computed(function () {
        return firstName() + " " + lastName();
    });

    // It knows that fullName depends on firstName and lastName, because these get called when evaluating fullName.
    // Knockout tracks dependencies automatically.
    var vm = {
        firstName: firstName,
        lastName: lastName,
        fullName: fullName
    };

    
    return vm;
});
//# sourceMappingURL=index.js.map
