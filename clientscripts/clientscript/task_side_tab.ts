/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,task_side_tab]

function task_side_tab(intArg0: number): void {
    let str0: string = "";
    let int1: number = 0;
    let int2: number = 0;
    let int3: number = 0;

    switch (intArg0) {
        case 0:
            ifSetHide(true, Component.interface_1056.component_1056_89);
            ifSetHide(true, Component.interface_1056.component_1056_90);
            ifSetHide(false, Component.interface_1056.component_1056_120);
            if (compare(ifGetText(Component.interface_1056.component_1056_88), structParam(Struct.struct_1753, Param.task_name)) == 0 || (compare(ifGetText(Component.interface_1056.component_1056_88), structParam(Struct.struct_1752, Param.task_name)) == 0 && varp_tutorial == 1000)) {
                str0 = "Click on the Hints tab for more on how to complete this Task.";
            } else if (compare(ifGetText(Component.interface_1056.component_1056_88), structParam(Struct.struct_1754, Param.task_name)) == 0 || compare(ifGetText(Component.interface_1056.component_1056_88), structParam(Struct.struct_1518, Param.task_name)) == 0) {
                str0 = "Remember, the Hints tab provides more details about a Task.";
            }
            if (getWindowMode() >= 2) {
                int1 = 196;
                int2 = 183;
                int3 = 1;
                if (ifGetWidth(Component.interface_746.component_746_1) < 997) {
                    int2 = int2 + 40;
                }
            } else {
                int1 = 217;
                int2 = 177;
            }
            break;
        case 1:
            ifSetHide(true, Component.interface_1056.component_1056_89);
            ifSetHide(false, Component.interface_1056.component_1056_90);
            ifSetHide(true, Component.interface_1056.component_1056_120);
            if (compare(ifGetText(Component.interface_1056.component_1056_88), structParam(Struct.struct_1753, Param.task_name)) == 0 || (compare(ifGetText(Component.interface_1056.component_1056_88), structParam(Struct.struct_1752, Param.task_name)) == 0 && varp_tutorial == 1000)) {
                str0 = "Click on the Hints tab for more on how to complete this Task.";
            } else if (compare(ifGetText(Component.interface_1056.component_1056_88), structParam(Struct.struct_1754, Param.task_name)) == 0 || compare(ifGetText(Component.interface_1056.component_1056_88), structParam(Struct.struct_1518, Param.task_name)) == 0) {
                str0 = "Remember, the Hints tab provides more details about a Task.";
            }
            if (getWindowMode() >= 2) {
                int1 = 196;
                int2 = 183;
                int3 = 1;
                if (ifGetWidth(Component.interface_746.component_746_1) < 997) {
                    int2 = int2 + 40;
                }
            } else {
                int1 = 217;
                int2 = 177;
            }
            break;
        case 2:
            ifSetHide(false, Component.interface_1056.component_1056_89);
            ifSetHide(true, Component.interface_1056.component_1056_90);
            ifSetHide(true, Component.interface_1056.component_1056_120);
            if (compare(ifGetText(Component.interface_1056.component_1056_88), structParam(Struct.struct_1753, Param.task_name)) == 0 || compare(ifGetText(Component.interface_1056.component_1056_88), structParam(Struct.struct_1754, Param.task_name)) == 0) {
                str0 = "The '?' icon will add an arrow to the screen which points to your destination.";
            }
            if (getWindowMode() >= 2) {
                int1 = 196;
                int2 = 87;
                int3 = 1;
                if (ifGetWidth(Component.interface_746.component_746_1) < 997) {
                    int2 = int2 + 40;
                }
            } else {
                int1 = 208;
                int2 = 78;
            }
            break;
    }

    if (varbit_task_priority_mode == 0) {
        str0 = "";
    }
}
