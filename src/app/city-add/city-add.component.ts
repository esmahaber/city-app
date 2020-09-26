import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder} from "@angular/forms";
import {Cities} from '../models/city';
import { AlertifyService } from '../services/alertify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-city-add',
  templateUrl: './city-add.component.html',
  styleUrls: ['./city-add.component.css']
})
export class CityAddComponent implements OnInit {

  constructor( private formBuilder: FormBuilder,
    private alertifyService : AlertifyService,
    private router : Router
    ) { }

  city = [];
  cityAddForm: FormGroup;

  //City form control
  createCityForm(){
    this.cityAddForm = this.formBuilder.group({
      name:["", Validators.required],
      description: ["", Validators.required]
    })
  }

  ngOnInit(): void {
    this.createCityForm();
    console.log(Cities);
  }

  add(){
    if(this.cityAddForm.valid){
      //city get push
      this.city = Object.assign({id:5}, this.cityAddForm.value);
      //user id'sine göre ekleme yapılması gereken işlemler gelecek
      Cities.push(this.city);
      this.alertifyService.success("Şehir başarılı bir şekilde eklendi");
      this.router.navigateByUrl('/cityDetail/1');
    }
  }

}
