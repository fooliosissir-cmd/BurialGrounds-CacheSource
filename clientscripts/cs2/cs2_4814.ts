/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4814

function cs2_4814(): void {
    let int0: number = 0;
    let int1: number = 0;
    let int2: number = 0;
    let int3: number = 0;
    let str0: string = "";

    ifSetText("", Component.interface_1258.component_1258_446);
    ifSetText("", Component.interface_1258.component_1258_380);
    ifSetText("", Component.interface_1258.component_1258_308);
    ifSetHide(false, Component.interface_1258.component_1258_444);
    ifSetHide(false, Component.interface_1258.component_1258_378);
    ifSetHide(false, Component.interface_1258.component_1258_306);
    ifSetHide(true, Component.interface_1258.component_1258_446);
    ifSetHide(true, Component.interface_1258.component_1258_380);
    ifSetHide(true, Component.interface_1258.component_1258_308);
    ifSetOnMouseLeave(hook(clientscript_deltooltip, "I", [Component.interface_1258.component_1258_147]), Component.interface_1258.component_1258_452);
    ifSetOnMouseLeave(hook(clientscript_deltooltip, "I", [Component.interface_1258.component_1258_147]), Component.interface_1258.component_1258_386);
    ifSetOnMouseLeave(hook(clientscript_deltooltip, "I", [Component.interface_1258.component_1258_147]), Component.interface_1258.component_1258_314);
    ifSetOnMouseLeave(hook(clientscript_deltooltip, "I", [Component.interface_1258.component_1258_147]), Component.interface_1258.component_1258_440);
    ifSetOnMouseLeave(hook(clientscript_deltooltip, "I", [Component.interface_1258.component_1258_147]), Component.interface_1258.component_1258_374);
    ifSetOnMouseLeave(hook(clientscript_deltooltip, "I", [Component.interface_1258.component_1258_147]), Component.interface_1258.component_1258_302);
    ifSetOnMouseLeave(hook(clientscript_deltooltip, "I", [Component.interface_1258.component_1258_147]), Component.interface_1258.component_1258_451);
    ifSetOnMouseLeave(hook(clientscript_deltooltip, "I", [Component.interface_1258.component_1258_147]), Component.interface_1258.component_1258_385);
    ifSetOnMouseLeave(hook(clientscript_deltooltip, "I", [Component.interface_1258.component_1258_147]), Component.interface_1258.component_1258_313);
    ifSetOnMouseLeave(hook(clientscript_deltooltip, "I", [Component.interface_1258.component_1258_147]), Component.interface_1258.component_1258_439);
    ifSetOnMouseLeave(hook(clientscript_deltooltip, "I", [Component.interface_1258.component_1258_147]), Component.interface_1258.component_1258_373);
    ifSetOnMouseLeave(hook(clientscript_deltooltip, "I", [Component.interface_1258.component_1258_147]), Component.interface_1258.component_1258_301);

    if (clanProfileFind() == 1) {
        if (cs2_5008() == 0 || cs2_5144(-1) == 0) {
            ifSetHide(false, Component.interface_1258.component_1258_452);
            ifSetHide(false, Component.interface_1258.component_1258_386);
            ifSetHide(false, Component.interface_1258.component_1258_314);
            ifSetHide(false, Component.interface_1258.component_1258_440);
            ifSetHide(false, Component.interface_1258.component_1258_374);
            ifSetHide(false, Component.interface_1258.component_1258_302);
            str0 = "Your rank may not currently make alterations to this item";
            ifSetOnMouseRepeat(hook(cs2_4538, "IIisifdiiiiii", [Component.interface_1258.component_1258_147, Component.interface_1258.component_1258_452, -1, str0, 120, Graphic.verdana_11pt_regular, Graphic.verdana_11pt_regular, colour(0xFFFFFF), 13, 4, 0, event_mousex, event_mousey]), Component.interface_1258.component_1258_452);
            ifSetOnMouseRepeat(hook(cs2_4538, "IIisifdiiiiii", [Component.interface_1258.component_1258_147, Component.interface_1258.component_1258_386, -1, str0, 120, Graphic.verdana_11pt_regular, Graphic.verdana_11pt_regular, colour(0xFFFFFF), 13, 4, 0, event_mousex, event_mousey]), Component.interface_1258.component_1258_386);
            ifSetOnMouseRepeat(hook(cs2_4538, "IIisifdiiiiii", [Component.interface_1258.component_1258_147, Component.interface_1258.component_1258_314, -1, str0, 120, Graphic.verdana_11pt_regular, Graphic.verdana_11pt_regular, colour(0xFFFFFF), 13, 4, 0, event_mousex, event_mousey]), Component.interface_1258.component_1258_314);
            ifSetOnMouseRepeat(hook(cs2_4538, "IIisifdiiiiii", [Component.interface_1258.component_1258_147, Component.interface_1258.component_1258_440, -1, str0, 120, Graphic.verdana_11pt_regular, Graphic.verdana_11pt_regular, colour(0xFFFFFF), 13, 4, 0, event_mousex, event_mousey]), Component.interface_1258.component_1258_440);
            ifSetOnMouseRepeat(hook(cs2_4538, "IIisifdiiiiii", [Component.interface_1258.component_1258_147, Component.interface_1258.component_1258_374, -1, str0, 120, Graphic.verdana_11pt_regular, Graphic.verdana_11pt_regular, colour(0xFFFFFF), 13, 4, 0, event_mousex, event_mousey]), Component.interface_1258.component_1258_374);
            ifSetOnMouseRepeat(hook(cs2_4538, "IIisifdiiiiii", [Component.interface_1258.component_1258_147, Component.interface_1258.component_1258_302, -1, str0, 120, Graphic.verdana_11pt_regular, Graphic.verdana_11pt_regular, colour(0xFFFFFF), 13, 4, 0, event_mousex, event_mousey]), Component.interface_1258.component_1258_302);
        } else {
            switch (varbit_clan_custom_stronghold_current_slot_varp) {
                case 1:
                    int0 = varbit_clan_custom_slot_1_tier_varp;
                    break;
                case 2:
                    int0 = varbit_clan_custom_slot_2_tier_varp;
                    break;
                case 3:
                    int0 = varbit_clan_custom_slot_3_tier_varp;
                    break;
            }
            switch (clan_custom_validate(varbit_clan_custom_stronghold_current_slot_varp)) {
                case 1:
                    str0 = "You may submit this customisation to the build queue.";
                    switch (int0) {
                        case 1:
                            ifSetHide(true, Component.interface_1258.component_1258_446);
                            ifSetHide(false, Component.interface_1258.component_1258_444);
                            ifSetHide(true, Component.interface_1258.component_1258_452);
                            ifSetOnMouseRepeat(hook(cs2_4538, "IIisifdiiiiii", [Component.interface_1258.component_1258_147, Component.interface_1258.component_1258_451, -1, str0, 120, Graphic.verdana_11pt_regular, Graphic.verdana_11pt_regular, colour(0xFFFFFF), 13, 4, 0, event_mousex, event_mousey]), Component.interface_1258.component_1258_451);
                            break;
                        case 2:
                            ifSetHide(true, Component.interface_1258.component_1258_380);
                            ifSetHide(false, Component.interface_1258.component_1258_378);
                            ifSetHide(true, Component.interface_1258.component_1258_386);
                            ifSetOnMouseRepeat(hook(cs2_4538, "IIisifdiiiiii", [Component.interface_1258.component_1258_147, Component.interface_1258.component_1258_385, -1, str0, 120, Graphic.verdana_11pt_regular, Graphic.verdana_11pt_regular, colour(0xFFFFFF), 13, 4, 0, event_mousex, event_mousey]), Component.interface_1258.component_1258_385);
                            break;
                        case 3:
                            ifSetHide(true, Component.interface_1258.component_1258_308);
                            ifSetHide(false, Component.interface_1258.component_1258_306);
                            ifSetHide(true, Component.interface_1258.component_1258_314);
                            ifSetOnMouseRepeat(hook(cs2_4538, "IIisifdiiiiii", [Component.interface_1258.component_1258_147, Component.interface_1258.component_1258_313, -1, str0, 120, Graphic.verdana_11pt_regular, Graphic.verdana_11pt_regular, colour(0xFFFFFF), 13, 4, 0, event_mousex, event_mousey]), Component.interface_1258.component_1258_313);
                            break;
                    }
                    break;
                case 2:
                    switch (int0) {
                        case 1:
                            str0 = "Your citadel can not produce the resouces with which to purchase this customisation.";
                            ifSetText(str0, Component.interface_1258.component_1258_446);
                            ifSetHide(false, Component.interface_1258.component_1258_452);
                            ifSetHide(false, Component.interface_1258.component_1258_446);
                            ifSetHide(true, Component.interface_1258.component_1258_444);
                            ifSetOnMouseRepeat(hook(cs2_4538, "IIisifdiiiiii", [Component.interface_1258.component_1258_147, Component.interface_1258.component_1258_452, -1, str0, 120, Graphic.verdana_11pt_regular, Graphic.verdana_11pt_regular, colour(0xFFFFFF), 13, 4, 0, event_mousex, event_mousey]), Component.interface_1258.component_1258_452);
                            str0 = "You may cancel this customisation from the build queue but you will lose any resources already spent.";
                            ifSetOnMouseRepeat(hook(cs2_4538, "IIisifdiiiiii", [Component.interface_1258.component_1258_147, Component.interface_1258.component_1258_439, -1, str0, 120, Graphic.verdana_11pt_regular, Graphic.verdana_11pt_regular, colour(0xFFFFFF), 13, 4, 0, event_mousex, event_mousey]), Component.interface_1258.component_1258_439);
                            str0 = "You do not have the rank to cancel this job.";
                            ifSetOnMouseRepeat(hook(cs2_4538, "IIisifdiiiiii", [Component.interface_1258.component_1258_147, Component.interface_1258.component_1258_440, -1, str0, 120, Graphic.verdana_11pt_regular, Graphic.verdana_11pt_regular, colour(0xFFFFFF), 13, 4, 0, event_mousex, event_mousey]), Component.interface_1258.component_1258_440);
                            break;
                        case 2:
                            str0 = "Your citadel can not produce the resouces with which to purchase this customisation.";
                            ifSetText(str0, Component.interface_1258.component_1258_380);
                            ifSetHide(false, Component.interface_1258.component_1258_386);
                            ifSetHide(false, Component.interface_1258.component_1258_380);
                            ifSetHide(true, Component.interface_1258.component_1258_378);
                            ifSetOnMouseRepeat(hook(cs2_4538, "IIisifdiiiiii", [Component.interface_1258.component_1258_147, Component.interface_1258.component_1258_386, -1, str0, 120, Graphic.verdana_11pt_regular, Graphic.verdana_11pt_regular, colour(0xFFFFFF), 13, 4, 0, event_mousex, event_mousey]), Component.interface_1258.component_1258_386);
                            str0 = "You may cancel this customisation from the build queue but you will lose any resources already spent.";
                            ifSetOnMouseRepeat(hook(cs2_4538, "IIisifdiiiiii", [Component.interface_1258.component_1258_147, Component.interface_1258.component_1258_373, -1, str0, 120, Graphic.verdana_11pt_regular, Graphic.verdana_11pt_regular, colour(0xFFFFFF), 13, 4, 0, event_mousex, event_mousey]), Component.interface_1258.component_1258_373);
                            str0 = "You do not have the rank to cancel this job.";
                            ifSetOnMouseRepeat(hook(cs2_4538, "IIisifdiiiiii", [Component.interface_1258.component_1258_147, Component.interface_1258.component_1258_374, -1, str0, 120, Graphic.verdana_11pt_regular, Graphic.verdana_11pt_regular, colour(0xFFFFFF), 13, 4, 0, event_mousex, event_mousey]), Component.interface_1258.component_1258_374);
                            break;
                        case 3:
                            str0 = "Your citadel can not produce the resouces with which to purchase this customisation.";
                            ifSetText(str0, Component.interface_1258.component_1258_308);
                            ifSetHide(false, Component.interface_1258.component_1258_314);
                            ifSetHide(false, Component.interface_1258.component_1258_308);
                            ifSetHide(true, Component.interface_1258.component_1258_306);
                            ifSetOnMouseRepeat(hook(cs2_4538, "IIisifdiiiiii", [Component.interface_1258.component_1258_147, Component.interface_1258.component_1258_314, -1, str0, 120, Graphic.verdana_11pt_regular, Graphic.verdana_11pt_regular, colour(0xFFFFFF), 13, 4, 0, event_mousex, event_mousey]), Component.interface_1258.component_1258_314);
                            str0 = "You may cancel this customisation from the build queue but you will lose any resources already spent.";
                            ifSetOnMouseRepeat(hook(cs2_4538, "IIisifdiiiiii", [Component.interface_1258.component_1258_147, Component.interface_1258.component_1258_301, -1, str0, 120, Graphic.verdana_11pt_regular, Graphic.verdana_11pt_regular, colour(0xFFFFFF), 13, 4, 0, event_mousex, event_mousey]), Component.interface_1258.component_1258_301);
                            str0 = "You do not have the rank to cancel this job.";
                            ifSetOnMouseRepeat(hook(cs2_4538, "IIisifdiiiiii", [Component.interface_1258.component_1258_147, Component.interface_1258.component_1258_302, -1, str0, 120, Graphic.verdana_11pt_regular, Graphic.verdana_11pt_regular, colour(0xFFFFFF), 13, 4, 0, event_mousex, event_mousey]), Component.interface_1258.component_1258_302);
                            break;
                    }
                    break;
                case 3:
                    switch (int0) {
                        case 1:
                            str0 = "Select valid options for each part of the customisation before adding to the build queue.";
                            ifSetText(str0, Component.interface_1258.component_1258_446);
                            ifSetHide(false, Component.interface_1258.component_1258_452);
                            ifSetHide(false, Component.interface_1258.component_1258_446);
                            ifSetHide(true, Component.interface_1258.component_1258_444);
                            ifSetOnMouseRepeat(hook(cs2_4538, "IIisifdiiiiii", [Component.interface_1258.component_1258_147, Component.interface_1258.component_1258_452, -1, str0, 120, Graphic.verdana_11pt_regular, Graphic.verdana_11pt_regular, colour(0xFFFFFF), 13, 4, 0, event_mousex, event_mousey]), Component.interface_1258.component_1258_452);
                            str0 = "You may cancel this customisation from the build queue but you will lose any resources already spent.";
                            ifSetOnMouseRepeat(hook(cs2_4538, "IIisifdiiiiii", [Component.interface_1258.component_1258_147, Component.interface_1258.component_1258_439, -1, str0, 120, Graphic.verdana_11pt_regular, Graphic.verdana_11pt_regular, colour(0xFFFFFF), 13, 4, 0, event_mousex, event_mousey]), Component.interface_1258.component_1258_439);
                            str0 = "You do not have the rank to cancel this job.";
                            ifSetOnMouseRepeat(hook(cs2_4538, "IIisifdiiiiii", [Component.interface_1258.component_1258_147, Component.interface_1258.component_1258_440, -1, str0, 120, Graphic.verdana_11pt_regular, Graphic.verdana_11pt_regular, colour(0xFFFFFF), 13, 4, 0, event_mousex, event_mousey]), Component.interface_1258.component_1258_440);
                            break;
                        case 2:
                            str0 = "You must select valid options for each part of the customisation before you can add it to the build queue.";
                            ifSetText(str0, Component.interface_1258.component_1258_380);
                            ifSetHide(false, Component.interface_1258.component_1258_386);
                            ifSetHide(false, Component.interface_1258.component_1258_380);
                            ifSetHide(true, Component.interface_1258.component_1258_378);
                            ifSetOnMouseRepeat(hook(cs2_4538, "IIisifdiiiiii", [Component.interface_1258.component_1258_147, Component.interface_1258.component_1258_386, -1, str0, 120, Graphic.verdana_11pt_regular, Graphic.verdana_11pt_regular, colour(0xFFFFFF), 13, 4, 0, event_mousex, event_mousey]), Component.interface_1258.component_1258_386);
                            str0 = "You may cancel this customisation from the build queue but you will lose any resources already spent.";
                            ifSetOnMouseRepeat(hook(cs2_4538, "IIisifdiiiiii", [Component.interface_1258.component_1258_147, Component.interface_1258.component_1258_373, -1, str0, 120, Graphic.verdana_11pt_regular, Graphic.verdana_11pt_regular, colour(0xFFFFFF), 13, 4, 0, event_mousex, event_mousey]), Component.interface_1258.component_1258_373);
                            str0 = "You do not have the rank to cancel this job.";
                            ifSetOnMouseRepeat(hook(cs2_4538, "IIisifdiiiiii", [Component.interface_1258.component_1258_147, Component.interface_1258.component_1258_374, -1, str0, 120, Graphic.verdana_11pt_regular, Graphic.verdana_11pt_regular, colour(0xFFFFFF), 13, 4, 0, event_mousex, event_mousey]), Component.interface_1258.component_1258_374);
                            break;
                        case 3:
                            str0 = "You must select valid options for each part of the customisation before you can add it to the build queue.";
                            ifSetText(str0, Component.interface_1258.component_1258_308);
                            ifSetHide(false, Component.interface_1258.component_1258_314);
                            ifSetHide(false, Component.interface_1258.component_1258_308);
                            ifSetHide(true, Component.interface_1258.component_1258_306);
                            ifSetOnMouseRepeat(hook(cs2_4538, "IIisifdiiiiii", [Component.interface_1258.component_1258_147, Component.interface_1258.component_1258_314, -1, str0, 120, Graphic.verdana_11pt_regular, Graphic.verdana_11pt_regular, colour(0xFFFFFF), 13, 4, 0, event_mousex, event_mousey]), Component.interface_1258.component_1258_314);
                            str0 = "You may cancel this customisation from the build queue but you will lose any resources already spent.";
                            ifSetOnMouseRepeat(hook(cs2_4538, "IIisifdiiiiii", [Component.interface_1258.component_1258_147, Component.interface_1258.component_1258_301, -1, str0, 120, Graphic.verdana_11pt_regular, Graphic.verdana_11pt_regular, colour(0xFFFFFF), 13, 4, 0, event_mousex, event_mousey]), Component.interface_1258.component_1258_301);
                            str0 = "You do not have the rank to cancel this job.";
                            ifSetOnMouseRepeat(hook(cs2_4538, "IIisifdiiiiii", [Component.interface_1258.component_1258_147, Component.interface_1258.component_1258_302, -1, str0, 120, Graphic.verdana_11pt_regular, Graphic.verdana_11pt_regular, colour(0xFFFFFF), 13, 4, 0, event_mousex, event_mousey]), Component.interface_1258.component_1258_302);
                            break;
                    }
                    break;
                case 4:
                    switch (int0) {
                        case 1:
                            str0 = "The selection you have chosen is already built in the citadel.";
                            ifSetText(str0, Component.interface_1258.component_1258_446);
                            ifSetHide(false, Component.interface_1258.component_1258_452);
                            ifSetHide(false, Component.interface_1258.component_1258_446);
                            ifSetHide(true, Component.interface_1258.component_1258_444);
                            ifSetOnMouseRepeat(hook(cs2_4538, "IIisifdiiiiii", [Component.interface_1258.component_1258_147, Component.interface_1258.component_1258_452, -1, str0, 120, Graphic.verdana_11pt_regular, Graphic.verdana_11pt_regular, colour(0xFFFFFF), 13, 4, 0, event_mousex, event_mousey]), Component.interface_1258.component_1258_452);
                            str0 = "You may cancel this customisation from the build queue but you will lose any resources already spent.";
                            ifSetOnMouseRepeat(hook(cs2_4538, "IIisifdiiiiii", [Component.interface_1258.component_1258_147, Component.interface_1258.component_1258_439, -1, str0, 120, Graphic.verdana_11pt_regular, Graphic.verdana_11pt_regular, colour(0xFFFFFF), 13, 4, 0, event_mousex, event_mousey]), Component.interface_1258.component_1258_439);
                            str0 = "You do not have the rank to cancel this job.";
                            ifSetOnMouseRepeat(hook(cs2_4538, "IIisifdiiiiii", [Component.interface_1258.component_1258_147, Component.interface_1258.component_1258_440, -1, str0, 120, Graphic.verdana_11pt_regular, Graphic.verdana_11pt_regular, colour(0xFFFFFF), 13, 4, 0, event_mousex, event_mousey]), Component.interface_1258.component_1258_440);
                            break;
                        case 2:
                            str0 = "The selection you have chosen is already built in the citadel.";
                            ifSetText(str0, Component.interface_1258.component_1258_380);
                            ifSetHide(false, Component.interface_1258.component_1258_386);
                            ifSetHide(false, Component.interface_1258.component_1258_380);
                            ifSetHide(true, Component.interface_1258.component_1258_378);
                            ifSetOnMouseRepeat(hook(cs2_4538, "IIisifdiiiiii", [Component.interface_1258.component_1258_147, Component.interface_1258.component_1258_386, -1, str0, 120, Graphic.verdana_11pt_regular, Graphic.verdana_11pt_regular, colour(0xFFFFFF), 13, 4, 0, event_mousex, event_mousey]), Component.interface_1258.component_1258_386);
                            str0 = "You may cancel this customisation from the build queue but you will lose any resources already spent.";
                            ifSetOnMouseRepeat(hook(cs2_4538, "IIisifdiiiiii", [Component.interface_1258.component_1258_147, Component.interface_1258.component_1258_373, -1, str0, 120, Graphic.verdana_11pt_regular, Graphic.verdana_11pt_regular, colour(0xFFFFFF), 13, 4, 0, event_mousex, event_mousey]), Component.interface_1258.component_1258_373);
                            str0 = "You do not have the rank to cancel this job.";
                            ifSetOnMouseRepeat(hook(cs2_4538, "IIisifdiiiiii", [Component.interface_1258.component_1258_147, Component.interface_1258.component_1258_374, -1, str0, 120, Graphic.verdana_11pt_regular, Graphic.verdana_11pt_regular, colour(0xFFFFFF), 13, 4, 0, event_mousex, event_mousey]), Component.interface_1258.component_1258_374);
                            break;
                        case 3:
                            str0 = "The selection you have chosen is already built in the citadel.";
                            ifSetText(str0, Component.interface_1258.component_1258_308);
                            ifSetHide(false, Component.interface_1258.component_1258_314);
                            ifSetHide(false, Component.interface_1258.component_1258_308);
                            ifSetHide(true, Component.interface_1258.component_1258_306);
                            ifSetOnMouseRepeat(hook(cs2_4538, "IIisifdiiiiii", [Component.interface_1258.component_1258_147, Component.interface_1258.component_1258_314, -1, str0, 120, Graphic.verdana_11pt_regular, Graphic.verdana_11pt_regular, colour(0xFFFFFF), 13, 4, 0, event_mousex, event_mousey]), Component.interface_1258.component_1258_314);
                            str0 = "You may cancel this customisation from the build queue but you will lose any resources already spent.";
                            ifSetOnMouseRepeat(hook(cs2_4538, "IIisifdiiiiii", [Component.interface_1258.component_1258_147, Component.interface_1258.component_1258_301, -1, str0, 120, Graphic.verdana_11pt_regular, Graphic.verdana_11pt_regular, colour(0xFFFFFF), 13, 4, 0, event_mousex, event_mousey]), Component.interface_1258.component_1258_301);
                            str0 = "You do not have the rank to cancel this job.";
                            ifSetOnMouseRepeat(hook(cs2_4538, "IIisifdiiiiii", [Component.interface_1258.component_1258_147, Component.interface_1258.component_1258_302, -1, str0, 120, Graphic.verdana_11pt_regular, Graphic.verdana_11pt_regular, colour(0xFFFFFF), 13, 4, 0, event_mousex, event_mousey]), Component.interface_1258.component_1258_302);
                            break;
                    }
                    break;
                case 5:
                    switch (int0) {
                        case 1:
                            str0 = "This hotspot is currently queued to be reset, you may cancel this reset at no cost.";
                            ifSetText(str0, Component.interface_1258.component_1258_446);
                            ifSetHide(false, Component.interface_1258.component_1258_452);
                            ifSetHide(false, Component.interface_1258.component_1258_446);
                            ifSetHide(true, Component.interface_1258.component_1258_444);
                            ifSetOnMouseRepeat(hook(cs2_4538, "IIisifdiiiiii", [Component.interface_1258.component_1258_147, Component.interface_1258.component_1258_386, -1, str0, 120, Graphic.verdana_11pt_regular, Graphic.verdana_11pt_regular, colour(0xFFFFFF), 13, 4, 0, event_mousex, event_mousey]), Component.interface_1258.component_1258_452);
                            str0 = "This hotspot is currently queued to be reset, you may cancel this reset at no cost.";
                            ifSetOnMouseRepeat(hook(cs2_4538, "IIisifdiiiiii", [Component.interface_1258.component_1258_147, Component.interface_1258.component_1258_439, -1, str0, 120, Graphic.verdana_11pt_regular, Graphic.verdana_11pt_regular, colour(0xFFFFFF), 13, 4, 0, event_mousex, event_mousey]), Component.interface_1258.component_1258_439);
                            str0 = "You do not have the rank to cancel this job.";
                            ifSetOnMouseRepeat(hook(cs2_4538, "IIisifdiiiiii", [Component.interface_1258.component_1258_147, Component.interface_1258.component_1258_440, -1, str0, 120, Graphic.verdana_11pt_regular, Graphic.verdana_11pt_regular, colour(0xFFFFFF), 13, 4, 0, event_mousex, event_mousey]), Component.interface_1258.component_1258_440);
                            break;
                        case 2:
                            str0 = "This hotspot is currently queued to be reset, you may cancel this reset at no cost.";
                            ifSetText(str0, Component.interface_1258.component_1258_380);
                            ifSetHide(false, Component.interface_1258.component_1258_386);
                            ifSetHide(false, Component.interface_1258.component_1258_380);
                            ifSetHide(true, Component.interface_1258.component_1258_378);
                            ifSetOnMouseRepeat(hook(cs2_4538, "IIisifdiiiiii", [Component.interface_1258.component_1258_147, Component.interface_1258.component_1258_386, -1, str0, 120, Graphic.verdana_11pt_regular, Graphic.verdana_11pt_regular, colour(0xFFFFFF), 13, 4, 0, event_mousex, event_mousey]), Component.interface_1258.component_1258_386);
                            str0 = "This hotspot is currently queued to be reset, you may cancel this reset at no cost.";
                            ifSetOnMouseRepeat(hook(cs2_4538, "IIisifdiiiiii", [Component.interface_1258.component_1258_147, Component.interface_1258.component_1258_373, -1, str0, 120, Graphic.verdana_11pt_regular, Graphic.verdana_11pt_regular, colour(0xFFFFFF), 13, 4, 0, event_mousex, event_mousey]), Component.interface_1258.component_1258_373);
                            str0 = "You do not have the rank to cancel this job.";
                            ifSetOnMouseRepeat(hook(cs2_4538, "IIisifdiiiiii", [Component.interface_1258.component_1258_147, Component.interface_1258.component_1258_374, -1, str0, 120, Graphic.verdana_11pt_regular, Graphic.verdana_11pt_regular, colour(0xFFFFFF), 13, 4, 0, event_mousex, event_mousey]), Component.interface_1258.component_1258_374);
                            break;
                        case 3:
                            str0 = "This hotspot is currently queued to be reset, you may cancel this reset at no cost.";
                            ifSetText(str0, Component.interface_1258.component_1258_308);
                            ifSetHide(false, Component.interface_1258.component_1258_314);
                            ifSetHide(false, Component.interface_1258.component_1258_308);
                            ifSetHide(true, Component.interface_1258.component_1258_306);
                            ifSetOnMouseRepeat(hook(cs2_4538, "IIisifdiiiiii", [Component.interface_1258.component_1258_147, Component.interface_1258.component_1258_314, -1, str0, 120, Graphic.verdana_11pt_regular, Graphic.verdana_11pt_regular, colour(0xFFFFFF), 13, 4, 0, event_mousex, event_mousey]), Component.interface_1258.component_1258_314);
                            str0 = "This hotspot is currently queued to be reset, you may cancel this reset at no cost.";
                            ifSetOnMouseRepeat(hook(cs2_4538, "IIisifdiiiiii", [Component.interface_1258.component_1258_147, Component.interface_1258.component_1258_301, -1, str0, 120, Graphic.verdana_11pt_regular, Graphic.verdana_11pt_regular, colour(0xFFFFFF), 13, 4, 0, event_mousex, event_mousey]), Component.interface_1258.component_1258_301);
                            str0 = "You do not have the rank to cancel this job.";
                            ifSetOnMouseRepeat(hook(cs2_4538, "IIisifdiiiiii", [Component.interface_1258.component_1258_147, Component.interface_1258.component_1258_302, -1, str0, 120, Graphic.verdana_11pt_regular, Graphic.verdana_11pt_regular, colour(0xFFFFFF), 13, 4, 0, event_mousex, event_mousey]), Component.interface_1258.component_1258_302);
                            break;
                    }
                    break;
            }
        }
    }
}
