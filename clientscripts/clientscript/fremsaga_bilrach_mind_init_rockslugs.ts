/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,fremsaga_bilrach_mind_init_rockslugs]

function fremsaga_bilrach_mind_init_rockslugs(): void {
    if (varc_fremsaga_bilrach_mind_cursor_timeout == 0) {
        return;
    }
    varc_fremsaga_bilrach_mind_cursor_timeout = varc_fremsaga_bilrach_mind_cursor_timeout - 1;

    if (varc_fremsaga_bilrach_mind_cursor_timeout == 0) {
        ifSetHide(true, Component.interface_1270.component_1270_35);
        return;
    }

    if (varc_fremsaga_bilrach_mind_probe_placed == 0) {
        ifSetHide(false, Component.interface_1270.component_1270_35);
    }
    ifSetPosition(varc_fremsaga_bilrach_mind_mouse_x - ifGetWidth(Component.interface_1270.component_1270_35) / 2, varc_fremsaga_bilrach_mind_mouse_y - ifGetHeight(Component.interface_1270.component_1270_35) / 2, 0, 0, Component.interface_1270.component_1270_35);
    let int0: number = 9999;

    if (ifGetHide(Component.interface_1270.component_1270_122) == 0) {
        int0 = min(cs2_6133(varc_fremsaga_bilrach_mind_mouse_x, varc_fremsaga_bilrach_mind_mouse_y, varc_fremsaga_bilrach_mind_p1_x, varc_fremsaga_bilrach_mind_p1_y), int0);
    }

    if (ifGetHide(Component.interface_1270.component_1270_123) == 0) {
        int0 = min(cs2_6133(varc_fremsaga_bilrach_mind_mouse_x, varc_fremsaga_bilrach_mind_mouse_y, varc_fremsaga_bilrach_mind_p2_x, varc_fremsaga_bilrach_mind_p2_y), int0);
    }

    if (ifGetHide(Component.interface_1270.component_1270_124) == 0) {
        int0 = min(cs2_6133(varc_fremsaga_bilrach_mind_mouse_x, varc_fremsaga_bilrach_mind_mouse_y, varc_fremsaga_bilrach_mind_p3_x, varc_fremsaga_bilrach_mind_p3_y), int0);
    }
    let int1: number = 4;

    if (int0 < 400) {
        int1 = 12;
    } else if (int0 < 1600) {
        int1 = 8;
    }
    ifSetOnTimer(hook(fremsaga_bilrach_mind_cursor_pulse, "i", [int1]), Component.interface_1270.component_1270_35);
}
