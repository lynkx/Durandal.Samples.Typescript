define(["require", "exports", 'knockout'], function (require, exports, ko) {
    var counter = ko.observable(0), limiter = ko.computed(function () { return counter() >= 3; });
    var vm = {
        numberOfClicks: counter,
        hasClickedTooManyTimes: limiter,
        registerClick: function () { counter(counter() + 1); },
        resetClicks: function () { counter(0); }
    };
    return vm;
});
//# sourceMappingURL=index.js.map