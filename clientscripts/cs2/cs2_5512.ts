/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5512

function cs2_5512(): void {
    if (getWindowMode() == 1) {
        return;
    }
    let int0: number = 0;
    let int1: number = 0;
    let int2: component = ifGetParentLayer(Component.interface_1177.component_1177_0);

    if (ifFind(Component.interface_1177.component_1177_0) == 1) {
        if (compare(varcstr_info_box_text, "") != 0) {
            ccSetSize(min(200, 20 + parawidth(varcstr_info_box_text, 180, Graphic.b12_full)), 22 + 15 * paraheight(varcstr_info_box_text, 180, Graphic.b12_full), 0, 0);
        }
        if (varc_1695 == 1) {
            info_box_build();
        }
    }

    if (varc_1696 == -1) {
        varc_1696 = getEntityOverlayHeight();
    }
    let [int3, int4, int5] = getEntityScreenPosition(varc_1696);
    let [int6, int7, int8, int9, int10] = getEntityBoundingBox();

    if (ifFind(Component.interface_1177.component_1177_0) == 1 && int6 == 0) {
        info_reset();
    }

    if (int2 != -1) {
        int0 = ifGetWidth(int2);
        int1 = ifGetHeight(int2);
    }

    if (ifFind(Component.interface_1177.component_1177_0) == 1) {
        int3 = int3 - ccGetWidth() / 2;
        int4 = int4 - ccGetHeight() / 2 - 20;
        if (int3 < 0) {
            int3 = 0;
        }
        if (int0 - int3 < ccGetWidth()) {
            int3 = int0 - ccGetWidth();
        }
        if (int4 < 0) {
            int4 = 0;
        }
        if (int1 - int4 < ccGetHeight()) {
            int4 = int1 - ccGetHeight();
        }
        ccSetPosition(int3, int4, 0, 0);
    }

    if (ifFind(Component.interface_1177.component_1177_0) == 1 && varc_1695 == 1) {
        varc_1695 = 0;
        ccSetOnTimer(hook(info_box_timer, "i", [varc_1694 + stringLength(varcstr_info_box_text) * 2]));
    }

    if (ccFind(Component.interface_1177.component_1177_0, 9) == 1) {
        ccSetText(varcstr_info_box_text);
    }
}
