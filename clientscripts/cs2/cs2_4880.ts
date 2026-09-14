/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4880

function cs2_4880(intArg0: component): void {
    let str0: string = "";
    let int1: number = 0;
    let int2: number = 0;
    let int3: number = 3;
    let int4: number = 0;
    let int5: number = 2236962;
    let int6: graphic = -1;
    let int7: number = 0;
    let int8: number = cs2_4964(intArg0);
    let int9: number = 0;
    let int10: number = 0;

    switch (intArg0) {
        case Component.interface_1258.component_1258_501:
        case Component.interface_1258.component_1258_504:
        case Component.interface_1258.component_1258_507:
        case Component.interface_1258.component_1258_510:
        case Component.interface_1258.component_1258_513:
        case Component.interface_1258.component_1258_516:
        case Component.interface_1258.component_1258_520:
        case Component.interface_1258.component_1258_523:
        case Component.interface_1258.component_1258_526:
        case Component.interface_1258.component_1258_529:
        case Component.interface_1258.component_1258_532:
        case Component.interface_1258.component_1258_535:
        case Component.interface_1258.component_1258_538:
        case Component.interface_1258.component_1258_541:
        case Component.interface_1258.component_1258_544:
        case Component.interface_1258.component_1258_547:
        case Component.interface_1258.component_1258_550:
        case Component.interface_1258.component_1258_553:
        case Component.interface_1258.component_1258_556:
            int10 = 1;
            break;
    }

    if (clanProfileFind() == 1) {
        ccDeleteAll(intArg0);
        cs2_4407(intArg0, 1, Cursor.cursor_citadel_build);
        int7 = cs2_4971(int8);
        int6 = cs2_5171(int7);
        ccCreate(intArg0, 5, 0);
        ccSetSize(18, 18, 0, 0);
        ccSetPosition(0, 0, 1, 1);
        if (int10 == 1) {
            ccSetTrans(255);
        }
        switch (int8) {
            case 35:
            case 36:
            case 37:
            case 38:
            case 39:
            case 40:
            case 41:
            case 42:
            case 43:
            case 44:
            case 45:
            case 46:
            case 47:
            case 48:
                int2 = 1;
                int3 = 1;
                break;
            default:
                int2 = 0;
                int3 = 3;
                break;
        }
        if (int9 > 0) {
            int1 = 1;
            int5 = 12303291;
        } else {
            int1 = 0;
            int5 = 2236962;
        }
        if (int2 == 1) {
            if (int1 == 1) {
                str0 = "Build over the existing blanket change.";
            } else {
                str0 = "Build a new blanket change.";
            }
        } else {
            switch (int8) {
                case 24:
                case 25:
                case 26:
                case 27:
                case 28:
                    if (int1 == 1) {
                        str0 = "Build over the existing statue.";
                    } else {
                        str0 = "Build a new statue.";
                    }
                    break;
                default:
                    if (int1 == 1) {
                        str0 = "Build over the existing customisation.";
                    } else {
                        str0 = "Build a new customisation.";
                    }
                    break;
            }
        }
    }
    let int11: component = cs2_5216(int8);

    if (int2 == 0) {
        ifSetHide(true, ifGetParentLayer(intArg0));
        if (int11 != -1) {
            ifSetOnMouseRepeat(hook(cs2_4882, "Isi", [event_com, str0, int3]), int11);
        }
    }
    ifSetOnMouseRepeat(hook(cs2_4882, "Isi", [event_com, str0, int3]), intArg0);
}
