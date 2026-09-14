/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6506

function cs2_6506(): void {
    let int0: struct = cs2_5936(varbit_10860);
    let int1: number = structParam(int0, Param.param_2268);
    let int2: obj = invGetobj(665, varbit_10860);
    let int3: number = invGetNum(665, varbit_10860);
    let str0: string = "";
    let str1: string = "Discard the prize.";
    let str2: string = "You do not have an unclaimed prize to discard";

    ifSetText("Play again", Component.interface_1253.component_1253_264);
    ifSetOp(1, "Play", Component.interface_1253.component_1253_258);
    ifSetText("Claim item", Component.interface_1253.component_1253_180);
    ifSetOp(1, "Claim", Component.interface_1253.component_1253_177);
    let str3: string = "You do not have a prize to claim.";
    let str4: string = "You do not have a prize to claim.";

    if (varbit_wof_reward_object_id > 0) {
        ifSetText("Claim later", Component.interface_1253.component_1253_245);
        ifSetHide(true, Component.interface_1253.component_1253_225);
        switch (varc_1790) {
            case 1:
            case 2:
                str3 = "Claim your prize to your inventory.";
                str4 = "Your inventory doesn't have room for your prize at the moment.";
                break;
            case 3:
            case 4:
                str3 = "Claim your prize to your bank.";
                str4 = "Your bank doesn't have room for your prize at the moment.";
                break;
            case 5:
            case 6:
                str3 = "Claim your prize to your money pouch.";
                str4 = "Your money pouch doesn't have room for your prize at the moment.";
                break;
            case 7:
                str3 = "The Squeal of Fortune is not available at the moment. Please try later.";
                str4 = "The Squeal of Fortune is not available at the moment. Please try later.";
                str1 = "The Squeal of Fortune is not available at the moment. Please try later.";
                str2 = "The Squeal of Fortune is not available at the moment. Please try later.";
                ifSetHide(false, Component.interface_1253.component_1253_225);
                ifSetHide(false, Component.interface_1253.component_1253_178);
                break;
        }
        switch (varc_1790) {
            case 1:
            case 3:
            case 5:
                ifSetHide(true, Component.interface_1253.component_1253_178);
                break;
            default:
                ifSetHide(false, Component.interface_1253.component_1253_178);
                break;
        }
        str0 = "You must claim or discard your prize before spinning again.";
        ifSetHide(false, Component.interface_1253.component_1253_259);
        cs2_5910(int1);
        str0 = "You must claim or discard your prize before spinning again.";
    } else {
        ifSetText("Done", Component.interface_1253.component_1253_245);
        ifSetHide(false, Component.interface_1253.component_1253_225);
        ifSetHide(false, Component.interface_1253.component_1253_178);
        ifSetText("", Component.interface_1253.component_1253_162);
        str0 = "You do not have any spins left. Please play again tomorrow.";
    }
    let str5: string = "Click to play again.";

    if ((varbit_10862 == 0 && varbit_wof_earned_spins == 0 && varc_1800 == 0) || varbit_wof_reward_object_id > 0) {
        ifSetHide(false, Component.interface_1253.component_1253_259);
    } else {
        ifSetHide(true, Component.interface_1253.component_1253_259);
    }

    if (playerMember() == 0) {
        ifSetText("Members get two spins a day. Subscribe now to claim your extra spin.", Component.interface_1253.component_1253_161);
        ifSetText("Subscribe", Component.interface_1253.component_1253_264);
        str5 = "Click to subscribe.";
        ifSetOp(1, "Subscribe", Component.interface_1253.component_1253_258);
        ifSetHide(true, Component.interface_1253.component_1253_259);
        if (ocMembers(int2) == 1 && playerMember() == 0) {
            ifSetText("Subscribe to claim", Component.interface_1253.component_1253_180);
            ifSetOp(1, "Subscribe", Component.interface_1253.component_1253_177);
            str3 = "Click to subscribe.";
            ifSetHide(true, Component.interface_1253.component_1253_178);
        }
    }
    ifSetOnMouseRepeat(hook(cs2_4538, "IIisifdiiiiii", [Component.interface_1253.component_1253_51, event_com, -1, str3, 200, Graphic.verdana_11pt_regular, Graphic.verdana_11pt_regular, colour(0xFFFFFF), 13, 4, 3, event_mousex, event_mousey]), Component.interface_1253.component_1253_177);
    ifSetOnMouseRepeat(hook(cs2_4538, "IIisifdiiiiii", [Component.interface_1253.component_1253_51, event_com, -1, str4, 200, Graphic.verdana_11pt_regular, Graphic.verdana_11pt_regular, colour(0xFFFFFF), 13, 4, 3, event_mousex, event_mousey]), Component.interface_1253.component_1253_178);
    ifSetOnMouseRepeat(hook(cs2_4538, "IIisifdiiiiii", [Component.interface_1253.component_1253_51, event_com, -1, str5, 200, Graphic.verdana_11pt_regular, Graphic.verdana_11pt_regular, colour(0xFFFFFF), 13, 4, 3, event_mousex, event_mousey]), Component.interface_1253.component_1253_258);
    ifSetOnMouseRepeat(hook(cs2_4538, "IIisifdiiiiii", [Component.interface_1253.component_1253_51, event_com, -1, str0, 200, Graphic.verdana_11pt_regular, Graphic.verdana_11pt_regular, colour(0xFFFFFF), 13, 4, 3, event_mousex, event_mousey]), Component.interface_1253.component_1253_259);
    ifSetOnMouseRepeat(hook(cs2_4538, "IIisifdiiiiii", [Component.interface_1253.component_1253_51, event_com, -1, str1, 200, Graphic.verdana_11pt_regular, Graphic.verdana_11pt_regular, colour(0xFFFFFF), 13, 4, 3, event_mousex, event_mousey]), Component.interface_1253.component_1253_224);
    ifSetOnMouseRepeat(hook(cs2_4538, "IIisifdiiiiii", [Component.interface_1253.component_1253_51, event_com, -1, str2, 200, Graphic.verdana_11pt_regular, Graphic.verdana_11pt_regular, colour(0xFFFFFF), 13, 4, 3, event_mousex, event_mousey]), Component.interface_1253.component_1253_225);
    proc_deltooltip(Component.interface_1253.component_1253_51);
    varc_tooltip_time = 0;
    cs2_1968();
}
