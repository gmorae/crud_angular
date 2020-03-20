import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  form: FormGroup
  
  constructor(
    private _fb: FormBuilder,
    private _router: Router
  ) { }

  ngOnInit() {
    this.createForm()    
  }

  createForm = () => {
    this.form = this._fb.group({
      nome: '',
      cargo: '',
      perfilGit: '',
    })
  }

  onSubmit = () => {
    console.log(this.form.value);
    this._router.navigate(['/list'])
  }
}
