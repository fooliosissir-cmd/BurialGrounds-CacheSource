/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,rcguild_game_overlay_tooltips]

function rcguild_game_overlay_tooltips(intArg0: component, intArg1: component): void {
    let str0: string = "";

    switch (intArg0) {
        case Component.interface_781.component_781_33:
        case Component.interface_781.component_781_42:
            str0 = "How much time is left for this round.";
            break;
        case Component.interface_781.component_781_34:
        case Component.interface_781.component_781_43:
            str0 = "How many orbs the green team have captured this round.";
            break;
        case Component.interface_781.component_781_44:
        case Component.interface_781.component_781_35:
            str0 = "How many orbs the yellow team have captured this round.";
            break;
        case Component.interface_781.component_781_37:
        case Component.interface_781.component_781_46:
            str0 = "How active you have been during this round.";
            break;
        default:
            return;
    }
    cs2_39(intArg0, intArg1, str0, 25, ifGetWidth(ifGetLayer(intArg1)));
}
