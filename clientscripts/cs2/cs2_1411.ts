/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1411

function cs2_1411(): void {
    let int0: component = Component.interface_306.component_306_6;

    varc_easter09_nuts_model1 = enumOp(type_int, type_model, Enum.easter09_nuts, random(enumGetoutputcount(Enum.easter09_nuts)));

    if (varc_easter09_nuts_model1 != -1) {
        ifSetModel(varc_easter09_nuts_model1, int0);
    }
    ifSetPosition(0 - ifGetWidth(int0), 120, 0, 0, int0);
    ifSetOnTimer(noHook(""), Component.interface_306.component_306_19);
}
