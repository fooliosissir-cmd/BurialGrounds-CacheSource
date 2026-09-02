/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_3498

function cs2_3498(intArg0: number, intArg1: number): void {
    let int2: component = Component.interface_994.component_994_74;
    let int3: component = Component.interface_994.component_994_78;
    let int4: component = Component.interface_994.component_994_80;
    let int5: number = 10 + 10 * intArg0;
    let int6: number = ifGetY(Component.interface_994.component_994_135);

    switch (int6) {
        case -22:
            int6 = intArg0;
            break;
        case -137:
            int6 = intArg0 + 11;
            break;
        case -222:
            int6 = intArg0 + 17;
            break;
        case -277:
            int6 = intArg0 + 29;
            break;
        case -400:
            int6 = intArg0 + 35;
            break;
        case -500:
            int6 = intArg0 + 47;
            break;
        default:
            int6 = intArg0;
            break;
    }

    if (intArg1 != 0) {
        int6 = intArg1;
    }
    soundSynth(Sound.sound_8809, 1, 0);
    ifSetPosition(0, int5, 0, 0, int2);
    ifSetText(tostring(int6), int3);

    switch (intArg0) {
        case 1:
            ifSetText(ifGetText(Component.interface_994.component_994_44), int4);
            break;
        case 2:
            ifSetText(ifGetText(Component.interface_994.component_994_46), int4);
            break;
        case 3:
            ifSetText(ifGetText(Component.interface_994.component_994_48), int4);
            break;
        case 4:
            ifSetText(ifGetText(Component.interface_994.component_994_50), int4);
            break;
        case 5:
            ifSetText(ifGetText(Component.interface_994.component_994_52), int4);
            break;
        case 6:
            ifSetText(ifGetText(Component.interface_994.component_994_54), int4);
            break;
        case 7:
            ifSetText(ifGetText(Component.interface_994.component_994_56), int4);
            break;
        case 8:
            ifSetText(ifGetText(Component.interface_994.component_994_58), int4);
            break;
        case 9:
            ifSetText(ifGetText(Component.interface_994.component_994_60), int4);
            break;
        case 10:
            ifSetText(ifGetText(Component.interface_994.component_994_62), int4);
            break;
        case 11:
            ifSetText(ifGetText(Component.interface_994.component_994_64), int4);
            break;
        case 12:
            ifSetText(ifGetText(Component.interface_994.component_994_66), int4);
            break;
        case 13:
            ifSetText(ifGetText(Component.interface_994.component_994_68), int4);
            break;
        case 14:
            ifSetText(ifGetText(Component.interface_994.component_994_70), int4);
            break;
        case 15:
            ifSetText(ifGetText(Component.interface_994.component_994_72), int4);
            break;
    }
}
