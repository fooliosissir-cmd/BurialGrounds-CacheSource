/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,clan_field_editor_init]

function clan_field_editor_init(intArg0: component): void {
    ifSetHide(false, Component.interface_1111.component_1111_6);
    ifSetHide(true, Component.interface_1111.component_1111_1);
    cs2_4510(Component.interface_1111.component_1111_2, Struct.struct_1736);
    cs2_4510(Component.interface_1111.component_1111_3, Struct.struct_1737);
    cs2_4211(Component.interface_1111.component_1111_5, Graphic.graphic_4040, colour(0xEFB063), colour(0x302821));
    ifSetOnVarClanTransmit(hook(cs2_5039, "", []), intArg0);
    ifSetOnScrollWheel(hook(clientscript_clan_field_editor_zoom, "Ii", [intArg0, event_mousey]), Component.interface_1111.component_1111_12);
    ifSetOnOp(hook(clientscript_clan_field_editor_zoom, "Ii", [intArg0, 1]), Component.interface_1111.component_1111_43);
    ifSetOnOp(hook(clientscript_clan_field_editor_zoom, "Ii", [intArg0, -1]), Component.interface_1111.component_1111_50);
    ifSetOnDragComplete(hook(cs2_5043, "IIi", [intArg0, event_com, event_mousex]), 72810544);
    let int1: number = 0;
    let int2: number = pow(112, 2);

    while (int1 < int2) {
        ccCreate(Component.interface_1111.component_1111_13, 3, int1);
        ccSetColour(colour(0x1F1F26));
        ccSetfill(true);
        ccSetOp(1, "Set");
        ccSetOp(10, "Teleport");
        ccSetdragdeadtime(5);
        ccSetdragrenderbehaviour(2);
        ccSetOnDrag(hook(cs2_5054, "ii", [event_mousex, event_mousey]));
        int1 = int1 + 1;
    }
    cs2_5040();
    ccCreate(Component.interface_1111.component_1111_16, 5, 0);
    ccCreate<1>(Component.interface_1111.component_1111_17, 5, 0);
    ccSetPosition(0, 0, 1, 1);
    ccSetPosition<1>(0, 0, 1, 1);
    ccSetSize(0, 32, 1, 1);
    ccSetSize<1>(32, 0, 1, 1);
    ccSetGraphic(Graphic.aif_scrollbar_dragger_2_3);
    ccSetGraphic<1>(Graphic.aif_scrollbar_horizontal_dragger_2_3);
    ccSettiling(true);
    ccSettiling<1>(true);
    ccSetOnClick(hook(cs2_5052, "I1", [event_com, true]));
    ccSetOnClick<1>(hook(cs2_5052, "I1", [event_com, false]));
    ccCreate(Component.interface_1111.component_1111_16, 5, 1);
    ccCreate<1>(Component.interface_1111.component_1111_17, 5, 1);
    ccSetPosition(0, 0, 1, 0);
    ccSetPosition<1>(0, 0, 0, 1);
    ccSetSize(0, 16, 1, 0);
    ccSetSize<1>(16, 0, 0, 1);
    ccSetGraphic(Graphic.aif_scrollbar_arrow_2_1);
    ccSetGraphic<1>(Graphic.aif_scrollbar_arrow_2_1);
    ccSet2dangle<1>(16384);
    ccSetOnHold(hook(cs2_5049, "ii1", [-4, 1, true]));
    ccSetOnHold<1>(hook(cs2_5049, "ii1", [-4, 1, false]));
    ccCreate(Component.interface_1111.component_1111_16, 5, 2);
    ccCreate<1>(Component.interface_1111.component_1111_17, 5, 2);
    ccSetPosition(0, 0, 1, 2);
    ccSetPosition<1>(0, 0, 2, 1);
    ccSetSize(0, 16, 1, 0);
    ccSetSize<1>(16, 0, 0, 1);
    ccSetGraphic(Graphic.aif_scrollbar_arrow_2_0);
    ccSetGraphic<1>(Graphic.aif_scrollbar_arrow_2_0);
    ccSet2dangle<1>(16384);
    ccSetOnHold(hook(cs2_5049, "ii1", [4, 1, true]));
    ccSetOnHold<1>(hook(cs2_5049, "ii1", [4, 1, false]));
    ccCreate(Component.interface_1111.component_1111_16, 5, 3);
    ccCreate<1>(Component.interface_1111.component_1111_17, 5, 3);
    ccSetGraphic(Graphic.aif_scrollbar_dragger_2_1);
    ccSetGraphic<1>(Graphic.aif_scrollbar_horizontal_dragger_2_1);
    ccSettiling(true);
    ccSettiling<1>(true);
    ccSetdraggable(Component.interface_1111.component_1111_16, 0);
    ccSetdraggable<1>(Component.interface_1111.component_1111_17, 0);
    ccSetdragrenderbehaviour(1);
    ccSetdragrenderbehaviour<1>(1);
    ccSetOnDrag(hook(cs2_5051, "Ii11", [event_com, event_mousey, false, true]));
    ccSetOnDrag<1>(hook(cs2_5051, "Ii11", [event_com, event_mousex, false, false]));
    ccSetOnDragComplete(hook(cs2_5051, "Ii11", [event_com, event_mousey, true, true]));
    ccSetOnDragComplete<1>(hook(cs2_5051, "Ii11", [event_com, event_mousex, true, false]));
    ccCreate(Component.interface_1111.component_1111_16, 5, 4);
    ccCreate<1>(Component.interface_1111.component_1111_17, 5, 4);
    ccSetSize(0, 5, 1, 0);
    ccSetSize<1>(5, 0, 0, 1);
    ccSetGraphic(Graphic.aif_scrollbar_dragger_2_0);
    ccSetGraphic<1>(Graphic.aif_scrollbar_horizontal_dragger_2_0);
    ccCreate(Component.interface_1111.component_1111_16, 5, 5);
    ccCreate<1>(Component.interface_1111.component_1111_17, 5, 5);
    ccSetSize(0, 5, 1, 0);
    ccSetSize<1>(5, 0, 0, 1);
    ccSetGraphic(Graphic.aif_scrollbar_dragger_2_2);
    ccSetGraphic<1>(Graphic.aif_scrollbar_horizontal_dragger_2_2);
    ifSetOnScrollWheel(hook(cs2_5049, "ii1", [event_mousey, 20, true]), Component.interface_1111.component_1111_16);
    ifSetOnScrollWheel(hook(cs2_5049, "ii1", [event_mousey, 20, false]), Component.interface_1111.component_1111_17);
    ccCreate(Component.interface_1111.component_1111_12, 3, 0);
    ccSetfill(false);
    ccSetHide(true);
    ifSetOnTimer(hook(clan_field_yah, "Ii", [event_com, ccGetId()]), Component.interface_1111.component_1111_12);
    ifSetOnVarcTransmit(hook(clan_field_yah, "IiY", [event_com, ccGetId()], [1065]), Component.interface_1111.component_1111_12);
    ifSetOnOp(hook(clientscript_clan_field_editor_focus, "Ii", [Component.interface_1111.component_1111_12, ccGetId()]), Component.interface_1111.component_1111_51);

    if (varc_hw10_cutscene < 3 || varc_hw10_cutscene > 21) {
        varc_hw10_cutscene = 3 + (21 - 3) / 4;
    }
    cs2_5047(varc_hw10_cutscene, 0, 112, 0, 0);
    cs2_5048();
    cs2_5073(true);
    cs2_5055(1, "Architecture", Enum.clan_field_elementlist_1, Component.interface_1111.component_1111_65, Component.interface_1111.component_1111_54, Component.interface_1111.component_1111_55);
    cs2_5055(2, "Toys", Enum.clan_field_elementlist_2, Component.interface_1111.component_1111_66, Component.interface_1111.component_1111_57, Component.interface_1111.component_1111_58);
    cs2_5055(3, "Hazards", Enum.clan_field_elementlist_3, Component.interface_1111.component_1111_67, Component.interface_1111.component_1111_60, Component.interface_1111.component_1111_61);
    cs2_5055(4, "Monsters", Enum.clan_field_elementlist_4, Component.interface_1111.component_1111_68, Component.interface_1111.component_1111_63, Component.interface_1111.component_1111_64);
    varc_welcome_screen_email = 1;
    cs2_5065(1);
    ifSetOnVarTransmit(hook(cs2_5066, "Y", [], [1736]), intArg0);
    cs2_5067();
    proc_clan_field_editor_focus(Component.interface_1111.component_1111_12, 0);
}
