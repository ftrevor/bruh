import { Injectable  } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class SharedReportsService {
    private reportsData = new BehaviorSubject<any[]>([]);

    array$ = this.reportsData.asObservable();

    setArray(value: any[]): void {
        this.reportsData.next(value);
    }

    addToArray(item: any[]): void {
        const curArray = this.reportsData.value;
        this.reportsData.next([...curArray, item]);
    }

}
