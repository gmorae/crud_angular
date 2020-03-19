import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  data: any
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this.data = this._activatedRoute.snapshot.data.list
  }

  deleteItem =id => {
    console.log(id);
  }

  editItem =id => {
    this._router.navigate([`/${id}/update`])
  }

}
