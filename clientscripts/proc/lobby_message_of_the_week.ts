/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,lobby_message_of_the_week]

/**
 * Burial Grounds lobby welcome panel.
 * Uses existing interface components and fonts so the lobby remains native
 * to the 727 client while presenting Burial Grounds-owned content.
 */
function lobby_message_of_the_week(): void {
    ifSetHide(true, Component.interface_908.component_908_15);
    ifSetHide(false, Component.interface_908.component_908_30);

    // Never display stock RuneScape promotional/news artwork.
    ifSetGraphic(-1, Component.interface_908.component_908_31);
    ifSetGraphic(-1, Component.interface_908.component_908_35);

    ifSetText("BURIAL GROUNDS", Component.interface_908.component_908_33);
    ifSetSize(345, 35, 0, 0, Component.interface_908.component_908_33);
    ifSetPosition(231, 5, 0, 0, Component.interface_908.component_908_33);
    ifSetColour(colour(0xEBE0BC), Component.interface_908.component_908_33);
    ifSetTextFont(Graphic.welcome_font_large, Component.interface_908.component_908_33);
    ifSetTextAlign(1, 2, 0, Component.interface_908.component_908_33);

    ifSetText("Choose your world and continue into Burial Grounds.", Component.interface_908.component_908_32);
    ifSetPosition(231, 46, 0, 0, Component.interface_908.component_908_32);
    ifSetSize(345, 70, 0, 0, Component.interface_908.component_908_32);
    ifSetColour(colour(0xEBE0BC), Component.interface_908.component_908_32);
    ifSetTextAlign(1, 1, 0, Component.interface_908.component_908_32);
}
