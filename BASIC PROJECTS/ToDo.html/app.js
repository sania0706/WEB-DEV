let todo = [];
let req = prompt("please enter your request");
while(true){
    if(req =="quit"){
        console.log("quitting app");
        break;
    }
    if(req== "list"){
         console.log("-------------------");
         for(let i= 0; i<todo.length;i++){
            console.log(i,todo[i]);

         }
         console.log("---------------------")
         
    }
    else if ( req=="add"){
        let task = prompt("please enter new task")
        todo.push(task);
        console.log("task added");
    }
    else if(req =="delete"){
        let idx = prompt("enter index");
        todo.splice(idx,1);
        console.log("tasl deleted");
    }
    else{
        console.log("wrong request")
    }
    req= prompt("enter request again")
}