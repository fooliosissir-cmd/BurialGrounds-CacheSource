/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2100

function cs2_2100(intArg0: component, intArg1: component): void {
    let str0: string = "";

    switch (intArg0) {
        case Component.interface_834.component_834_8:
        case Component.interface_834.component_834_12:
        case Component.interface_834.component_834_27:
            str0 = "The number of times that the avatar has been killed.";
            break;
        case Component.interface_834.component_834_9:
        case Component.interface_834.component_834_13:
        case Component.interface_834.component_834_24:
            str0 = "The Slayer level required to attack each avatar.";
            break;
        case Component.interface_834.component_834_10:
        case Component.interface_834.component_834_14:
        case Component.interface_834.component_834_23:
            str0 = "The remaining health of each avatar.";
            break;
        case Component.interface_834.component_834_25:
        case Component.interface_834.component_834_26:
            str0 = "How much time the game has remaining.";
            break;
        case Component.interface_834.component_834_7:
            str0 = "This column displays the blue team's statistics.";
            break;
        case Component.interface_834.component_834_11:
            str0 = "This column displays the red team's statistics.";
            break;
        case Component.interface_834.component_834_28:
            str0 = "Shows which team controls the soul obelisk.";
            break;
        case Component.interface_834.component_834_29:
            str0 = "Shows which team controls the western graveyard.";
            break;
        case Component.interface_834.component_834_30:
            str0 = "Shows which team controls the eastern graveyard.";
            break;
        case Component.interface_834.component_834_68:
            str0 = "Shows how much control a team has over the soul obelisk.";
            break;
        case Component.interface_834.component_834_74:
            str0 = "Shows how active you have been during the game.";
            break;
        default:
            return;
    }
    cs2_39(intArg0, intArg1, str0, 25, ifGetWidth(ifGetLayer(intArg1)));
}
