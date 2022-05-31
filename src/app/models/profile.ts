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
    Exps=Object({
      exp1: String,
      exp2: String,
      exp3: String,
    });
    Achievements=Object({
      ach1: String,
      ach2: String,
      ach3: String,
    })
 

     constructor(){
         this._id="";
         this.name="";
         this.followers="";
         this.direct="";
         this.gender="";
         this.subject="";
         this.fee="";
         this.education="";
         this.bio="";
         this.dob="";
         this.wentTo="";
         this.class="";
         this.learnerGender="";
         this.teachingLocation="";
         this.teachingTime="";
         this.timeTable="";
         this.Exps.exp1="";
         this.Exps.exp2="";
         this.Exps.exp3="";
         this.Achievements.ach1="";
         this.Achievements.ach2="";
         this.Achievements.ach3="";
        this.more="";

     }
}