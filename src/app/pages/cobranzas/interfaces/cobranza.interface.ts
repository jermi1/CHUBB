export interface Cobranza {
  id: number;
  cliente: string;
  poliza: string;
  producto: string;
  documento: string;
  vencimientoPago: string;
  vencimientoDias: object;
  soles: number;
  dolares: number;
  solesComision: number;
  dolaresComision: number;
  badges: object;
}
