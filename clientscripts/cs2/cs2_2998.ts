/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2998

function cs2_2998(): void {
    cs2_2999();
    ifSetOnClick(hook(cs2_3002, "i", [0]), Component.interface_907.component_907_41);
    ifSetOnClick(hook(cs2_3002, "i", [1]), Component.interface_907.component_907_29);
    ifSetOnClick(hook(cs2_3002, "i", [2]), Component.interface_907.component_907_17);
    ifSetOnClick(hook(cs2_3002, "i", [3]), Component.interface_907.component_907_55);
    let int0: number = 0;

    if (ifGetGraphic(Component.interface_907.component_907_34) == Graphic.graphic_2672) {
        int0 = 0;
    } else if (ifGetGraphic(Component.interface_907.component_907_22) == Graphic.graphic_2672) {
        int0 = 1;
    } else if (ifGetGraphic(Component.interface_907.component_907_10) == Graphic.graphic_2672) {
        int0 = 2;
    } else if (ifGetGraphic(Component.interface_907.component_907_48) == Graphic.graphic_2672) {
        int0 = 3;
    }

    switch (int0) {
        case 0:
            cs2_3006(0, ...cs2_3011(0));
            break;
        case 1:
            cs2_3006(1, ...cs2_3011(1));
            break;
        case 2:
            cs2_3006(2, ...cs2_3011(2));
            break;
        case 3:
            cs2_3006(3, ...cs2_3011(3));
            break;
    }
    ifSetHide(false, Component.interface_907.component_907_2);
    cs2_3001();
    ifSetOnTimer(hook(cs2_3000, "", []), Component.interface_907.component_907_1);
    ifOpenSubClient(Component.interface_907.component_907_42, Interface.interface_908);
    lobby_message_of_the_week();
}
