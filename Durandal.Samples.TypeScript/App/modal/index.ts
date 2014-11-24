import app = require('durandal/app');
import CustomModal = require('./customModal');

var instance = {
    showCustomModal: () => {
        CustomModal.show().then(response => {
            app.showMessage('You answered "' + response + '".');
        });
    }
}

export = instance