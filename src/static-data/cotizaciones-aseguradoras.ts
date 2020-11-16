import Color from 'color';
import theme from '../@vex/utils/tailwindcss';
import { CotizacionAseguradora } from '../app/interfaces/cotizacion-aseguradora.interface';

export const cotizacionesTableBadges = [
    {
      text: 'Expirada',
      backgroundColor: Color(theme.colors.black['300']).fade(0.9),
      color: theme.colors.black['300']
    },
    {
      text: 'Vigente',
      backgroundColor: Color(theme.colors.green['500']).fade(0.9),
      color: theme.colors.green['500']
    }
  ];


export const cotizacionesPositiva: CotizacionAseguradora[] = [
  {
    id: 1,
    codigo: '23-040043',
    versionSolicitud: 'v3',
    version: 'v3',
    fecha: '20/01/2019',
    prima: 'US$ 120',
    montoAsegurado: 'US$ 100,000.00',
    badges: [cotizacionesTableBadges[1]],
  },
  {
    id: 2,
    codigo: '23-045444',
    versionSolicitud: 'v2',
    version: 'v2',
    fecha: '15/01/2019',
    prima: 'US$ 109',
    montoAsegurado: 'US$ 90,000.00',
    badges: [cotizacionesTableBadges[0]],
  },
  {
    id: 3,
    codigo: '23-045444',
    versionSolicitud: 'v2',
    version: 'v1',
    fecha: '06/01/2019',
    prima: 'US$ 143',
    montoAsegurado: 'US$ 130,500.00',
    badges: [cotizacionesTableBadges[0]],
  },

];



export const cotizacionesPacifico: CotizacionAseguradora[] = [
    {
      id: 1,
      codigo: 'C-023001',
      versionSolicitud: 'v3',
      version: 'v2',
      fecha: '20/01/2019',
      prima: 'US$ 150',
      montoAsegurado: 'US$ 123,000.00',
      badges: [cotizacionesTableBadges[1]],
    },
    {
      id: 2,
      codigo: 'C-023001',
      versionSolicitud: 'v2',
      version: 'v1',
      fecha: '15/01/2019',
      prima: 'US$ 90',
      montoAsegurado: 'US$ 60,000.00',
      badges: [cotizacionesTableBadges[0]],
    },
  
];
  

export const cotizacionesProtecta: CotizacionAseguradora[] = [
    {
      id: 1,
      codigo: 'C-000340',
      versionSolicitud: 'v3',
      version: 'v1',
      fecha: '20/01/2019',
      prima: 'US$ 143',
      montoAsegurado: 'US$ 140,000.00',
      badges: [cotizacionesTableBadges[1]],
    },
  
];
  