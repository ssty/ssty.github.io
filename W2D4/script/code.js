
String.prototype.filter = function(badWordsArray){
    if(arguments.length === 1){
        return this.split(/[\s,.!?]+/).filter(word => !(badWordsArray.includes(word))).join(" ");
    }
}

Array.prototype.bubbleSort = function(){
    let len = this.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (this[j] > this[j + 1]) {
                let tmp = this[j];
                this[j] = this[j + 1];
                this[j + 1] = tmp;
            }
        }
    }
    return this;
}


var Person = function(name, age){
    this.name = name;
    this.age = age;
}
Person.prototype.describe = function(){
    return this.name + ", " + this.age + " years old.";
}

var Teacher = function(name, age){
    Person.call(this, name, age);
}
Teacher.prototype = new Person();

Teacher.prototype.teach = function(subject){
    return this.name + " is now teaching " + subject;
}

