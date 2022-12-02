import { Component } from '@angular/core';

@Component({
    selector: 'app-Eliot',
    template: `
        <style>
            h3 {
                color: green;
            }
        </style>
        <h2>Hola</h2>
        <h3>Eliot</h3>
    `
})

export class EliotComponent {
    title = "Componente Eliot";
}