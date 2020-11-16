import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TarifariosComponent } from './tarifarios.component';

const routes: Routes = [
    {
        path: '',
        children: [{
            path: '',
            component: TarifariosComponent
        },
        {
            path: 'editar',
            loadChildren: () => import('./tarifarios-edit/tarifarios-edit.module').then(m => m.TarifariosEditModule)
        }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class TarifariosRoutingModule { }