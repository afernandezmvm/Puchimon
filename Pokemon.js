// #region Imports
import { Pokemon } from "./main.js";
// #endregion

// #region Pokemons
export default class Pokemon {
    constructor(id, HP, Atk, Def, SpA, SpD, Spe, idteam, idlogros) {
        this.id = id;
        this.HP = HP;
        this.Atk = Atk;
        this.Def = Def;
        this.SpA = SpA;
        this.SpD = SpD;
        this.Spe = Spe;
        this.idteam = idteam;
        this.idlogros = idlogros;
    }

    get id() {
        return this.id;
    }

    get HP() {
        return this.HP;
    }

    get Atk() {
        return this.Atk;
    }

    get Def() {
        return this.Def;
    }

    get SpA() {
        return this.SpA;
    }

    get SpD() {
        return this.SpD;
    }

    get Spe() {
        return this.Spe;
    }

    get idteam() {
        return this.idteam;
    }

    get idlogros() {
        return this.idlogros;
    }

    getAttributes() {
        return {
            id: this.id,
            HP: this.HP,
            Atk: this.Atk,
            Def: this.Def,
            SpA: this.SpA,
            SpD: this.SpD,
            Spe: this.Spe,
            idteam: this.idteam,
            idlogros: this.idlogros
        };
    }
}
// #endregion