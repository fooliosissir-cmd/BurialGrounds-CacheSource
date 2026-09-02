/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_893

function cs2_893(): void {
    if (varc_easter08_incubator_update_delay < 10) {
        varc_easter08_incubator_update_delay = varc_easter08_incubator_update_delay + 1;
        return;
    }
    varc_easter08_incubator_update_delay = 0;
    let int0: number = 20 - 0;
    let int1: number = 80 - 0;
    let int2: number = int1 / int0;
    let int3: number = varbit_easter08_incubator_temperature * int2;

    if (varc_easter08_cl_visual_temperature < int3) {
        varc_easter08_cl_visual_temperature = varc_easter08_cl_visual_temperature + 1;
    } else if (varc_easter08_cl_visual_temperature > int3) {
        varc_easter08_cl_visual_temperature = varc_easter08_cl_visual_temperature - 1;
    }

    if (varc_easter08_incubator_needle_direction == 0) {
        if (varc_easter08_incubator_needle_wobble > 0) {
            varc_easter08_incubator_needle_wobble = varc_easter08_incubator_needle_wobble - 1;
        } else {
            varc_easter08_incubator_needle_direction = 1;
        }
    } else if (varc_easter08_incubator_needle_wobble < 4) {
        varc_easter08_incubator_needle_wobble = varc_easter08_incubator_needle_wobble + 1;
    } else {
        varc_easter08_incubator_needle_direction = 0;
    }
    let int4: number = varc_easter08_cl_visual_temperature + varc_easter08_incubator_needle_wobble + 2;
    let int5: number = 1024 / int1;
    int4 = int4 * int5;
    int4 = int4 + 512;
    int4 = 2048 - int4;
    ifSetModelAngle(0, 0, 0, 0, int4, 388, Component.interface_717.component_717_4);
    let int6: number = enumOp(type_int, type_int, Enum.easter08_mainvar_to_temperature, varbit_easter08_main) * (1024 / int0);
    int6 = int6 + 512;
    int6 = 2048 - int6;
    ifSetModelAngle(0, 0, 0, 0, int6, 365, Component.interface_717.component_717_3);
}
