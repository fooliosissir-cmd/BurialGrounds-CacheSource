/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2212

function cs2_2212(): void {
    if (ifGetX(varc_easter10_currentmodel) < ifGetWidth(Component.easter10_nuts.content) - 1) {
        ifSetOnTimer(hook(cs2_2212, "", []), Component.easter10_nuts.content);
        ifSetPosition(1 + ifGetX(varc_easter10_currentmodel), ifGetY(varc_easter10_currentmodel), 0, 0, varc_easter10_currentmodel);
    } else {
        ifSetHide(true, varc_easter10_currentmodel);
        ifSetPosition(0, 120, 0, 0, varc_easter10_currentmodel);
    }
}
