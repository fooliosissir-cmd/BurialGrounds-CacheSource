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

    // Lore-facing home panel. The layout is intentionally asymmetrical instead
    // of reproducing the stock centered news card.
    ifSetText("GREYHAVEN", Component.interface_908.component_908_33);
    ifSetSize(300, 38, 0, 0, Component.interface_908.component_908_33);
    ifSetPosition(36, 16, 0, 0, Component.interface_908.component_908_33);
    ifSetColour(colour(0xEBE0BC), Component.interface_908.component_908_33);
    ifSetTextFont(Graphic.welcome_font_large, Component.interface_908.component_908_33);
    ifSetTextAlign(0, 2, 0, Component.interface_908.component_908_33);

    ifSetText("Return to Greyhaven, choose your world, and continue into Burial Grounds.", Component.interface_908.component_908_32);
    ifSetPosition(38, 62, 0, 0, Component.interface_908.component_908_32);
    ifSetSize(330, 58, 0, 0, Component.interface_908.component_908_32);
    ifSetColour(colour(0xC9BE9D), Component.interface_908.component_908_32);
    ifSetTextAlign(0, 1, 0, Component.interface_908.component_908_32);
}
