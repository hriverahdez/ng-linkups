import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  AfterViewInit
} from "@angular/core";
import {
  MatTableDataSource,
  MatPaginator,
  MatPaginatorIntl
} from "@angular/material";
import { Institution } from "../../models/institution.model";
import { DialogService } from "../../../@shared/services";
import { CustomPaginator } from "../../utils/custom-paginator";

import { InstitutionDetailComponent } from "../institution-detail/institution-detail.component";

@Component({
  selector: "lnk-institution-list",
  templateUrl: "./institution-list.component.html",
  styleUrls: ["./institution-list.component.scss"],
  providers: [{ provide: MatPaginatorIntl, useClass: CustomPaginator }]
})
export class InstitutionListComponent implements OnInit, AfterViewInit {
  @Input() showLineNumber: boolean;
  @Input() institutions: Institution[];
  @Output() onDelete = new EventEmitter<Institution>();

  displayedColumns = ["category", "name", "wan", "lan", "actions"];
  dataSource: MatTableDataSource<Institution>;

  paginatorConfig = {
    pageSize: 10,
    pageSizeOptions: [5, 10, 20],
    showFirstLasButtons: true
  };

  @ViewChild(MatPaginator) paginator: MatPaginator;

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

  constructor(private dialogService: DialogService) {}

  ngOnInit() {
    this.dataSource = new MatTableDataSource<Institution>(this.institutions);
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  showDetail(institution: Institution) {
    this.dialogService.customDialogComponent(InstitutionDetailComponent, {
      width: "80%",
      data: institution
    });
  }

  delete(institution: Institution) {
    this.dialogService
      .confirm("¿Desea eliminar esta institución?")
      .subscribe(
        dialogResult => (dialogResult ? this.onDelete.emit(institution) : false)
      );
  }
}
