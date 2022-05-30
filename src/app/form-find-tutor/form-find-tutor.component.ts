import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-find-tutor',
  templateUrl: './form-find-tutor.component.html',
  styleUrls: ['./form-find-tutor.component.css']
})
export class FormFindTutorComponent implements OnInit {

  public form:any;
  Profession: Array<any>=[
    {name:'Giáo viên', value:'giaovien'},
    {name:'Sinh viên', value:'sinhvien'}, 
  ]

  Gender: Array<any>=[
    {name:'Nam', value:'nam'},
    {name:'Nữ', value:'nu'}, 
  ]
  constructor(private _formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.form=this._formBuilder.group({
      subject:['', Validators.required],
      grade:['', Validators.required],
     
      sonha:['', Validators.required],
      duong:['', Validators.required],
      phuong:['', Validators.required],
      quan:['', Validators.required],
      time:['', Validators.required],
      salary:['',  [Validators.required, Validators.pattern("^[0-9]*$")]],
      schedule:['', Validators.required],
      checkArray: this._formBuilder.array([],[Validators.required]),
      checkArray1: this._formBuilder.array([],[Validators.required])
    })
  }

  onCheckboxChange(data:any){
    const checkArray:FormArray=this.form.get('checkArray') as FormArray;
    if(data.target.checked){
      checkArray.push(new FormControl(data.target.value));
    }
    else{
      let i:number=0;
      checkArray.controls.forEach((item:any)=>{
        if(item.value==data.target.value){
          checkArray.removeAt(i);
          return;
        }
        i++;
      });
    }
  }
  
  onCheckboxChange1(data:any){
    const checkArray1:FormArray=this.form.get('checkArray1') as FormArray;
    if(data.target.checked){
      checkArray1.push(new FormControl(data.target.value));
    }
    else{
      let i:number=0;
      checkArray1.controls.forEach((item:any)=>{
        if(item.value==data.target.value){
          checkArray1.removeAt(i);
          return;
        }
        i++;
      });
    }
  }
  onSubmit() {
  
    // stop here if form is invalid
    if (this.form.invalid) {
        return console.log(this.form.value)
    }
    alert('SUCCESS!! ^_^')
   
  }
  
}
