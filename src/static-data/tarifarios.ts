import Color from 'color';
import theme from '../@vex/utils/tailwindcss';
import { Tarifario } from 'src/app/interfaces/tarifario.interface';


export const tarifariosTableBadges = [
    {
        text: 'Activo',
        backgroundColor: Color(theme.colors.green['300']).fade(0.9),
        color: theme.colors.green['500']
    },
    {
        text: 'Desactivo',
        backgroundColor: Color(theme.colors.gray['300']).fade(0.9),
        color: theme.colors.gray['500']
    },
];

export const tarifariosData: Tarifario[] = [
    {
        id: 1,
        aseguradora: 'La Positiva',
        moneda: 'Soles',
        ramo: 'Vida',
        producto: 'Vida Familiar',
        plan: 'Corporativo',
        cliente: 'Fernandez León, Sabrina Sandy',
        vigenciaInicio: '20/02/2020',
        vigenciaFin: '20/02/2021',
        badges: [tarifariosTableBadges[0]]
    },
    {
        id: 2,
        aseguradora: 'Pacífico',
        moneda: 'Soles',
        ramo: 'Vida',
        producto: 'Todos',
        plan: 'General',
        cliente: 'Todos',
        vigenciaInicio: '14/02/2020',
        vigenciaFin: '14/02/2021',
        badges: [tarifariosTableBadges[0]]
    },
    {
        id: 3,
        aseguradora: 'Rimac',
        moneda: 'Dólares',
        ramo: 'SCTR',
        producto: 'Todos',
        plan: 'General',
        cliente: 'Todos',
        vigenciaInicio: '14/06/2019',
        vigenciaFin: '14/06/2020',
        badges: [tarifariosTableBadges[0]]
    },
    {
        id: 4,
        aseguradora: 'La Positiva',
        moneda: 'Soles',
        ramo: 'Vida',
        producto: 'Vida Individual',
        plan: 'Corporativo',
        cliente: 'Hernandez Alvarado, Juan Carlos',
        vigenciaInicio: '23/08/2019',
        vigenciaFin: '23/08/2020',
        badges: [tarifariosTableBadges[0]]
    },
    {
        id: 5,
        aseguradora: 'Mapfre',
        moneda: 'Dólares',
        ramo: 'Autos',
        producto: 'Todos',
        plan: 'Corporativo',
        cliente: 'Alatrista Rivera, Rosa Ines',
        vigenciaInicio: '23/05/2018',
        vigenciaFin: '23/05/2019',
        badges: [tarifariosTableBadges[1]]
    },
    {
        id: 6,
        aseguradora: 'Mapfre',
        moneda: 'Dólares',
        ramo: 'Autos',
        producto: 'Todos',
        plan: 'Corporativo',
        cliente: 'Perez Quispe, Juan',
        vigenciaInicio: '28/08/2018',
        vigenciaFin: '28/08/2019',
        badges: [tarifariosTableBadges[1]]
    },
    {
        id: 7,
        aseguradora: 'Mapfre',
        moneda: 'Soles',
        ramo: 'Autos',
        producto: 'Todos',
        plan: 'General',
        cliente: 'Todos',
        vigenciaInicio: '28/08/2018',
        vigenciaFin: '28/08/2019',
        badges: [tarifariosTableBadges[0]]
    },
    {
        id: 8,
        aseguradora: 'Mapfre',
        moneda: 'Soles',
        ramo: 'Autos',
        producto: 'Todos',
        plan: 'General',
        cliente: 'Todos',
        vigenciaInicio: '20/01/2017',
        vigenciaFin: '20/01/2018',
        badges: [tarifariosTableBadges[1]]
    },
    {
        id: 9,
        aseguradora: 'Mapfre',
        moneda: 'Soles',
        ramo: 'Vida',
        producto: 'Todos',
        plan: 'General',
        cliente: 'Todos',
        vigenciaInicio: '20/01/2017',
        vigenciaFin: '20/01/2018',
        badges: [tarifariosTableBadges[1]]
    },
    {
        id: 10,
        aseguradora: 'Mapfre',
        moneda: 'Soles',
        ramo: 'Vida',
        producto: 'Todos',
        plan: 'General',
        cliente: 'Todos',
        vigenciaInicio: '20/01/2017',
        vigenciaFin: '20/01/2018',
        badges: [tarifariosTableBadges[1]]
    },

];
