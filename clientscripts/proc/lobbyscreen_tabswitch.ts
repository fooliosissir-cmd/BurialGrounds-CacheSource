/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,lobbyscreen_tabswitch]

function proc_lobbyscreen_tabswitch(intArg0: number): void {
    // Burial Grounds lobby has exactly two destinations.
    if (intArg0 != 0 && intArg0 != 1) {
        return;
    }

    let int1: component = enumOp(type_int, type_component, Enum.enum_941, intArg0);
    if (int1 == -1) {
        return;
    }

    if (ifGetHide(int1) == 0) {
        return;
    }

    ifSetHide(true, enumOp(type_int, type_component, Enum.enum_941, 0));
    ifSetHide(true, enumOp(type_int, type_component, Enum.enum_941, 1));

    // Never expose the retired social/settings lobby panes.
    ifSetHide(true, Component.interface_906.component_906_210);
    ifSetHide(true, Component.interface_906.component_906_211);
    ifSetHide(true, Component.interface_906.component_906_212);
    ifSetHide(true, Component.interface_906.component_906_213);

    ifSetColour(colour(0xEBE0BC), Component.interface_906.component_906_231);
    ifSetColour(colour(0xEBE0BC), Component.interface_906.component_906_228);

    ifSetGraphic(Graphic.graphic_4672, Component.interface_906.component_906_230);
    ifSetGraphic(Graphic.graphic_4672, Component.interface_906.component_906_28);

    ifSetOnMouseOver(hook(text_colour_swapper, "Ii", [Component.interface_906.component_906_231, colour(0xFAFAFA)]), Component.interface_906.component_906_214);
    ifSetOnMouseOver(hook(text_colour_swapper, "Ii", [Component.interface_906.component_906_228, colour(0xFAFAFA)]), Component.interface_906.component_906_215);
    ifSetOnMouseLeave(hook(text_colour_swapper, "Ii", [Component.interface_906.component_906_231, colour(0xEBE0BC)]), Component.interface_906.component_906_214);
    ifSetOnMouseLeave(hook(text_colour_swapper, "Ii", [Component.interface_906.component_906_228, colour(0xEBE0BC)]), Component.interface_906.component_906_215);

    if (intArg0 == 1) {
        ifSetPosition(0, 3, 1, 2, Component.interface_906.component_906_33);
        ifSetSize(655, 26, 0, 1, Component.interface_906.component_906_32);
        worldListPingworlds(true);
    } else {
        ifSetPosition(0, 241, 1, 1, Component.interface_906.component_906_33);
        ifSetSize(655, 477, 0, 0, Component.interface_906.component_906_32);
        worldListPingworlds(false);
    }

    ifSetHide(false, int1);

    if (intArg0 == 0) {
        ifSetGraphic(Graphic.graphic_4671, Component.interface_906.component_906_230);
        ifSetOnMouseOver(noHook(""), Component.interface_906.component_906_214);
        ifSetOnMouseLeave(noHook(""), Component.interface_906.component_906_214);
        ccDeleteAll(Component.interface_906.component_906_214);
    } else {
        ifSetGraphic(Graphic.graphic_4671, Component.interface_906.component_906_28);
        ifSetOnMouseOver(noHook(""), Component.interface_906.component_906_215);
        ifSetOnMouseLeave(noHook(""), Component.interface_906.component_906_215);
        ccDeleteAll(Component.interface_906.component_906_215);
    }
}
