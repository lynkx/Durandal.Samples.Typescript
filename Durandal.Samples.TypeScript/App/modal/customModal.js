define(["require", "exports", 'plugins/dialog', 'knockout'], function (require, exports, dialog, ko) {
    var CustomModal = (function () {
        function CustomModal() {
            var _this = this;
            this.input = ko.observable();
            this.ok = function () {
                dialog.close(_this, _this.input());
            };
            this.canDeactivate = function () { return dialog.showMessage('Are you sure that\'s your favorite color?', 'Just Checking...', ['Yes', 'No']); };
        }
        CustomModal.show = function () { return dialog.show(new CustomModal()); };
        return CustomModal;
    })();
    return CustomModal;
});
//# sourceMappingURL=customModal.js.map