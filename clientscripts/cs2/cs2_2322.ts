/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2322

function cs2_2322(): void {
    let int0: component = Component.interface_306.component_306_8;

    varc_easter09_nuts_model3 = enumOp(type_int, type_model, Enum.easter09_nuts, random(enumGetoutputcount(Enum.easter09_nuts)));

    if (varc_easter09_nuts_model3 != -1) {
        ifSetModel(varc_easter09_nuts_model3, int0);
    }
    ifSetPosition(0 - ifGetWidth(int0), 120, 0, 0, int0);
    ifSetOnTimer(noHook(""), Component.interface_306.component_306_21);
}
