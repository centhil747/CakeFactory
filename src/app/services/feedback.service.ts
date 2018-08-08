import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { RestangularModule, Restangular } from 'ngx-restangular';

import { HttpClient } from '@angular/common/http'

import { Feedback, ContactType } from '../shared/feedback';

import { baseURL } from './../shared/baseUrl';

@Injectable()
export class FeedbackService {

  constructor(private restangular: Restangular, private http: HttpClient,) { }

  postFeedback(feedback:Feedback): Observable<Feedback>{
    return this.restangular.all('feedback').post(feedback);
    // .map((response: Response) => {
    //     return response.json();     
    // });

    //For using await to convert async calls to wait and execute orderly
    // return new Promise((resolve, reject) => {
    //   this.http.post(baseURL + 'feedback', feedback ).subscribe((res) => {
    //     resolve(res);
    //   },err => {
    //     reject(err);
    //   });
    // });
  }
}
