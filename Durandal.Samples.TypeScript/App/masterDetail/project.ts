import system = require('durandal/system')
import app = require('durandal/app')

class ProjectViewModel implements IViewModel {
    name: string;
    description: string;
    constructor(name: string, description: string) {
        this.name = name;
        this.description = description;
    }

    canActivate = () => app.showMessage('Do you want to view ' + this.name + '?', 'Master Detail', ['Yes', 'No']);
    activate = () => { system.log('Model Activating', this); }
    canDeactivate = () => app.showMessage('Do you want to leave ' + this.name + '?', 'Master Detail', ['Yes', 'No']);
    deactivate = () => { system.log('Model Deactivating', this); }
}

export = ProjectViewModel;
