import Color from 'color';
import theme from '../@vex/utils/tailwindcss';
import { Cotizacion } from '../app/pages/cotizaciones/interfaces/cotizacion.interface';


export const cotizacionesTableLabels = [
  {
    text: 'Urgente',
    backgroundColor: Color(theme.colors.red['500']).fade(0.9),
    color: theme.colors.red['500']
  },
  {
    text: 'Llamar',
    backgroundColor: Color(theme.colors.cyan['500']).fade(0.9),
    color: theme.colors.cyan['500']
  },
  {
    text: 'Faltan datos',
    backgroundColor: Color(theme.colors.teal['500']).fade(0.9),
    color: theme.colors.teal['500']
  }
];

export const cotizacionesTableBadges = [
    {
      text: 'Borrador',
      backgroundColor: Color(theme.colors.black['300']).fade(0.9),
      color: theme.colors.black['300']
    },
    {
      text: 'En Cliente',
      backgroundColor: Color(theme.colors.cyan['500']).fade(0.9),
      color: theme.colors.cyan['500']
    },
    {
      text: 'En Aseguradora',
      backgroundColor: Color(theme.colors.orange['500']).fade(0.9),
      color: theme.colors.orange['500']
    },
    {
      text: 'Rechazada',
      backgroundColor: Color(theme.colors.red['900']).fade(0.9),
      color: theme.colors.red['500']
    },
  ];


export const cotizacionesData: Cotizacion[] = [
  {
    id: 1,
    codigo: 'C00000203',
    name: 'Elizabeth McCoy',
    aseguradora: 'La Positiva',
    ramo: 'Autos',
    vigenciaInicio: '20/01/2019',
    vigenciaFin: '20/01/2020',
    promotor: 'RDJ',
    starred: false,
    badges: [cotizacionesTableBadges[0]],
    labels: [cotizacionesTableLabels[0]]
  },
  {
    id: 2,
    codigo: 'C00000459',
    name: 'Sandra Watkins',
    aseguradora: 'Mapfre',
    ramo: 'SCTR',
    vigenciaInicio: '20/01/2019',
    vigenciaFin: '20/01/2020',
    promotor: 'DAA',
    starred: true,
    badges: [cotizacionesTableBadges[2]],
    labels: [cotizacionesTableLabels[0]]
  },
  {
    id: 3,
    codigo: 'C00000203',
    name: 'Elizabeth McCoy',
    aseguradora: 'La Positiva',
    ramo: 'Autos',
    vigenciaInicio: '20/01/2019',
    vigenciaFin: '20/01/2020',
    promotor: 'RDJ',
    starred: false,
    badges: [cotizacionesTableBadges[3]],
    labels: [cotizacionesTableLabels[0]]
  },
  {
    id: 4,
    codigo: 'C00000459',
    name: 'Sandra Watkins',
    aseguradora: 'Mapfre',
    ramo: 'Otros',
    vigenciaInicio: '20/01/2019',
    vigenciaFin: '20/01/2020',
    promotor: 'DAA',
    starred: false,
    badges: [cotizacionesTableBadges[0]],
    labels: [cotizacionesTableLabels[0]]
  },
  {
    id: 5,
    codigo: 'C00000203',
    name: 'Elizabeth McCoy',
    aseguradora: 'La Positiva',
    ramo: 'Autos',
    vigenciaInicio: '20/01/2019',
    vigenciaFin: '20/01/2020',
    promotor: 'RDJ',
    starred: false,
    badges: [cotizacionesTableBadges[1]],
    labels: [cotizacionesTableLabels[0]]
  },
  {
    id: 6,
    codigo: 'C00000459',
    name: 'Sandra Watkins',
    aseguradora: 'Mapfre',
    ramo: 'Vida',
    vigenciaInicio: '20/01/2019',
    vigenciaFin: '20/01/2020',
    promotor: 'DAA',
    starred: true,
    badges: [cotizacionesTableBadges[2]],
    labels: [cotizacionesTableLabels[0]]
  },
  {
    id: 7,
    codigo: 'C00000203',
    name: 'Elizabeth McCoy',
    aseguradora: 'La Positiva',
    ramo: 'Autos',
    vigenciaInicio: '20/01/2019',
    vigenciaFin: '20/01/2020',
    promotor: 'RDJ',
    starred: false,
    badges: [cotizacionesTableBadges[2]],
    labels: [cotizacionesTableLabels[0]]
  },
  {
    id: 8,
    codigo: 'C00000459',
    name: 'Sandra Watkins',
    aseguradora: 'Mapfre',
    ramo: 'SCTR',
    vigenciaInicio: '20/01/2019',
    vigenciaFin: '20/01/2020',
    promotor: 'DAA',
    starred: false,
    badges: [cotizacionesTableBadges[1]],
    labels: [cotizacionesTableLabels[0]]
  }
];
