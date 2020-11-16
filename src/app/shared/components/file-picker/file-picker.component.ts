import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import icStar from '@iconify/icons-ic/twotone-star';
import icMoreVert from '@iconify/icons-ic/twotone-more-vert';
import icClose from '@iconify/icons-ic/twotone-close';
import icPrint from '@iconify/icons-ic/twotone-print';
import icDownload from '@iconify/icons-ic/twotone-cloud-download';
import icCloudUpload from '@iconify/icons-ic/twotone-cloud-upload';
import icDelete from '@iconify/icons-ic/twotone-delete';
import icBusiness from '@iconify/icons-ic/twotone-business';
import icPhone from '@iconify/icons-ic/twotone-phone';
import icEmail from '@iconify/icons-ic/twotone-mail';
import icSearch from '@iconify/icons-ic/twotone-search';
import icStarBorder from '@iconify/icons-ic/twotone-star-border';
// import { FormBuilder } from '@angular/forms';
// import { Router } from '@angular/router';


export let renovacionIdCounter = 50;

@Component({
  selector: 'vex-file-picker',
  templateUrl: './file-picker.component.html',
  styleUrls: ['./file-picker.component.scss']
})

export class FilePickerComponent implements OnInit {

  [x: string]: any;

  icStar = icStar;
  icStarBorder = icStarBorder;
  icMoreVert = icMoreVert;
  icClose = icClose;

  icPrint = icPrint;
  icDownload = icDownload;
  icDelete = icDelete;

  icBusiness = icBusiness;
  icSearch = icSearch;
  icEmail = icEmail;
  icPhone = icPhone;

  icCloudUpload = icCloudUpload;
  
  constructor(private dialogRef: MatDialogRef<FilePickerComponent>) { }

  ngOnInit() {
    
  }

  apply() {
    this.dialogRef.close();
  }
  

  
}
