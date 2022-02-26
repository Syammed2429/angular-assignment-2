import { Component } from '@angular/core';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html'
})

export class FormComponent {
    userName: string = '';

    updateUserName = () => {
        this.userName = `The Updated username is ${this.userName}`;
    }

    resetUserName = () => {
        this.userName = ''
    }
}