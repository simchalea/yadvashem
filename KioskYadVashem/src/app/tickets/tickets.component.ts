import { Component, OnInit } from '@angular/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import hoursData from '../../assets/hours.json';
import { ResultService } from '../result.service';
import {MatButtonModule} from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { MatDialog } from '@angular/material';
import { DatePipe } from '@angular/common';
import { OrderComponent } from '../order/order.component';

interface Hours{
  startTime:string;
  availablePlaces:number;
  isCloded:boolean;
}
enum partOfDay {
  morning,
  afternon,
  evening
}
@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css'],
  providers:[DatePipe]
})

export class TicketsComponent implements OnInit {
  
  constructor(private resultService: ResultService,private dialog:MatDialog,private datePipe:DatePipe) { 
    
  }

  ngOnInit(): void {
    this.availablePlaces();
    
  }
  myDate = new Date();
numOfPerson:number=0
selectedHour:string="";  
selected:partOfDay=0;
hours:Hours[]=hoursData;
open:number=0;
close:number=21;
morn:number=21; 
aftno:number=39;
ticketsLeft:number=0
availablePlaces(){
  this.hours.forEach(element => {this.ticketsLeft+=element.availablePlaces});
}
minus(){
this.numOfPerson--;
}
plus(){
this.numOfPerson++;
}
getHour(h:Hours){
  return h.startTime.slice(0,1)
}
getMinute(h:Hours){
  return h.startTime.slice(3,4)
}
getOpen(){
  return this.open
}
getClose(){
  return this.close
}
 
selectPartDay(p:number){
  if(p==0){
    this.open=0
    this.close=this.morn;
  }
  else if(p==1){
    this.open=this.morn
    this.close=this.aftno
    }
  else if(p==2){
    this.open=this.aftno;
    this.close=this.hours.length;
  }
}
selectHour(staratTime:string){
  this.selectedHour=staratTime;
  console.log("number of person "+this.numOfPerson)


}
showSelected(){
  this.resultService.setNumOfPerson(this.numOfPerson);
  this.resultService.setSelectedHour(this.selectedHour);
  const dialogRef = this.dialog.open(OrderComponent);
}
}

 
  
 

