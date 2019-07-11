import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {GithubApi} from '../table-example.models';

@Injectable({
  providedIn: 'root'
})
export class TableExampleService {

  constructor(private httpClient: HttpClient) {
  }

  getRepoIssues(sort: string, order: string, page: number): Observable<GithubApi> {
    const href = 'https://api.github.com/search/issues';
    const requestUrl =
      `${href}?q=repo:angular/components&sort=${sort}&order=${order}&page=${page + 1}`;
    return this.httpClient.get<GithubApi>(requestUrl);
  }
}
