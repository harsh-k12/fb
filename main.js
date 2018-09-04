// defining a class
var Facebook = /** @class */ (function () {
    function Facebook(name, designation, bio, currentCity, homeTown, mobNum, bday, age, gender, favQuote) {
        var _this = this;
        this.name = name;
        this.designation = designation;
        this.bio = bio;
        this.currentCity = currentCity;
        this.homeTown = homeTown;
        this.mobNum = mobNum;
        this.bday = bday;
        this.age = age;
        this.gender = gender;
        this.favQuote = favQuote;
        this.getName = function () {
            return _this.name;
        };
        this.getHomeTown = function () {
            return _this.homeTown;
        };
        this.getMobNum = function () {
            return _this.mobNum;
        };
        this.getBDay = function () {
            return _this.bday;
        };
        this.getGender = function () {
            return _this.gender;
        };
        this.getFavQuote = function () {
            return _this.favQuote;
        };
        this.name = name;
        this.designation = designation;
        this.bio = bio;
        this.currentCity = currentCity;
        this.homeTown = homeTown;
        this.mobNum = mobNum;
        this.bday = bday;
        this.age = age;
        this.gender = gender;
        this.favQuote = favQuote;
        this.designation = designation;
    } // end constructor
    return Facebook;
}());
var details = new Facebook("HARSH", "Student", "Do whatever you wanted to do.", "Ghaziabad", "Nawada,Bihar.", 9999999999, "12th March,1999", 19, "MALE", "Born To Die");
console.log("My name is " + details.getName());
console.log("I am a " + details.designation);
console.log("BIO:-> " + details.bio);
console.log("Presently I am " + details.designation);
console.log("Presently i live in " + details.currentCity);
console.log("Home town is " + details.getHomeTown());
console.log("Contact number :-> " + details.getMobNum());
console.log("Birthdate:-> " + details.getBDay());
console.log("Age:-> " + details.age);
console.log("Gender:-> " + details.getGender());
console.log("Fav Quote:-> " + details.getFavQuote());
