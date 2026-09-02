/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,tutorial3_cameracontrols_ctrl]

function tutorial3_cameracontrols_ctrl(intArg0: component): void {
    if (mapLang() == 1) {
        ifSetGraphic(Graphic.km_camerakeys_12, intArg0);
    } else {
        ifSetGraphic(Graphic.km_camerakeys_10, intArg0);
    }
}
