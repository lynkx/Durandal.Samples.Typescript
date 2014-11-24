define(["require", "exports", 'durandal/app', './customModal'], function(require, exports, app, CustomModal) {
    var instance = {
        showCustomModal: function () {
            CustomModal.show().then(function (response) {
                app.showMessage('You answered "' + response + '".');
            });
        }
    };

    
    return instance;
});
//# sourceMappingURL=index.js.map
