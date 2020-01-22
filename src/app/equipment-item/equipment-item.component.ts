import { Component, Input } from '@angular/core';
import { Equipment } from '../service/equipment.service';

@Component({
  selector: 'app-equipment-item',
  templateUrl: './equipment-item.component.html',
  styleUrls: ['./equipment-item.component.css']
})
export class EquipmentItemComponent {
  selected = false;
  @Input('equipmentItem') equipmentItem: Equipment;

  onClick() {
    this.selected = !this.selected;
  }
}