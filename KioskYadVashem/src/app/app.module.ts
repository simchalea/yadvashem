import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterLink,RouterModule,Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TicketsComponent } from './tickets/tickets.component';
import { OrderComponent } from './order/order.component';
import { MatSlideToggleModule } from '@angular/material';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatChipsModule} from '@angular/material/chips';
import { MatButtonModule } from '@angular/material';
import { MatInputModule } from '@angular/material';


const appRoutes: Routes = [

  {path:'tickets',component:TicketsComponent},
  {path:'order',component:OrderComponent}
];

@NgModule({
  declarations: [
    AppComponent,
  
    TicketsComponent,
    OrderComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSlideToggleModule,
    MatButtonToggleModule,
    MatCardModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatChipsModule,
    MatButtonModule,
    MatInputModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
