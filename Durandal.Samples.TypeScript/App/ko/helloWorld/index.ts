import ko = require('knockout')
var firstName = ko.observable("Planet"),
    lastName = ko.observable("Earth");
var fullName = ko.computed(() => firstName() + " " + lastName());
// It knows that fullName depends on firstName and lastName, because these get called when evaluating fullName.
// Knockout tracks dependencies automatically.
var vm = {
    firstName: firstName,
    lastName: lastName,
    fullName: fullName
}

export = vm;