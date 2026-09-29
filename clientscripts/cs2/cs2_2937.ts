/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2937

function cs2_2937(): void {
    varc_1089 = -1;
    ifSetGraphic(gameframe_skin_graphic(Graphic.corner_frame_1_3), Component.interface_596.component_596_34);
    ifSetGraphic(gameframe_skin_graphic(Graphic.corner_frame_1_3), Component.interface_596.component_596_33);
    ifSetGraphic(gameframe_skin_graphic(Graphic.corner_frame_1_2), Component.interface_596.component_596_31);
    ifSetGraphic(gameframe_skin_graphic(Graphic.corner_frame_1_2), Component.interface_596.component_596_32);
    ifSetGraphic(gameframe_skin_graphic(Graphic.corner_frame_1_2), Component.interface_596.component_596_19);
    ifSetvflip(true, Component.interface_596.component_596_19);
    ifSethflip(true, Component.interface_596.component_596_19);
    ifSetGraphic(gameframe_skin_graphic(Graphic.corner_frame_1_2), Component.interface_596.component_596_23);
    ifSetvflip(true, Component.interface_596.component_596_23);
    ifSethflip(false, Component.interface_596.component_596_23);
    ifSetGraphic(gameframe_skin_graphic(Graphic.corner_frame_1_2), Component.interface_596.component_596_20);
    ifSetGraphic(gameframe_skin_graphic(Graphic.corner_frame_1_2), Component.interface_596.component_596_24);
    // Burial Grounds login content: clear wording and only controls that really work.
    ifSetText("ENTER GREYHAVEN", Component.interface_596.component_596_35);
    ifSetText("Username", Component.interface_596.component_596_38);
    ifSetText("Password", Component.interface_596.component_596_40);
    ifSetText("Enter", Component.interface_596.component_596_57);
    ifSetText("Enter", Component.interface_596.component_596_58);

    // These were RuneScape web-account actions and have no Burial Grounds
    // destination. Do not leave dead/external controls in the custom client.
    ifSetHide(true, Component.interface_596.component_596_45);
    ifSetHide(true, Component.interface_596.component_596_52);
    ifSetHide(true, Component.interface_596.component_596_59);

    // Give the real Enter button a little more visual weight now that the
    // obsolete account/recovery controls are gone.
    ifSetPosition(0, 160, 1, 0, Component.interface_596.component_596_44);
    ifSetSize(200, 30, 0, 0, Component.interface_596.component_596_44);

    ifSetOnTimer(hook(cs2_4700, "", []), Component.interface_744.component_744_17);
}
