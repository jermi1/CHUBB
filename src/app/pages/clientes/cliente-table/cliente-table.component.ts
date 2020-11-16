import { Component, OnInit } from '@angular/core';
import icPeople from '@iconify/icons-ic/twotone-people';
import icSearch from '@iconify/icons-ic/twotone-search';
import icStar from '@iconify/icons-ic/twotone-star';
import icMenu from '@iconify/icons-ic/twotone-menu';
import icFilterList from '@iconify/icons-ic/twotone-filter-list';
import icCloudDownload from '@iconify/icons-ic/twotone-cloud-download';
import { scaleIn400ms } from '../../../../@vex/animations/scale-in.animation';
import { fadeInRight400ms } from '../../../../@vex/animations/fade-in-right.animation';
import { TableColumn } from '../../../../@vex/interfaces/table-column.interface';
import { clientesData } from '../../../../static-data/clientes';
import { Cliente } from '../interfaces/cliente.interface';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { stagger40ms } from '../../../../@vex/animations/stagger.animation';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';



import { TableFilterComponent } from '../../../shared/components/table-filter/table-filter.component';

// import { Usuario } from '../../../models/usuario.model';
// import { UsuarioService } from '../../../services/usuario.service';


@Component({
    selector: 'vex-cliente-table',
    templateUrl: './cliente-table.component.html',
    animations: [
        stagger40ms,
        scaleIn400ms,
        fadeInRight400ms
    ]
})
export class ClienteTableComponent implements OnInit {


    // usuarios: Usuario[] = [];
    // usuarioEncontrado: Usuario;


    searchCtrl = new FormControl();

    searchStr$ = this.searchCtrl.valueChanges.pipe(
        debounceTime(10)
    );

    menuOpen = false;

    activeCategory: 'frequently' | 'starred' | 'all' | 'family' | 'friends' | 'colleagues' | 'business' = 'all';
    tableData = clientesData;
    tableColumns: TableColumn<Cliente>[] = [
        // {
        //     label: '',
        //     property: 'seleccionado',
        //     type: 'checkbox',
        //     cssClasses: ['w-6']
        // },
        {
            label: 'NOMBRE',
            property: 'nombre',
            type: 'clientName',
            cssClasses: ['font-medium', 'w-24']
        },
        {
            label: 'PERSONA CONTACTO',
            property: 'padreText',
            type: 'text',
            cssClasses: ['w-20']
        },
        {
            label: 'CONTACTO',
            property: 'email',
            type: 'contact',
            cssClasses: ['w-20']
        },
        {
            label: 'ETIQUETAS',
            property: 'etiquetas',
            type: 'badge',
            cssClasses: ['text-secondary', 'w-10']
        },
        {
            label: '',
            property: 'vip',
            type: 'button',
            cssClasses: ['text-secondary', 'w-10']
        },
        {
            label: '',
            property: 'menu',
            type: 'button',
            cssClasses: ['text-secondary', 'w-10']
        },
    ];

    icStar = icStar;
    icSearch = icSearch;
    icPeople = icPeople;
    icMenu = icMenu;
    icFilterList = icFilterList;
    icCloudDownload = icCloudDownload;

    // constructor(private dialog: MatDialog, private router: Router, private usuarioservice: UsuarioService) { }
    constructor(private dialog: MatDialog, private router: Router) { }

    ngOnInit() {

     

    }

    rowClick(id?: Cliente['id']) {
        this.router.navigate(['/clientes/' + id]);
    }

    setData(data: Cliente[]) {
        this.tableData = data;
        this.menuOpen = false;
    }

    openMenu() {
        this.menuOpen = true;
    }

    openTableFilter() {
    
        this.dialog.open(TableFilterComponent, {
              width: '450px'
        });
      }

}
