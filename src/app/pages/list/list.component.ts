import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  data: any
  constructor(
    private _activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.data = this._activatedRoute.snapshot.data.list
  }

}
