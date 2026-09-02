/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4397

function cs2_4397(intArg0: number, intArg1: component): void {
    if (ccFind(intArg1, intArg0) == 1) {
        if ((intArg1 == Component.interface_1105.component_1105_65 && varbit_clan_custom_motif_a_varp - 1 == intArg0) || (intArg1 == Component.interface_1105.component_1105_62 && varbit_clan_custom_motif_b_varp - 1 == intArg0)) {
            ccSetGraphic(Graphic.aif_bronze_icon_button_1_3);
        } else {
            ccSetGraphic(Graphic.aif_bronze_icon_button_1_0);
        }
    }
}
