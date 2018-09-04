// defining a class
class Facebook{

    constructor ( 
        private name :string,
        public designation:string,
        public bio:string,
        public currentCity: string,
        private homeTown:string, 
        private mobNum: number, 
        private bday: string, 
        public age:number,
        private gender: string ,
        private favQuote: string,
       
        
    )
    {
        this.name=name
        this.designation=designation
        this.bio=bio
        this.currentCity=currentCity
        this.homeTown=homeTown
        this.mobNum=mobNum
        this.bday=bday
        this.age=age
        this.gender=gender
        this.favQuote=favQuote
        this.designation=designation

    }// end constructor

    getName=()=>{
        return this.name
    }
    getHomeTown=()=>{
        return this.homeTown
    }
    getMobNum=()=>{
        return this.mobNum
    }
    getBDay=()=>{
        return this.bday
    }
    getGender=()=>{
        return this.gender
    }
    getFavQuote=()=>{
        return this.favQuote
    }

}

    let details = new Facebook("HARSH","Student","Do whatever you wanted to do.","Ghaziabad","Nawada,Bihar.",9999999999,"12th March,1999",19,"MALE","Born To Die")
    
    console.log("My name is "+details.getName())
    console.log("I am a "+details.designation)
    console.log("BIO:-> "+details.bio)
    console.log("Presently I am "+details.designation)
    console.log("Presently i live in "+details.currentCity)
    console.log("Home town is "+details.getHomeTown())
    console.log("Contact number :-> "+details.getMobNum())
    console.log("Birthdate:-> "+details.getBDay())
    console.log("Age:-> "+details.age)
    console.log("Gender:-> "+details.getGender())
    console.log("Fav Quote:-> "+details.getFavQuote())
    
    