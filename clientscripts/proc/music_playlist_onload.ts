/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,music_playlist_onload]

function proc_music_playlist_onload(): void {
    deltooltip_action(Component.interface_187.component_187_17);
    varc_tooltip_time = 0;
    ccDeleteAll(Component.interface_187.component_187_9);

    while (ifGetNextSubId(Component.interface_187.component_187_9) < 12) {
        ccCreate(Component.interface_187.component_187_9, 4, ifGetNextSubId(Component.interface_187.component_187_9));
    }

    while (ifGetNextSubId(Component.interface_187.component_187_9) < 24) {
        ccCreate(Component.interface_187.component_187_9, 5, ifGetNextSubId(Component.interface_187.component_187_9));
    }
    let int0: number = 5;
    int0 = cs2_2879(0, varbit_playlist_0, int0);
    int0 = cs2_2879(1, varbit_playlist_1, int0);
    int0 = cs2_2879(2, varbit_playlist_2, int0);
    int0 = cs2_2879(3, varbit_playlist_3, int0);
    int0 = cs2_2879(4, varbit_7085, int0);
    int0 = cs2_2879(5, varbit_7086, int0);
    int0 = cs2_2879(6, varbit_7087, int0);
    int0 = cs2_2879(7, varbit_7088, int0);
    int0 = cs2_2879(8, varbit_7089, int0);
    int0 = cs2_2879(9, varbit_7090, int0);
    int0 = cs2_2879(10, varbit_7091, int0);
    int0 = cs2_2879(11, varbit_7092, int0);

    if (varbit_playlist_0 == 32767 && varc_music_playlist_toggle_varc == 1) {
        ifSetHide(false, Component.interface_187.component_187_15);
    } else {
        ifSetHide(true, Component.interface_187.component_187_15);
    }
    ccCreate(Component.interface_187.component_187_9, 4, ifGetNextSubId(Component.interface_187.component_187_9));
    ccSetPosition(15, int0, 0, 0);
    ccSetSize(150, int0, 0, 1);
}
