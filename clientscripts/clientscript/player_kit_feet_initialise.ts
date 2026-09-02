/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,player_kit_feet_initialise]

function player_kit_feet_initialise(): void {
    ccDeleteAll(Component.interface_728.component_728_1);
    cs2_1088(Component.interface_728.component_728_1, 22);
    ccDeleteAll(Component.interface_728.component_728_6);
    cs2_333(Component.interface_728.component_728_6, colour(0x483F33), colour(0x302922), 0, 0);
    cs2_2647(Component.interface_728.component_728_6);
    ccDeleteAll(Component.interface_728.component_728_9);
    cs2_333(Component.interface_728.component_728_9, colour(0x483F33), colour(0x302922), 0, 0);
    player_kit_player_create(Component.interface_728.component_728_9, 380, 100);
    cs2_2647(Component.interface_728.component_728_9);
    ccDeleteAll(Component.interface_728.component_728_11);
    cs2_2647(Component.interface_728.component_728_11);
    player_kit_feet_redraw();
    ifSetOnVarcTransmit(hook(player_kit_feet_varctransmit, "Y", [], [1014, 1018]), Component.interface_728.component_728_1);
}
