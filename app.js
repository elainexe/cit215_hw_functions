var dmg=0;
var atk;

function attack(num,catchphrase){
    dmg+=num;
    document.body.querySelector(".damage").innerHTML="-"+num;
    document.body.querySelector(".catchphrase").innerHTML=catchphrase;
    document.body.querySelector(".totaldmg").innerHTML="total damage: "+dmg;
}

function reset(){
    dmg=0;
    document.body.querySelector(".damage").innerHTML="";
    document.body.querySelector(".catchphrase").innerHTML="";
    document.body.querySelector(".totaldmg").innerHTML="total damage: "+dmg;
}

document.body.querySelector(".sm").addEventListener("click",function(){
    if(dmg>500){
        atk=100; //professional kill stealer
    }
    else
        atk=5;
    attack(atk,"In the name of the moon, I'll punish you!");
})
document.body.querySelector(".su").addEventListener("click",function(){
    atk=20; //pretty pacifist
    attack(atk,"We'll win the fight and then go out for pizzas!");
})
document.body.querySelector(".sonic").addEventListener("click",function(){
    atk=35; //I dunno it's Sonic; this mini-game isn't balanced
    attack(atk,"Gotta go fast!");
})
document.body.querySelector(".batman").addEventListener("click",function(){
    if(dmg>500){
        atk=0; //batman doesn't kill!!
    }
    else
        atk=50;
    attack(atk,"I’m The Goddamn Batman");
})
document.body.querySelector(".reset").addEventListener("click",function(){
    reset();
})