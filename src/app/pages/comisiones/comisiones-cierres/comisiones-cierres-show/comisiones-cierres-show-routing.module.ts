import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ComisionesCierresShowComponent } from './comisiones-cierres-show.component';
import { ComisionesCierresShowDetailsComponent } from './comisiones-cierres-show-details/comisiones-cierres-show-details.component';
import { ComisionesCierresShowSubcierresComponent } from './comisiones-cierres-show-subcierres/comisiones-cierres-show-subcierres.component';
import { VexRoutes } from '../../../../../@vex/interfaces/vex-route.interface';


const routes: VexRoutes = [
    {
        path: '',
        component: ComisionesCierresShowComponent,
        data: {
            scrollDisabled: true,
            toolbarShadowEnabled: true
        },
        children: [
            {
                path: '',
                redirectTo: 'detalles',
            },
            {
                path: 'detalles',
                component: ComisionesCierresShowDetailsComponent,
            },
            {
                path: 'subcierres',
                component: ComisionesCierresShowSubcierresComponent
            },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ComisionesCierresShowRoutingModule {
}
