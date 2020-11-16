import { Component, OnInit } from '@angular/core';
import { Link } from '../../../../@vex/interfaces/link.interface';
import icContacts from '@iconify/icons-ic/twotone-contacts';
import { scaleIn400ms } from '../../../../@vex/animations/scale-in.animation';
import { fadeInRight400ms } from '../../../../@vex/animations/fade-in-right.animation';
import icPersonAdd from '@iconify/icons-ic/twotone-person-add';
import { ReferenciadorEditComponent } from '../components/referenciador-edit/referenciador-edit.component';
import { MatDialog } from '@angular/material/dialog';
import icFilterList from '@iconify/icons-ic/twotone-filter-list';
import icCloudDownload from '@iconify/icons-ic/twotone-cloud-download';
import { Referenciador } from '../interfaces/referenciador.interface';
import { referenciadoresData } from '../../../../static-data/referenciadores';
import { trackById } from '../../../../@vex/utils/track-by';
import icSearch from '@iconify/icons-ic/twotone-search';
import { stagger40ms } from '../../../../@vex/animations/stagger.animation';
import { fadeInUp400ms } from '../../../../@vex/animations/fade-in-up.animation';
import { scaleFadeIn400ms } from '../../../../@vex/animations/scale-fade-in.animation';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import theme from '../../../../@vex/utils/tailwindcss';

@Component({
  selector: 'vex-referenciador-grid',
  templateUrl: './referenciador-grid.component.html',
  styleUrls: ['./referenciador-grid.component.scss'],
  animations: [
    scaleIn400ms,
    fadeInRight400ms,
    stagger40ms,
    fadeInUp400ms,
    scaleFadeIn400ms
  ]
})
export class ReferenciadorGridComponent implements OnInit {

  referenciador = referenciadoresData;
  filteredReferenciador$ = this.route.paramMap.pipe(
    map(paramMap => paramMap.get('activeCategory')),
    map(activeCategory => {
      switch (activeCategory) {
        case 'all': {
          return referenciadoresData;
        }

        case 'starred': {
          return referenciadoresData.filter(c => c.starred);
        }

        default: {
          return [];
        }
      }
    })
  );

  links: Link[] = [
    {
      label: 'ALL CONTACTS',
      route: '../all'
    },
    {
      label: 'FREQUENTLY CONTACTED',
      route: '../frequent'
    },
    {
      label: 'STARRED',
      route: '../starred'
    }
  ];

  icSearch = icSearch;
  icPersonAdd = icPersonAdd;
  icCloudDownload = icCloudDownload;
  icFilterList = icFilterList;
  icContacts = icContacts;


  trackById = trackById;
  theme = theme;

  constructor(private dialog: MatDialog,
    private route: ActivatedRoute) { }

  ngOnInit() { }

  openReferenciador(id?: Referenciador['id']) {
    this.dialog.open(ReferenciadorEditComponent, {
      data: id || null,
      width: '600px'
    });
  }

  toggleStar(id: Referenciador['id']) {
    const referenciador = referenciadoresData.find(c => c.id === id);

    if (referenciador) {
      referenciador.starred = !referenciador.starred;
    }
  }
}
