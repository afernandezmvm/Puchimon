// #region Imports
import { cottonGuard, swordsDance, doubleTeam, intimidate, ironDefense } from "./PowerUp.js";
import { flamethrower, bodySlam, suckerPunch } from "./Move.js";
import { megaCharizardX, megaMewtwoY, snom, sunkern, greninjaAsh, megaMewtwoX } from "./Pokemon.js";
// #endregion

// #region Objects
export function Pokemon() {
    this.id = "";
    this.HP = "";
    this.Atk = "";
    this.Def = "";
    this.SpA = "";
    this.SpD = "";
    this.Spe = "";
    this.id_team = "";
    this.id_logros = "";
}

export function PowerUp() {
    this.id = 0;
    this.description = "";
    this.stat = 0;
    this.value = 0;
}

export function Move() {
    this.id = 0;
    this.description = "";
    this.effect  = "";
}
// #endregion

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

// #region Dice
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
}

// #endregion
let allPowerUps = [cottonGuard, swordsDance, doubleTeam, intimidate, ironDefense];
let allMoves = [flamethrower, bodySlam, suckerPunch];
function batalla(OffensivePokemon, DefensivePokemon) {

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
    let residuo = chosenMove.effect(OffensivePokemon, DefensivePokemon);
    DefensivePokemon.HP -=  residuo;
    console.log(residuo);




}

function partida() {
    let jugador1 = [megaCharizardX, megaMewtwoY, snom];
    let jugador2 = [sunkern, greninjaAsh, megaMewtwoX];
    let resultatD3Jugador1;
    let resultatD3Jugador2;
    let resultatD2;
    
    while ((megaCharizardX.HP <= 0 && megaMewtwoY.HP <= 0 && snom.HP <= 0) || (sunkern.HP <= 0 && greninjaAsh.HP <= 0 && megaMewtwoX.HP <= 0)) {

        resultatD3Jugador1 = d3;
        resultatD3Jugador2 = d3;
        resultatD2 = d2;
        
        if ((jugador1[resultatD3Jugador1] <= 0) && (jugador2[resultatD3Jugador2])) {

            if (d2 === 1) {
                batalla(jugador1[resultatD3Jugador1], jugador2[resultatD3Jugador2]);
            } else {
                batalla(jugador2[resultatD3Jugador1], jugador1[resultatD3Jugador2]);
            }

        }

    }


}

partida();

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