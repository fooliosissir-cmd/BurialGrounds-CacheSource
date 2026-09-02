/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2211

function cs2_2211(): void {
    if (ifGetX(varc_easter10_currentmodel) < 339) {
        ifSetOnTimer(hook(cs2_2211, "", []), Component.easter10_nuts.content);
        ifSetPosition(1 + ifGetX(varc_easter10_currentmodel), ifGetY(varc_easter10_currentmodel), 0, 0, varc_easter10_currentmodel);
    }
}
