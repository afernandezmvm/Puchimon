// #region Imports
import { PowerUp } from "./main.js";
// #endregion

// #region Power-Ups
const cottonGuard = new PowerUp();
const swordsDance = new PowerUp();
const doubleTeam = new PowerUp();
const intimidate = new PowerUp();
const ironDefense = new PowerUp();
// #endregion

// #region Power-Ups data ~~

// #region cottonGuard data
cottonGuard.id = 1;
cottonGuard.description = "The user protects itself by wrapping its body in soft cotton, drastically raising the user's Defense stat."
cottonGuard.stat = "Def"
cottonGuard.value = 80;
// #endregion

// #region swordsDance data
swordsDance.id  = 2;
swordsDance.description = "A frenetic dance to uplift the fighting spirit. This sharply raises the user's Attack stat."
swordsDance.stat = "Atk";
swordsDance.value = 10;
// #endregion

// #region doubleTeam data
doubleTeam.id = 3;
doubleTeam.description= "By moving rapidly, the user makes illusory copies of itself to raise its evasiveness.";
doubleTeam.stat = "Spe";
doubleTeam.value = 10;
// #endregion

// #region intimidate data
intimidate.id = 4;
intimidate.description = "Lowers the Physical Attack power of attackers.";
intimidate.stat = "Atk";
intimidate.value = -30;
// #endregion

// #region ironDefense data
ironDefense.id = 5;
ironDefense.description = "The user hardens its body's surface like iron, sharply raising its Special Defense stat. "
ironDefense.stat = "SpD"
ironDefense.value = 80;
// #endregion

// #endregion

// #region Exports
export { cottonGuard };
export { swordsDance };
export { doubleTeam };
export { intimidate };
export { ironDefense };
// #endregion