/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6406

function cs2_6406(): void {
    ifSetText(tostring(varbit_smki_slayer_points), Component.interface_1308.component_1308_342);

    if (varbit_smki_slayer_points == 0) {
        ifSetColour(colour(0xB52F10), Component.interface_1308.component_1308_342);
    }

    if (varbit_smki_slayer_points < 400) {
        cs2_6414(85721102, 0);
        if (varbit_smki_slayer_points < 75) {
            cs2_6414(85721158, 0);
            if (varbit_smki_slayer_points < 35) {
                cs2_6414(85721160, 0);
                cs2_6414(85721162, 0);
                cs2_6414(85721164, 0);
            }
        }
    }
    cs2_6403();
}
