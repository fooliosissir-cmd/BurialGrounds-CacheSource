/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6054

function cs2_6054(): void {
    let int0: component = Component.interface_1253.component_1253_84;

    soundVorbisRate(14351, 1, 0, 50, 255);
    let int1: number = 1;

    if (varc_1803 == 1) {
        varc_1803 = 0;
        int1 = 1;
        ifSethflip(false, Component.interface_1253.component_1253_96);
        ifSethflip(false, Component.interface_1253.component_1253_97);
        ifSethflip(false, Component.interface_1253.component_1253_98);
    } else {
        varc_1803 = 1;
        int1 = 0;
        ifSethflip(true, Component.interface_1253.component_1253_96);
        ifSethflip(true, Component.interface_1253.component_1253_97);
        ifSethflip(true, Component.interface_1253.component_1253_98);
    }
    ifSetOnTimer(hook(cs2_6055, "Ii", [event_com, int1]), int0);
}
