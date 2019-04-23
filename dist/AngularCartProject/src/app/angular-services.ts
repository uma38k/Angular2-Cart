import { Injectable } from '@angular/core';

@Injectable()

export class AngularServices {
    printMsg() {
        return "Hello Services";
    }

    cartValue() {
        return "Cart Ready";
    }
}