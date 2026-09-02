/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,tutorial3_cameracontrols_rotate]

function tutorial3_cameracontrols_rotate(intArg0: number, intArg1: component, intArg2: component, intArg3: component, intArg4: component, intArg5: component, intArg6: component, intArg7: component, intArg8: component): void {
    if (varp_tutorial < 6) {
        return;
    }
    let int9: component = -1;
    let int10: component = -1;
    let int11: graphic = -1;
    let int12: graphic = -1;

    switch (intArg0) {
        case 1:
            camDecY();
            [int9, int10] = [intArg1, intArg5];
            [int11, int12] = [Graphic.km_camerakeys_2, Graphic.km_camerakeys_7];
            break;
        case 2:
            camIncY();
            [int9, int10] = [intArg2, intArg6];
            [int11, int12] = [Graphic.km_camerakeys_1, Graphic.km_camerakeys_6];
            break;
        case 3:
            camIncX();
            [int9, int10] = [intArg3, intArg7];
            [int11, int12] = [Graphic.km_camerakeys_3, Graphic.km_camerakeys_8];
            break;
        case 4:
            camDecX();
            [int9, int10] = [intArg4, intArg8];
            [int11, int12] = [Graphic.km_camerakeys_4, Graphic.km_camerakeys_9];
            break;
        default:
            return;
    }
    ifSetGraphic(Graphic.km_camerakeys_5, int9);
    let int13: graphic = Graphic.km_camerakeys_0;
    ifSetOnTimer(hook(cs2_1723, "Iidi", [event_com, event_comsubid, int13, clientClock() + 10]), int9);
    ifSetGraphic(int12, int10);
    ifSetOnTimer(hook(cs2_1723, "Iidi", [event_com, event_comsubid, int11, clientClock() + 10]), int10);
}
