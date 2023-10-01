class logClass {
    constructor(){
        // In the first time creating the static variable called instance and checking if it's null then assign the object that has been created and storing the reference of that object into the static variable called instance and returning it.
        if(logClass.instance == null){
            this.logs = [];
            logClass.instance = this;
        }
        return logClass.instance;
    }
    addLogs(){
        this.logs.push("log added")
    }
    printLogs(){
        console.log(this.logs)
    }
}

let singleObject = new logClass();

// Freezing the object so that anyone importing this object cannot modify or delete any property of this object
Object.freeze(singleObject)

export default singleObject;
