/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,lobbyscreen_tabswitch]

function proc_lobbyscreen_tabswitch(intArg0: number): void {
    if (enumOp(type_int, type_component, Enum.enum_941, intArg0) == -1) {
        return;
    }

    if (ifGetHide(enumOp(type_int, type_component, Enum.enum_941, intArg0)) == 0) {
        return;
    }
    ifSetHide(true, enumOp(type_int, type_component, Enum.enum_941, 0));
    ifSetHide(true, enumOp(type_int, type_component, Enum.enum_941, 1));
    ifSetHide(true, enumOp(type_int, type_component, Enum.enum_941, 2));
    ifSetHide(true, enumOp(type_int, type_component, Enum.enum_941, 5));
    ifSetHide(true, enumOp(type_int, type_component, Enum.enum_941, 3));
    ifSetHide(true, enumOp(type_int, type_component, Enum.enum_941, 4));
    ifSetColour(colour(0xEBE0BC), Component.interface_906.component_906_231);
    ifSetColour(colour(0xEBE0BC), Component.interface_906.component_906_228);
    ifSetColour(colour(0xEBE0BC), Component.interface_906.component_906_226);
    ifSetColour(colour(0xEBE0BC), Component.interface_906.component_906_224);
    ifSetColour(colour(0xEBE0BC), Component.interface_906.component_906_281);
    ifSetColour(colour(0xEBE0BC), Component.interface_906.component_906_222);
    ifSetGraphic(Graphic.graphic_4672, Component.interface_906.component_906_230);
    ifSetGraphic(Graphic.graphic_4672, Component.interface_906.component_906_28);
    ifSetGraphic(Graphic.graphic_4672, Component.interface_906.component_906_27);
    ifSetGraphic(Graphic.graphic_4672, Component.interface_906.component_906_26);
    ifSetGraphic(Graphic.graphic_4672, Component.interface_906.component_906_280);
    ifSetGraphic(Graphic.graphic_4672, Component.interface_906.component_906_25);
    ifSetOnMouseOver(hook(text_colour_swapper, "Ii", [Component.interface_906.component_906_231, colour(0xFAFAFA)]), Component.interface_906.component_906_214);
    ifSetOnMouseOver(hook(text_colour_swapper, "Ii", [Component.interface_906.component_906_228, colour(0xFAFAFA)]), Component.interface_906.component_906_215);
    ifSetOnMouseOver(hook(text_colour_swapper, "Ii", [Component.interface_906.component_906_226, colour(0xFAFAFA)]), Component.interface_906.component_906_216);
    ifSetOnMouseOver(hook(text_colour_swapper, "Ii", [Component.interface_906.component_906_224, colour(0xFAFAFA)]), Component.interface_906.component_906_218);
    ifSetOnMouseOver(hook(text_colour_swapper, "Ii", [Component.interface_906.component_906_281, colour(0xFAFAFA)]), Component.interface_906.component_906_217);
    ifSetOnMouseOver(hook(text_colour_swapper, "Ii", [Component.interface_906.component_906_222, colour(0xFAFAFA)]), Component.interface_906.component_906_219);
    ifSetOnMouseLeave(hook(text_colour_swapper, "Ii", [Component.interface_906.component_906_231, colour(0xEBE0BC)]), Component.interface_906.component_906_214);
    ifSetOnMouseLeave(hook(text_colour_swapper, "Ii", [Component.interface_906.component_906_228, colour(0xEBE0BC)]), Component.interface_906.component_906_215);
    ifSetOnMouseLeave(hook(text_colour_swapper, "Ii", [Component.interface_906.component_906_226, colour(0xEBE0BC)]), Component.interface_906.component_906_216);
    ifSetOnMouseLeave(hook(text_colour_swapper, "Ii", [Component.interface_906.component_906_224, colour(0xEBE0BC)]), Component.interface_906.component_906_218);
    ifSetOnMouseLeave(hook(text_colour_swapper, "Ii", [Component.interface_906.component_906_281, colour(0xEBE0BC)]), Component.interface_906.component_906_217);
    ifSetOnMouseLeave(hook(text_colour_swapper, "Ii", [Component.interface_906.component_906_222, colour(0xEBE0BC)]), Component.interface_906.component_906_219);

    if (intArg0 != 5) {
        cs2_3161(0);
    }

    if (intArg0 != 3) {
        cs2_4556(0);
    }

    if (intArg0 == 1) {
        ifSetPosition(0, 3, 1, 2, Component.interface_906.component_906_33);
        ifSetSize(655, 26, 0, 1, Component.interface_906.component_906_32);
        worldListPingworlds(true);
    } else {
        ifSetPosition(0, 241, 1, 1, Component.interface_906.component_906_33);
        ifSetSize(655, 477, 0, 0, Component.interface_906.component_906_32);
        worldListPingworlds(false);
    }

    if (intArg0 == 4) {
        ifSetHide(true, Component.interface_906.component_906_54);
    } else {
        ifSetHide(false, Component.interface_906.component_906_54);
    }
    ifSetHide(false, enumOp(type_int, type_component, Enum.enum_941, intArg0));

    switch (intArg0) {
        case 0:
            ifSetGraphic(Graphic.graphic_4671, Component.interface_906.component_906_230);
            ifSetOnMouseOver(noHook(""), Component.interface_906.component_906_214);
            ifSetOnMouseLeave(noHook(""), Component.interface_906.component_906_214);
            ccDeleteAll(Component.interface_906.component_906_214);
            break;
        case 1:
            ifSetGraphic(Graphic.graphic_4671, Component.interface_906.component_906_28);
            ifSetOnMouseOver(noHook(""), Component.interface_906.component_906_215);
            ifSetOnMouseLeave(noHook(""), Component.interface_906.component_906_215);
            ccDeleteAll(Component.interface_906.component_906_215);
            break;
        case 2:
            ifSetGraphic(Graphic.graphic_4671, Component.interface_906.component_906_27);
            ifSetOnMouseOver(noHook(""), Component.interface_906.component_906_216);
            ifSetOnMouseLeave(noHook(""), Component.interface_906.component_906_216);
            ccDeleteAll(Component.interface_906.component_906_216);
            break;
        case 5:
            ifSetGraphic(Graphic.graphic_4671, Component.interface_906.component_906_26);
            ifSetOnMouseOver(noHook(""), Component.interface_906.component_906_218);
            ifSetOnMouseLeave(noHook(""), Component.interface_906.component_906_218);
            ccDeleteAll(Component.interface_906.component_906_218);
            cs2_3161(1);
            break;
        case 3:
            ifSetGraphic(Graphic.graphic_4671, Component.interface_906.component_906_280);
            ifSetOnMouseOver(noHook(""), Component.interface_906.component_906_217);
            ifSetOnMouseLeave(noHook(""), Component.interface_906.component_906_217);
            ccDeleteAll(Component.interface_906.component_906_217);
            cs2_4556(1);
            break;
        case 4:
            ifSetGraphic(Graphic.graphic_4671, Component.interface_906.component_906_25);
            ifSetOnMouseOver(noHook(""), Component.interface_906.component_906_219);
            ifSetOnMouseLeave(noHook(""), Component.interface_906.component_906_219);
            ccDeleteAll(Component.interface_906.component_906_219);
            break;
    }
}
