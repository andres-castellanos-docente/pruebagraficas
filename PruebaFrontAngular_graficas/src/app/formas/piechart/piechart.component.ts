import {Component, Injectable, OnInit} from '@angular/core';
import {
    subirAnimationWait
} from '../../animations/listanim.animations';

@Component({
    templateUrl: './piechart.component.html',
    styleUrls: ['./piechart.component.scss'],
    animations: [subirAnimationWait]
})

@Injectable()
export class PiechartComponent {
    data: any;
    constructor() {
        this.data = {
            labels: ['A', 'B', 'C'],
            datasets: [
                {
                    data: [300, 50, 100],
                    backgroundColor: [
                        '#FF6384',
                        '#36A2EB',
                        '#FFCE56'
                    ],
                    hoverBackgroundColor: [
                        '#FF6384',
                        '#36A2EB',
                        '#FFCE56'
                    ]
                }]
        };
    }
}
