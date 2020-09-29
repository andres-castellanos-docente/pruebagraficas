import {Component, Injectable, OnInit} from '@angular/core';
import {
    subirAnimationWait
} from '../../animations/listanim.animations';

@Component({
    templateUrl: './barras.component.html',
    styleUrls: ['./barras.component.scss'],
    animations: [subirAnimationWait]
})

@Injectable()
export class BarrasComponent {

    data: any;

    constructor() {
        this.data = {
            labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'],
            datasets: [
                {
                    label: 'Informacion1',
                    backgroundColor: '#42A5F5',
                    borderColor: '#1E88E5',
                    data: [65, 59, 80, 81, 56, 55, 40]
                },
                {
                    label: 'Informacion 2',
                    backgroundColor: '#9CCC65',
                    borderColor: '#7CB342',
                    data: [28, 48, 40, 19, 86, 27, 90]
                }
            ]
        };
    }
}
