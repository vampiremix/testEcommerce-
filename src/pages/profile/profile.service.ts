import { Injectable } from "@angular/core";
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import { profileModel } from "./profile.model";



@Injectable()
export class ProfileService {
    constructor(public http: Http) { }

    getData(): Promise<profileModel> {
        return this.http.get('./assets/example_data/profile.json')
            .toPromise()
            .then(response => response.json() as profileModel)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

}
