import { Component } from '@angular/core';
import { TitleService } from 'src/app/services/title.service';

@Component({
  selector: 'title-page',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent {
  constructor(private _titleService: TitleService) {}

  get title() {
    return this._titleService.title;
  }

  ngOnInit(){
    console.log(this.title);
    
  }
}
