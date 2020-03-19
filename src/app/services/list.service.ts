import { Injectable } from '@angular/core';
import { RequestService } from './request.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UsersModel } from '../Model/Users.model';

@Injectable({
    providedIn: 'root'
})

export class ListService {

    constructor(
        private _request: RequestService
    ) { }

    getUsers(): Observable<Array<UsersModel>> {
        return this._requestUsers().pipe(
            map((res: any) => {                
                return res;
            })
        );
    }

    private _requestUsers() {
        return this._request.getUsers('users');
    }
    
}
