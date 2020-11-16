import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VexRoutes } from '../@vex/interfaces/vex-route.interface';
import { CustomLayoutComponent } from './custom-layout/custom-layout.component';

const childrenRoutes: VexRoutes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule),
    data: {
      containerEnabled: true
    }
  },
  {
    path: 'cotizaciones',
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/cotizaciones/cotizaciones.module').then(m => m.CotizacionesModule),
        data: {
          containerEnabled: true
        }
      },
    ]
  },
  {
    path: 'clientes',
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/clientes/cliente.module').then(m => m.ClienteModule),
        data: {
          containerEnabled: true
        }
      },
    ]
  },
  {
    path: 'polizas',
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/polizas/polizas.module').then(m => m.PolizasModule),
        data: {
          containerEnabled: true
        }
      },
    ]
  },
  {
    path: 'renovaciones',
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/renovaciones/renovaciones.module').then(m => m.RenovacionesModule),
        data: {
          containerEnabled: true
        }
      },
    ]
  },
  {
    path: 'siniestros',
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/siniestros/siniestros.module').then(m => m.SiniestrosModule),
        data: {
          containerEnabled: true
        }
      },
    ]
  },
  {
    path: 'referenciadores',
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/referenciadores/referenciador.module').then(m => m.ReferenciadorModule),
        data: {
          containerEnabled: true
        }
      },
    ]
  },
  {
    path: 'comisiones',
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/comisiones/comisiones.module').then(m => m.ComisionesModule),
        data: {
          containerEnabled: true
        }
      },
    ]
  },
  {
    path: 'cobranzas',
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/cobranzas/cobranzas.module').then(m => m.CobranzasModule),
        data: {
          containerEnabled: true
        }
      },
    ]
  },
  {
    path: 'email',
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/emails/emails.module').then(m => m.EmailModule),
        data: {
          containerEnabled: true
        }
      },
    ]
  },
  {
    path: 'aseguradoras',
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/aseguradoras/aseguradoras.module').then(m => m.AseguradorasModule),
        data: {
          containerEnabled: true
        }
      },
    ]
  },
  {
    path: 'configuraciones',
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/configuraciones/configuraciones.module').then(m => m.ConfiguracionesModule),
        data: {
          containerEnabled: true
        }
      },
    ]
  },
  {
    path: 'tarifarios',
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/tarifarios/tarifarios.module').then(m => m.TarifariosModule),
        data: {
          containerEnabled: true
        }
      },
    ]
  },
  {
    path: 'roles-permisos',
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/roles-permisos/roles-permisos.module').then(m => m.RolesPermisosModule),
        data: {
          containerEnabled: true
        }
      },
    ]
  },
  {
    path: 'ajustadores',
    children:[
     {
       path: '',
       loadChildren: () => import('./pages/ajustadores/ajustadores.module').then(m => m.AjustadoresModule),
       data: {
         containerEnabled: true
       }
     }
    ]
  }

];

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./pages/auth/login/login.module').then(m => m.LoginModule),
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/auth/register/register.module').then(m => m.RegisterModule),
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./pages/auth/forgot-password/forgot-password.module').then(m => m.ForgotPasswordModule),
  },
  {
    path: 'coming-soon',
    loadChildren: () => import('./pages/cotizaciones/cotizaciones.module').then(m => m.CotizacionesModule),
  },
  {
    path: '',
    component: CustomLayoutComponent,
    children: childrenRoutes
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // preloadingStrategy: PreloadAllModules,
    scrollPositionRestoration: 'enabled',
    relativeLinkResolution: 'corrected',
    anchorScrolling: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
