import Color from 'color';
import theme from '../@vex/utils/tailwindcss';
import { Comision } from 'src/app/pages/comisiones/interfaces/comision.interface';


export const comisionTableBadges = [
  {
    text: 'Ganada',
    backgroundColor: Color(theme.colors.green['300']).fade(0.9),
    color: theme.colors.green['500']
  },
  {
    text: 'Potencial',
    backgroundColor: Color(theme.colors.gray['300']).fade(0.9),
    color: theme.colors.gray['500']
  },
];


// id: number;
//   poliza: string;
//   cliente: string;
//   referenciador: string;
//   moneda: string;
//   cBrocker: string;
//   cReferenciador: number;
//   fecha: number;
//   badges: object;

export const comisionesData: Comision[] = [
  {
    id: 1,
    poliza: '299339',
    aseguradora: 'La Positiva',
    ramo: 'Vida',
    cliente: 'McCoy, Elizabeth',
    subcierre: '200034-1',
    referenciador: 'RDJ',
    moneda: 'Soles',
    cBrocker: 'S/ 80',
    cReferenciador: 'S/ 10',
    fecha: '20/02/2020',
    badges: [comisionTableBadges[0]],
  },
  {
    id: 2,
    poliza: '299339',
    aseguradora: 'Pacífico',
    ramo: 'Auto',
    cliente: 'Fernandez León, Sabrina Sandy',
    subcierre: '200034-2',
    referenciador: 'SFL',
    moneda: 'Soles',
    cBrocker: 'S/ 140',
    cReferenciador: 'S/ 14',
    fecha: '23/01/2020',
    badges: [comisionTableBadges[0]],
  },
  {
    id: 3,
    poliza: '493822',
    aseguradora: 'Rimac',
    ramo: 'SCTR',
    cliente: 'Hernandez Alvarado, Juan Carlos',
    subcierre: '200034-2',
    referenciador: 'SFL',
    moneda: 'Soles',
    cBrocker: 'S/ 140',
    cReferenciador: 'S/ 14',
    fecha: '22/01/2020',
    badges: [comisionTableBadges[0]],
  },
  {
    id: 4,
    poliza: '5667373',
    aseguradora: 'La Positiva',
    ramo: 'Vida',
    cliente: 'Bluebox Trading SAC',
    subcierre: '200034-3',
    referenciador: 'CDF',
    moneda: 'Soles',
    cBrocker: 'S/ 140',
    cReferenciador: 'S/ 14',
    fecha: '19/01/2020',
    badges: [comisionTableBadges[1]],
  },
  {
    id: 5,
    poliza: '777635',
    aseguradora: 'Mapfre',
    ramo: 'Auto',
    cliente: 'Alatrista Rivera, Rosa Ines',
    subcierre: '200034-2',
    referenciador: 'SFL',
    moneda: 'Dolares',
    cBrocker: 'US$ 200',
    cReferenciador: 'US$ 40',
    fecha: '13/01/2020',
    badges: [comisionTableBadges[1]],
  },
  {
    id: 6,
    poliza: '887733',
    aseguradora: 'Mapfre',
    ramo: 'Vida',
    cliente: 'Perez Quispe, Juan',
    subcierre: '200034-1',
    referenciador: 'RDJ',
    moneda: 'Soles',
    cBrocker: 'S/ 140',
    cReferenciador: 'S/ 14',
    fecha: '31/12/2019',
    badges: [comisionTableBadges[1]],
  },
  {
    id: 7,
    poliza: '99876636',
    aseguradora: 'Rimac',
    ramo: 'Vida',
    cliente: 'Porras Arana, Dan',
    subcierre: '200034-2',
    referenciador: 'SFL',
    moneda: 'Soles',
    cBrocker: 'S/ 140',
    cReferenciador: 'S/ 14',
    fecha: '22/12/2019',
    badges: [comisionTableBadges[0]],
  },
  {
    id: 8,
    poliza: '233345',
    aseguradora: 'La Positiva',
    ramo: 'Vida',
    cliente: 'Alvarado Alatrista, Diego Alonso',
    subcierre: '200034-2',
    referenciador: 'SFL',
    moneda: 'Soles',
    cBrocker: 'S/ 140',
    cReferenciador: 'S/ 14',
    fecha: '16/12/2019',
    badges: [comisionTableBadges[1]],
  },
  {
    id: 9,
    poliza: '336222',
    aseguradora: 'Pacífico',
    ramo: 'SCTR',
    cliente: 'Materia Gris SAC',
    subcierre: '200034-4',
    referenciador: 'DAA',
    moneda: 'Soles',
    cBrocker: 'S/ 140',
    cReferenciador: 'S/ 14',
    fecha: '15/12/2019',
    badges: [comisionTableBadges[1]],
  },
  {
    id: 10,
    poliza: 'Rimac',
    aseguradora: 'Mapfre',
    ramo: 'Autos',
    cliente: 'Rosado Flores, Alberto',
    subcierre: '200034-4',
    referenciador: 'DAA',
    moneda: 'Soles',
    cBrocker: 'S/ 140',
    cReferenciador: 'S/ 14',
    fecha: '12/12/2019',
    badges: [comisionTableBadges[1]],
  },
  
];
