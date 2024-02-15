// #region Imports
import { Move } from "./main.js";
// #endregion

// #region Moves
const bodySlam = new Move();
const flamethrower = new Move();
const suckerPunch = new Move();
// #endregion

// #region Move data

// #region bodySlam data
bodySlam.id = 1;
bodySlam.description = "The user drops onto the target with its full body weight";
bodySlam.effect = function (OffensivePokemon, DefensivePokemon) {

        return (OffensivePokemon.Atk - DefensivePokemon.Def)

    };
// #endregion

// #region flamethrower data
flamethrower.id = 2;
flamethrower.description = "The target is scorched with an intense blast of fire";
flamethrower.effect = "DMG = User's (ATK + SpA) - Foe's (DEF - SpD)";
flamethrower.effect = function (OffensivePokemon, DefensivePokemon) {

    return ((OffensivePokemon.At + OffensivePokemon.SpA) - (DefensivePokemon.Def - DefensivePokemon.SpD))

};
// #endregion

// #region suckerPunch data
suckerPunch.id = 3;
suckerPunch.description = "This move enables the user to attack first";
suckerPunch.effect = "DMG = User's (ATK + Spe) - Foe's (DEF - Spe)";
flamethrower.effect = function (OffensivePokemon, DefensivePokemon) {

    return ((OffensivePokemon.At + OffensivePokemon.Spe) - (DefensivePokemon.Def - DefensivePokemon.Spe))

};
// #endregion

// #endregion

// #region Exports
export { flamethrower }
export { bodySlam }
export { suckerPunch }
// #endregion