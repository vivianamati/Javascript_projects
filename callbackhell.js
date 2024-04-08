//greetings
//welcome
//presentations
//study
//questions
//bye

function greetings(callback){
    setTimeout(function(){
        console.log("Goodmorning Everyone");
        callback();

    },1000)
}

function welcome(callback){
    setTimeout(function(){
        console.log("Welcome to our Class");
        callback();
    },2000)
}

function presentations(callback){
    setTimeout(function(){
        console.log("We can start our presentations one by one");
        callback();
    },5000)
}

function study(callback){
    setTimeout(function(){
        console.log("Lets get into the class for today");
        callback();
    },6000)
}

function question(callback){
    setTimeout(function(){
        console.log("Have you understood?");
        callback();
    },2000)
}
function bye(callback){
    setTimeout(function(){
        console.log("See you tommorow");
        callback();
    },500)
}
//callback hell
greetings(function(){
    welcome(function(){
        presentations(function(){
            study(function(){
                question(function(){
                    bye(function(){
                        console.log("Class is over!")

                    })
                })
            })
        })
    })
})
    


