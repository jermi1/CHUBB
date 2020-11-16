import Color from 'color';
import theme from '../@vex/utils/tailwindcss';
import { Cierre } from 'src/app/pages/comisiones/interfaces/cierre.interface';


export const cierreTableBadges = [
  {
    text: 'Cobrado',
    backgroundColor: Color(theme.colors.green['300']).fade(0.9),
    color: theme.colors.green['500']
  },
  {
    text: 'Pendiente',
    backgroundColor: Color(theme.colors.gray['300']).fade(0.9),
    color: theme.colors.gray['500']
  },
];


// id: number;
// codigo: string;
// aseguradora: string;
// fechaInicio: string;
// fechaFin: string;
// referenciador: string;
// soles: string;
// dolares: string;
// documento: string;
// badges: object;

export const cierresData: Cierre[] = [
  {
    id: 1,
    codigo: '200034',
    factura: '-',
    aseguradora: 'La Positiva',
    subcierre: '200034-1',
    referenciador: 'RDJ',
    soles: 'S/ 80',
    dolares: 'US$ 10',
    fechaInicio: '28/02/2020',
    fechaFin: '28/01/2020',
    documento: 'Subido',
    badges: [cierreTableBadges[1]],
  },
  {
    id: 2,
    codigo: '200035',
    factura: '001-00033',
    aseguradora: 'Pacífico',
    subcierre: '200034-2',
    referenciador: 'SFL',
    soles: 'S/ 80',
    dolares: 'US$ 10',
    fechaInicio: '28/02/2020',
    fechaFin: '28/01/2020',
    documento: 'Subido',
    badges: [cierreTableBadges[0]],
  },
  {
    id: 3,
    codigo: '200036',
    factura: '001-00032',
    aseguradora: 'Rimac',
    subcierre: '200034-2',
    referenciador: 'SFL',
    soles: 'S/ 80',
    dolares: 'US$ 10',
    fechaInicio: '28/02/2020',
    fechaFin: '28/01/2020',
    documento: 'Subido',
    badges: [cierreTableBadges[0]],
  },
  {
    id: 4,
    codigo: '200037',
    factura: '001-00031',
    aseguradora: 'Mapfre',
    subcierre: '200034-3',
    referenciador: 'CDF',
    soles: 'S/ 80',
    dolares: 'US$ 10',
    fechaInicio: '28/02/2020',
    fechaFin: '28/01/2020',
    documento: 'Subido',
    badges: [cierreTableBadges[0]],
  },
  
];
