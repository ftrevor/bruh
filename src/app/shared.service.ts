import { Injectable  } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class SharedService {
    private defectsData: { [key: string]: any[] } = {};

    setArray(key: string, data: any[]): void {
        this.defectsData[key] = data;
    }

    getData(key: string): any[] {
        return this.defectsData[key] || [];
    }

}
