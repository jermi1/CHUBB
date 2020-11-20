import { Cliente } from '../app/pages/clientes/interfaces/cliente.interface';

export const clientesData: Cliente[] = [
  {
    id: 1,
    codigoAfiliado: 'ASEG-20-965',
    nombre: 'Diego Alonso',
    apellidoPaterno: 'Alvarado',
    apellidoMaterno: 'Alatrista',
    clase: "cliente",
    tipo: {
      id: 1,
      nombre: 'Persona Natural'
    },
    genero: 'M',
    nacionalidad: 'PE',
    email: [
      {
        tipo: {
          id: 1,
          nombre: 'personal'
        },
        email: 'diego@dalvarado.net',
      },
    ],
    telefono: [
      {
        tipo: {
          id: 1,
          nombre: 'personal'
        },
        numero: '992765241',
        anexo: null
      }
    ],
    fechaIngreso: '2014-04-03',
    fechaNacimiento: '1988-04-05T05:41:28.462Z',
    seleccionado: false,
    vip: false,
    padreText: 'Materia Gris',
    etiquetas: {
      laft: {
        estado: false,
        nivel: 'bajo'
      },
      infocorp: {
        estado: true,
        nivel: 'medio'
      },
      empresaDelEstado: false,
      pep: {
        estado: false
      }
    }
  },
  {
    id: 2,
    nombre: 'Materia Gris SAC',
    clase: "cliente",
    tipo: {
      id: 2,
      nombre: 'Persona Jurídica'
    },
    padreText: '',
    email: [
      {
        tipo: {
          id: 1,
          nombre: 'personal'
        },
        email: 'carlos.durand@materiagris.pe',
      },
    ],
    telefono: [
      {
        tipo: {
          id: 1,
          nombre: 'personal'
        },
        numero: '4305050',
        anexo: '3001'
      }
    ],
    fechaIngreso: '10/05/2019',
    seleccionado: false,
    vip: true,
    etiquetas: {
      laft: {
        estado: false
      },
      infocorp: {
        estado: false
      },
      empresaDelEstado: false,
      pep: {
        estado: false
      }
    }
  },
  {
    id: 3,
    nombre: 'Carlos Enrique',
    apellidoPaterno: 'Durand',
    apellidoMaterno: 'Flores',
    clase: "pre-cliente",
    padreText: 'Materia Gris',
    tipo: {
      id: 1,
      nombre: 'Persona Natural'
    },
    email: [
      {
        tipo: {
          id: 1,
          nombre: 'trabajo'
        },
        email: 'carlos.durand@materiagris.pe',
      },
    ],
    telefono: [
      {
        tipo: {
          id: 1,
          nombre: 'personal'
        },
        numero: '993494957',
        anexo: null
      }
    ],
    fechaIngreso: '23/05/2019',
    seleccionado: false,
    vip: false,
    etiquetas: {
      laft: {
        estado: false
      },
      infocorp: {
        estado: false
      },
      empresaDelEstado: false,
      pep: {
        estado: false
      }
    }
  },
  {
    id: 4,
    nombre: 'B&B Consulting Group SAC',
    clase: 'cliente',
    tipo: {
      id: 2,
      nombre: 'Persona Jurídica'
    },
    email: [
      {
        tipo: {
          id: 1,
          nombre: 'trabajo'
        },
        email: 'cesar.torres@bbconsulting.pe',
      },
    ],
    telefono: [
      {
        tipo: {
          id: 1,
          nombre: 'personal'
        },
        numero: '989768046',
        anexo: null
      }
    ],
    fechaIngreso: '14/05/2019',
    seleccionado: false,
    vip: false,
    etiquetas: {
      laft: {
        estado: false
      },
      infocorp: {
        estado: true,
        nivel: 'medio'
      },
      empresaDelEstado: false,
      pep: {
        estado: false
      }
    }
  },
  {
    id: 5,
    nombre: 'Cesar Augusto',
    apellidoPaterno: 'Torres',
    apellidoMaterno: 'Brito',
    clase: 'cliente',
    padreText: 'B&B Consulting Group SAC',
    tipo: {
      id: 1,
      nombre: 'Persona Natural'
    },
    email: [
      {
        tipo: {
          id: 1,
          nombre: 'personal'
        },
        email: 'cesar.torres@bbconsulting.pe',
      },
    ],
    telefono: [
      {
        tipo: {
          id: 1,
          nombre: 'personal'
        },
        numero: '989768046',
        anexo: null
      }
    ],
    fechaIngreso: '14/05/2019',
    seleccionado: false,
    vip: false,
    etiquetas: {
      laft: {
        estado: false,
        nivel: 'alto'
      },
      infocorp: {
        estado: false
      },
      empresaDelEstado: false,
      pep: {
        estado: false
      }
    }
  },
  {
    id: 6,
    nombre: 'Sabrina Sandy',
    apellidoPaterno: 'Fernandez',
    apellidoMaterno: 'León',
    clase: 'cliente',
    tipo: {
      id: 1,
      nombre: 'Persona Natural'
    },
    padreText: '',
    email: [
      {
        tipo: {
          id: 1,
          nombre: 'personal'
        },
        email: 'sab1993@gmail.com',
      },
    ],
    telefono: [
      {
        tipo: {
          id: 1,
          nombre: 'personal'
        },
        numero: '975211251',
        anexo: null
      }
    ],
    fechaIngreso: '05/06/2019',
    seleccionado: false,
    vip: true,
    etiquetas: {
      laft: {
        estado: false
      },
      infocorp: {
        estado: false
      },
      empresaDelEstado: false,
      pep: {
        estado: false
      }
    }
  },
  {
    id: 7,
    nombre: 'German Andres',
    apellidoPaterno: 'Alvarado',
    apellidoMaterno: 'Alatrista',
    clase: 'pre-cliente',
    padreText: '',
    tipo: {
      id: 1,
      nombre: 'Persona Natural'
    },
    email: [
      {
        tipo: {
          id: 1,
          nombre: 'personal'
        },
        email: 'andres@foto-virtual.com',
      },
    ],
    telefono: [
      {
        tipo: {
          id: 1,
          nombre: 'casa'
        },
        numero: '012595013',
        anexo: null
      }
    ],
    fechaIngreso: '14/07/2019',
    seleccionado: false,
    vip: true,
    etiquetas: {
      laft: {
        estado: false
      },
      infocorp: {
        estado: false
      },
      empresaDelEstado: false,
      pep: {
        estado: false,
        organizacion: 'PCM'
      }
    }
  },
  {
    id: 8,
    nombre: 'Corporación Peruana de Aeropuertos y Aviación Comercial - CORPAC S.A.',
    clase: 'cliente',
    padreText: '',
    tipo: {
      id: 2,
      nombre: 'Persona Jurídica'
    },
    email: [
      {
        tipo: {
          id: 1,
          nombre: 'personal'
        },
        email: 'svalencia@corpac.gob.pe',
      },
    ],
    telefono: [
      {
        tipo: {
          id: 1,
          nombre: 'oficina'
        },
        numero: '014141000',
        anexo: null
      }
    ],
    fechaIngreso: '16/12/2018',
    seleccionado: false,
    vip: true,
    etiquetas: {
      laft: {
        estado: false
      },
      infocorp: {
        estado: false
      },
      empresaDelEstado: true,
      pep: {
        estado: false
      }
    }
  },
  {
    id: 9,
    apellidoPaterno: 'Alatrista',
    apellidoMaterno: 'Rivera',
    nombre: 'Rosa Ines',
    clase: 'cliente',
    padreText: '',
    tipo: {
      id: 1,
      nombre: 'Persona Natural'
    },
    email: [
      {
        tipo: {
          id: 1,
          nombre: 'personal'
        },
        email: 'riar9@hotmail.com',
      },
    ],
    telefono: [
      {
        tipo: {
          id: 1,
          nombre: 'personal'
        },
        numero: '959166262',
        anexo: null
      }
    ],
    fechaIngreso: '23/11/2018',
    seleccionado: false,
    vip: false,
    etiquetas: {
      laft: {
        estado: false
      },
      infocorp: {
        estado: false
      },
      empresaDelEstado: false,
      pep: {
        estado: false
      }
    }
  },
  {
    id: 10,
    nombre: 'Juan Washinton',
    apellidoPaterno: 'Pérez',
    apellidoMaterno: 'Quispe',
    padreText: '',
    clase: 'cliente',
    tipo: {
      id: 1,
      nombre: 'Persona Natural'
    },
    email: [
      {
        tipo: {
          id: 1,
          nombre: 'personal'
        },
        email: 'jperez@dalvarado.net',
      },
    ],
    telefono: [
      {
        tipo: {
          id: 1,
          nombre: 'personal'
        },
        numero: '997625242',
        anexo: null
      }
    ],
    fechaIngreso: '10/10/2018',
    seleccionado: false,
    vip: false,
    etiquetas: {
      laft: {
        estado: false,
        nivel: 'alto'
      },
      infocorp: {
        estado: false
      },
      empresaDelEstado: false,
      pep: {
        estado: false,
        organizacion: 'Gobierno del Perú'
      }
    }
  },
  {
    id: 11,
    nombre: 'German Jeremias',
    apellidoPaterno: 'Alvarado',
    apellidoMaterno: 'Valladares',
    clase: 'cliente',
    padreText: '',
    tipo: {
      id: 1,
      nombre: 'Persona Natural'
    },
    email: [
      {
        tipo: {
          id: 1,
          nombre: 'personal'
        },
        email: 'germanalvarado1951@dalvarado.net',
      },
    ],
    telefono: [
      {
        tipo: {
          id: 1,
          nombre: 'personal'
        },
        numero: '014363664',
        anexo: null
      }
    ],
    fechaIngreso: '11/10/2018',
    seleccionado: false,
    vip: false,
    etiquetas: {
      laft: {
        estado: false
      },
      infocorp: {
        estado: false
      },
      empresaDelEstado: false,
      pep: {
        estado: false
      }
    }
  },
  {
    id: 12,
    nombre: 'Rolando',
    apellidoPaterno: 'Tito',
    apellidoMaterno: 'Alegre',
    clase: 'cliente',
    padreText: 'Materia Gris',
    tipo: {
      id: 1,
      nombre: 'Persona Natural'
    },
    email: [
      {
        tipo: {
          id: 1,
          nombre: 'personal'
        },
        email: 'rtito@materiagris.pe',
      },
    ],
    telefono: [
      {
        tipo: {
          id: 1,
          nombre: 'personal'
        },
        numero: '936552474',
        anexo: null
      }
    ],
    fechaIngreso: '11/10/2019',
    seleccionado: false,
    vip: true,
    etiquetas: {
      laft: {
        estado: false
      },
      infocorp: {
        estado: false
      },
      empresaDelEstado: false,
      pep: {
        estado: false
      }
    }
  },
  {
    id: 13,
    nombre: 'Dan',
    apellidoPaterno: 'Porras',
    apellidoMaterno: 'Arana',
    clase: 'cliente',
    padreText: '',
    tipo: {
      id: 1,
      nombre: 'Persona Natural'
    },
    email: [
      {
        tipo: {
          id: 1,
          nombre: 'personal'
        },
        email: 'danporras@gmail.com',
      },
    ],
    telefono: [
      {
        tipo: {
          id: 1,
          nombre: 'personal'
        },
        numero: '959752873',
        anexo: null
      }
    ],
    fechaIngreso: '11/10/2019',
    seleccionado: false,
    vip: true,
    etiquetas: {
      laft: {
        estado: false
      },
      infocorp: {
        estado: true,
        nivel: 'alto'
      },
      empresaDelEstado: false,
      pep: {
        estado: false
      }
    }
  },
  {
    id: 14,
    nombre: 'Isabel Vania',
    apellidoPaterno: 'Panpacata',
    apellidoMaterno: 'Porras',
    clase: 'pre-cliente',
    padreText: '',
    tipo: {
      id: 1,
      nombre: 'Persona Natural'
    },
    email: [
      {
        tipo: {
          id: 1,
          nombre: 'personal'
        },
        email: 'isamakis@gmail.com',
      },
    ],
    telefono: [
      {
        tipo: {
          id: 1,
          nombre: 'personal'
        },
        numero: '996574332',
        anexo: null
      }
    ],
    fechaIngreso: '23/09/2019',
    seleccionado: false,
    vip: false,
    etiquetas: {
      laft: {
        estado: false
      },
      infocorp: {
        estado: false
      },
      empresaDelEstado: false,
      pep: {
        estado: false
      }
    }
  },
  {
    id: 15,
    nombre: 'Juan Carlos',
    apellidoPaterno: 'Hernandez',
    apellidoMaterno: 'Alvarado',
    clase: 'cliente',
    padreText: '',
    tipo: {
      id: 1,
      nombre: 'Persona Natural'
    },
    email: [
      {
        tipo: {
          id: 1,
          nombre: 'personal'
        },
        email: 'jcherna@gmail.com',
      },
    ],
    telefono: [
      {
        tipo: {
          id: 1,
          nombre: 'personal'
        },
        numero: '993445178',
        anexo: null
      }
    ],
    fechaIngreso: '03/05/2019',
    seleccionado: false,
    vip: false,
    etiquetas: {
      laft: {
        estado: false
      },
      infocorp: {
        estado: false
      },
      empresaDelEstado: false,
      pep: {
        estado: false
      }
    }
  },
  {
    id: 16,
    nombre: 'Grecia',
    apellidoPaterno: 'Zapata',
    apellidoMaterno: 'Espinoza',
    clase: 'cliente',
    padreText: '',
    tipo: {
      id: 1,
      nombre: 'Persona Natural'
    },
    email: [
      {
        tipo: {
          id: 1,
          nombre: 'personal'
        },
        email: 'grezapata@gmail.com',
      },
    ],
    telefono: [
      {
        tipo: {
          id: 1,
          nombre: 'personal'
        },
        numero: '987566445',
        anexo: null
      }
    ],
    fechaIngreso: '05/04/2019',
    seleccionado: false,
    vip: false,
    etiquetas: {
      laft: {
        estado: false
      },
      infocorp: {
        estado: true,
        nivel: 'medio'
      },
      empresaDelEstado: false,
      pep: {
        estado: false
      }
    }
  },
  {
    id: 17,
    nombre: 'Bluebox Trading SAC',
    clase: 'pre-cliente',
    padreText: 'B&B Consulting Group SAC',
    tipo: {
      id: 2,
      nombre: 'Persona Jurídica'
    },
    email: [
      {
        tipo: {
          id: 1,
          nombre: 'personal'
        },
        email: 'dalvarado@bluebox.com.pe',
      },
    ],
    telefono: [
      {
        tipo: {
          id: 1,
          nombre: 'personal'
        },
        numero: '992765241',
        anexo: null
      }
    ],
    fechaIngreso: '02/02/2018',
    seleccionado: false,
    vip: false,
    etiquetas: {
      laft: {
        estado: false
      },
      infocorp: {
        estado: false,
      },
      empresaDelEstado: false,
      pep: {
        estado: false
      }
    }
  },
  {
    id: 18,
    nombre: 'Corporación Salamanca SCRL',
    clase: 'cliente',
    padreText: '',
    tipo: {
      id: 2,
      nombre: 'Persona Jurídica'
    },
    email: [
      {
        tipo: {
          id: 1,
          nombre: 'personal'
        },
        email: 'david.zapata@colegiosalamanca.edu.pe',
      },
    ],
    telefono: [
      {
        tipo: {
          id: 1,
          nombre: 'personal'
        },
        numero: '984166503',
        anexo: null
      }
    ],
    fechaIngreso: '03/02/2018',
    seleccionado: false,
    vip: true,
    etiquetas: {
      laft: {
        estado: false
      },
      infocorp: {
        estado: false,
      },
      empresaDelEstado: false,
      pep: {
        estado: false
      }
    }
  },
  {
    id: 19,
    nombre: 'Quadricula Diseño y Muebles EIRL',
    clase: 'cliente',
    padreText: '',
    tipo: {
      id: 2,
      nombre: 'Persona Jurídica'
    },
    email: [
      {
        tipo: {
          id: 1,
          nombre: 'personal'
        },
        email: 'dbarrantes@quadricula.pe',
      },
    ],
    telefono: [
      {
        tipo: {
          id: 1,
          nombre: 'personal'
        },
        numero: '987889767',
        anexo: null
      }
    ],
    fechaIngreso: '06/01/2018',
    seleccionado: false,
    vip: false,
    etiquetas: {
      laft: {
        estado: false
      },
      infocorp: {
        estado: true,
        nivel: 'bajo'
      },
      empresaDelEstado: false,
      pep: {
        estado: false
      }
    }
  },
  {
    id: 20,
    nombre: 'Buenos Muchachos SAC',
    clase: 'pre-cliente',
    padreText: '',
    tipo: {
      id: 2,
      nombre: 'Persona Jurídica'
    },
    email: [
      {
        tipo: {
          id: 1,
          nombre: 'personal'
        },
        email: 'gustavo.oliveira@buenosmuchachos.pe',
      },
    ],
    telefono: [
      {
        tipo: {
          id: 1,
          nombre: 'personal'
        },
        numero: '999554657',
        anexo: null
      }
    ],
    fechaIngreso: '07/01/2018',
    seleccionado: false,
    vip: true,
    etiquetas: {
      laft: {
        estado: false,
        nivel: 'bajo'
      },
      infocorp: {
        estado: true,
        nivel: 'bajo'
      },
      empresaDelEstado: false,
      pep: {
        estado: false
      }
    }
  },
  // {
  //   id: 2,
  //   name: 'Robin Blackburn',
  //   type: 'pre-cliente',
  //   email: 'robin.blackburn@polarax.biz',
  //   phone: '+5 (911) 423-2538',
  //   selected: false,
  //   starred: false,
  //   frecuently: true,
  //   tags: {
  //     pep: true,
  //     laft: false,
  //     infocor: false,
  //     estado: false,
  //   }
  // },
  // {
  //   id: 3,
  //   name: 'Simone Gallegos',
  //   type: 'pre-cliente',
  //   phone: '+2 (948) 573-3528',
  //   email: 'simone.gallegos@applidec.org',
  //   selected: false,
  //   starred: true,
  //   frecuently: false,
  //   tags: {
  //     pep: false,
  //     laft: true,
  //     infocor: false,
  //     estado: true,
  //   }
  // },
  // {
  //   id: 3,
  //   name: 'Simone Gallegos',
  //   type: 'pre-cliente',
  //   phone: '+2 (948) 573-3528',
  //   email: 'simone.gallegos@applidec.org',
  //   selected: false,
  //   starred: true,
  //   frecuently: false,
  //   tags: {
  //     pep: true,
  //     laft: false,
  //     infocor: false,
  //     estado: false,
  //   }
  // },
  // {
  //   id: 5,
  //   name: 'Velasquez Spence',
  //   type: 'pre-cliente',
  //   phone: '+31 (850) 492-2858',
  //   email: 'velasquez.spence@joviold.co.uk',
  //   selected: false,
  //   starred: false,
  //   frecuently: false,
  //   tags: {
  //     pep: false,
  //     laft: true,
  //     infocor: false,
  //     estado: false,
  //   },
  // },
  // {
  //   id: 6,
  //   name: 'Orr Fernandez',
  //   type: 'pre-cliente',
  //   phone: '+6 (843) 490-2487',
  //   email: 'orr.fernandez@accuprint.tv',
  //   selected: false,
  //   starred: false,
  //   frecuently: false,
  //   tags: {
  //     pep: false,
  //     laft: false,
  //     infocor: true,
  //     estado: false,
  //   },
  // },
  // {
  //   id: 7,
  //   name: 'Marcella Russo',
  //   type: 'pre-cliente',
  //   phone: '+48 (836) 506-2890',
  //   email: 'marcella.russo@paprikut.name',
  //   selected: false,
  //   starred: true,
  //   frecuently: false,
  //   tags: {
  //     pep: false,
  //     laft: false,
  //     infocor: true,
  //     estado: false,
  //   },
  // },
  // {
  //   id: 8,
  //   name: 'Mccormick Ferguson',
  //   type: 'pre-cliente',
  //   phone: '+8 (957) 553-2497',
  //   email: 'mccormick.ferguson@waab.info',
  //   selected: false,
  //   starred: false,
  //   frecuently: false,
  //   tags: {
  //     pep: false,
  //     laft: false,
  //     infocor: false,
  //     estado: true,
  //   },
  // }
];
