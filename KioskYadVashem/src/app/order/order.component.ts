import { Component, OnInit } from '@angular/core';
import { ResultService } from '../result.service';
import { MatDialogRef } from '@angular/material';
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  numOfPerson: number | null = null;
  selectedHour:string |null=null;
  constructor(private resultService: ResultService, public dialogRef: MatDialogRef<OrderComponent>) { }

  ngOnInit(): void {
    this.numOfPerson = this.resultService.getNumOfPerson();
    this.selectedHour=this.resultService.getSelectedHour();

  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
