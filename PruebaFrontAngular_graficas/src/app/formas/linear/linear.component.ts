import {Component, Injectable} from '@angular/core';
import {
    subirAnimationWait
} from '../../animations/listanim.animations';

@Component({
    templateUrl: './linear.component.html',
    styleUrls: ['./linear.component.scss'],
    animations: [subirAnimationWait]
})

@Injectable()
export class LinearComponent {

    data: any;

    constructor() {
        this.data = {
            labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'],
            datasets: [
                {
                    label: 'Informacion1',
                    data: [65, 59, 80, 81, 56, 55, 40],
                    fill: false,
                    borderColor: '#4bc0c0'
                },
                {
                    label: 'Informacion2',
                    data: [28, 48, 40, 19, 86, 27, 90],
                    fill: false,
                    borderColor: '#565656'
                }
            ]
        };
    }
}
