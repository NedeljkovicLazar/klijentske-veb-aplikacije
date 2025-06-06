import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FlightModel } from '../../models/flight.model';
import { FlightService } from '../../services/flight.service';
import { NgIf } from '@angular/common';
import { UtilsService } from '../../services/utils.service';
import { LoadingComponent } from "../loading/loading.component";
import { MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import { SafePipe } from "../safe.pipe";

@Component({
  selector: 'app-details',
  imports: [NgIf, LoadingComponent, MatCardModule, MatListModule, MatButtonModule, SafePipe],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {

  public flight: FlightModel | null = null

  public constructor(private route: ActivatedRoute, public utils: UtilsService) {
    route.params.subscribe(params=>{
      console.log(params)
      FlightService.getFlightById(params['id'])
      .then(rsp => {
        this.flight = rsp.data
      })
    })
  }

  public generateMapLink(){
    return `https://www.google.com/maps?output=embed&q=${this.flight?.destination}`
  }
}
