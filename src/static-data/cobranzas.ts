import Color from 'color';
import theme from '../@vex/utils/tailwindcss';
import { Cobranza } from 'src/app/pages/cobranzas/interfaces/cobranza.interface';


export const comisionTableBadges = [
  {
    text: 'Pendiente',
    backgroundColor: Color(theme.colors.red['300']).fade(0.9),
    color: theme.colors.red['500']
  },
  {
    text: 'Pagado',
    backgroundColor: Color(theme.colors.green['300']).fade(0.9),
    color: theme.colors.green['500']
  },
  {
    text: 'Anulado',
    backgroundColor: Color(theme.colors.gray['300']).fade(0.9),
    color: theme.colors.gray['500']
  },
];

export const cobranzasData: Cobranza[] = [
  {
    id: 1,
    cliente: 'Elizabeth McCoy',
    producto: 'Salud Red Médica',
    poliza: '234323',
    documento: '734572826 (1/6)',
    vencimientoPago: '20/01/2020',
    soles: 568.81,
    dolares: 0,
    solesComision: 98.81,
    vencimientoDias: {
        nivel: 'bajo',
        dias: 10
    },
    dolaresComision: 0,
    badges: [comisionTableBadges[1]],
  },
  {
    id: 2,
    cliente: 'Elizabeth McCoy',
    producto: 'Salud Red Médica',
    poliza: '234323',
    documento: '734572827 (2/6)',
    vencimientoPago: '20/02/2020',
    vencimientoDias: {
        nivel: 'bajo',
        dias: 12
    },
    soles: 568.81,
    dolares: 0,
    solesComision: 98.81,
    dolaresComision: 0,
    badges: [comisionTableBadges[0]],
  },
  {
    id: 3,
    cliente: 'Elizabeth McCoy',
    producto: 'Salud Red Médica',
    poliza: '234323',
    documento: '734572828 (3/6)',
    vencimientoPago: '20/03/2020',
    vencimientoDias: {
        nivel: 'moderado',
        dias: 32
    },
    soles: 568.81,
    dolares: 0,
    solesComision: 98.81,
    dolaresComision: 0,
    badges: [comisionTableBadges[0]],
  },
  {
    id: 4,
    cliente: 'Elizabeth McCoy',
    producto: 'Salud Red Médica',
    poliza: '234323',
    documento: '734572829 (4/6)',
    vencimientoPago: '20/04/2020',
    vencimientoDias: {
        nivel: 'alto',
        dias: 60
    },
    soles: 568.81,
    dolares: 0,
    solesComision: 98.81,
    dolaresComision: 0,
    badges: [comisionTableBadges[0]],
  },
  {
    id: 5,
    cliente: 'Elizabeth McCoy',
    producto: 'Salud Red Médica',
    poliza: '234323',
    documento: '734572830 (5/6)',
    vencimientoPago: '20/05/2020',
    vencimientoDias: {
        nivel: 'alto',
        dias: 65
    },
    soles: 568.81,
    dolares: 0,
    solesComision: 98.81,
    dolaresComision: 0,
    badges: [comisionTableBadges[0]],
  },
  {
    id: 6,
    cliente: 'Elizabeth McCoy',
    producto: 'Salud Red Médica',
    poliza: '234323',
    documento: '734572831 (6/6)',
    vencimientoPago: '20/06/2020',
    vencimientoDias: {
        nivel: 'alto',
        dias: 75
    },
    soles: 568.81,
    dolares: 0,
    solesComision: 98.81,
    dolaresComision: 0,
    badges: [comisionTableBadges[0]],
  },
  {
    id: 7,
    cliente: 'Diego Alvarado',
    producto: 'Web Vehículos',
    poliza: '893781',
    documento: '732926457 (1/6)',
    vencimientoPago: '12/01/2020',
    vencimientoDias: {
        nivel: 'alto',
        dias: 95
    },
    soles: 0,
    dolares: 104,
    solesComision: 98.81,
    dolaresComision: 0,
    badges: [comisionTableBadges[1]],
  },
  {
    id: 8,
    cliente: 'Diego Alvarado',
    producto: 'Web Vehículos',
    poliza: '893781',
    documento: '732926458 (2/6)',
    vencimientoPago: '14/02/2020',
    vencimientoDias: {
        nivel: 'bajo',
        dias: 10
    },
    soles: 0,
    dolares: 101.84,
    solesComision: 98.81,
    dolaresComision: 0,
    badges: [comisionTableBadges[2]],
  },
  {
    id: 9,
    cliente: 'Diego Alvarado',
    producto: 'Web Vehículos',
    poliza: '893781',
    documento: '732926459 (3/6)',
    vencimientoPago: '14/03/2020',
    vencimientoDias: {
        nivel: 'bajo',
        dias: 2
    },
    soles: 0,
    dolares: 101.84,
    solesComision: 98.81,
    dolaresComision: 0,
    badges: [comisionTableBadges[2]],
  },
  {
    id: 10,
    cliente: 'Diego Alvarado',
    producto: 'Web Vehículos',
    poliza: '893781',
    documento: '732926460 (4/6)',
    vencimientoPago: '14/04/2020',
    vencimientoDias: {
        nivel: 'bajo',
        dias: 3
    },
    soles: 0,
    dolares: 101.84,
    solesComision: 98.81,
    dolaresComision: 0,
    badges: [comisionTableBadges[2]],
  },
  {
    id: 11,
    cliente: 'Diego Alvarado',
    producto: 'Web Vehículos',
    poliza: '893781',
    documento: '732926461 (5/6)',
    vencimientoPago: '14/05/2020',
    vencimientoDias: {
        nivel: 'moderado',
        dias: 43
    },
    soles: 0,
    dolares: 101.84,
    solesComision: 98.81,
    dolaresComision: 0,
    badges: [comisionTableBadges[2]],
  },
  {
    id: 11,
    cliente: 'Diego Alvarado',
    producto: 'Web Vehículos',
    poliza: '893781',
    documento: '732926462 (6/6)',
    vencimientoPago: '14/06/2020',
    vencimientoDias: {
        nivel: 'bajo',
        dias: 3
    },
    soles: 0,
    dolares: 101.84,
    solesComision: 98.81,
    dolaresComision: 0,
    badges: [comisionTableBadges[2]],
  },
  
];
