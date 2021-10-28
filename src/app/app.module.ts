import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ChartComponent, ChartModule } from '@syncfusion/ej2-angular-charts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryService, LegendService, TooltipService } from '@syncfusion/ej2-angular-charts';
import { DataLabelService, LineSeriesService} from '@syncfusion/ej2-angular-charts';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartModule
  ],
  providers: [CategoryService, LegendService, TooltipService, DataLabelService, LineSeriesService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
