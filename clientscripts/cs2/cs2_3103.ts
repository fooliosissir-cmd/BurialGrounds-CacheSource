/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_3103

function cs2_3103(): void {
    cs2_3102();
    lobby_worldswitcher_drawlist();

    // Reclaim the space previously reserved for favourites/sort headers so the
    // two Burial Grounds world cards become the visual focus.
    ifSetPosition(0, 24, 0, 0, Component.interface_910.component_910_62);
    ifSetSize(16, 24, 1, 1, Component.interface_910.component_910_62);
    ifSetPosition(0, 24, 2, 0, Component.interface_910.component_910_86);
    ifSetSize(16, 24, 0, 1, Component.interface_910.component_910_86);

    // Keep the selector practical while giving it Burial Grounds language.
    ifSetText("World", Component.interface_910.component_910_54);
    ifSetText("Players", Component.interface_910.component_910_31);
    ifSetText("Purpose", Component.interface_910.component_910_51);
    ifSetText("Role", Component.interface_910.component_910_48);
    ifSetText("Ping", Component.interface_910.component_910_44);

    cs2_3125(Component.interface_910.component_910_55, 1, 0, "Descending world number", "Ascending world number");
    cs2_3125(Component.interface_910.component_910_30, 3, 2, "Descending player count", "Ascending player count");
    cs2_3125(Component.interface_910.component_910_52, 5, 4, "Descending purpose", "Ascending purpose");
    cs2_3125(Component.interface_910.component_910_49, 9, 8, "Descending role", "Ascending role");
    cs2_3125(Component.interface_910.component_910_45, 11, 10, "Descending ping", "Ascending ping");

    cs2_3116();
    cs2_3143(0, "Choose how you will enter Greyhaven.");
}
