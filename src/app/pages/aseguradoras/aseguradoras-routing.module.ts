import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { AseguradorasComponent} from './aseguradoras.component';

const routes: Routes = [
    {
        path: '',
        children: [
        {
            path: '',
            component: AseguradorasComponent
        },
        {
            path: 'protecta',
            loadChildren: () => import('./aseguradora-show/aseguradora-show.module').then(m => m.AseguradoraShowModule)
        },
        {
            path: 'lapositiva',
            loadChildren: () => import('./la-positiva-show/la-positiva-show.module').then(m => m.LaPositivaShowModule)
        },
        {
            path: 'pacifico',
            loadChildren: () => import('./pacifico-show/pacifico-show.module').then(m => m.PacificoShowModule)
        },
        {
            path: 'sura',
            loadChildren: () => import('./sura-show/sura-show.module').then(m => m.SuraShowModule)
        },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class AseguradorasRoutingModule { }
