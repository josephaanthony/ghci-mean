//import { Observable } from 'rxjs/observable';
//import { HttpUtil } from './util/http.util'

//Observable.prototype.mapJson = (res) => res.json();

declare module 'rxjs/observable' {
    interface Observable<T> {
        mapJson: Observable<T>;
    }
}