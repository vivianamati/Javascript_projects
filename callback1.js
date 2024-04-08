function hello(callback){
    setTimeout(function(){
        console.log("Hey everyone")
        callback();
    },3000)   
    }
    hello();

hello(welcome)

function welcome(){
    console.log("Welcome to my webpage");
}
welcome();

function bye(){
    console.log("Bye!See you tommorow!")
}
bye();
