/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6068

function cs2_6068(intArg0: number, intArg1: number, intArg2: component, intArg3: component): void {
    if ((mapLang() == 0 && intArg0 == 37) || (mapLang() == 1 && intArg0 == 54) || (mapLang() == 2 && intArg0 == 40) || (mapLang() == 3 && intArg0 == 49)) {
        ifSetTrans(0, Component.interface_1183.component_1183_1);
        ifResumePauseButton(intArg2);
    }

    if (intArg0 == 69) {
        ifSetTrans(0, Component.interface_1183.component_1183_24);
        ifResumePauseButton(intArg3);
    }
}
