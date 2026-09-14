/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,rabbit_shop_init]

function rabbit_shop_init(): void {
    cs2_333(Component.interface_686.component_686_3, colour(0x000000), colour(0x453D32), 0, 0);
    cs2_333(Component.interface_686.component_686_4, colour(0x453D32), colour(0x5C5B63), 0, 0);
    ifSetHide(true, Component.interface_686.component_686_9);
    cs2_680(Component.interface_686.component_686_14);
    ifSetOnMouseOver(hook(cs2_95, "I", [event_com]), Component.interface_686.component_686_14);
    ifSetOnMouseLeave(hook(cs2_93, "I", [event_com]), Component.interface_686.component_686_14);
    ifSetOnOp(hook(comp_sethide, "1I", [true, Component.interface_686.component_686_9]), Component.interface_686.component_686_14);
    cs2_680(Component.interface_686.component_686_16);
    ifSetOnMouseOver(hook(cs2_95, "I", [event_com]), Component.interface_686.component_686_16);
    ifSetOnMouseLeave(hook(cs2_93, "I", [event_com]), Component.interface_686.component_686_16);
    ifSetOnOp(hook(comp_sethide, "1I", [true, Component.interface_686.component_686_9]), Component.interface_686.component_686_16);
    proc_rabbit_shop_pointsupdate();
    ifSetOnVarTransmit(hook(clientscript_rabbit_shop_pointsupdate, "Y", [], [1195]), Component.interface_686.component_686_1);
    ifSetOnStatTransmit(hook(clientscript_rabbit_shop_pointsupdate, "Y", [], [19]), Component.interface_686.component_686_1);
}
