/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5371

function cs2_5371(intArg0: number, intArg1: number, intArg2: number): void {
    if (intArg0 < 1) {
        ifSetText("-", Component.agidad_overlay.num_2);
    }

    if (intArg0 < 2) {
        ifSetText("-", Component.agidad_overlay.num_3);
    }

    if (intArg0 < 3) {
        ifSetText("-", Component.agidad_overlay.num_4);
    }

    if (intArg0 < 4) {
        ifSetText("-", Component.agidad_overlay.num_5);
    }

    if (intArg0 < 5) {
        ifSetText("-", Component.agidad_overlay.num_6);
    }

    if (intArg0 < 6) {
        ifSetText("-", Component.agidad_overlay.num_7);
    }

    switch (intArg0) {
        case 0:
            ifSetText(tostring(intArg1), Component.agidad_overlay.num_1);
            break;
        case 1:
            ifSetText(tostring(intArg1), Component.agidad_overlay.num_2);
            break;
        case 2:
            ifSetText(tostring(intArg1), Component.agidad_overlay.num_3);
            break;
        case 3:
            ifSetText(tostring(intArg1), Component.agidad_overlay.num_4);
            break;
        case 4:
            ifSetText(tostring(intArg1), Component.agidad_overlay.num_5);
            break;
        case 5:
            ifSetText(tostring(intArg1), Component.agidad_overlay.num_6);
            break;
        case 6:
            ifSetText(tostring(intArg1), Component.agidad_overlay.num_7);
            break;
    }

    switch (intArg0) {
        case 0:
            cs2_5373(Component.agidad_overlay.num_2, intArg2);
            break;
        case 1:
            cs2_5373(Component.agidad_overlay.num_3, intArg2);
            break;
        case 2:
            cs2_5373(Component.agidad_overlay.num_4, intArg2);
            break;
        case 3:
            cs2_5373(Component.agidad_overlay.num_5, intArg2);
            break;
        case 4:
            cs2_5373(Component.agidad_overlay.num_6, intArg2);
            break;
        case 5:
            cs2_5373(Component.agidad_overlay.num_7, intArg2);
            break;
    }
    let int3: number = 63 * intArg0 - 189;
    let int4: number = int3 + 63;
    ifSetOnTimer(hook(cs2_5372, "Ii", [Component.agidad_overlay.marker_current, int3]), Component.agidad_overlay.marker_current);
    ifSetOnTimer(hook(cs2_5372, "Ii", [Component.agidad_overlay.marker_new, int4]), Component.agidad_overlay.marker_new);
    let int5: number = ifGetX(Component.agidad_overlay.marker_current) + ifGetWidth(Component.agidad_overlay.marker_current) / 2 - ifGetWidth(Component.agidad_overlay.numbers) / 2;

    if (int5 < int3) {
        soundVorbisVolume(7717, 1, 0, 180);
    }
}
