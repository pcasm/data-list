import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import screenings from '../../assets/screenings.json';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {FormControl} from '@angular/forms';
import {Row, SeverityLevel} from '../models/models';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, AfterViewInit {
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  dataSource = new MatTableDataSource();
  displayedColumns: string[] = [];
  nameFilter = new FormControl('');
  countryCheckSeverityFilter = new FormControl('');
  filterValues = {name: '', country_check_severity: ''};
  SeverityLevel = SeverityLevel;
  reducedTableRows = [
    'name',
    'created',
    'modified',
    'country_check_severity',
  ];
  allTableRows = [
    'url',
    'company_blacklists',
    'port_blacklists',
    'country_blacklists',
    'ship_blacklists',
    'id',
    'created',
    'modified',
    'name',
    'company_check_prior_months',
    'company_check_prior_months_severity',
    'company_check_severity',
    'company_check_severity_technical_manager',
    'company_check_severity_technical_manager_sdn',
    'company_check_severity_technical_manager_generic',
    'company_check_severity_group_beneficial_owner',
    'company_check_severity_group_beneficial_owner_sdn',
    'company_check_severity_group_beneficial_owner_generic',
    'company_check_severity_ship_manager',
    'company_check_severity_ship_manager_sdn',
    'company_check_severity_ship_manager_generic',
    'company_check_severity_operator',
    'company_check_severity_operator_sdn',
    'company_check_severity_operator_generic',
    'company_check_severity_registered_owner',
    'company_check_severity_registered_owner_sdn',
    'company_check_severity_registered_owner_generic',
    'country_check_severity'
  ];
  showingDetails = false;
  selectedRow: Row;

  constructor() {
    this.dataSource.data = screenings.results;
    this.dataSource.filterPredicate = this.tableFilter();
    this.countryCheckSeverityFilter.setValue('');
    this.displayedColumns = this.reducedTableRows;
  }

  ngOnInit() {
    this.nameFilter.valueChanges
      .subscribe(
        name => {
          this.filterValues.name = name;
          this.dataSource.filter = JSON.stringify(this.filterValues);
        }
      );
    this.countryCheckSeverityFilter.valueChanges
      .subscribe(
        severity => {
          this.filterValues.country_check_severity = severity;
          this.dataSource.filter = JSON.stringify(this.filterValues);
        }
      );
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  tableFilter(): (data: any, filter: string) => boolean {
    const filterFunction: (data, filter) => boolean = (data, filter) => {
      const searchTerms = JSON.parse(filter);
      return data.country_check_severity.indexOf(searchTerms.country_check_severity) !== -1
        && data.name.indexOf(searchTerms.name) !== -1;
    };
    return filterFunction;
  }

  showDetails(row: Row) {
    this.selectedRow = row;
    this.showingDetails = true;
  }

}
