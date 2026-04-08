import { Routes } from '@angular/router';
import { Testroute } from './testroute/testroute';
import { Details } from './details/details';

export const routes: Routes = [{
    path: '',
    component: Testroute,
    title: 'testroute'
},
{
    path: 'details',
    component: Details,
    title: 'details'
}];
