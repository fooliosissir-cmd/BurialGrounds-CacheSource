/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,lobby_message_of_the_week]

/**
 * Burial Grounds lobby Home panel.
 *
 * Keep the lore treatment restrained: Greyhaven is the recognizable return
 * point, while the lobby remains functional and easy to understand.
 */
function lobby_message_of_the_week(): void {
    ifSetHide(true, Component.interface_908.component_908_15);
    ifSetHide(false, Component.interface_908.component_908_30);

    // Never display stock RuneScape promotional/news artwork.
    ifSetGraphic(-1, Component.interface_908.component_908_31);
    ifSetGraphic(-1, Component.interface_908.component_908_35);

    ifSetText("GREYHAVEN", Component.interface_908.component_908_33);
    ifSetSize(300, 38, 0, 0, Component.interface_908.component_908_33);
    ifSetPosition(36, 16, 0, 0, Component.interface_908.component_908_33);
    ifSetColour(colour(0xEBE0BC), Component.interface_908.component_908_33);
    ifSetTextFont(Graphic.welcome_font_large, Component.interface_908.component_908_33);
    ifSetTextAlign(0, 2, 0, Component.interface_908.component_908_33);

    ifSetText("The road begins again at Greyhaven.<br>Choose World Select when you are ready to continue.", Component.interface_908.component_908_32);
    ifSetPosition(38, 62, 0, 0, Component.interface_908.component_908_32);
    ifSetSize(360, 58, 0, 0, Component.interface_908.component_908_32);
    ifSetColour(colour(0xC9BE9D), Component.interface_908.component_908_32);
    ifSetTextAlign(0, 1, 0, Component.interface_908.component_908_32);
}
