/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5402

function cs2_5402(intArg0: number): void {
    let str0: string = "";

    ifSetColour(colour(0xF5B241), Component.interface_1170.component_1170_61);
    ifSetColour(colour(0xF5B241), Component.interface_1170.component_1170_62);
    ifSetColour(colour(0xF5B241), Component.interface_1170.component_1170_63);
    ifSetColour(colour(0xF5B241), Component.interface_1170.component_1170_64);
    ifSetColour(colour(0xF5B241), Component.interface_1170.component_1170_65);
    ifSetColour(colour(0xF5B241), Component.interface_1170.component_1170_66);
    ifSetColour(colour(0xF5B241), Component.interface_1170.component_1170_67);
    ifSetColour(colour(0xF5B241), Component.interface_1170.component_1170_68);
    ifSetColour(colour(0xF5B241), Component.interface_1170.component_1170_167);
    ifSetColour(colour(0xF5B241), Component.interface_1170.component_1170_246);

    switch (intArg0) {
        case 1:
            ifSetColour(colour(0xFFFFFF), Component.interface_1170.component_1170_61);
            break;
        case 2:
            ifSetColour(colour(0xFFFFFF), Component.interface_1170.component_1170_62);
            break;
        case 3:
            ifSetColour(colour(0xFFFFFF), Component.interface_1170.component_1170_63);
            break;
        case 4:
            ifSetColour(colour(0xFFFFFF), Component.interface_1170.component_1170_64);
            break;
        case 5:
            ifSetColour(colour(0xFFFFFF), Component.interface_1170.component_1170_65);
            break;
        case 6:
            ifSetColour(colour(0xFFFFFF), Component.interface_1170.component_1170_66);
            break;
        case 7:
            ifSetColour(colour(0xFFFFFF), Component.interface_1170.component_1170_67);
            break;
        case 8:
            ifSetColour(colour(0xFFFFFF), Component.interface_1170.component_1170_68);
            break;
        case 9:
            ifSetColour(colour(0xFFFFFF), Component.interface_1170.component_1170_167);
            break;
        case 10:
            ifSetColour(colour(0xFFFFFF), Component.interface_1170.component_1170_246);
            break;
    }
    let int1: struct = enumOp(type_int, type_struct, Enum.dom_special_boss_id_to_struct, intArg0);

    if (int1 == Struct.struct_7335 || int1 == Struct.struct_7336) {
        if (ccFind(Component.interface_1170.component_1170_141, 0) == 0) {
            ccCreate(Component.interface_1170.component_1170_141, 5, 0);
            ccSetSize(274, 96, 0, 0);
            ccSetPosition(4, 6, 0, 0);
            ccSetGraphic(Graphic.aif_domtower_runefest_logo);
        }
    } else if (ccFind(Component.interface_1170.component_1170_141, 0) == 1) {
        ccDelete();
    }
    let str1: string = structParam(int1, Param.param_2184);
    let str2: string = "If you win you'll get a dominion factor of: " + "<col=f5b241>" + tostring(enumOp(type_int, type_int, Enum.dom_dom_fact_boss_special_mod, intArg0)) + "</col>" + ". You will get no dominion factor for dying.";

    if (structParam(int1, Param.param_2097) == 1) {
        str0 = "<col=f5b241>" + "Arena" + "</col>" + ": Single-way combat.";
    } else if (structParam(int1, Param.param_2097) == 2) {
        str0 = "<col=f5b241>" + "Arena" + "</col>" + ": Multi-way combat.";
    } else if (structParam(int1, Param.param_2097) == 3) {
        str0 = "<col=f5b241>" + "Arena" + "</col>" + ": Single-way combat with small blocking pillars.";
    } else if (structParam(int1, Param.param_2097) == 4) {
        str0 = "<col=f5b241>" + "Arena" + "</col>" + ": Multi-way combat with large blocking pillars.";
    } else if (structParam(int1, Param.param_2097) == 5) {
        str0 = "<col=f5b241>" + "Arena" + "</col>" + ": Multi-way combat with podiums and small blocking pillars";
    }
    ifSetText(str1 + "<br>" + "<br>" + str0 + "<br>" + "<br>" + str2, Component.interface_1170.component_1170_142);
    cs2_5475(str1 + "<br>" + "<br>" + str0 + "<br>" + "<br>" + str2, Component.interface_1170.component_1170_142, Component.interface_1170.component_1170_141, Component.interface_1170.component_1170_140);
    let str3: string = structParam(int1, Param.param_2095);
    ifSetText(str3, Component.interface_1170.component_1170_38);
    soundVorbisVolume(8088, 1, 0, 255);
}
