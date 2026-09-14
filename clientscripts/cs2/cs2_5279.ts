/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5279

function cs2_5279(intArg0: component): void {
    let int1: boolean = int_to_bool(varbit_clan_theatre_playerwastech);

    ifSetHide(int1, Component.interface_388.component_388_17);
    ifSetHide(int1, Component.interface_388.component_388_30);
    ifSetHide(int1, Component.interface_388.component_388_43);
    ifSetHide(int1, Component.interface_388.component_388_56);
    ifSetHide(int1, Component.interface_388.component_388_69);
    ifSetHide(int1, Component.interface_388.component_388_102);
    ifSetHide(int1, Component.interface_388.component_388_116);
    ifSetHide(int1, Component.interface_388.component_388_130);
    ifSetHide(int1, Component.interface_388.component_388_143);
    ifSetHide(int1, Component.interface_388.component_388_158);
    ifSetHide(int1, Component.interface_388.component_388_172);
    ifSetHide(int1, Component.interface_388.component_388_186);
    ifSetHide(int1, Component.interface_388.component_388_200);
    ifSetHide(int1, Component.interface_388.component_388_84);

    if (int1 == true) {
        ifSetText("Theatre Options", intArg0);
        ifSetOnOp(hook(cs2_5293, "ii1", [event_opindex, 1, false]), Component.interface_388.component_388_99);
        ifSetOnOp(hook(cs2_5293, "ii1", [event_opindex, 2, false]), Component.interface_388.component_388_112);
        ifSetOnOp(hook(cs2_5293, "ii1", [event_opindex, 3, false]), Component.interface_388.component_388_126);
        ifSetOnOp(hook(cs2_5293, "ii1", [event_opindex, 4, false]), Component.interface_388.component_388_140);
        ifSetOnOp(hook(cs2_5293, "ii1", [event_opindex, 5, false]), Component.interface_388.component_388_154);
        ifSetOnOp(hook(cs2_5293, "ii1", [event_opindex, 6, false]), Component.interface_388.component_388_168);
        ifSetOnOp(hook(cs2_5293, "ii1", [event_opindex, 7, false]), Component.interface_388.component_388_182);
        ifSetOnOp(hook(cs2_5293, "ii1", [event_opindex, 8, false]), Component.interface_388.component_388_196);
        ifSetOnOp(hook(cs2_5293, "ii1", [event_opindex, 1, true]), Component.interface_388.component_388_14);
        ifSetOnOp(hook(cs2_5293, "ii1", [event_opindex, 2, true]), Component.interface_388.component_388_27);
        ifSetOnOp(hook(cs2_5293, "ii1", [event_opindex, 3, true]), Component.interface_388.component_388_40);
        ifSetOnOp(hook(cs2_5293, "ii1", [event_opindex, 4, true]), Component.interface_388.component_388_53);
        ifSetOnOp(hook(cs2_5293, "ii1", [event_opindex, 5, true]), Component.interface_388.component_388_66);
    } else {
        if (varbit_clan_keep_theatre_backdrop_varp == 0 || varbit_clan_keep_theatre_map_col_varp == 0) {
            ifSetText("Waiting on technician to select options...", intArg0);
        } else {
            ifSetText("Waiting on technician to unlock theatre...", intArg0);
        }
        ifSetOnOp(noHook(""), Component.interface_388.component_388_99);
        ifSetOnOp(noHook(""), Component.interface_388.component_388_112);
        ifSetOnOp(noHook(""), Component.interface_388.component_388_126);
        ifSetOnOp(noHook(""), Component.interface_388.component_388_140);
        ifSetOnOp(noHook(""), Component.interface_388.component_388_154);
        ifSetOnOp(noHook(""), Component.interface_388.component_388_168);
        ifSetOnOp(noHook(""), Component.interface_388.component_388_182);
        ifSetOnOp(noHook(""), Component.interface_388.component_388_196);
        ifSetOnOp(noHook(""), Component.interface_388.component_388_14);
        ifSetOnOp(noHook(""), Component.interface_388.component_388_27);
        ifSetOnOp(noHook(""), Component.interface_388.component_388_40);
        ifSetOnOp(noHook(""), Component.interface_388.component_388_53);
        ifSetOnOp(noHook(""), Component.interface_388.component_388_66);
    }
    cs2_4532(intArg0);
}
