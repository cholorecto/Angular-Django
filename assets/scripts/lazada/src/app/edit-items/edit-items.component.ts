import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { StateService } from '@uirouter/angular';

@Component({
  selector: 'app-edit-items',
  templateUrl: './edit-items.component.html',
  styleUrls: ['./edit-items.component.css']
})
export class EditItemsComponent implements OnInit {

  id: number;
  private sub: any;

  constructor(private stateSvc: StateService) { }

  ngOnInit() {
    console.log(this.stateSvc.params, 'RRRR')
  }

}
