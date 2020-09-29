import {Routes, RouterModule, Route} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {AppprincComponent} from './appBase/princ/appprinc.component';
import {BlankComponent} from './formas/blank';
import {AuthGuardHome} from './guards';
import {BarrasComponent} from './formas/barras';
import {PiechartComponent} from './formas/piechart';
import {LinearComponent} from './formas/linear';


export const routes: Routes = [
    {

        path: '', component: AppprincComponent,
        children: [
            {path: 'enconst', component: BlankComponent, canActivate: []},
            {path: '', component: BlankComponent, canActivate: [AuthGuardHome]},
            {path: 'barras', component: BarrasComponent, canActivate: []},
            {path: 'piechart', component: PiechartComponent, canActivate: []},
            {path: 'linear', component: LinearComponent, canActivate: []},
            ]

    },
    {path: '**', redirectTo: ''}
];

export const AppRoutes: ModuleWithProviders<Route> = RouterModule.forRoot(routes);
