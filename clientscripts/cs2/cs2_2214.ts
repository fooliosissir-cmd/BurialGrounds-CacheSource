/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2214

function cs2_2214(): void {
    if (varc_easter10_pushbarstatus == 1) {
        if (ifGetX(varc_easter10_currentmodel) < 256) {
            ifSetPosition(1 + ifGetX(varc_easter10_currentmodel), ifGetY(varc_easter10_currentmodel), 0, 0, varc_easter10_currentmodel);
        }
        if (ifGetX(varc_easter10_currentmodel) > 256) {
            ifSetPosition(ifGetX(varc_easter10_currentmodel) - 1, ifGetY(varc_easter10_currentmodel), 0, 0, varc_easter10_currentmodel);
        }
        if (ifGetY(Component.easter10_nuts.bar) > 70) {
            ifSetPosition(ifGetX(varc_easter10_currentmodel), ifGetY(varc_easter10_currentmodel) - 2, 0, 0, varc_easter10_currentmodel);
            ifSetPosition(ifGetX(Component.easter10_nuts.bar), ifGetY(Component.easter10_nuts.bar) - 2, 0, 0, Component.easter10_nuts.bar);
            ifSetOnTimer(hook(cs2_2214, "", []), Component.easter10_nuts.content);
        } else {
            ifSetHide(true, varc_easter10_currentmodel);
            ifSetOnTimer(hook(easter10_nuts_pullback, "", []), Component.easter10_nuts.content);
        }
    }
}
