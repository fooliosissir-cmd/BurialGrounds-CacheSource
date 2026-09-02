/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_3103

function cs2_3103(): void {
    cs2_3102();
    lobby_worldswitcher_drawlist();
    cs2_3125(Component.interface_910.component_910_55, 1, 0, "Descending world number", "Ascending world number");
    cs2_3125(Component.interface_910.component_910_30, 3, 2, "Descending player count", "Ascending player count");
    cs2_3125(Component.interface_910.component_910_52, 5, 4, "Descending activity", "Ascending activity");
    cs2_3125(Component.interface_910.component_910_49, 9, 8, "Descending type", "Ascending type");
    cs2_3125(Component.interface_910.component_910_47, 7, 6, "Descending LootShare", "Ascending LootShare");
    cs2_3125(Component.interface_910.component_910_45, 11, 10, "Descending ping", "Ascending ping");
    cs2_3116();
    cs2_3143(0, "Please choose a game world from the list.");
}
