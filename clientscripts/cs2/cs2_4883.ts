/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4883

function cs2_4883(intArg0: component, strArg0: string, intArg1: number): void {
    let int2: number = cs2_4964(intArg0);
    let int3: number = cs2_4971(int2);
    let int4: component = ifGetParentLayer(intArg0);
    let int5: component = ifGetParentLayer(int4);
    let int6: component = cs2_5216(int2);

    if (int6 == -1) {
        int6 = intArg0;
    }
    let str1: string = "";
    let int7: number = 0;

    if (clanProfileFind() == 1) {
        switch (intArg0) {
            case Component.interface_1258.component_1258_558:
                intArg1 = 1;
                strArg0 = "Build a new party room chair customisation.";
                if (pushVarClanBit<2210>() > 0) {
                    int7 = 1;
                }
                break;
            case Component.interface_1258.component_1258_566:
                intArg1 = 1;
                strArg0 = "Build a new party room table customisation.";
                if (pushVarClanBit<2220>() > 0) {
                    int7 = 1;
                }
                break;
            case Component.interface_1258.component_1258_562:
                intArg1 = 1;
                strArg0 = "Build a new flag customisation.";
                if (pushVarClanBit<2240>() > 0) {
                    int7 = 1;
                }
                break;
            case Component.interface_1258.component_1258_570:
                intArg1 = 1;
                strArg0 = "Build a new potted plant customisation.";
                if (pushVarClanBit<2190>() > 0) {
                    int7 = 1;
                }
                break;
            case Component.interface_1258.component_1258_574:
                intArg1 = 1;
                strArg0 = "Build a new sundial customisation.";
                if (pushVarClanBit<2230>() > 0) {
                    int7 = 1;
                }
                break;
            case Component.interface_1258.component_1258_578:
                intArg1 = 1;
                strArg0 = "Build a new keep flag customisation.";
                if (pushVarClanBit<2200>() > 0) {
                    int7 = 1;
                }
                break;
            case Component.interface_1258.component_1258_582:
                intArg1 = 1;
                strArg0 = "Build a new keep tapestry customisation.";
                if (pushVarClanBit<2260>() > 0) {
                    int7 = 1;
                }
                break;
            case Component.interface_1258.component_1258_586:
                intArg1 = 1;
                strArg0 = "Build a new keep banner customisation.";
                if (pushVarClanBit<2270>() > 0) {
                    int7 = 1;
                }
                break;
            case Component.interface_1258.component_1258_590:
                intArg1 = 1;
                strArg0 = "Build a new keep shield customisation.";
                if (pushVarClanBit<2280>() > 0) {
                    int7 = 1;
                }
                break;
            case Component.interface_1258.component_1258_594:
                intArg1 = 1;
                strArg0 = "Build a new keep fireplace customisation.";
                if (pushVarClanBit<2250>() > 0) {
                    int7 = 1;
                }
                break;
            case Component.interface_1258.component_1258_598:
                intArg1 = 1;
                strArg0 = "Build a new keep lower window customisation.";
                if (pushVarClanBit<2290>() > 0) {
                    int7 = 1;
                }
                break;
            case Component.interface_1258.component_1258_602:
                intArg1 = 1;
                strArg0 = "Build a new keep upper window customisation.";
                if (pushVarClanBit<2300>() > 0) {
                    int7 = 1;
                }
                break;
            case Component.interface_1258.component_1258_606:
                intArg1 = 1;
                strArg0 = "Build a new keep door customisation.";
                if (pushVarClanBit<2310>() > 0) {
                    int7 = 1;
                }
                break;
            case Component.interface_1258.component_1258_610:
                intArg1 = 1;
                strArg0 = "Build a new keep wall pattern customisation.";
                if (pushVarClanBit<2320>() > 0) {
                    int7 = 1;
                }
                break;
            default:
                strArg0 = "Build over: " + cs2_4914(int3);
                break;
        }
        if (int7 == 1) {
            strArg0 = "Build over " + cs2_4914(int3);
        }
        if (ifGetX(int4) < ifGetWidth(int5) / 2 - 30) {
            intArg1 = 1;
        }
    }
    ifSetOnMouseRepeat(hook(cs2_4538, "IIisifdiiiiii", [Component.interface_1258.component_1258_119, intArg0, -1, strArg0, 120, Graphic.verdana_11pt_regular, Graphic.verdana_11pt_regular, colour(0xFFFFFF), 13, 4, intArg1, event_mousex, event_mousey]), intArg0);
    ifSetOnMouseRepeat(hook(cs2_4538, "IIisifdiiiiii", [Component.interface_1258.component_1258_119, intArg0, -1, strArg0, 120, Graphic.verdana_11pt_regular, Graphic.verdana_11pt_regular, colour(0xFFFFFF), 13, 4, intArg1, event_mousex, event_mousey]), int6);
    ifSetOnMouseLeave(hook(clientscript_deltooltip, "I", [Component.interface_1258.component_1258_119]), intArg0);
}
