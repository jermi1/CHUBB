export interface ClienteInterface {
  id: number;
  clase: 'cliente' | 'pre-cliente';
  tipo: {
    id: number,
    nombre: 'Persona Natural' | 'Persona Jurídica'
  };
  nombre: string;
  apellidoPaterno?: string;
  apellidoMaterno?: string;
  fechaIngreso: string;
  // razonSocial: string;
  ruc?: string;
  nacionalidad?: string;
  fechaNacimiento?: string;
  genero?: string;
  documentos?: [{
    tipo: {
      id: number,
      nombre: string
    },
    numero: string
  }];
  etiquetas?: {
    laft?: {
      estado: boolean,
      nivel?: 'bajo' | 'medio' | 'alto'
    };
    infocorp?: {
      estado: boolean,
      nivel?: 'bajo' | 'medio' | 'alto'
    };
    pep?: {
      estado: boolean,
      organizacion?: string
    };
    empresaDelEstado?: boolean;
  };
  
  ocupacion?: string;
  centroLabores?: string;
  
  seleccionado?: boolean;
  vip: boolean;
  frecuente?: boolean;
  contacto?: [
    {
      documento: {
        tipo: {
          id: number,
          nombre: string
        },
        numero: string
      }
      nombres: string,
      apellidoPaterno: string,
      apellidoMaterno: string,
      email: string,
      telefono: string,
      representanteLegal: boolean
    }
  ];
  direccion?: [
    {
      tipo: {
        id: number,
        nombre: string
      },
      pais: {
        id: number,
        nombre: string
      },
      departamento: {
        id: number,
        nombre: string
      },
      provincia: [{
        id: number,
        nombre: string
      }],
      distrito: {
        id: number,
        nombre: string
      },
      calle: string
    }
  ];
  email?: [
    {
      tipo: {
        id: number,
        nombre: string
      },
      email: string,
    }
  ];
  telefono?: [
    {
      tipo: {
        id: number,
        nombre: string
      },
      numero: string,
      anexo: string
    }
  ];
  padre?: {
    id: number,
    nombre: string,
    documentos: object,
    email: object,
    telefono: object,
    vip: boolean
    hijos: [
      {
        id: number,
        nombre: string,
        documentos: object,
        email: object,
        telefono: object,
        vip: boolean
      }
    ]
  };
  archivos?: [
    {
      id: number,
      tipo: {
        id: number,
        nombre: string
      },
      nombre: string,
      uri: string
    }
  ];
}