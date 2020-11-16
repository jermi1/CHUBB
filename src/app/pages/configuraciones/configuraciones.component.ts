import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import icArrowBackIos from '@iconify/icons-ic/twotone-arrow-back-ios';
import { Cliente } from '../clientes/interfaces/cliente.interface';
import { clientesData } from '../../../static-data/clientes';


@Component({
  selector: 'vex-cliente-edit',
  templateUrl: './configuraciones.component.html',
  styleUrls: ['./configuraciones.component.scss']
})

export class ConfiguracionesEditComponent implements OnInit {

  icArrowBackIos = icArrowBackIos;
 
  cliente: Cliente;
  currentId = 1;

  constructor(private route: ActivatedRoute) { }


  ngOnInit() {

   
    
         this.cliente = clientesData.find(c => c.id === Number(this.currentId));
    

  }
}






