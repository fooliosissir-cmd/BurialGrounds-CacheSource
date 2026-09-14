/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_427

function cs2_427(intArg0: number): void {
    let int1: number = 0;
    let int2: number = 0;
    let int3: struct = -1;
    let int4: number = varbit_conq_command_ability_1;
    let int5: number = varbit_conq_command_ability_2;
    let int6: number = varbit_conq_command_ability_3;
    let int7: number = varbit_conq_command_ability_4;

    if (intArg0 == 1) {
        int4 = 1;
        int5 = 3;
        int6 = 5;
        int7 = 6;
    }

    if (int4 == 0) {
        ifSetHide(true, Component.interface_1024.component_1024_8);
        int1 = int1 + 1;
    } else {
        int3 = cs2_488(int4);
        if (int3 != -1) {
            ifSetHide(false, Component.interface_1024.component_1024_8);
            ifSetOpBase(structParam(int3, Param.conq_command_name), Component.interface_1024.component_1024_8);
            ifSetText(structParam(int3, Param.conq_command_name), Component.interface_1024.component_1024_75);
            ifSetGraphic(structParam(int3, Param.conq_command_icon), Component.interface_1024.component_1024_77);
            ifSetText(tostring(structParam(int3, Param.conq_command_cost)), Component.interface_1024.component_1024_76);
        }
        if (int4 == 9) {
            ifSetOp(1, "Cast", Component.interface_1024.component_1024_8);
        }
    }

    if (int5 == 0) {
        ifSetHide(true, Component.interface_1024.component_1024_9);
        int1 = int1 + 1;
    } else {
        int3 = cs2_488(int5);
        if (int3 != -1) {
            ifSetHide(false, Component.interface_1024.component_1024_9);
            ifSetOpBase(structParam(int3, Param.conq_command_name), Component.interface_1024.component_1024_9);
            ifSetText(structParam(int3, Param.conq_command_name), Component.interface_1024.component_1024_58);
            ifSetGraphic(structParam(int3, Param.conq_command_icon), Component.interface_1024.component_1024_60);
            ifSetText(tostring(structParam(int3, Param.conq_command_cost)), Component.interface_1024.component_1024_59);
        }
        if (int5 == 9) {
            ifSetOp(1, "Cast", Component.interface_1024.component_1024_9);
        }
    }

    if (int6 == 0) {
        ifSetHide(true, Component.interface_1024.component_1024_10);
        int1 = int1 + 1;
    } else {
        int3 = cs2_488(int6);
        if (int3 != -1) {
            ifSetHide(false, Component.interface_1024.component_1024_10);
            ifSetOpBase(structParam(int3, Param.conq_command_name), Component.interface_1024.component_1024_10);
            ifSetText(structParam(int3, Param.conq_command_name), Component.interface_1024.component_1024_41);
            ifSetGraphic(structParam(int3, Param.conq_command_icon), Component.interface_1024.component_1024_43);
            ifSetText(tostring(structParam(int3, Param.conq_command_cost)), Component.interface_1024.component_1024_42);
        }
        if (int6 == 9) {
            ifSetOp(1, "Cast", Component.interface_1024.component_1024_10);
        }
    }

    if (int7 == 0) {
        ifSetHide(true, Component.interface_1024.component_1024_11);
        int1 = int1 + 1;
    } else {
        int3 = cs2_488(int7);
        if (int3 != -1) {
            ifSetHide(false, Component.interface_1024.component_1024_11);
            ifSetOpBase(structParam(int3, Param.conq_command_name), Component.interface_1024.component_1024_11);
            ifSetText(structParam(int3, Param.conq_command_name), Component.interface_1024.component_1024_24);
            ifSetGraphic(structParam(int3, Param.conq_command_icon), Component.interface_1024.component_1024_26);
            ifSetText(tostring(structParam(int3, Param.conq_command_cost)), Component.interface_1024.component_1024_25);
        }
        if (int7 == 9) {
            ifSetOp(1, "Cast", Component.interface_1024.component_1024_11);
        }
    }

    if (int1 == 4) {
        ifSetHide(true, Component.interface_1024.component_1024_1);
        ifSetHide(false, Component.interface_1024.component_1024_2);
    } else if (int1 == 3) {
        ifSetHide(false, Component.interface_1024.component_1024_1);
        ifSetHide(true, Component.interface_1024.component_1024_2);
        if (int4 != 0) {
            ifSetPosition(ifGetX(Component.interface_1024.component_1024_8), 102, 0, 0, Component.interface_1024.component_1024_8);
            ifSetOnMouseRepeat(hook(cs2_432, "Ii", [event_com, 6]), Component.interface_1024.component_1024_65);
        } else if (int5 != 0) {
            ifSetPosition(ifGetX(Component.interface_1024.component_1024_9), 102, 0, 0, Component.interface_1024.component_1024_9);
            ifSetOnMouseRepeat(hook(cs2_432, "Ii", [event_com, 6]), Component.interface_1024.component_1024_48);
        } else if (int6 != 0) {
            ifSetPosition(ifGetX(Component.interface_1024.component_1024_10), 102, 0, 0, Component.interface_1024.component_1024_10);
            ifSetOnMouseRepeat(hook(cs2_432, "Ii", [event_com, 6]), Component.interface_1024.component_1024_31);
        } else if (int7 != 0) {
            ifSetPosition(ifGetX(Component.interface_1024.component_1024_11), 102, 0, 0, Component.interface_1024.component_1024_11);
            ifSetOnMouseRepeat(hook(cs2_432, "Ii", [event_com, 6]), Component.interface_1024.component_1024_14);
        }
    } else if (int1 == 2) {
        ifSetHide(false, Component.interface_1024.component_1024_1);
        ifSetHide(true, Component.interface_1024.component_1024_2);
        if (int4 != 0) {
            ifSetPosition(ifGetX(Component.interface_1024.component_1024_8), 60, 0, 0, Component.interface_1024.component_1024_8);
            ifSetOnMouseRepeat(hook(cs2_432, "Ii", [event_com, 111]), Component.interface_1024.component_1024_65);
            int2 = int2 + 1;
        }
        if (int5 != 0) {
            if (int2 == 0) {
                ifSetPosition(ifGetX(Component.interface_1024.component_1024_9), 60, 0, 0, Component.interface_1024.component_1024_9);
                ifSetOnMouseRepeat(hook(cs2_432, "Ii", [event_com, 111]), Component.interface_1024.component_1024_48);
            } else {
                ifSetPosition(ifGetX(Component.interface_1024.component_1024_9), 145, 0, 0, Component.interface_1024.component_1024_9);
                ifSetOnMouseRepeat(hook(cs2_432, "Ii", [event_com, 49]), Component.interface_1024.component_1024_48);
            }
            int2 = int2 + 1;
        }
        if (int6 != 0) {
            if (int2 == 0) {
                ifSetPosition(ifGetX(Component.interface_1024.component_1024_10), 60, 0, 0, Component.interface_1024.component_1024_10);
                ifSetOnMouseRepeat(hook(cs2_432, "Ii", [event_com, 111]), Component.interface_1024.component_1024_31);
            } else {
                ifSetPosition(ifGetX(Component.interface_1024.component_1024_10), 145, 0, 0, Component.interface_1024.component_1024_10);
                ifSetOnMouseRepeat(hook(cs2_432, "Ii", [event_com, 49]), Component.interface_1024.component_1024_31);
            }
            int2 = int2 + 1;
        }
        if (int7 != 0) {
            ifSetPosition(ifGetX(Component.interface_1024.component_1024_11), 145, 0, 0, Component.interface_1024.component_1024_11);
            ifSetOnMouseRepeat(hook(cs2_432, "Ii", [event_com, 49]), Component.interface_1024.component_1024_14);
        }
    } else if (int1 == 1) {
        ifSetHide(false, Component.interface_1024.component_1024_1);
        ifSetHide(true, Component.interface_1024.component_1024_2);
        if (int4 != 0) {
            ifSetPosition(ifGetX(Component.interface_1024.component_1024_8), 41, 0, 0, Component.interface_1024.component_1024_8);
            ifSetOnMouseRepeat(hook(cs2_432, "Ii", [event_com, 92]), Component.interface_1024.component_1024_65);
            int2 = int2 + 1;
        }
        if (int5 != 0) {
            if (int2 == 0) {
                ifSetPosition(ifGetX(Component.interface_1024.component_1024_9), 41, 0, 0, Component.interface_1024.component_1024_9);
                ifSetOnMouseRepeat(hook(cs2_432, "Ii", [event_com, 92]), Component.interface_1024.component_1024_48);
            } else {
                ifSetPosition(ifGetX(Component.interface_1024.component_1024_9), 102, 0, 0, Component.interface_1024.component_1024_9);
                ifSetOnMouseRepeat(hook(cs2_432, "Ii", [event_com, 6]), Component.interface_1024.component_1024_48);
            }
            int2 = int2 + 1;
        }
        if (int6 != 0) {
            if (int2 == 1) {
                ifSetPosition(ifGetX(Component.interface_1024.component_1024_10), 102, 0, 0, Component.interface_1024.component_1024_10);
                ifSetOnMouseRepeat(hook(cs2_432, "Ii", [event_com, 6]), Component.interface_1024.component_1024_31);
            } else {
                ifSetPosition(ifGetX(Component.interface_1024.component_1024_10), 163, 0, 0, Component.interface_1024.component_1024_10);
                ifSetOnMouseRepeat(hook(cs2_432, "Ii", [event_com, 67]), Component.interface_1024.component_1024_31);
            }
            int2 = int2 + 1;
        }
        if (int7 != 0) {
            ifSetPosition(ifGetX(Component.interface_1024.component_1024_11), 163, 0, 0, Component.interface_1024.component_1024_11);
            ifSetOnMouseRepeat(hook(cs2_432, "Ii", [event_com, 67]), Component.interface_1024.component_1024_31);
        }
    } else {
        ifSetHide(false, Component.interface_1024.component_1024_1);
        ifSetHide(true, Component.interface_1024.component_1024_2);
        ifSetPosition(ifGetX(Component.interface_1024.component_1024_8), 29, 0, 0, Component.interface_1024.component_1024_8);
        ifSetOnMouseRepeat(hook(cs2_432, "Ii", [event_com, 80]), Component.interface_1024.component_1024_65);
        ifSetPosition(ifGetX(Component.interface_1024.component_1024_9), 78, 0, 0, Component.interface_1024.component_1024_9);
        ifSetOnMouseRepeat(hook(cs2_432, "Ii", [event_com, 129]), Component.interface_1024.component_1024_48);
        ifSetPosition(ifGetX(Component.interface_1024.component_1024_10), 127, 0, 0, Component.interface_1024.component_1024_10);
        ifSetOnMouseRepeat(hook(cs2_432, "Ii", [event_com, 31]), Component.interface_1024.component_1024_31);
        ifSetPosition(ifGetX(Component.interface_1024.component_1024_11), 176, 0, 0, Component.interface_1024.component_1024_11);
        ifSetOnMouseRepeat(hook(cs2_432, "Ii", [event_com, 80]), Component.interface_1024.component_1024_14);
    }
}
