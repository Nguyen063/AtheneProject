import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-learner',
  templateUrl: './form-learner.component.html',
  styleUrls: ['./form-learner.component.css']
})
export class FormLearnerComponent implements OnInit {
  public form:any;
  constructor(private _formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.form=this._formBuilder.group({
      ho:['', Validators.required],
      ten:['', Validators.required],
      thanhpho:['', Validators.required],
      sonha:['', Validators.required],
      duong:['', Validators.required],
      phuong:['', Validators.required],
      quan:['', Validators.required],
      dob:['', Validators.required],
      //salary:['',  [Validators.required, Validators.pattern("^[0-9]*$")]],
      phone:['',[Validators.required, Validators.maxLength(10), Validators.minLength(10), Validators.pattern(/((09|03|07|08|05)+[0-9]{8}\b)/g)]],
      ngaycap:['', Validators.required],
      cccd:['',[Validators.required, Validators.maxLength(12), Validators.minLength(12), Validators.pattern(/((0)+[0-9]{11}\b)/g)]]
  }
  )}
  // Get input phone
 get phone(){
  return this.form.controls['phone']}

  // Get input cccd
 get cccd(){
  return this.form.controls['cccd']}
  
  //Submit form
  onSubmit() {
  
    // stop here if form is invalid
    if (this.form.invalid) {
        return console.log(this.form.value)
    }
    alert('Bạn đã đăng kí thành công tài khoản, vui lòng đăng nhập lại ^_^')
   
  }
  
}
