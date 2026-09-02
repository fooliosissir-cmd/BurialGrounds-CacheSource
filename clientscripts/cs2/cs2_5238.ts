/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5238

function cs2_5238(intArg0: number): void {
    let str0: string = "Ability";
    let int1: struct = enumOp(type_int, type_struct, Enum.tt2_npc_selection, varbit_tt2_npc_selected);

    ifSetHide(true, Component.interface_1126.component_1126_4);
    ifSetHide(true, Component.interface_1126.component_1126_5);
    ifSetHide(true, Component.interface_1126.component_1126_6);
    ifSetHide(true, Component.interface_1126.component_1126_7);

    switch (intArg0) {
        case 1:
            str0 = structParam(int1, Param.tt2_npc_perk1_description);
            ifSetHide(false, Component.interface_1126.component_1126_4);
            break;
        case 2:
            str0 = structParam(int1, Param.tt2_npc_perk2_description);
            ifSetHide(false, Component.interface_1126.component_1126_5);
            break;
        case 3:
            str0 = structParam(int1, Param.tt2_npc_perk3_description);
            ifSetHide(false, Component.interface_1126.component_1126_6);
            break;
        case 4:
            str0 = structParam(int1, Param.tt2_npc_perk4_description);
            ifSetHide(false, Component.interface_1126.component_1126_7);
            break;
    }
    ifSetText(str0, Component.interface_1126.component_1126_49);
    ifSetHide(false, Component.interface_1126.component_1126_47);
}
