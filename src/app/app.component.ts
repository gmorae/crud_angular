import { Component } from '@angular/core';
import { TitleService } from './services/title.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    private _titleService: TitleService
  ) { }

  ngOnInit() {
    this._titleService.startTrackingRouteEvent()
  }
}
