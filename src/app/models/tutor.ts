export class Tutor{
    TutorInfo=Object({ 
        Name: String,
        Ava: String,
        Direct: String,
        Gender: String,
        DOB: String,
        CCCD: String,
        PhoneNumber: String,
        Exp: String,
        Degree: String,
        Education: String,
        Majoy: String
    });
    LearnerFinding=Object({
    Caphoc: String,
    Subject: String,
    LearnerGender: String,
    Location: String,
    TeachingTime: String,
    Schedule: String,
    Fee: String,
    Other: String
     })
    
    constructor(){
        this.TutorInfo.Name="";
        this.TutorInfo.Ava="";
        this.TutorInfo.Direct="";
        this.TutorInfo.Gender="";
        this.TutorInfo.DOB="";
        this.TutorInfo.CCCD="";
        this.TutorInfo.PhoneNumber="";
        this.TutorInfo.Exp="";
        this.TutorInfo.Degree="";
        this.TutorInfo.Education="";
        this.TutorInfo.Majoy="";

        this.LearnerFinding.Caphoc="";
        this.LearnerFinding.LearnerGender="";
        this.LearnerFinding.Subject="";
        this.LearnerFinding.Location="";
        this.LearnerFinding.TeachingTime="";
        this.LearnerFinding.Schedule="";
        this.LearnerFinding.Fee="";
        this.LearnerFinding.Other="";
     }
}
