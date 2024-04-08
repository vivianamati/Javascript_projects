function greetings(){
    return new Promise((resolve, reject) => {
        setTimeout(function(){
            const greetingsdone = true
            if (greetingsdone){
                resolve("Goodmorning Everyone")
            }
            else
                reject("Greetings not done")
            },1000)
        
    })
    
}

function welcome(){
    return new Promise((resolve, reject) => {
        setTimeout(function(){
            const welcomedone = true
            if (welcomedone){
                resolve("Welcome to today's class")
            }
            else
                reject("Welcome not done")
    },2000)
})
}

function presentations(){
    return new Promise((resolve, reject) => {
        setTimeout(function(){
            const presentationsdone = true
            if (presentationsdone){
                resolve("Let us start our presentations")
            }
            else
                reject("Presentations not done")
    })  
    },5000)
}

function study(){
    return new Promise((resolve, reject) => {
        setTimeout(function(){
            const studydone = true
            if (studydone){
                resolve("Let us begin today's class")
            }
            else 
                reject("Class not there")
    })
    },6000)
}

 function question(){
    return new Promise((resolve, reject) => {
        setTimeout(function(){
             const questiondone = true
            if (questiondone){
                 resolve("Who has questions?")
             }
             else
                 reject("Questions not asked")
    })
     },2000)
 }


//greetngs
//welcome
//presentations
//study
//promise
// greetings().then(value => {console.log(value);return welcome()})
//            .then(value => {console.log(value);return presentations()})
//            .then(value => {console.log(value);return study()})
//            .then(value => {console.log(value);return question()})
//            .then(value => {console.log(value);console.log("Coding challenges done")})
//            .catch(error =>console.error(error))

async function doChallenges(){
    try{
        const oneResult = await greetings();
        console.log(oneResult);
        const twoResult = await welcome();
        console.log(twoResult);
        const threeResult = await presentations();
        console.log(threeResult);
        const fourResult = await study();
        console.log(fourResult);
        const fiveResult = await question();
        console.log(fiveResult);
        console.log("Done")
    }
    catch(error){
        console.log(error)
    }
}
doChallenges();


