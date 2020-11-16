import Color from 'color';
import theme from '../@vex/utils/tailwindcss';
import { Poliza } from '../app/pages/polizas/interfaces/poliza.interface';

export const polizasTableBadges = [
    {
      text: 'Vigente',
      backgroundColor: Color(theme.colors.green['300']).fade(0.9),
      color: theme.colors.green['300']
    },
    {
      text: 'Anulado',
      backgroundColor: Color(theme.colors.red['500']).fade(0.9),
      color: theme.colors.red['300']
    },
    {
      text: 'Suspendido',
      backgroundColor: Color(theme.colors.orange['500']).fade(0.9),
      color: theme.colors.orange['300']
    }
  ];


  export const polizasData: Poliza[] = [

    {
      id: 1,
      poliza: '400388544442',
      name: 'Elizabeth McCoy',
      aseguradora: 'Chubb',
      ramo: 'Asistencia Médica',
      vigenciaInicio: '20/01/2019',
      vigenciaFin: '20/01/2020',
      promotor: 'RDJ',
      starred: false,
      badges: [polizasTableBadges[0]],
    },
    {
      id: 2,
      poliza: '238634034244',
      name: 'Sandra Watkins',
      aseguradora: 'Chubb',
      ramo: 'Accidentes Personales',
      vigenciaInicio: '20/01/2019',
      vigenciaFin: '20/01/2020',
      promotor: 'RDJ',
      starred: true,
      badges: [polizasTableBadges[0]],
    },
    {
      id: 3,
      poliza: '400388544442',
      name: 'Elizabeth McCoy',
      aseguradora: 'Chubb',
      ramo: 'Accidentes Personales',
      vigenciaInicio: '20/01/2019',
      vigenciaFin: '20/01/2020',
      promotor: 'DAA',
      starred: false,
      badges: [polizasTableBadges[0]],
    },
    {
      id: 4,
      poliza: '238634034244',
      name: 'Sandra Watkins',
      aseguradora: 'Chubb',
      ramo: 'Asistencia Médica',
      vigenciaInicio: '20/01/2019',
      vigenciaFin: '20/01/2020',
      promotor: 'DAA',
      starred: false,
      badges: [polizasTableBadges[1]],
    },
    {
      id: 5,
      poliza: '400388544442',
      name: 'Elizabeth McCoy',
      aseguradora: 'Chubb',
      ramo: 'Accidentes Personales',
      vigenciaInicio: '20/01/2019',
      vigenciaFin: '20/01/2020',
      promotor: 'SFL',
      starred: false,
      badges: [polizasTableBadges[2]],
    },
    {
      id: 6,
      poliza: '238634034244',
      name: 'Sandra Watkins',
      aseguradora: 'Chubb',
      ramo: 'Accidentes Personales',
      vigenciaInicio: '20/01/2019',
      vigenciaFin: '20/01/2020',
      promotor: 'SFL',
      starred: true,
      badges: [polizasTableBadges[2]],
    },
    {
      id: 7,
      poliza: '400388544442',
      name: 'Elizabeth McCoy',
      aseguradora: 'Chubb',
      ramo: 'Accidentes Personales',
      vigenciaInicio: '20/01/2019',
      vigenciaFin: '20/01/2020',
      promotor: 'DAA',
      starred: false,
      badges: [polizasTableBadges[2]],
    },
    {
      id: 8,
      poliza: '238634034244',
      name: 'Sandra Watkins',
      aseguradora: 'Chubb',
      ramo: 'Accidentes Personales',
      vigenciaInicio: '20/01/2019',
      vigenciaFin: '20/01/2020',
      promotor: 'DAA',
      starred: false,
      badges: [polizasTableBadges[1]],
    }
  
  ];
  
