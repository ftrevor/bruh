import { Injectable  } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class SharedPSRService {
    private PsrData = new BehaviorSubject<any[]>([]);

    array$ = this.PsrData.asObservable();

    setArray(value: any[]): void {
        this.PsrData.next(value);
    }

    addToArray(item: any[]): void {
        const curArray = this.PsrData.value;
        this.PsrData.next([...curArray, item]);
    }

}
