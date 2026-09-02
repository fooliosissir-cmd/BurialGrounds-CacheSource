/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2521

function cs2_2521(): void {
    let int0: number = 0;
    let int1: number = 0;
    let int2: number = -1;
    let int3: obj = -1;
    let int4: number = (ifGetWidth(Component.interface_848.component_848_2) - 180) / 4;
    let int5: number = (ifGetHeight(Component.interface_848.component_848_2) - 128) / 3;

    while (int0 < 5 && enumOp(type_int, type_obj, varc_875, int0) != 11760) {
        int3 = enumOp(type_int, type_obj, varc_875, int0);
        switch (int0) {
            case 0:
                ifSetText(ocName(ocUncert(int3)), Component.interface_848.component_848_19);
                int1 = varc_876;
                break;
            case 1:
                ifSetText(ocName(ocUncert(int3)), Component.interface_848.component_848_20);
                int1 = varc_877;
                break;
            case 2:
                ifSetText(ocName(ocUncert(int3)), Component.interface_848.component_848_21);
                int1 = varc_878;
                break;
            case 3:
                ifSetText(ocName(ocUncert(int3)), Component.interface_848.component_848_22);
                int1 = varc_879;
                break;
            case 4:
                ifSetText(ocName(ocUncert(int3)), Component.interface_848.component_848_23);
                int1 = varc_880;
                break;
        }
        ccCreate(Component.interface_848.component_848_2, 5, int0);
        ccSetSize(36, 32, 0, 0);
        ccSetPosition((36 + int4) * (int0 % 5), int0 / 5 * (32 + int5), 0, 0);
        ccSetObject(ocUncert(int3), int1);
        ccSetOpBase("<col=ff981f>" + ocName(ocUncert(int3)));
        ccSetOp(1, "Select");
        ccSetOp(2, "Examine");
        ccSetGraphicShadow(3355443);
        int0 = int0 + 1;
    }
}
