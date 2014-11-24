import ko = require('knockout');
var counter = ko.observable(0),
    limiter = ko.computed(() => counter() >= 3);
var vm = {
    numberOfClicks: counter,
    hasClickedTooManyTimes: limiter,
    registerClick: () => { counter(counter() + 1); },
    resetClicks: () => { counter(0); }

};

export = vm;
 