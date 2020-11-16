
import Color from 'color';
import theme from '../@vex/utils/tailwindcss';

import { Siniestro } from 'src/app/pages/siniestros/interfaces/siniestro.interface';



export const siniestroTableBadges = [
  {
    text: 'Activo',
    backgroundColor: Color(theme.colors.green['300']).fade(0.9),
    color: theme.colors.green['500']
  },
  {
    text: 'Cerrado',
    backgroundColor: Color(theme.colors.gray['300']).fade(0.9),
    color: theme.colors.gray['500']
  },
];

export const siniestrosData: Siniestro[] = [
  {
    id: 1,
    idPoliza: '40038854',
    idSiniestro: 'S00001',
    clienteNombre: 'Kevin Caufman',
    aseguradora: 'La Positiva',
    ramo: 'Accidentes Personales',
    fechaOcurrencia: '20/01/2020',
    fechaDenuncia: '20/01/2019',
    badges: [siniestroTableBadges[0]],
  },
  {
    id: 2,
    idPoliza: '40056674',
    idSiniestro: 'S00002',
    clienteNombre: 'Aldazabal Mario',
    aseguradora: 'La Positiva',
    ramo: 'Accidentes Personales',
    fechaOcurrencia: '20/05/2018',
    fechaDenuncia: '22/05/2018',
    badges: [siniestroTableBadges[0]],
  },
  {
    id: 3,
    idPoliza: '57056655',
    idSiniestro: 'S00003',
    clienteNombre: 'Ricardo Contreras',
    aseguradora: 'Rimac',
    ramo: 'Asistencia Médica',
    fechaOcurrencia: '30/01/2016',
    fechaDenuncia: '30/01/2016',
    badges: [siniestroTableBadges[1]],
  },
  {
    id: 4,
    idPoliza: '67554565',
    idSiniestro: 'S00004',
    clienteNombre: 'Cesar Comiya',
    aseguradora: 'Rimac',
    ramo: 'Asistencia Médica',
    fechaOcurrencia: '15/12/2020',
    fechaDenuncia: '16/12/2019',
    badges: [siniestroTableBadges[1]],
  },
  {
    id: 5,
    idPoliza: '65457788',
    idSiniestro: 'S00005',
    clienteNombre: 'Andrés Salinas',
    aseguradora: 'Rimac',
    ramo: 'Accidentes Personales',
    fechaOcurrencia: '20/01/2020',
    fechaDenuncia: '21/01/2020',
    badges: [siniestroTableBadges[1]],
  },
  {
    id: 6,
    idPoliza: '55006555',
    idSiniestro: 'S00006',
    clienteNombre: 'Leonardo Tataje Coo',
    aseguradora: 'Mapfre',
    ramo: 'Asistencia Médica',
    fechaOcurrencia: '30/11/2019',
    fechaDenuncia: '31/11/2019',
    badges: [siniestroTableBadges[1]],
  },
  {
    id: 7,
    idPoliza: '55006555',
    idSiniestro: 'S00007',
    clienteNombre: 'Rovert Comiya Struts',
    aseguradora: 'Mapfre',
    ramo: 'Asistencia Médica',
    fechaOcurrencia: '20/01/2018',
    fechaDenuncia: '21/01/2018',
    badges: [siniestroTableBadges[0]],
  },
  {
    id: 8,
    idPoliza: '65457788',
    idSiniestro: 'S00008',
    clienteNombre: 'Rovert Comiya Struts',
    aseguradora: 'Mapfre',
    ramo: 'Accidentes Personales',
    fechaOcurrencia: '20/01/2018',
    fechaDenuncia: '21/01/2018',
    badges: [siniestroTableBadges[1]],
  }
];
