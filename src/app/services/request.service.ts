import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class RequestService {

    constructor(
        private http: HttpClient
    ) { }

    getUsers(url: string) {
        return this.http.get(`${environment.apiUrl}/${url}`)
    }

}
