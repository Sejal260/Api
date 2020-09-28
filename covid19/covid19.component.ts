import { Component, OnInit } from '@angular/core';
import { countryReports } from 'src/countryReport';
import { Covid19seService } from './covid19se.service';
import {MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-covid19',
  templateUrl: './covid19.component.html',
  styleUrls: ['./covid19.component.css']
})
export class Covid19Component implements OnInit {
 public ELEMENT_DATA="countryReports[]";
displayedColumns:string[]=['country','cases','todayCases','deaths','todayDeaths','recovered','active','critical','casesPerOneMillion','deathsPerOneMillion','totalTests','testsPerOneMillion'];
dataSource=new MatTableDataSource<countryReports>(this.ELEMENT_DATA);
  constructor(private service:Covid19seService) { }

  ngOnInit(){
    this.getAllReports();
  }
public getAllReports(){
  let resp =this.service.covid19Reports();
  resp.subscribe(report=>this.dataSource.data=report as countryReports[] );
}
}
