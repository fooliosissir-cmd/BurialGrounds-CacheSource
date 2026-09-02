/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_3979

function cs2_3979(intArg0: number, intArg1: component): void {
    varbit_8576 = intArg0;
    let int2: struct = task_get_data(intArg0);
    let str0: string = " -" + "<br>";
    str0 = append(structParam(int2, Param.task_name), str0);
    str0 = append(str0, structParam(int2, Param.task_details));

    if (cs2_3999(intArg0) == 0) {
        ifSetOnMouseOver(hook(cs2_3981, "Is", [intArg1, str0]), intArg1);
    } else {
        ifSetOnMouseOver(noHook(""), intArg1);
    }

    switch (intArg1) {
        case Component.interface_1056.component_1056_61:
            varbit_8577 = 1;
            break;
        case Component.interface_1056.component_1056_139:
            varbit_8577 = 2;
            break;
        case Component.interface_1056.component_1056_144:
            varbit_8577 = 3;
            break;
        case Component.interface_1056.component_1056_149:
            varbit_8577 = 4;
            break;
        case Component.interface_1056.component_1056_154:
            varbit_8577 = 5;
            break;
        case Component.interface_1056.component_1056_160:
            varbit_8577 = 6;
            break;
    }
    cs2_3975();
}
