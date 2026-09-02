/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,easter08_incubator_init]

function easter08_incubator_init(): void {
    let int0: number = 20 - 0;
    let int1: number = 80 - 0;
    let int2: number = int1 / int0;
    let int3: number = varbit_easter08_incubator_temperature * int2;
    let int4: number = 1024 / int1;

    varc_easter08_cl_visual_temperature = int3;
    let int5: number = varc_easter08_cl_visual_temperature * int4;
    int5 = int5 + 512;
    int5 = 2048 - int5;
    ifSetModelAngle(0, 0, 0, 0, int5, 388, Component.interface_717.component_717_4);
    cs2_896();
    let int6: number = enumOp(type_int, type_int, Enum.easter08_mainvar_to_temperature, varbit_easter08_main) * (1024 / int0);
    int6 = int6 + 512;
    ifSetModelAngle(0, 0, 0, 0, int6, 365, Component.interface_717.component_717_3);
}
