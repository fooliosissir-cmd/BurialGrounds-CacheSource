/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6410

function cs2_6410(): void {
    if (varbit_slayer_master == 0) {
        cs2_6414(85721107, 0);
        cs2_6414(85721109, 0);
        ifSetText("You must complete one assignment.", Component.interface_1308.component_1308_421);
        ifSetText("You must complete one assignment.", Component.interface_1308.component_1308_447);
        return;
    } else if (varbit_smki_slayer_points < 100) {
        cs2_6414(85721109, 0);
        if (varp_394 > 0) {
            ifSetText("100 points", Component.interface_1308.component_1308_447);
        } else {
            ifSetText("You must have an assignment.", Component.interface_1308.component_1308_447);
        }
        if (varbit_smki_slayer_points < 30) {
            cs2_6414(85721107, 0);
        }
        if (varp_394 > 0) {
            ifSetText("30 points.", Component.interface_1308.component_1308_421);
        } else {
            ifSetText("You must have an assignment.", Component.interface_1308.component_1308_421);
        }
    }
}
