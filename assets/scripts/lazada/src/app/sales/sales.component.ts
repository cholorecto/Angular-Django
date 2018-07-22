import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

import { ITEM_API_URL } from '../constants/endpoints';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {

  items: any[] = [];
  itemForm: FormGroup;

  constructor(private http:HttpClient,
              private fb:FormBuilder) { 
      this.createForm()
  }

  createForm() {
      this.itemForm = this.fb.group({
          name: ['', Validators.required],
          description: ['', Validators.required],
          quantity: ['', Validators.required],
          price: ['', Validators.required]
      })
  }

  onSubmit() {
    this.http.post(ITEM_API_URL(),this.itemForm.value)
        .subscribe(
          result => {
            console.log(result);
          },
          error => {
            console.log(error);
          }
         )
  }

  ngOnInit() {
    this.http.get(ITEM_API_URL())
        .subscribe(
            (result:any[]) => {
                this.items = result;
                console.log(this.items);
            },
            error => {
                console.log(error, 'error');
            }
        )
  }
}
