//JavaScript Classes
//Declaring classes

class person {
    constructor(id,name)
    {
        this.id = id;
        this.name = name;
    }
    detail()
    {
        document.writeln(this.id + " " + this.name + "<br>")
    }
}
var e1 = new person(101, "Tobi");
e1.detail();



class person1 {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    detail() {
        document.writeln(this.id + " " + this.name)
    }
}
var det = new person1(200129034, "Tobiloba");
det.detail();



class new_info {
    constructor(name, age, height, id, occupation) {
        this.name = name;
        this.age = age;
        this.height = height;
        this.id = id;
        this.occupation = occupation;
    }
    detaill() {
        document.writeln(this.name + " " + this.age + "<br/> " + this.height + " " + this.id +
        " " + this.occupation + "<br/>")
    }
}
var dett = new new_info("tobiloba osoba", 19, 6.1, 200129034, "student" + "<br/>");
dett.detaill();


class user {
    constructor(name, number) {
        this.name = name;
        this.number = number;
    }
    detail() {
        document.writeln(this.name + " " + this.number);
    }
}
var opp = new user("tobi", 123456789101112131415617181920212223242526272829);
opp.detail();

document.write("<br>")

class on {
    constructor(one,two) {
        this.one = one;
        this.two = two;
    }
    details() {
        document.writeln(this.one + " " + this.two);
    }
}
var onn = new on(1, 2)
onn.details();