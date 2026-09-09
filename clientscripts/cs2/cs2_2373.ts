/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2373

function cs2_2373(intArg0: component, intArg1: number): void {
    ccDeleteAll(Component.interface_667.component_667_9);
    let int2: number = 0;
    let int3: component = -1;
    let int4: obj = -1;
    let str0: string = "";

    while (int2 < invSize(94)) {
        switch (int2) {
            case 0:
                int3 = Component.interface_667.component_667_10;
                break;
            case 1:
                int3 = Component.interface_667.component_667_12;
                break;
            case 2:
                int3 = Component.interface_667.component_667_13;
                break;
            case 3:
                int3 = Component.interface_667.component_667_15;
                break;
            case 4:
                int3 = Component.interface_667.component_667_16;
                break;
            case 5:
                int3 = Component.interface_667.component_667_17;
                break;
            case 7:
                int3 = Component.interface_667.component_667_18;
                break;
            case 9:
                int3 = Component.interface_667.component_667_20;
                break;
            case 10:
                int3 = Component.interface_667.component_667_19;
                break;
            case 12:
                int3 = Component.interface_667.component_667_21;
                break;
            case 13:
                int3 = Component.interface_667.component_667_14;
                break;
            case 14:
                int3 = Component.interface_667.component_667_11;
                break;
            default:
                int3 = -1;
                break;
        }
        ccCreate(Component.interface_667.component_667_9, 5, int2);
        if (int3 != -1) {
            int4 = invGetobj(94, int2);
            if (int4 != -1) {
                ccSetSize(36, 32, 0, 0);
                ccSetPosition(...cs2_788(int3, 2, 2), 0, 0);
                ccSetObject(int4, invGetNum(94, int2));
                ccSetOpBase(append("<col=ff9040>", ocName(int4)));
                ccSetOp(1, "Remove");
                ccSetOp(9, "Stats");
                ccSettargetverb("Compare");
                ccSetOp(10, "Examine");
                ccSetGraphicShadow(3153952);
                if (intArg1 == int2) {
                    ccSetOutline(2);
                } else {
                    ccSetOutline(1);
                }
                ccSetOnOpt(hook(cs2_1620, "Iiiii", [event_com, event_comsubid, 100, 0, 8]));
                ccSetOnTargetEnter(hook(cs2_2372, "Ii", [intArg0, int2]));
                ccSetOnOp(hook(cs2_2372, "Ii", [intArg0, -1]));
                ccSetOnMouseOver(hook(cs2_5495, "o", [int4]));
                ccHookMouseExit(hook(cs2_5495, "o", [-1]));
            } else {
                ccSetSize(32, 32, 0, 0);
                ccSetPosition(...cs2_788(int3, 2, 2), 0, 0);
                ccSetGraphic(gameframe_skin_graphic(enumOp(type_int, type_graphic, Enum.enum_796, int2)));
            }
        } else {
            ccSetHide(true);
        }
        int2 = int2 + 1;
    }

    if (intArg1 != -1 && invGetobj(94, intArg1) == -1) {
        intArg1 = -1;
    }
    ifSetOnInvTransmit(hook(cs2_2372, "IiY", [event_com, intArg1], [94]), intArg0);
}
