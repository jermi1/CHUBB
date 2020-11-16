import Color from 'color';
import theme from '../@vex/utils/tailwindcss';

export const clientesTableLabels = [
  {
    text: 'Nuevo',
    backgroundColor: Color(theme.colors.green['500']).fade(0.9),
    color: theme.colors.green['500']
  },
  {
    text: 'vip',
    backgroundColor: Color(theme.colors.cyan['500']).fade(0.9),
    color: theme.colors.cyan['500']
  },
  {
    text: 'Riesgoso',
    backgroundColor: Color(theme.colors.teal['500']).fade(0.9),
    color: theme.colors.teal['500']
  },
  {
    text: 'Gold',
    backgroundColor: Color(theme.colors.purple['500']).fade(0.9),
    color: theme.colors.purple['500']
  },
  {
    text: 'Prueba',
    backgroundColor: Color(theme.colors.red['500']).fade(0.9),
    color: theme.colors.red['500']
  },
  {
    text: 'vip',
    backgroundColor: Color(theme.colors.red['500']).fade(0.9),
    color: theme.colors.red['500'],
    idbroker: 1
  },
];


// Nombre
// Tipo documento
// Número Documento
// Código de cliente
// Teléfono
// Pólizas de renovar
// Tipo de Cliente
// Acciones

export const clientesTableData = [
  {
    id: 1,
    nombres: 'Dejesus',
    apellidoPaterno: 'Chang',
    apellidoMaterno: 'Wong',
    tipoDocumento: 'DNI',
    numeroDocumento: '45055471',
    telefono: '992765241',
    polizasRenovar: 3,
    tipoCliente: 'Cliente',
    labels: [clientesTableLabels[0], clientesTableLabels[1]]
  },
  {
    id: 2,
    nombres: 'Antoinette',
    apellidoPaterno: 'Carson',
    apellidoMaterno: 'Wong',
    tipoDocumento: 'DNI',
    numeroDocumento: '45055471',
    telefono: '992765241',
    polizasRenovar: 0,
    tipoCliente: 'Pre-cliente',
    labels: []
  },
  {
    id: 3,
    nombres: 'Lynnette',
    apellidoPaterno: 'Adkins',
    apellidoMaterno: 'Wong',
    tipoDocumento: 'DNI',
    numeroDocumento: '45055471',
    telefono: '992765241',
    polizasRenovar: 1,
    tipoCliente: 'Cliente',
    labels: [clientesTableLabels[3]]
  },
  {
    id: 4,
    nombres: 'BlueBox Trading SAC',
    apellidoPaterno: null,
    apellidoMaterno: null,
    tipoDocumento: 'RUC',
    numeroDocumento: '20450554731',
    telefono: '992765241',
    polizasRenovar: 2,
    tipoCliente: 'Cliente',
    labels: [clientesTableLabels[0]]
  },
  {
    id: 5,
    nombres: 'Kane',
    apellidoPaterno: 'Koch',
    apellidoMaterno: 'Wong',
    tipoDocumento: 'DNI',
    numeroDocumento: '45055471',
    telefono: '992765241',
    polizasRenovar: 2,
    tipoCliente: 'Cliente',
    labels: [clientesTableLabels[1]]
  },
  {
    id: 6,
    nombres: 'Materia Gris SAC',
    apellidoPaterno: null,
    apellidoMaterno: null,
    tipoDocumento: 'RUC',
    numeroDocumento: '20340554715',
    telefono: '992765241',
    polizasRenovar: 0,
    tipoCliente: 'Pre-cliente',
    labels: [clientesTableLabels[2]]
  },
  {
    id: 7,
    nombres: 'Sabrina',
    apellidoPaterno: 'Logan',
    apellidoMaterno: 'Wong',
    tipoDocumento: 'DNI',
    numeroDocumento: '45055471',
    telefono: '992765241',
    polizasRenovar: 0,
    tipoCliente: 'Pre-cliente',
    labels: []
  },
  {
    id: 8,
    nombres: 'Estela',
    apellidoPaterno: 'Jordan',
    apellidoMaterno: 'Wong',
    tipoDocumento: 'DNI',
    numeroDocumento: '45055471',
    telefono: '992765241',
    polizasRenovar: 2,
    tipoCliente: 'Cliente',
    labels: [clientesTableLabels[0]]
  },
  {
    id: 9,
    nombres: 'Rosanna',
    apellidoPaterno: 'Cross',
    apellidoMaterno: 'Wong',
    tipoDocumento: 'DNI',
    numeroDocumento: '45055471',
    telefono: '992765241',
    polizasRenovar: 2,
    tipoCliente: 'Cliente',
    labels: [clientesTableLabels[2]]
  },
  {
    id: 10,
    nombres: 'Mary',
    apellidoPaterno: 'Jane',
    apellidoMaterno: 'Wong',
    tipoDocumento: 'DNI',
    numeroDocumento: '45055471',
    telefono: '992765241',
    polizasRenovar: 2,
    tipoCliente: 'Cliente',
    labels: [clientesTableLabels[1]]
  },
  {
    id: 11,
    nombres: 'Lane',
    apellidoPaterno: 'Delaney',
    apellidoMaterno: 'Wong',
    tipoDocumento: 'DNI',
    numeroDocumento: '45055471',
    telefono: '992765241',
    polizasRenovar: 0,
    tipoCliente: 'Pre-cliente',
    labels: []
  },
  {
    id: 12,
    nombres: 'Cooper',
    apellidoPaterno: 'Odom',
    apellidoMaterno: 'Wong',
    tipoDocumento: 'DNI',
    numeroDocumento: '45055471',
    telefono: '992765241',
    polizasRenovar: 1,
    tipoCliente: 'Cliente',
    labels: [clientesTableLabels[3]]
  },
  {
    id: 13,
    nombres: 'Kirby',
    apellidoPaterno: 'Hardin',
    apellidoMaterno: 'Wong',
    tipoDocumento: 'DNI',
    numeroDocumento: '45055471',
    telefono: '992765241',
    polizasRenovar: 0,
    tipoCliente: 'Pre-cliente',
    labels: []
  },
  {
    id: 14,
    nombres: 'Marquita',
    apellidoPaterno: 'Haynes',
    apellidoMaterno: 'Wong',
    tipoDocumento: 'DNI',
    numeroDocumento: '45055471',
    telefono: '992765241',
    polizasRenovar: 2,
    tipoCliente: 'Cliente',
    labels: [clientesTableLabels[2]]
  },
  {
    id: 15,
    nombres: 'Horton',
    apellidoPaterno: 'Townsend',
    apellidoMaterno: 'Wong',
    tipoDocumento: 'DNI',
    numeroDocumento: '45055471',
    telefono: '992765241',
    polizasRenovar: 2,
    tipoCliente: 'Cliente',
    labels: [clientesTableLabels[0]]
  },
  {
    id: 16,
    nombres: 'Carrie',
    apellidoPaterno: 'Bond',
    apellidoMaterno: 'Wong',
    tipoDocumento: 'DNI',
    numeroDocumento: '45055471',
    telefono: '992765241',
    polizasRenovar: 0,
    tipoCliente: 'Pre-cliente',
    labels: []
  },
  {
    id: 17,
    nombres: 'Carroll',
    apellidoPaterno: 'Pugh',
    apellidoMaterno: 'Wong',
    tipoDocumento: 'DNI',
    numeroDocumento: '45055471',
    telefono: '992765241',
    polizasRenovar: 1,
    tipoCliente: 'Cliente',
    labels: [clientesTableLabels[0]]
  },
  {
    id: 18,
    nombres: 'Fuller',
    apellidoPaterno: 'Espinoza',
    apellidoMaterno: 'Wong',
    tipoDocumento: 'DNI',
    numeroDocumento: '45055471',
    telefono: '992765241',
    polizasRenovar: 2,
    tipoCliente: 'Cliente',
    labels: [clientesTableLabels[1]]
  },
  {
    id: 19,
    nombres: 'Lamb',
    apellidoPaterno: 'Herring',
    apellidoMaterno: 'Wong',
    tipoDocumento: 'DNI',
    numeroDocumento: '45055471',
    telefono: '992765241',
    polizasRenovar: 2,
    tipoCliente: 'Cliente',
    labels: [clientesTableLabels[2]]
  },
  {
    id: 20,
    nombres: 'Liza',
    apellidoPaterno: 'Price',
    apellidoMaterno: 'Wong',
    tipoDocumento: 'DNI',
    numeroDocumento: '45055471',
    telefono: '992765241',
    polizasRenovar: 2,
    tipoCliente: 'Cliente',
    labels: [clientesTableLabels[1]]
  },
  {
    id: 21,
    nombres: 'Monroe',
    apellidoPaterno: 'Head',
    apellidoMaterno: 'Wong',
    tipoDocumento: 'DNI',
    numeroDocumento: '45055471',
    telefono: '992765241',
    polizasRenovar: 2,
    tipoCliente: 'Cliente',
    labels: [clientesTableLabels[1]]
  },
  {
    id: 22,
    nombres: 'Lucile',
    apellidoPaterno: 'Harding',
    apellidoMaterno: 'Wong',
    tipoDocumento: 'DNI',
    numeroDocumento: '45055471',
    telefono: '992765241',
    polizasRenovar: 0,
    tipoCliente: 'Pre-cliente',
    labels: [clientesTableLabels[0]]
  },
  {
    id: 23,
    nombres: 'Edna',
    apellidoPaterno: 'Richard',
    apellidoMaterno: 'Wong',
    tipoDocumento: 'DNI',
    numeroDocumento: '45055471',
    telefono: '992765241',
    polizasRenovar: 3,
    tipoCliente: 'Cliente',
    labels: [clientesTableLabels[0]]
  },
  {
    id: 24,
    nombres: 'Avila',
    apellidoPaterno: 'Lancaster',
    apellidoMaterno: 'Wong',
    tipoDocumento: 'DNI',
    numeroDocumento: '45055471',
    telefono: '992765241',
    polizasRenovar: 0,
    tipoCliente: 'Pre-cliente',
    labels: []
  },
  {
    id: 25,
    nombres: 'Carlene',
    apellidoPaterno: 'Newman',
    apellidoMaterno: 'Wong',
    tipoDocumento: 'DNI',
    numeroDocumento: '45055471',
    telefono: '992765241',
    polizasRenovar: 2,
    tipoCliente: 'Cliente',
    labels: [clientesTableLabels[3]]
  },
  {
    id: 26,
    nombres: 'Griffith',
    apellidoPaterno: 'Wise',
    apellidoMaterno: 'Wong',
    tipoDocumento: 'DNI',
    numeroDocumento: '45055471',
    telefono: '992765241',
    polizasRenovar: 2,
    tipoCliente: 'Cliente',
    labels: [clientesTableLabels[0]]
  },
  {
    id: 27,
    nombres: 'Schwartz',
    apellidoPaterno: 'Dodson',
    apellidoMaterno: 'Wong',
    tipoDocumento: 'DNI',
    numeroDocumento: '45055471',
    telefono: '992765241',
    polizasRenovar: 0,
    tipoCliente: 'Pre-cliente',
    labels: []
  },
  {
    id: 28,
    nombres: 'Susanna',
    apellidoPaterno: 'Kidd',
    apellidoMaterno: 'Wong',
    tipoDocumento: 'DNI',
    numeroDocumento: '45055471',
    telefono: '992765241',
    polizasRenovar: 2,
    tipoCliente: 'Cliente',
    labels: [clientesTableLabels[1]]
  },
  {
    id: 29,
    nombres: 'Deborah',
    apellidoPaterno: 'Weiss',
    apellidoMaterno: 'Wong',
    tipoDocumento: 'DNI',
    numeroDocumento: '45055471',
    telefono: '992765241',
    polizasRenovar: 1,
    tipoCliente: 'Cliente',
    labels: [clientesTableLabels[2]]
  }
];
