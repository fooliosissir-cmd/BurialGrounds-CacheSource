/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_490

function cs2_490(): void {
    let int0: struct = cs2_488(varbit_conq_command_ability_1);
    let int1: struct = cs2_488(varbit_conq_command_ability_2);
    let int2: struct = cs2_488(varbit_conq_command_ability_3);
    let int3: struct = cs2_488(varbit_conq_command_ability_4);
    let int4: component = cs2_489(varbit_conq_command_ability_1);
    let int5: component = cs2_489(varbit_conq_command_ability_2);
    let int6: component = cs2_489(varbit_conq_command_ability_3);
    let int7: component = cs2_489(varbit_conq_command_ability_4);

    ifSetColour(colour(0xFF981F), Component.interface_1015.component_1015_58);
    ifSetColour(colour(0xFF981F), Component.interface_1015.component_1015_60);
    ifSetColour(colour(0xFF981F), Component.interface_1015.component_1015_62);
    ifSetColour(colour(0xFF981F), Component.interface_1015.component_1015_64);
    ifSetColour(colour(0xFF981F), Component.interface_1015.component_1015_68);
    ifSetColour(colour(0xFF981F), Component.interface_1015.component_1015_70);
    ifSetColour(colour(0xFF981F), Component.interface_1015.component_1015_72);
    ifSetColour(colour(0xFF981F), Component.interface_1015.component_1015_74);
    ifSetColour(colour(0xFF981F), Component.interface_1015.component_1015_66);

    if (int4 != -1) {
        ifSetColour(colour(0x585042), int4);
    }

    if (int5 != -1) {
        ifSetColour(colour(0x585042), int5);
    }

    if (int6 != -1) {
        ifSetColour(colour(0x585042), int6);
    }

    if (int7 != -1) {
        ifSetColour(colour(0x585042), int7);
    }

    if (int0 == -1) {
        ifSetHide(true, Component.interface_1015.component_1015_96);
        ifSetHide(false, Component.interface_1015.component_1015_97);
    } else {
        ifSetHide(false, Component.interface_1015.component_1015_96);
        ifSetHide(true, Component.interface_1015.component_1015_97);
        ifSetText(structParam(int0, Param.conq_command_name), Component.interface_1015.component_1015_100);
        ifSetGraphic(structParam(int0, Param.conq_command_icon), Component.interface_1015.component_1015_99);
    }

    if (int1 == -1) {
        ifSetHide(true, Component.interface_1015.component_1015_90);
        ifSetHide(false, Component.interface_1015.component_1015_93);
    } else {
        ifSetHide(false, Component.interface_1015.component_1015_90);
        ifSetHide(true, Component.interface_1015.component_1015_93);
        ifSetText(structParam(int1, Param.conq_command_name), Component.interface_1015.component_1015_92);
        ifSetGraphic(structParam(int1, Param.conq_command_icon), Component.interface_1015.component_1015_91);
    }

    if (int2 == -1) {
        ifSetHide(true, Component.interface_1015.component_1015_84);
        ifSetHide(false, Component.interface_1015.component_1015_87);
    } else {
        ifSetHide(false, Component.interface_1015.component_1015_84);
        ifSetHide(true, Component.interface_1015.component_1015_87);
        ifSetText(structParam(int2, Param.conq_command_name), Component.interface_1015.component_1015_86);
        ifSetGraphic(structParam(int2, Param.conq_command_icon), Component.interface_1015.component_1015_85);
    }

    if (int3 == -1) {
        ifSetHide(true, Component.interface_1015.component_1015_78);
        ifSetHide(false, Component.interface_1015.component_1015_81);
    } else {
        ifSetHide(false, Component.interface_1015.component_1015_78);
        ifSetHide(true, Component.interface_1015.component_1015_81);
        ifSetText(structParam(int3, Param.conq_command_name), Component.interface_1015.component_1015_80);
        ifSetGraphic(structParam(int3, Param.conq_command_icon), Component.interface_1015.component_1015_79);
    }
}
