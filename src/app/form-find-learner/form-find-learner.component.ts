import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-find-learner',
  templateUrl: './form-find-learner.component.html',
  styleUrls: ['./form-find-learner.component.css']
})
export class FormFindLearnerComponent implements OnInit {

  public form:any;

  Levels: Array<any>=[
    {name:'Cấp I', value:'cap1'},
    {name:'Cấp II', value:'cap2'},
    {name:'Cấp III', value:'cap3'},
  ]

  Gender: Array<any>=[
    {name:'Nam', value:'nam'},
    {name:'Nữ', value:'nu'}, 
  ]
  constructor(private _formBuilder:FormBuilder) { 
  
  }

  ngOnInit(): void {
    this.form=this._formBuilder.group({
      subject:['', Validators.required],
      khuvuc:['', Validators.required],
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
