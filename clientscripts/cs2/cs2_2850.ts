/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2850

function cs2_2850(): void {
    varc_machinima_livecamera_height = 500;
    varc_machinima_livecamera_position = moveCoord(coord(), 0, 0, -8);
    varc_machinima_livecamera_lookatposition = 0;
    varc_machinima_livecamera_lookatpositioncoord = coord();
    varc_machinima_livecamera_lookatheight = 450;
    varc_machinima_livecamera_targetmode = 0;
    varc_machinima_livecamera_plannedmove_cameraspeed = 25;
    camMoveto(varc_machinima_livecamera_position, varc_machinima_livecamera_height, 10, 3);
    camLookat(cs2_2865(varc_machinima_livecamera_position, varc_machinima_livecamera_lookatposition), varc_machinima_livecamera_lookatheight, 10, 3);
    varc_1075 = 0;
    varc_1076 = 0;
    ifSetOnKey(hook(cs2_2851, "Iii", [event_com, event_keycode, 0]), Component.interface_475.component_475_1);
    ifSetHide(false, Component.interface_475.component_475_54);
    ifSetHide(false, Component.interface_475.component_475_7);
    ifSetHide(false, Component.interface_475.component_475_58);
    ifSetHide(true, Component.interface_475.component_475_33);
    ifSetGraphic(Graphic.catcon_catapult_icons_8, Component.interface_475.component_475_28);
    ifSetText("You are now in Aim Mode", Component.interface_475.component_475_29);
    ifSetOnTimer(hook(cs2_2853, "Ii", [Component.interface_475.component_475_1, clientClock()]), Component.interface_475.component_475_1);
    ifSetOnTimer(hook(cs2_2852, "I", [Component.interface_475.component_475_7]), Component.interface_475.component_475_7);
    ifSetHide(false, Component.interface_475.component_475_2);
    ifSetOnTimer(hook(cs2_2870, "Ii", [event_com, clientClock() + 150]), Component.interface_475.component_475_2);
    cs2_3455();
}
