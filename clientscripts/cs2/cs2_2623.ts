/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2623

function cs2_2623(): void {
    let int0: number = 1;

    while (enumOp(type_int, type_component, Enum.enum_2451, int0) != 55705624) {
        ifSetText("", enumOp(type_int, type_component, Enum.enum_2451, int0));
        int0 = int0 + 1;
    }
    ifSetText("Welcome to Mobilising Armies.", Component.interface_850.component_850_25);

    switch (varbit_mob_player_number) {
        case 1:
            ifSetGraphic(Graphic.graphic_1906, Component.interface_850.component_850_50);
            break;
        case 2:
            ifSetGraphic(Graphic.graphic_1904, Component.interface_850.component_850_50);
            break;
        case 3:
            ifSetGraphic(Graphic.graphic_1905, Component.interface_850.component_850_50);
            break;
        case 4:
            ifSetGraphic(Graphic.graphic_1907, Component.interface_850.component_850_50);
            break;
    }
    scrollbar_ondrag_doscroll(Component.interface_850.component_850_45, Component.interface_850.component_850_46, ifGetScrollHeight(Component.interface_850.component_850_46), 1);
    ifSetOnKey(hook(cs2_2625, "iz", [event_keycode, event_keychar]), Component.interface_850.component_850_48);
}
