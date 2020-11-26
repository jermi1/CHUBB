import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import icArrowBackIos from '@iconify/icons-ic/twotone-arrow-back-ios';
import { Cliente } from '../clientes/interfaces/cliente.interface';
import { clientesData } from '../../../static-data/clientes';

import icMoreVert from '@iconify/icons-ic/twotone-more-vert';
import icEdit from '@iconify/icons-ic/twotone-edit';
import icDeleteForever from '@iconify/icons-ic/twotone-delete-forever';
import icPhone from '@iconify/icons-ic/twotone-phone';
import icMail from '@iconify/icons-ic/twotone-mail';
import icMap from '@iconify/icons-ic/twotone-map';
import icSearch from '@iconify/icons-ic/twotone-search';
import icCloudDownload from '@iconify/icons-ic/twotone-cloud-download';
import icCloudUpload from '@iconify/icons-ic/twotone-cloud-upload';
import icAssignment from '@iconify/icons-ic/assignment';
import icAddCircle from '@iconify/icons-ic/add-circle';
import icpeople from '@iconify/icons-ic/people';

import icArrowDropDown from '@iconify/icons-ic/twotone-arrow-drop-down';
import {MatFormFieldModule} from '@angular/material/form-field';

export interface PeriodicElement {
  name: string;
  documento: string;
  telefono: string;
  email: string;
  etiquetas: string;
  actions: boolean;
}

export interface Producto {
  codigo: string;
  nombre: string;
  riesgoTecnico: string;
  cobertura: string;
  estado: string;
  actions: boolean;
}


const ELEMENT_DATA_PADRE: PeriodicElement[] = [
  {
    name: 'Materia Gris SAC',
    documento: 'RUC 204503774622',
    telefono: 'Activo',
    email: 'dennis.oliver@mail.com',
    etiquetas: 'VIP',
    actions: true
  }
];


const ELEMENT_DATA: PeriodicElement[] = [
  {
    name: 'Hospitalización',
    documento: '1',
    telefono: 'Activo',
    email: 'Master',
    etiquetas: '08/10/2020', actions: true},
  {
    name: 'Enfermería',
    documento: '2',
    telefono: 'Activo',
    email: 'Administrador',
    etiquetas: '12/10/2020',
    actions: true
  },
  {
    name: 'Medicina Preventiva',
    documento: '3',
    telefono: 'Activo',
    email: 'Administrador',
    etiquetas: '23/11/2020',
    actions: true
  }
];

const PRODUCTO_DATA: Producto[] = [
  {
    codigo: 'Prod1',
    nombre: 'Producto1',
    riesgoTecnico: 'Accidentes Personales',
    cobertura: 'Hospitalización',
    estado: 'Activo',
    actions: true},
  {
    codigo: 'Prod2',
    nombre: 'Producto2',
    riesgoTecnico: 'Accidentes Personales',
    cobertura: 'Enfermería',
    estado: 'Activo',
    actions: true,
  },
  {
    codigo: 'Prod3',
    nombre: 'Producto3',
    riesgoTecnico: 'Accidentes Personales',
    cobertura: 'Medicina Preventiva',
    estado: 'Activo',
    actions: true,
  }
];


@Component({
  selector: 'vex-cliente-edit',
  templateUrl: './configuraciones.component.html',
  styleUrls: ['./configuraciones.component.scss']
})

export class ConfiguracionesEditComponent implements OnInit {

  icArrowBackIos = icArrowBackIos;

  cliente: Cliente;
  currentId = 1;

  icMoreVert = icMoreVert;
  icDeleteForever = icDeleteForever;
  icEdit = icEdit;
  icPhone = icPhone;
  icMail = icMail;
  icMap = icMap;
  icSearch = icSearch;
  icCloudDownload = icCloudDownload;
  icArrowDropDown = icArrowDropDown;
  icCloudUpload = icCloudUpload;
  icAssignment = icAssignment;
  icAddCircle = icAddCircle;
  icpeople = icpeople;
  personaNatural = true;

  form: MatFormFieldModule;

  displayedColumns: string[] = ['name', 'documento'];
  displayedColumns2: string[] = ['codigo', 'nombre', 'riesgoTecnico', 'cobertura', 'estado', 'actions' ];

  dataSourcePadre = ELEMENT_DATA_PADRE;
  dataSource = ELEMENT_DATA;

  dataSourceProducto = PRODUCTO_DATA;

  cambioTipoPersona(event: any) {
    if(event.value == 2) {
      this.personaNatural = false;
    } else {
      this.personaNatural = true;
    }
  }

  constructor(private route: ActivatedRoute) { }


  ngOnInit() {

   
    
         this.cliente = clientesData.find(c => c.id === Number(this.currentId));
    

  }
}






