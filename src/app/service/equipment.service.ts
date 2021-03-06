import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { map, retry } from 'rxjs/operators';

export interface Equipment {
  active: boolean,
  description: string,
  manufacturer: string,
  model_number: string,
  serial_number: string,
  equipment_type: string
}

@Injectable({
  providedIn: 'root'
})
export class EquipmentService {
  private url: string = `${environment.apiUrl}/equipment`;

  constructor(private httpClient: HttpClient) { }

  getAllEquipment() {
    return this.httpClient.get(this.url)
      .pipe(
        map((equipmentObject: Object) => {
          return <Equipment[]> equipmentObject;
        }),
        retry(3)
      );
  }
}
