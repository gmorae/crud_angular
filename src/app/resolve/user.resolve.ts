import { Resolve } from '@angular/router';
import { Injectable } from '@angular/core';
import { ListService } from '../services/list.service';

@Injectable({providedIn: 'root'})
export class ListResolve implements Resolve<any> {

    constructor(private _service: ListService) {}

    resolve() {
        return this._service.getUsers()
    }
}
