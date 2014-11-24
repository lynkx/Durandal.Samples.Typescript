import dialog = require('plugins/dialog');
import ko = require('knockout');

class CustomModal {
    input = ko.observable();
    ok = () => {
        dialog.close(this, this.input());
    }
    canDeactivate = () => dialog.showMessage('Are you sure that\'s your favorite color?', 'Just Checking...', ['Yes', 'No']);
    static show = () => dialog.show(new CustomModal());

}

export = CustomModal

