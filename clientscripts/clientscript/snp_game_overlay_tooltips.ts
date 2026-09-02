/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,snp_game_overlay_tooltips]

function snp_game_overlay_tooltips(intArg0: component, intArg1: component): void {
    let str0: string = "";

    if (varbit_snp_interface_help_off == 1) {
        return;
    }

    switch (intArg0) {
        case Component.interface_836.component_836_9:
        case Component.interface_836.component_836_13:
        case Component.interface_836.component_836_28:
            str0 = "The number of times that the avatar has been killed.";
            break;
        case Component.interface_836.component_836_10:
        case Component.interface_836.component_836_14:
        case Component.interface_836.component_836_25:
            str0 = "The Slayer level required to attack each avatar.";
            break;
        case Component.interface_836.component_836_11:
        case Component.interface_836.component_836_15:
        case Component.interface_836.component_836_24:
            str0 = "The remaining health of each avatar.";
            break;
        case Component.interface_836.component_836_26:
        case Component.interface_836.component_836_27:
            str0 = "How much time the game has remaining.";
            break;
        case Component.interface_836.component_836_8:
            str0 = "This column displays the blue team's statistics.";
            break;
        case Component.interface_836.component_836_12:
            str0 = "This column displays the red team's statistics.";
            break;
        case Component.interface_836.component_836_29:
            str0 = "Shows which team controls the soul obelisk.";
            break;
        case Component.interface_836.component_836_30:
            str0 = "Shows which team controls the western graveyard.";
            break;
        case Component.interface_836.component_836_31:
            str0 = "Shows which team controls the eastern graveyard.";
            break;
        case Component.interface_836.component_836_6:
            str0 = "Shows how much control a team has over the soul obelisk.";
            break;
        case Component.interface_836.component_836_69:
            str0 = "Shows how much control a team has over the eastern graveyard.";
            break;
        case Component.interface_836.component_836_62:
            str0 = "Shows how much control a team has over the western graveyard.";
            break;
        case Component.interface_836.component_836_56:
            str0 = "Shows how active you have been during the game.";
            break;
        default:
            return;
    }
    cs2_39(intArg0, intArg1, str0, 25, ifGetWidth(ifGetLayer(intArg1)));
}
