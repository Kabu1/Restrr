import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
// Import ng-circle-progress
import { NgCircleProgressModule } from 'ng-circle-progress';

import { HomePageRoutingModule } from './home-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      // eslint-disable-next-line @typescript-eslint/quotes
      outerStrokeColor: "#78C000",
      // eslint-disable-next-line @typescript-eslint/quotes
      innerStrokeColor: "#C7E596",
      animationDuration: 300
    })
],

  declarations: [HomePage]
})
export class HomePageModule {}
