/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2209

function cs2_2209(): void {
    ifSetText("Correct " + tostring(varp_1703) + "/5", Component.easter10_nuts.correct_count);
    varc_easter10_pushbarstatus = 0;
    ifSetOnTimer(noHook(""), Component.easter10_nuts.content);
    ifSetPosition(0, 120, 0, 0, Component.easter10_nuts.goodstuff1);
    ifSetPosition(0, 120, 0, 0, Component.easter10_nuts.goodstuff2);
    ifSetPosition(0, 120, 0, 0, Component.easter10_nuts.goodstuff3);
    ifSetPosition(0, 120, 0, 0, Component.easter10_nuts.goodstuff4);
    ifSetPosition(0, 120, 0, 0, Component.easter10_nuts.badnut1);
    ifSetPosition(0, 120, 0, 0, Component.easter10_nuts.badnut2);
    ifSetPosition(0, 120, 0, 0, Component.easter10_nuts.badnut3);
    ifSetPosition(0, 120, 0, 0, Component.easter10_nuts.badnut4);
    ifSetHide(true, Component.easter10_nuts.goodstuff1);
    ifSetHide(true, Component.easter10_nuts.goodstuff2);
    ifSetHide(true, Component.easter10_nuts.goodstuff3);
    ifSetHide(true, Component.easter10_nuts.goodstuff4);
    ifSetHide(true, Component.easter10_nuts.badnut1);
    ifSetHide(true, Component.easter10_nuts.badnut2);
    ifSetHide(true, Component.easter10_nuts.badnut3);
    ifSetHide(true, Component.easter10_nuts.badnut4);
}
