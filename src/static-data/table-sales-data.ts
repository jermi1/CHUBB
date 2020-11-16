import { DateTime } from 'luxon';

export interface Order {
  name: string;
  price: string;
  status: 'borrador' | 'cliente' | 'aseguradora';
  timestamp: string;
}

export const tableSalesData: Order[] = [
  {
    name: 'Alvarado, Diego Alonso',
    price: 'RDJ',
    status: 'cliente',
    timestamp: DateTime.local().minus({ minutes: 2 }).toRelative()
  },
  {
    name: 'Materia Gris SAC',
    price: 'RDJ',
    status: 'borrador',
    timestamp: DateTime.local().minus({ minutes: 6 }).toRelative()
  },
  {
    name: 'Durand, Carlos Enrique',
    price: 'DAA',
    status: 'borrador',
    timestamp: DateTime.local().minus({ minutes: 14 }).toRelative()
  },
  {
    name: 'B&B Consulting Group SAC',
    price: 'SFL',
    status: 'borrador',
    timestamp: DateTime.local().minus({ minutes: 17 }).toRelative()
  },
  {
    name: 'Porras, Dan',
    price: 'CDF',
    status: 'cliente',
    timestamp: DateTime.local().minus({ minutes: 25 }).toRelative()
  },
  {
    name: 'Zapata, Grecia',
    price: 'DAA',
    status: 'aseguradora',
    timestamp: DateTime.local().minus({ minutes: 42 }).toRelative()
  },
  {
    name: 'Bluebox Trading SAC',
    price: 'DAA',
    status: 'borrador',
    timestamp: DateTime.local().minus({ minutes: 87 }).toRelative()
  },
  {
    name: 'Corporación Salamanca SCRL',
    price: 'RDJ',
    status: 'borrador',
    timestamp: DateTime.local().minus({ minutes: 102 }).toRelative()
  },
  {
    name: 'Buenos Muchachos SAC',
    price: 'RDJ',
    status: 'borrador',
    timestamp: DateTime.local().minus({ minutes: 122 }).toRelative()
  },
  {
    name: 'Alvarado, Germán Jeremias',
    price: 'SFL',
    status: 'cliente',
    timestamp: DateTime.local().minus({ minutes: 300 }).toRelative()
  },
  {
    name: 'Fernandez, Sabrina Sandy',
    price: 'DAA',
    status: 'borrador',
    timestamp: DateTime.local().minus({ minutes: 340 }).toRelative()
  },
  {
    name: 'Torres, Cesar Augusto',
    price: 'DAA',
    status: 'borrador',
    timestamp: DateTime.local().minus({ minutes: 400 }).toRelative()
  }
];
