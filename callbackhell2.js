function codingschallenge1(callback){
    setTimeout(function(){
        console.log("Coding Challenge 1 is done!");
        callback();
        
    },2000)
}

function codingschallenge2(callback){
    setTimeout(function(){
        console.log("Coding Challenge 2 is done!");
        callback();
        
    },3000)
}

function codingschallenge3(callback){
    setTimeout(function(){
        console.log("Coding Challenge 3 is done!");
        callback();
        
    },4000)
}

function codingschallenge4(callback){
    setTimeout(function(){
        console.log("Coding Challenge 4 is done!");
        callback();
        
    },1000)
}

//callbackhell
codingschallenge1(function(){
    codingschallenge2(function(){
        codingschallenge3(function(){
            codingschallenge4(function(){
                console.log("Coding challemges are done!")
            })
        })
    })
})