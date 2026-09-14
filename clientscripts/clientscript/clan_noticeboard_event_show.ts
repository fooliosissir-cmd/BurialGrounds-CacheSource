/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,clan_noticeboard_event_show]

function clan_noticeboard_event_show(intArg0: number, intArg1: component, intArg2: number, intArg3: number, intArg4: number, intArg5: number, intArg6: number, strArg0: string, longArg0: bigint): void {
    ifSetText(strArg0, Component.interface_1099.component_1099_109);
    ifSetGraphic(Graphic.aif_notetabs_1, intArg1);

    if (longArg0 != -1n) {
        ifSetOnOp(hook(cs2_4330, "\xa7", [longArg0]), Component.interface_1099.component_1099_155);
        ifSetHide(true, Component.interface_1099.component_1099_158);
    } else {
        ifClearops(Component.interface_1099.component_1099_155);
        ifSetHide(false, Component.interface_1099.component_1099_158);
    }

    if (activeClanSettingsFindListened() == 1) {
        if (cs2_4616(intArg2, intArg3) > 0 && intArg4 > 0 && intArg5 > 0 && intArg6 > 0) {
            ifSetHide(false, Component.interface_1099.component_1099_110);
        }
        cs2_4621(Component.interface_1099.component_1099_0);
    } else {
        ifSetHide(true, Component.interface_1099.component_1099_110);
    }
    varp_clan_event_current_varp = intArg0;

    switch (intArg0) {
        case 1:
            ifSetGraphic(Graphic.aif_notetabs_3, Component.interface_1099.component_1099_6);
            break;
        case 2:
            ifSetGraphic(Graphic.aif_notetabs_3, Component.interface_1099.component_1099_125);
            break;
        case 3:
            ifSetGraphic(Graphic.aif_notetabs_3, Component.interface_1099.component_1099_128);
            break;
        case 4:
            ifSetGraphic(Graphic.aif_notetabs_3, Component.interface_1099.component_1099_131);
            break;
        case 5:
            ifSetGraphic(Graphic.aif_notetabs_3, Component.interface_1099.component_1099_134);
            break;
        case 6:
            ifSetGraphic(Graphic.aif_notetabs_3, Component.interface_1099.component_1099_137);
            break;
        case 7:
            ifSetGraphic(Graphic.aif_notetabs_3, Component.interface_1099.component_1099_140);
            break;
        case 8:
            ifSetGraphic(Graphic.aif_notetabs_3, Component.interface_1099.component_1099_143);
            break;
    }
    proc_clan_noticeboard_event_mouseleave(Component.interface_1099.component_1099_6, 1);
    proc_clan_noticeboard_event_mouseleave(Component.interface_1099.component_1099_125, 2);
    proc_clan_noticeboard_event_mouseleave(Component.interface_1099.component_1099_128, 3);
    proc_clan_noticeboard_event_mouseleave(Component.interface_1099.component_1099_131, 4);
    proc_clan_noticeboard_event_mouseleave(Component.interface_1099.component_1099_134, 5);
    proc_clan_noticeboard_event_mouseleave(Component.interface_1099.component_1099_137, 6);
    proc_clan_noticeboard_event_mouseleave(Component.interface_1099.component_1099_140, 7);
    proc_clan_noticeboard_event_mouseleave(Component.interface_1099.component_1099_143, 8);
}
