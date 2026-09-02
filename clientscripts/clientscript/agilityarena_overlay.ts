/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,agilityarena_overlay]

function agilityarena_overlay(): void {
    if (varbit_agilityarena_greenlight == 0) {
        ifSetColour(colour(0x002300), Component.agilityarena_overlay.green);
        ifSetColour(colour(0xFF0000), Component.agilityarena_overlay.red);
    } else {
        ifSetColour(colour(0x00FF00), Component.agilityarena_overlay.green);
        ifSetColour(colour(0x230000), Component.agilityarena_overlay.red);
    }
}
