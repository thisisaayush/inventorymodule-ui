import { Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements AfterViewInit {
  displayedColumns: string[] = ['start', 'end', 'counted_by', 'on_hand_$', 'total_order_$', 'initial_inventory_$', 'cogs_used_$', 'comments'];
  dataSource = new MatTableDataSource<InventoryDetails>(ELEMENT_DATA);

  @ViewChild('paginator') paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

export interface InventoryDetails {
  start: string;
  end: string;
  counted_by: string;
  on_hand_$: string;
  total_order_$: string;
  initial_inventory_$: string;
  cogs_used_$: string;
  comments: string;
}

const ELEMENT_DATA: InventoryDetails[] = [
  { start: '05-13-2022', end: '05-29-2022', counted_by: 'Adam Harp', on_hand_$: '$4,512', total_order_$: '$2,212', initial_inventory_$: '$4,326', cogs_used_$: '$1,207', comments: '' },
  { start: '06-13-2022', end: '06-29-2022', counted_by: 'Tony Stark', on_hand_$: '$1,532', total_order_$: '$4,512', initial_inventory_$: '$4,326', cogs_used_$: '$1,207', comments: '' },
  { start: '01-13-2022', end: '01-29-2022', counted_by: 'Doctor Strange', on_hand_$: '$3,512', total_order_$: '$1,512', initial_inventory_$: '$4,326', cogs_used_$: '$1,207', comments: '' },
  { start: '07-13-2022', end: '07-29-2022', counted_by: 'Peter Parker', on_hand_$: '$2,212', total_order_$: '$1,632', initial_inventory_$: '$4,326', cogs_used_$: '$1,207', comments: '' },
  { start: '08-13-2022', end: '08-29-2022', counted_by: 'Thor Odin', on_hand_$: '$2,814', total_order_$: '$1,452', initial_inventory_$: '$4,326', cogs_used_$: '$1,207', comments: '' },
  { start: '09-13-2022', end: '09-29-2022', counted_by: 'Captain America', on_hand_$: '$3,331', total_order_$: '$2,452', initial_inventory_$: '$4,326', cogs_used_$: '$1,207', comments: '' },
  { start: '10-13-2022', end: '10-29-2022', counted_by: 'HawkEye', on_hand_$: '$2,313', total_order_$: '$2,421', initial_inventory_$: '$4,326', cogs_used_$: '$1,207', comments: '' },
  { start: '11-13-2022', end: '11-29-2022', counted_by: 'Ant Man', on_hand_$: '$1,217', total_order_$: '$1,532', initial_inventory_$: '$4,326', cogs_used_$: '$1,207', comments: '' },
  { start: '12-13-2022', end: '12-29-2022', counted_by: 'Widow', on_hand_$: '$1,532', total_order_$: '$1,739', initial_inventory_$: '$4,326', cogs_used_$: '$1,207', comments: '' },
  { start: '02-13-2022', end: '02-29-2022', counted_by: 'Doctor Octopus', on_hand_$: '$3,922', total_order_$: '$1,532', initial_inventory_$: '$4,326', cogs_used_$: '$1,207', comments: '' },
  { start: '03-13-2022', end: '03-29-2022', counted_by: 'Thanos vs Tony', on_hand_$: '$2,421', total_order_$: '$3,331', initial_inventory_$: '$4,326', cogs_used_$: '$1,207', comments: '' },
  { start: '03-13-2022', end: '03-29-2022', counted_by: 'Batman', on_hand_$: '$2,421', total_order_$: '$3,331', initial_inventory_$: '$4,326', cogs_used_$: '$1,207', comments: '' },
  { start: '03-13-2022', end: '03-29-2022', counted_by: 'Superman', on_hand_$: '$2,421', total_order_$: '$3,331', initial_inventory_$: '$4,326', cogs_used_$: '$1,207', comments: '' },
  { start: '03-13-2022', end: '03-29-2022', counted_by: 'Flash', on_hand_$: '$2,421', total_order_$: '$3,331', initial_inventory_$: '$4,326', cogs_used_$: '$1,207', comments: '' },
  { start: '03-13-2022', end: '03-29-2022', counted_by: 'Aquaman', on_hand_$: '$2,421', total_order_$: '$3,331', initial_inventory_$: '$4,326', cogs_used_$: '$1,207', comments: '' },
];


