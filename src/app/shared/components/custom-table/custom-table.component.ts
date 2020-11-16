import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { TableColumn } from '../../../../@vex/interfaces/table-column.interface';
import icStar from '@iconify/icons-ic/twotone-star';
import icStarBorder from '@iconify/icons-ic/twotone-star-border';
import icMoreVert from '@iconify/icons-ic/twotone-more-vert';
import icEdit from '@iconify/icons-ic/twotone-edit';
import icLabelImportant from '@iconify/icons-ic/twotone-label-important';
import icDeleteForever from '@iconify/icons-ic/twotone-delete-forever';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldDefaultOptions } from '@angular/material/form-field';
import { stagger20ms } from '../../../../@vex/animations/stagger.animation';
import { fadeInUp400ms } from '../../../../@vex/animations/fade-in-up.animation';
// import { Cliente } from '../../interfaces/cliente.interface';
import { scaleFadeIn400ms } from '../../../../@vex/animations/scale-fade-in.animation';
import theme from '../../../../@vex/utils/tailwindcss';
import icPhone from '@iconify/icons-ic/twotone-phone';
import icMail from '@iconify/icons-ic/twotone-mail';
import icMap from '@iconify/icons-ic/twotone-map';

@Component({
    selector: 'vex-custom-table',
    templateUrl: './custom-table.component.html',
    styleUrls: ['./custom-table.component.scss'],
    providers: [
        {
            provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
            useValue: {
                appearance: 'standard'
            } as MatFormFieldDefaultOptions
        }
    ],
    animations: [
        stagger20ms,
        fadeInUp400ms,
        scaleFadeIn400ms
    ]
})


export class CustomTableComponent<T> implements OnInit, OnChanges, AfterViewInit {

    @Input() data: T[];
    @Input() columns: TableColumn<T>[];
    @Input() pageSize = 20;
    @Input() pageSizeOptions = [10, 20, 50];
    @Input() searchStr: string;

    // @Output() open: EventEmitter<any> = new EventEmitter();

    @Output() rowClick = new EventEmitter<any>();

    // cliente: Cliente[];

    visibleColumns: Array<keyof T | string>;

    dataSource = new MatTableDataSource<T>();


    @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
    @ViewChild(MatSort, { static: true }) sort: MatSort;

    icMoreVert = icMoreVert;
    icStar = icStar;
    icStarBorder = icStarBorder;
    icDeleteForever = icDeleteForever;
    icEdit = icEdit;
    icLabelImportant = icLabelImportant;
    icPhone = icPhone;
    icMail = icMail;
    icMap = icMap;

    theme = theme;

    constructor() { }

    ngOnInit() { }


    ngOnChanges(changes: SimpleChanges): void {
        if (changes.columns) {
            this.visibleColumns = this.columns.map(column => column.property);
        }

        if (changes.data) {
            this.dataSource.data = this.data;
        }

        if (changes.searchStr) {
            this.dataSource.filter = (this.searchStr || '').trim().toLowerCase();
        }
    }

    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }
}
