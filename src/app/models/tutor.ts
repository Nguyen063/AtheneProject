export class Tutor{
    LearnerInfo=Object({ 
        Name: String,
        Ava: String,
        Direct: String,
        Gender: String,
        DOB: String,
        CCCD: String,
        PhoneNumber: String});
    TutorFinding=Object({
    Level: String,
    TutorGender: String,
    class: String,
    Subject: String,
    Location: String,
    Education: String,
    TeachingTime: String,
    Schedule: String,
    Request: String, 
    Fee: String,
    Other: String
        })
    
     constructor( ){
      this.LearnerInfo.Name="";
      this.LearnerInfo.Ava="";
      this.LearnerInfo.Direct="";
      this.LearnerInfo.Gender="";
      this.LearnerInfo.DOB="";
      this.LearnerInfo.CCCD="";
      this.LearnerInfo.PhoneNumber="";
     this.TutorFinding.Level="";
             this.TutorFinding.TutorGender="";
             this.TutorFinding.class="";
             this.TutorFinding.Subject="";
             this.TutorFinding.Location="";
             this.TutorFinding.Education="";
             this.TutorFinding.TeachingTime="";
             this.TutorFinding.Schedule="";
             this.TutorFinding.Request="";
             this.TutorFinding.Fee="";
             this.TutorFinding.Other="";
     }
}
