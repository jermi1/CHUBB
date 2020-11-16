import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { ConfiguracionesEditComponent} from './configuraciones.component';

const routes: Routes = [
    {
        path: '',
        component: ConfiguracionesEditComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ConfiguracionesRoutingModule { }