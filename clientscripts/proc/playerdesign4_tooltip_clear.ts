/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,playerdesign4_tooltip_clear]

function playerdesign4_tooltip_clear(): void {
    ccDeleteAll(Component.interface_1028.component_1028_140);
    ifSetHide(true, Component.interface_1028.component_1028_140);
    [varc_tooltip_built, varc_player_kit_scroll_length] = [-1, -1];
}
