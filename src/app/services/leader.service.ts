import { Injectable } from '@angular/core';
import { Observable} from 'rxjs/Observable';
import { RestangularModule, Restangular } from 'ngx-restangular';

import { Leader } from '../shared/leader';

import 'rxjs/add/observable/of';

@Injectable()
export class LeaderService {

  constructor(private restangular: Restangular) { }

 /* getLeaders(): Observable<Leader[]> {
    return Observable.of(LEADERS).delay(2000);
  }

  getFeaturedLeader(): Observable<Leader> {
    return Observable.of(LEADERS.filter((leader) => leader.featured)[0]).delay(2000);
  }*/

  getLeaders(): Observable<Leader[]> {
    return this.restangular.all('leaders').getList();
  }

  getFeaturedLeader(): Observable<Leader> {
    return this.restangular.all('leaders').getList({featured: true})
      .map(leader => leader[0]);
  }

}
