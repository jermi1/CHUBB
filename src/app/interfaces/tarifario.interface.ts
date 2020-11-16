export interface Tarifario {
  id: number;
  aseguradora: string;
  moneda: 'Soles' | 'Dólares';
  ramo: 'Autos' | 'Vida' | 'SCTR' | 'Otros';
  producto: string;
  plan: 'General' | 'Corporativo';
  cliente: string;
  vigenciaInicio: string;
  vigenciaFin: string;
  badges: object;
}