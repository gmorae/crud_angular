import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { FormService } from 'src/app/services/form.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  form: FormGroup

  constructor(
    private _fb: FormBuilder,
    private _router: Router,
    private _service: FormService
  ) { }

  ngOnInit() {
    this.createForm()
  }

  createForm = () => {
    this.form = this._fb.group({
      nome: ['', Validators.required],
      cargo: ['', Validators.required],
      perfilGit: ['', Validators.required],
    })
  }

  onSubmit = () => {
    if (this.form.valid) {
      this._service.create(this.form.value)
      this._router.navigate(['/list'])
    } else {
      console.log('preencha os campos');
    }

  }
}
