/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4889

function cs2_4889(): void {
    let str0: string = "";

    ifSetHide(true, Component.interface_1258.component_1258_558);
    ifSetHide(true, Component.interface_1258.component_1258_566);
    ifSetHide(true, Component.interface_1258.component_1258_562);
    ifSetHide(true, Component.interface_1258.component_1258_570);
    ifSetHide(true, Component.interface_1258.component_1258_574);
    ifSetHide(true, Component.interface_1258.component_1258_578);
    ifSetHide(true, Component.interface_1258.component_1258_582);
    ifSetHide(true, Component.interface_1258.component_1258_586);
    ifSetHide(true, Component.interface_1258.component_1258_590);
    ifSetHide(true, Component.interface_1258.component_1258_594);
    ifSetHide(true, Component.interface_1258.component_1258_598);
    ifSetHide(true, Component.interface_1258.component_1258_602);
    ifSetHide(true, Component.interface_1258.component_1258_606);

    if (loadClanVarbit<2580>() > 1) {
        ifSetHide(false, Component.interface_1258.component_1258_594);
        ifSetHide(false, Component.interface_1258.component_1258_570);
        ifSetHide(true, Component.interface_1258.component_1258_595);
        ifSetHide(true, Component.interface_1258.component_1258_571);
    } else {
        ifSetHide(false, Component.interface_1258.component_1258_595);
        ifSetHide(false, Component.interface_1258.component_1258_571);
        str0 = "You need at least a tier 2 citadel to customise the keep fireplace.";
        ifSetOnMouseOver(hook(cs2_4538, "IIisifdiiiiii", [Component.interface_1258.component_1258_119, Component.interface_1258.component_1258_595, -1, str0, 120, Graphic.verdana_11pt_regular, Graphic.verdana_11pt_regular, colour(0xFFFFFF), 13, 4, 1, event_mousex, event_mousey]), Component.interface_1258.component_1258_595);
        hookMouseExit(hook(clientscript_deltooltip, "I", [Component.interface_1258.component_1258_119]), Component.interface_1258.component_1258_595);
        str0 = "You need at least a tier 2 citadel to customise the potted plants.";
        ifSetOnMouseOver(hook(cs2_4538, "IIisifdiiiiii", [Component.interface_1258.component_1258_119, Component.interface_1258.component_1258_571, -1, str0, 120, Graphic.verdana_11pt_regular, Graphic.verdana_11pt_regular, colour(0xFFFFFF), 13, 4, 1, event_mousex, event_mousey]), Component.interface_1258.component_1258_571);
        hookMouseExit(hook(clientscript_deltooltip, "I", [Component.interface_1258.component_1258_119]), Component.interface_1258.component_1258_571);
    }

    if (loadClanVarbit<2580>() > 2) {
        ifSetHide(false, Component.interface_1258.component_1258_558);
        ifSetHide(false, Component.interface_1258.component_1258_566);
        ifSetHide(false, Component.interface_1258.component_1258_574);
        ifSetHide(false, Component.interface_1258.component_1258_582);
        ifSetHide(false, Component.interface_1258.component_1258_586);
        ifSetHide(false, Component.interface_1258.component_1258_606);
        ifSetHide(true, Component.interface_1258.component_1258_559);
        ifSetHide(true, Component.interface_1258.component_1258_567);
        ifSetHide(true, Component.interface_1258.component_1258_575);
        ifSetHide(true, Component.interface_1258.component_1258_579);
        ifSetHide(true, Component.interface_1258.component_1258_583);
        ifSetHide(true, Component.interface_1258.component_1258_587);
        ifSetHide(true, Component.interface_1258.component_1258_607);
    } else {
        ifSetHide(false, Component.interface_1258.component_1258_559);
        ifSetHide(false, Component.interface_1258.component_1258_567);
        ifSetHide(false, Component.interface_1258.component_1258_575);
        ifSetHide(false, Component.interface_1258.component_1258_583);
        ifSetHide(false, Component.interface_1258.component_1258_587);
        ifSetHide(false, Component.interface_1258.component_1258_607);
        str0 = "You need at least a tier 3 citadel to customise the party room chairs.";
        ifSetOnMouseOver(hook(cs2_4538, "IIisifdiiiiii", [Component.interface_1258.component_1258_119, Component.interface_1258.component_1258_559, -1, str0, 120, Graphic.verdana_11pt_regular, Graphic.verdana_11pt_regular, colour(0xFFFFFF), 13, 4, 1, event_mousex, event_mousey]), Component.interface_1258.component_1258_559);
        hookMouseExit(hook(clientscript_deltooltip, "I", [Component.interface_1258.component_1258_119]), Component.interface_1258.component_1258_559);
        str0 = "You need at least a tier 3 citadel to customise the party room tables.";
        ifSetOnMouseOver(hook(cs2_4538, "IIisifdiiiiii", [Component.interface_1258.component_1258_119, Component.interface_1258.component_1258_567, -1, str0, 120, Graphic.verdana_11pt_regular, Graphic.verdana_11pt_regular, colour(0xFFFFFF), 13, 4, 1, event_mousex, event_mousey]), Component.interface_1258.component_1258_567);
        hookMouseExit(hook(clientscript_deltooltip, "I", [Component.interface_1258.component_1258_119]), Component.interface_1258.component_1258_567);
        str0 = "You need at least a tier 3 citadel to customise the sundials.";
        ifSetOnMouseOver(hook(cs2_4538, "IIisifdiiiiii", [Component.interface_1258.component_1258_119, Component.interface_1258.component_1258_575, -1, str0, 120, Graphic.verdana_11pt_regular, Graphic.verdana_11pt_regular, colour(0xFFFFFF), 13, 4, 1, event_mousex, event_mousey]), Component.interface_1258.component_1258_575);
        hookMouseExit(hook(clientscript_deltooltip, "I", [Component.interface_1258.component_1258_119]), Component.interface_1258.component_1258_575);
        str0 = "You need at least a tier 3 citadel to customise the keep tapestry.";
        ifSetOnMouseOver(hook(cs2_4538, "IIisifdiiiiii", [Component.interface_1258.component_1258_119, Component.interface_1258.component_1258_583, -1, str0, 120, Graphic.verdana_11pt_regular, Graphic.verdana_11pt_regular, colour(0xFFFFFF), 13, 4, 1, event_mousex, event_mousey]), Component.interface_1258.component_1258_583);
        hookMouseExit(hook(clientscript_deltooltip, "I", [Component.interface_1258.component_1258_119]), Component.interface_1258.component_1258_583);
        str0 = "You need at least a tier 3 citadel to customise the keep banners.";
        ifSetOnMouseOver(hook(cs2_4538, "IIisifdiiiiii", [Component.interface_1258.component_1258_119, Component.interface_1258.component_1258_587, -1, str0, 120, Graphic.verdana_11pt_regular, Graphic.verdana_11pt_regular, colour(0xFFFFFF), 13, 4, 1, event_mousex, event_mousey]), Component.interface_1258.component_1258_587);
        hookMouseExit(hook(clientscript_deltooltip, "I", [Component.interface_1258.component_1258_119]), Component.interface_1258.component_1258_587);
        str0 = "You need at least a tier 3 citadel to customise the keep door.";
        ifSetOnMouseOver(hook(cs2_4538, "IIisifdiiiiii", [Component.interface_1258.component_1258_119, Component.interface_1258.component_1258_607, -1, str0, 120, Graphic.verdana_11pt_regular, Graphic.verdana_11pt_regular, colour(0xFFFFFF), 13, 4, 1, event_mousex, event_mousey]), Component.interface_1258.component_1258_607);
        hookMouseExit(hook(clientscript_deltooltip, "I", [Component.interface_1258.component_1258_119]), Component.interface_1258.component_1258_607);
    }

    if (loadClanVarbit<2580>() > 3) {
        ifSetHide(false, Component.interface_1258.component_1258_598);
        ifSetHide(false, Component.interface_1258.component_1258_602);
        ifSetHide(false, Component.interface_1258.component_1258_562);
        ifSetHide(false, Component.interface_1258.component_1258_590);
        ifSetHide(true, Component.interface_1258.component_1258_599);
        ifSetHide(true, Component.interface_1258.component_1258_603);
        ifSetHide(true, Component.interface_1258.component_1258_563);
        ifSetHide(true, Component.interface_1258.component_1258_591);
    } else {
        ifSetHide(false, Component.interface_1258.component_1258_599);
        ifSetHide(false, Component.interface_1258.component_1258_603);
        ifSetHide(false, Component.interface_1258.component_1258_563);
        ifSetHide(false, Component.interface_1258.component_1258_591);
        str0 = "You need at least a tier 4 citadel to customise the keep lower windows.";
        ifSetOnMouseOver(hook(cs2_4538, "IIisifdiiiiii", [Component.interface_1258.component_1258_119, Component.interface_1258.component_1258_599, -1, str0, 120, Graphic.verdana_11pt_regular, Graphic.verdana_11pt_regular, colour(0xFFFFFF), 13, 4, 1, event_mousex, event_mousey]), Component.interface_1258.component_1258_599);
        hookMouseExit(hook(clientscript_deltooltip, "I", [Component.interface_1258.component_1258_119]), Component.interface_1258.component_1258_599);
        str0 = "You need at least a tier 4 citadel to customise the keep upper windows.";
        ifSetOnMouseOver(hook(cs2_4538, "IIisifdiiiiii", [Component.interface_1258.component_1258_119, Component.interface_1258.component_1258_603, -1, str0, 120, Graphic.verdana_11pt_regular, Graphic.verdana_11pt_regular, colour(0xFFFFFF), 13, 4, 1, event_mousex, event_mousey]), Component.interface_1258.component_1258_603);
        hookMouseExit(hook(clientscript_deltooltip, "I", [Component.interface_1258.component_1258_119]), Component.interface_1258.component_1258_603);
        str0 = "You need at least a tier 4 citadel to customise the citadel flags.";
        ifSetOnMouseOver(hook(cs2_4538, "IIisifdiiiiii", [Component.interface_1258.component_1258_119, Component.interface_1258.component_1258_563, -1, str0, 120, Graphic.verdana_11pt_regular, Graphic.verdana_11pt_regular, colour(0xFFFFFF), 13, 4, 1, event_mousex, event_mousey]), Component.interface_1258.component_1258_563);
        hookMouseExit(hook(clientscript_deltooltip, "I", [Component.interface_1258.component_1258_119]), Component.interface_1258.component_1258_563);
        str0 = "You need at least a tier 4 citadel to customise the keep shields.";
        ifSetOnMouseOver(hook(cs2_4538, "IIisifdiiiiii", [Component.interface_1258.component_1258_119, Component.interface_1258.component_1258_591, -1, str0, 120, Graphic.verdana_11pt_regular, Graphic.verdana_11pt_regular, colour(0xFFFFFF), 13, 4, 1, event_mousex, event_mousey]), Component.interface_1258.component_1258_591);
        hookMouseExit(hook(clientscript_deltooltip, "I", [Component.interface_1258.component_1258_119]), Component.interface_1258.component_1258_591);
    }

    if (loadClanVarbit<2580>() > 4) {
        ifSetHide(false, Component.interface_1258.component_1258_578);
    } else {
        ifSetHide(false, Component.interface_1258.component_1258_579);
        str0 = "You need at least a tier 5 citadel to customise the keep flag.";
        ifSetOnMouseOver(hook(cs2_4538, "IIisifdiiiiii", [Component.interface_1258.component_1258_119, Component.interface_1258.component_1258_579, -1, str0, 120, Graphic.verdana_11pt_regular, Graphic.verdana_11pt_regular, colour(0xFFFFFF), 13, 4, 1, event_mousex, event_mousey]), Component.interface_1258.component_1258_579);
        hookMouseExit(hook(clientscript_deltooltip, "I", [Component.interface_1258.component_1258_119]), Component.interface_1258.component_1258_579);
    }
}
