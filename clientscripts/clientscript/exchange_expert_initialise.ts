/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,exchange_expert_initialise]

function exchange_expert_initialise(): void {
    let int0: Enum = -1;

    switch (varc_1001) {
        case 1:
            int0 = Enum.enum_738;
            break;
        case 2:
            int0 = Enum.exchange_expert_runes;
            break;
        case 3:
            int0 = Enum.enum_740;
            break;
        case 4:
            int0 = Enum.exchange_expert_herbs;
            break;
        case 5:
            int0 = Enum.enum_742;
            break;
        default:
            return;
    }
    ifSetText(enumOp(type_int, type_string, Enum.exchange_expert_title, varc_1001), Component.interface_885.component_885_14);
    let int1: number = 0;
    let int2: number = 0;
    let int3: number = 16;
    let int4: number = 16;
    let int5: number = 56;
    let int6: number = 50;
    let int7: number = enumGetoutputcount(int0);
    let int8: number = 5;
    let int9: obj = -1;
    ccDeleteAll(Component.interface_885.component_885_16);

    while (int1 < int7) {
        int9 = enumOp(type_int, type_obj, int0, int1);
        if (int9 != -1) {
            ccCreate(Component.interface_885.component_885_16, 5, int2);
            ccSetSize(36, 32, 0, 0);
            ccSetObjectWearCol(enumOp(type_int, type_obj, int0, int1), -1);
            ccSetPosition(11 + int3 + (36 + int5) * (int1 % int8), 6 + int4 + int1 / int8 * (32 + int6), 0, 0);
            ccSetOp(1, "Examine");
            ccSetOpBase("<col=ff9040>" + ocName(int9));
            ccCreate(Component.interface_885.component_885_16, 4, int2 + 1);
            ccSetSize(56, 10, 0, 0);
            ccSetTextFont(Graphic.p11_full);
            ccSetColour(colour(0xCC9900));
            ccSetTextShadow(true);
            ccSetTextAlign(1, 0, 0);
            if (compare(ccGetText(), "") == 0) {
                ccSetText("Getting data...");
            }
            ccSetPosition(int3 + (int5 + 36) * (int1 % int8), 47 + int4 + int1 / int8 * (32 + int6), 0, 0);
            ifSetHide(false, enumOp(type_int, type_component, Enum.enum_737, int1));
            ifSetPosition(int3 + (36 + int5) * (int1 % int8), int4 + int1 / int8 * (32 + int6), 0, 0, enumOp(type_int, type_component, Enum.enum_737, int1));
            int2 = int2 + 2;
        }
        int1 = int1 + 1;
    }

    while (int1 < enumGetoutputcount(Enum.enum_737)) {
        ifSetHide(true, enumOp(type_int, type_component, Enum.enum_737, int1));
        int1 = int1 + 1;
    }

    if (int7 <= 15) {
        ifSetScrollPos(0, 0, Component.interface_885.component_885_16);
        ifSetScrollSize(0, 0, Component.interface_885.component_885_16);
        ccDeleteAll(Component.interface_885.component_885_48);
        ifSetHide(true, Component.interface_885.component_885_48);
    } else {
        ifSetHide(false, Component.interface_885.component_885_48);
        ifSetScrollPos(0, 0, Component.interface_885.component_885_16);
        ifSetScrollSize(ifGetWidth(Component.interface_885.component_885_16), 60 + int4 + int7 / int8 * (32 + int6), Component.interface_885.component_885_16);
        proc_scrollbar_vertical(Component.interface_885.component_885_48, Component.interface_885.component_885_16, Graphic.scrollbar_dragger_v2_3, Graphic.scrollbar_dragger_v2_0, Graphic.scrollbar_dragger_v2_1, Graphic.scrollbar_dragger_v2_2, Graphic.scrollbar_v2_0, Graphic.scrollbar_v2_1);
    }
}
