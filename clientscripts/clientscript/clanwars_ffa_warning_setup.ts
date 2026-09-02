/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,clanwars_ffa_warning_setup]

function clanwars_ffa_warning_setup(intArg0: component, intArg1: component, intArg2: component, intArg3: component, intArg4: component, intArg5: component): void {
    cs2_1795(intArg4, intArg5);

    if (varbit_clanwars_ffatype == 1) {
        ifSetText("Free-for-all: Dangerous", intArg0);
        ifSetText("This is a " + "<col=ff0000>" + "DANGEROUS" + "</col>" + " arena. When players fight each other in here, they drop " + "<col=ff0000>" + "ALL" + "</col>" + " their items on death. Gravestones do not appear." + "<br>" + "<br>" + "A non-combat zone exists at the southern end of the arena. This portal leads into that zone." + "<br>" + "<br>" + "You cannot teleport out of this arena unless you're standing in the non-combat zone.", intArg1);
        ifSetOnVarTransmit(hook(cs2_1794, "IIY", [intArg4, intArg5], [1147, 1046]), intArg4);
    } else {
        ifSetText("Free-for-all: Safe", intArg0);
        ifSetText("This is a SAFE arena. Although players may fight each other in here, items are not dropped on death." + "<br>" + "<br>" + "You can teleport out of the arena at any time." + "<br>" + "<br>" + "A non-combat zone exists at the southern end of the arena. This portal leads into that zone.", intArg1);
        ifSetOnVarTransmit(hook(cs2_1794, "IIY", [intArg4, intArg5], [1147, 1045]), intArg4);
    }
    let int6: number = parawidth(ifGetText(intArg0), ifGetWidth(intArg0), Graphic.b12_full);
    int6 = (ifGetWidth(intArg0) - int6) / 2;
    int6 = int6 - (ifGetWidth(intArg2) + 10);
    ifSetPosition(int6, ifGetY(intArg2), 0, 0, intArg2);
    ifSetPosition(int6, ifGetY(intArg3), 2, 0, intArg3);
}
