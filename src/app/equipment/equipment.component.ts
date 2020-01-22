import { Component, OnInit } from '@angular/core';
import { EquipmentService, Equipment } from '../service/equipment.service';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {
  equipment: Equipment[];

  constructor(private equipmentService: EquipmentService) { }

  ngOnInit() {
    this.equipmentService.getAllEquipment()
      .subscribe(
        (equipmentResponse) => {
          this.equipment = equipmentResponse;    
        },
        (error) => {
          // TODO: add some error handling
        }
      )
  }

}
