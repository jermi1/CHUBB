import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import icArrowBackIos from '@iconify/icons-ic/twotone-arrow-back-ios';

import { usuariosData } from '../../../../static-data/usuario';
import { Usuario } from '../interfaces/usuario.interface';

@Component({
  selector: 'vex-usuario-crear',
  templateUrl: './usuario-crear.component.html',
  styleUrls: ['./usuario-crear.component.scss']
})
export class UsuarioCrearComponent implements OnInit {

  icArrowBackIos = icArrowBackIos;

  usuario: Usuario;
  currentId = Number;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

       this.currentId = this.route.snapshot.params.id ? this.route.snapshot.params.id : 1;

      // // if(this.currentId == undefined){
      // //     this.currentId = 1;
      // // }
      // // console.log(this.currentId);

      if (this.currentId) {
           this.usuario = usuariosData.find(c => c.id === Number(this.currentId));
       }

  }

}

