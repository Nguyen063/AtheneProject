export class Profile{
  getProfiles() {
    throw new Error('Method not implemented.');
  }
    _id: any;
    name: string;
    followers: string="";
    direct: string="";
    gender: String="";
   subject: String="";
    fee: String="";
    education: String="";
    bio: String="";  
    dob: String="";
    wentTo: String="";
    major: String="";   
    class: String="";
    learnerGender: String="";
    teachingLocation: String="";
    teachingTime: String="";
    timeTable: String="";
    more: String="";
    //Exps:Array=[exp1,exp2]
    //Exps=[{exp1:string="", exp2:string, exp3:string}];
   // Achievements:[ach1:string,ach2:string,ach3:string]

     constructor(){
         this._id="";
         this.name="";

     }
}