/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5910

function cs2_5910(intArg0: number): void {
    let int1: graphic = Graphic.graphic_9959;
    let int2: number = 9931;
    let int3: number = cs2_5907(intArg0, varbit_10865);

    if (varbit_wof_reward_object_id > 0) {
        switch (int3) {
            case 0:
                int1 = Graphic.graphic_9957;
                int2 = 9943;
                break;
            case 1:
                int1 = Graphic.graphic_9958;
                int2 = 9935;
                break;
            case 2:
                int1 = Graphic.graphic_9959;
                int2 = 9931;
                break;
        }
        ifSetGraphic(cs2_6267(int1), Component.interface_1253.component_1253_163);
        ifSetGraphic(cs2_5860(int3), Component.interface_1253.component_1253_334);
        ifSetGraphic(cs2_5949(int3), Component.interface_1253.component_1253_335);
    }
}
