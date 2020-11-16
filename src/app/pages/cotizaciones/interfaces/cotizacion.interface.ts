export interface Cotizacion {
  id: number;
  codigo: string;
  name: string;
  aseguradora: string;
  ramo: 'Autos' | 'Vida' | 'SCTR' | 'Otros';
  vigenciaInicio: string;
  vigenciaFin: string;
  promotor: string;
  starred: boolean;
  badges: object;
  labels: object;
  // estado: boolean;
}
