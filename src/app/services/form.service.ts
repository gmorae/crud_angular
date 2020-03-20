import { Injectable } from '@angular/core';
import { RequestService } from './request.service';
import { map } from 'rxjs/operators';
@Injectable({
    providedIn: 'root'
})
export class FormService {

    constructor(
        private _request: RequestService
    ) { }

    create = user => {
        this._requestPost(user)        
    }

    private _requestPost = user => {        
        return this._request.postUser('users', user);
    }
}