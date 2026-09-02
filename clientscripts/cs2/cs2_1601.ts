/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1601

function cs2_1601(intArg0: number): void {
    let int1: component = -1;
    let int2: component = -1;

    switch (randominc(2)) {
        case 0:
            soundSynth(Sound.sound_7813, 1, 0);
            break;
        case 1:
            soundSynth(Sound.sound_7817, 1, 0);
            break;
        case 2:
            soundSynth(Sound.sound_7818, 1, 0);
            break;
    }

    switch (intArg0) {
        case 63701023:
            int1 = Component.interface_972.component_972_3;
            int2 = Component.interface_972.component_972_4;
            break;
        case 63701017:
            int1 = Component.interface_972.component_972_4;
            int2 = Component.interface_972.component_972_5;
            break;
        case 63701012:
            int1 = Component.interface_972.component_972_5;
            int2 = Component.interface_972.component_972_6;
            break;
        case 63701007:
            int1 = Component.interface_972.component_972_6;
            int2 = Component.interface_972.component_972_7;
            break;
        case 63701003:
            int1 = Component.interface_972.component_972_7;
            int2 = Component.interface_972.component_972_6;
            break;
        case 63701008:
            int1 = Component.interface_972.component_972_6;
            int2 = Component.interface_972.component_972_5;
            break;
        case 63701013:
            int1 = Component.interface_972.component_972_5;
            int2 = Component.interface_972.component_972_4;
            break;
        case 63701018:
            int1 = Component.interface_972.component_972_4;
            int2 = Component.interface_972.component_972_3;
            break;
        default:
            cs2_675();
            break;
    }
    ifSetHide(true, int1);
    ifSetHide(false, int2);
}
