// #region Imports
import Move from "./Move.js"
import Pokemon from "./Pokemon.js";
import PowerUp from "./PowerUp.js";
import { d6, d3, d2 } from "./Dice.js";
// #endregion

// #region Pokemon instances
const snom = new Pokemon("snom", 30, 25, 35, 45, 30, 20, "2", 33);
const megaMewtwoY = new Pokemon("Mega-Mewtwo Y", 106, 150, 70, 194, 120, 140, "2", 33);
const megaCharizardX = new Pokemon("Mega-Charizard X", 78, 130, 111, 130, 85, 100, "2", 33);
const sunkern = new Pokemon("sunkern", 30, 30, 30, 30, 30, 30, "1", 2);
const megaMewtwoX = new Pokemon("megaMewtwoX", 106, 190, 100, 154, 100, 130, "1", 2);
const greninjaAsh = new Pokemon("greninjaAsh", 72, 145, 67, 153, 71, 132, "1", 2);
// #endregion

// #region Moveset instances
// #region bodySlam
const bodySlam = new Move(1, "The user drops onto the target with its full body weight", function (OffensivePokemon, DefensivePokemon) {
    let damage = OffensivePokemon.Atk - DefensivePokemon.Def;
    return damage;
});
// #endregion
// #region flamethrower data
const flamethrower = new Move(2, "The target is scorched with an intense blast of fire", function (OffensivePokemon, DefensivePokemon) {
    let damage = (OffensivePokemon.Atk + OffensivePokemon.SpA) - (DefensivePokemon.Def - DefensivePokemon.SpD);
    return damage
});
// #endregion
// #region suckerPunch data
const suckerPunch = new Move(3, "This move enables the user to attack first", function (OffensivePokemon, DefensivePokemon) {
    let damage = (OffensivePokemon.Atk + OffensivePokemon.Spe) - (DefensivePokemon.Def - DefensivePokemon.Spe);
    return damage
});
// #endregion
// #endregion

// #region PowerUp instances
const cottonGuard = new PowerUp();
const swordsDance = new PowerUp();
const doubleTeam = new PowerUp();
const intimidate = new PowerUp();
const ironDefense = new PowerUp();
const waterSprout = new PowerUp();
// #endregion

// #region Dice
/*
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function d6() {
    let number = getRandomInt(7);
    if (number === 0) {
        return number = d6();
    }
    return number;
}

function d3() {
    let number = getRandomInt(4);
    if (number === 0) {
        return number = d3();
    }
    return number;
}

function d2() {
    let number = getRandomInt(3);
    if (number === 0) {
        return number = d2();
    }
    return number;
}*/

// #endregion
let allPowerUps = [cottonGuard, swordsDance, doubleTeam, intimidate, ironDefense];
let allMoves = [flamethrower, bodySlam, suckerPunch];
function battle(nameOffensivePlayer, nameDeffensivePlayer, OffensivePokemon, DefensivePokemon) {

    let resultatD6 = d6;
    let chosenPowerUp = allPowerUps[resultatD6] 
    console.log(chosenPowerUp);
    switch (chosenPowerUp.stat) {
        case "Hp":
            OffensivePokemon.HP += chosenPowerUp.value;
            break;

        case "Atk":
            OffensivePokemon.Atk += chosenPowerUp.value;
            break;

        case "Def":
            OffensivePokemon.Def += chosenPowerUp.value;
            break;

        case "SpA":
            OffensivePokemon.Sp += chosenPowerUp.value;
            break;

        case "SpD":
            OffensivePokemon.SpD += chosenPowerUp.value;
            break;

        case "Spe":
            OffensivePokemon.Spe += chosenPowerUp.value;
            break;
            
        default:
            break;
    }

    let resultatD3 = d3;
    let chosenMove = allMoves[resultatD3];
    console.log("Atacant  (" +  + ", PX, D1, D2 ,H, A, D, AE, DE, V)");
    let residuo = chosenMove.effect(OffensivePokemon, DefensivePokemon);
    DefensivePokemon.HP -=  residuo;
    console.log(residuo);




}

function game() {
    let jugador1 = [megaCharizardX, megaMewtwoY, snom];
    let jugador2 = [sunkern, greninjaAsh, megaMewtwoX];
    let namePlayer1 = "Ayman";
    let namePlayer2 = "Alvaro";
    let resultatD3Jugador1;
    let resultatD3Jugador2;
    let resultatD2;
    let contRounds;
    while ((megaCharizardX.HP <= 0 && megaMewtwoY.HP <= 0 && snom.HP <= 0) || (sunkern.HP <= 0 && greninjaAsh.HP <= 0 && megaMewtwoX.HP <= 0)) {

        resultatD3Jugador1 = d3;
        resultatD3Jugador2 = d3;
        resultatD2 = d2;
        
        if ((jugador1[resultatD3Jugador1] <= 0) && (jugador2[resultatD3Jugador2])) {

            contRounds += 1;

            if (d2 === 1) {

                console.log("Round " + contRounds);

                battle(namePlayer1, namePlayer2, jugador1[resultatD3Jugador1], jugador2[resultatD3Jugador2]);

            } else {
                
                console.log("Round " + contRounds);

                battle(namePlayer2, namePlayer1, jugador2[resultatD3Jugador1], jugador1[resultatD3Jugador2]);
                
            }
        }
    }
}

game();

// #region Console logs

// #region Pokemon logs
console.log("snom:", snom);
console.log("megaMewtwoY", megaMewtwoY);
console.log("megaCharizardX", megaCharizardX);
console.log("sunkern:", sunkern);
console.log("GreninjaAsh:", greninjaAsh);
console.log("megaMewtwoX:", megaMewtwoX)
// #endregion

// #region Power-Up logs
console.log("cottonGuard:", cottonGuard);
console.log("swordsDance:", swordsDance);
console.log("doubleTeam:", doubleTeam);
console.log("intimidate:", intimidate);
console.log("ironDefense:", ironDefense);
// #endregion

// #region Move logs
console.log("bodySlam:", bodySlam);
console.log("flamethrower:", flamethrower);
console.log("suckerPunch:", suckerPunch);
// #endregion

// #endregion