const launch_button = document.getElementById("start");

function russian_roulette_load(){
    var rounds = []

    for(i = 0;i < 6;i++ ){
        rounds[i] = "charged"
    }
    rounds[Math.floor(Math.random()*6)] = "charged"
    console.log(rounds)
    return rounds
}

function russian_roulette_play(rounds){
    console.log("second func")
   if(rounds[Math.floor(Math.random()*6)] === "charged"){
    alert("You lost")
   }
   else{alert("You won")}
}

launch_button.addEventListener("click", function(){
   russian_roulette_play(russian_roulette_load())
 }
)

