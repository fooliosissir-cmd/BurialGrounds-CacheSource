/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_3103

function cs2_3103(): void {
    // Keep the native outer panel/frame initialization, then immediately strip
    // the old sortable RuneScape world-table chrome.
    cs2_3102();

    ifSetHide(true, Component.interface_910.component_910_21);
    ifSetHide(true, Component.interface_910.component_910_22);
    ifSetHide(true, Component.interface_910.component_910_23);
    ifSetHide(true, Component.interface_910.component_910_24);
    ifSetHide(true, Component.interface_910.component_910_25);
    ifSetHide(true, Component.interface_910.component_910_34);
    ifSetHide(true, Component.interface_910.component_910_42);
    ifSetHide(true, Component.interface_910.component_910_44);
    ifSetHide(true, Component.interface_910.component_910_45);
    ifSetHide(true, Component.interface_910.component_910_47);
    ifSetHide(true, Component.interface_910.component_910_48);
    ifSetHide(true, Component.interface_910.component_910_49);
    ifSetHide(true, Component.interface_910.component_910_51);
    ifSetHide(true, Component.interface_910.component_910_52);
    ifSetHide(true, Component.interface_910.component_910_54);
    ifSetHide(true, Component.interface_910.component_910_55);
    ifSetHide(true, Component.interface_910.component_910_67);

    // Reclaim the space previously reserved for favourites/sort headers so the
    // two Burial Grounds world cards become the visual focus.
    ifSetPosition(0, 24, 0, 0, Component.interface_910.component_910_62);
    ifSetSize(16, 24, 1, 1, Component.interface_910.component_910_62);
    ifSetPosition(0, 24, 2, 0, Component.interface_910.component_910_86);
    ifSetSize(16, 24, 0, 1, Component.interface_910.component_910_86);

    lobby_worldswitcher_drawlist();
    cs2_3116();
    cs2_3143(0, "Choose how you will enter Greyhaven.");
}
