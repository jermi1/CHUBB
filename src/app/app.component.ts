import { Component, Inject, LOCALE_ID, Renderer2, OnInit} from '@angular/core';
import { ConfigService } from '../@vex/services/config.service';
import { Settings } from 'luxon';
import { DOCUMENT } from '@angular/common';
import { Platform } from '@angular/cdk/platform';
import { NavigationService } from '../@vex/services/navigation.service';
import icDashboard from '@iconify/icons-ic/twotone-dashboard';
import icSettings from '@iconify/icons-ic/twotone-settings';
import icPeople from '@iconify/icons-ic/twotone-people';
import icList from '@iconify/icons-ic/twotone-list';
import icBook from '@iconify/icons-ic/twotone-book';
import icmonetizationOn from '@iconify/icons-ic/twotone-monetization-on';
import icRepeat from '@iconify/icons-ic/twotone-repeat';
import icLayers from '@iconify/icons-ic/twotone-layers';
import personPin from '@iconify/icons-ic/twotone-person-pin';
import icDirectionsCar from '@iconify/icons-ic/twotone-directions-car';
import { LayoutService } from '../@vex/services/layout.service';
import { ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { SplashScreenService } from '../@vex/services/splash-screen.service';
import { Style, StyleService } from '../@vex/services/style.service';
import { ConfigName } from '../@vex/interfaces/config-name.model';

import icReceipt from '@iconify/icons-ic/twotone-receipt';
import shieldAlt from '@iconify/icons-fa-solid/shield-alt';
import carCrash from '@iconify/icons-fa-solid/car-crash';
import coins from '@iconify/icons-fa-solid/coins';

import icAssigment from '@iconify/icons-ic/twotone-assignment';

@Component({
  selector: 'vex-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'vex';

  constructor(private configService: ConfigService,
              private styleService: StyleService,
              private renderer: Renderer2,
              private platform: Platform,
              @Inject(DOCUMENT) private document: Document,
              @Inject(LOCALE_ID) private localeId: string,
              private layoutService: LayoutService,
              private route: ActivatedRoute,
              private navigationService: NavigationService,
              private splashScreenService: SplashScreenService,
              ) {
    Settings.defaultLocale = this.localeId;

    if (this.platform.BLINK) {
      this.renderer.addClass(this.document.body, 'is-blink');
    }

    /**
     Customize the template to your needs with the ConfigService
     Example:*/
      this.configService.updateConfig({
        // layout: 'vertical',
         sidenav: {
           title: 'B360',

        //    imageUrl: '//placehold.it/100x100',
           showCollapsePin: false
         },
        //  showConfigButton: false,
         footer: {
           visible: true
         }
       });

// id: ConfigName;
//   rtl?: boolean;
//   name: string;
//   imgSrc: string;
//   layout: 'vertical' | 'horizontal';
//   boxed: boolean;
//   sidenav: {
//     title: string;
//     imageUrl: string;
//     showCollapsePin: boolean;
//     state: 'expanded' | 'collapsed';
//   };
//   toolbar: {
//     fixed: boolean;
//   };
//   navbar: {
//     position: 'below-toolbar' | 'in-toolbar';
//   };
//   footer: {
//     visible: boolean;
//     fixed: boolean;
//   };

//     /**
//      * Customize the template to your needs with the ConfigService
//      * Example:
//      *  this.configService.updateConfig({
    //  *    sidenav: {
    //  *      title: 'Custom App',
    //  *      imageUrl: '//placehold.it/100x100',
    //  *      showCollapsePin: false
    //  *    },
    //  *    showConfigButton: false,
    //  *    footer: {
    //  *      visible: false
    //  *    }
    //  *  });
    //  */

    /**
     * Config Related Subscriptions
     * You can remove this if you don't need the functionality of being able to enable specific configs with queryParams
     * Example: example.com/?layout=apollo&style=default
     */
    this.route.queryParamMap.pipe(
      filter(queryParamMap => queryParamMap.has('rtl') && coerceBooleanProperty(queryParamMap.get('rtl')))
    ).subscribe(queryParamMap => {
      this.document.body.dir = 'rtl';
      this.configService.updateConfig({
        rtl: true
      });
    });

    this.route.queryParamMap.pipe(
      filter(queryParamMap => queryParamMap.has('layout'))
    ).subscribe(queryParamMap => this.configService.setConfig(queryParamMap.get('layout') as ConfigName));

    this.route.queryParamMap.pipe(
      filter(queryParamMap => queryParamMap.has('style'))
    ).subscribe(queryParamMap => this.styleService.setStyle(queryParamMap.get('style') as Style));


    this.navigationService.items = [
  /*     {
        type: 'link',
        label: 'Dashboard',
        route: '/dashboard',
        icon: icDashboard
      },*/
      {
        type: 'link',
        label: 'Clientes',
        route: '/clientes',
        icon: icPeople
      },
    //   {
    //     type: 'link',
    //     label: 'email',
    //     route: '/email',
    //     icon: icPeople
    //   },
    /*  {
        type: 'link',
        label: 'Cotizaciones',
        route: '/cotizaciones',
        icon: icAssigment
      }, */
      {
        type: 'link',
        label: 'Pólizas',
        route: '/polizas',
        icon: shieldAlt
      },
     /* {
        type: 'link',
        label: 'Renovaciones',
        route: '/renovaciones',
        icon: icRepeat
      },*/
      {
        type: 'link',
        label: 'Siniestros',
        route: '/siniestros',
        icon: carCrash
      },
      /*
      {
        type: 'link',
        label: 'Cobranzas',
        route: '/cobranzas',
        icon: icReceipt
      },

      {
        type: 'dropdown',
        label: 'Comisiones',
        // route: '/comisiones',
        icon: coins,
        children: [
            {
              type: 'link',
              label: 'Pendientes',
              route: '/comisiones/pendientes',
            },
            {
              type: 'link',
              label: 'Cierres',
              route: '/comisiones/cierres',
            }
          ]
      },
      
      {
        type: 'link',
        label: 'Referenciadores',
        route: '/referenciadores',
        icon: personPin
      },
      */
      {
        type: 'dropdown',
        label: 'Configuración',
        icon: icSettings,
        children: [
          {
            type: 'link',
            label: 'Configuración General',
            route: '/configuraciones',
          },
    /*      {
            type: 'link',
            label: 'Tarifarios',
            route: '/tarifarios',
          },
*/
          {
            type: 'link',
            label: 'Roles y Permisos',
            route: '/roles-permisos',
          }
/*
          {
            type: 'link',
            label: 'Aseguradoras',
            route: '/aseguradoras',
          },
          {
            type: 'link',
            label: 'Ajustadores',
            route: '/ajustadores',
          }

          */
        ]
      },
    ];
  }

}
