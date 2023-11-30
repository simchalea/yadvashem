import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResultService {

  constructor() { }
  private selectedHour: string | null = null;
  private numOfPerson:number |null=null;

  setSelectedHour(selectedHour:string |null,): void {
    this.selectedHour = selectedHour;
    
  }
  setNumOfPerson(numOfPerson: number | null){
    this.numOfPerson=numOfPerson;
  }

  getSelectedHour(): string | null {
    return this.selectedHour;
  }
  getNumOfPerson():number | null{
    return this.numOfPerson;

  }
}
