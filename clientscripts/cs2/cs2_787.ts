/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_787

function cs2_787(intArg0: component): void {
    ccDeleteAll(Component.interface_667.component_667_7);
    player_kit_player_create(Component.interface_667.component_667_7, 375, 125);
    cs2_2647(Component.interface_667.component_667_7);
    cs2_2373(intArg0, -1);
    cs2_2947();
    cs2_680(Component.interface_667.component_667_62);
    hookMouseEnter(hook(cs2_95, "I", [event_com]), Component.interface_667.component_667_62);
    hookMouseExit(hook(cs2_93, "I", [event_com]), Component.interface_667.component_667_62);
    ifSetOnVarcStrTransmit(hook(cs2_2782, "Y", [], [321, 322, 323, 324, 325]), intArg0);

    if (varbit_4894 == 1) {
        ifSetHide(false, Component.interface_667.component_667_46);
    } else {
        ifSetHide(true, Component.interface_667.component_667_46);
    }
    cs2_2957(Component.interface_667.component_667_47);
    hookMouseEnter(hook(cs2_1413, "I", [event_com]), Component.interface_667.component_667_47);
    hookMouseExit(hook(cs2_1414, "I", [event_com]), Component.interface_667.component_667_47);
    ifSetOnVarTransmit(hook(cs2_2371, "Y", [], [1248]), intArg0);
    ifSetOnMiscTransmit(hook(cs2_690, "", []), 43712534);
    ifSetOnMiscTransmit(hook(cs2_690, "", []), 49938555);
}
