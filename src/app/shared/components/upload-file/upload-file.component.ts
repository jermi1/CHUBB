import { Component, OnInit } from '@angular/core';

import icCloudUpload from '@iconify/icons-ic/twotone-cloud-upload';
import icCloudDownload from '@iconify/icons-ic/twotone-cloud-download';
import icArrowDropDown from '@iconify/icons-ic/twotone-arrow-drop-down';


@Component({
  selector: 'vex-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss']
})

export class UploadFileComponent implements OnInit {


  icCloudUpload = icCloudUpload;
  icCloudDownload = icCloudDownload;
  icArrowDropDown = icArrowDropDown;

  constructor() { }

  ngOnInit() {
  }

}
