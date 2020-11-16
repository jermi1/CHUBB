import { Component, OnInit, Input } from '@angular/core';

import icArrowDropDown from '@iconify/icons-ic/twotone-arrow-drop-down';
import icMoreVert from '@iconify/icons-ic/twotone-more-vert';

import icEdit from '@iconify/icons-ic/twotone-edit';
import icDeleteForever from '@iconify/icons-ic/twotone-delete-forever';;
import icCloudUpload from '@iconify/icons-ic/twotone-cloud-upload';
import icCloudDownload from '@iconify/icons-ic/twotone-cloud-download';

@Component({
  selector: 'vex-archivos',
  templateUrl: './archivos.component.html',
  styleUrls: ['./archivos.component.scss']
})
export class ArchivosComponent implements OnInit {

  icArrowDropDown = icArrowDropDown;
  icMoreVert =icMoreVert
  icEdit = icEdit;
  icCloudUpload = icCloudUpload;
  icCloudDownload = icCloudDownload;
  icDeleteForever = icDeleteForever;

  @Input() imagen: string;
  @Input() tipo: string;
  @Input() descripcion: string;

  constructor() { }

  ngOnInit() {
  }

}
