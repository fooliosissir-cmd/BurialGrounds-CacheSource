/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,clan_custom_slot_tab_switch]

function clan_custom_slot_tab_switch(): void {
    let int0: component = Component.interface_1258.component_1258_199;
    let int1: component = Component.interface_1258.component_1258_198;
    let int2: component = Component.interface_1258.component_1258_202;
    let int3: component = Component.interface_1258.component_1258_203;
    let int4: component = Component.interface_1258.component_1258_200;
    let int5: component = Component.interface_1258.component_1258_201;

    ifSetHide(true, Component.interface_1258.component_1258_227);
    ifSetHide(true, Component.interface_1258.component_1258_218);
    ifSetHide(true, Component.interface_1258.component_1258_209);

    switch (varbit_clan_custom_stronghold_current_slot_varp) {
        case 1:
            ifSetHide(false, Component.interface_1258.component_1258_227);
            if (varbit_clan_custom_slot_1_destination_id_varp == 0) {
                cs2_4940();
                cs2_4850(int0, int1, int2, int3, int4, int5);
            } else {
                cs2_4942();
                cs2_4851(int0, int1, int2, int3, int4, int5);
            }
            break;
        case 2:
            ifSetHide(false, Component.interface_1258.component_1258_218);
            if (varbit_clan_custom_slot_2_destination_id_varp == 0) {
                cs2_4940();
                cs2_4850(int0, int1, int2, int3, int4, int5);
            } else {
                cs2_4942();
                cs2_4851(int0, int1, int2, int3, int4, int5);
            }
            break;
        case 3:
            ifSetHide(false, Component.interface_1258.component_1258_209);
            if (varbit_clan_custom_slot_3_destination_id_varp == 0) {
                cs2_4940();
                cs2_4850(int0, int1, int2, int3, int4, int5);
            } else {
                cs2_4942();
                cs2_4851(int0, int1, int2, int3, int4, int5);
            }
            break;
    }
    cs2_4804();
    clan_custom_slot_tab_icons();
}
