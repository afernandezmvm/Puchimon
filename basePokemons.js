function Pokemon() {
    this.id = "";
    this.HP = "";
    this.Atk = "";
    this.Def = "";
    this.SpA = "";
    this.SpD = "";
    this.Spe = "";
    this.id_team = "";
    this.id_logros = "";

    this.suma = function suma() {
        const statsTotal = this.HP + this.Atk + this.Def + this.SpA + this.SpD + this.Spe;

        return statsTotal;
    },

    this.promedio = function promedio() {

        const promedio = this.suma() / 6;

        return promedio;
    },

    this.sigma = function sigma() {
        const sigma = Math.sqrt(Math.pow((this.HP - this.promedio()), 2) + Math.pow((this.Atk - this.promedio()), 2) + Math.pow((this.Def - this.promedio()), 2) + Math.pow((this.SpA - this.promedio()), 2) + Math.pow((this.SpD - this.promedio()), 2) + Math.pow((this.Spe - this.promedio()), 2) / 6);

        return sigma;
    }
}

const snom = new Pokemon();
const megaMewtwoY = new Pokemon();
const megaCharizardX = new Pokemon();

snom.id = "snom";
snom.HP = 30;
snom.Atk = 25;
snom.Def = 35;
snom.SpA = 45;
snom.SpD = 30;
snom.Spe = 20;
snom.id_team = "equipo1";
snom.id_logros = 33;

megaMewtwoY.id = "Mega-Mewtwo Y";
megaMewtwoY.HP =106;
megaMewtwoY.Atk = 150;
megaMewtwoY.Def = 70;
megaMewtwoY.SpA = 194;
megaMewtwoY.SpD = 120;
megaMewtwoY.Spe = 140;
megaMewtwoY.id_team = "equipo1";
megaMewtwoY.id_logros = 33;

megaCharizardX.id = "Mega-Charizard X";
megaCharizardX.HP = 78;
megaCharizardX.Atk = 130;
megaCharizardX.Def = 111;
megaCharizardX.SpA = 130;
megaCharizardX.SpD = 85;
megaCharizardX.Spe = 100;
megaCharizardX.id_team = "equipo1";
megaCharizardX.id_logros = 33;
