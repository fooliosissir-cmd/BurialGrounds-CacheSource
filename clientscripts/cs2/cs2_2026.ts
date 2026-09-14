/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2026

function cs2_2026(): void {
    ifSetTextFont(Graphic.b12_full, Component.interface_752.component_752_4);
    ifSetTextFont(Graphic.b12_full, Component.interface_752.component_752_5);
    ifSetSize(20, 40, 1, 0, Component.interface_752.component_752_4);
    ifSetSize(20, 20, 1, 0, Component.interface_752.component_752_5);
    ifSetPosition(0, 20, 1, 0, Component.interface_752.component_752_4);
    ifSetPosition(0, 60, 1, 0, Component.interface_752.component_752_5);
    ifSetOnMouseRepeat(noHook(""), Component.interface_752.component_752_5);
    ifSetOnMouseLeave(noHook(""), Component.interface_752.component_752_5);
    ifSetonsubchange(noHook(""), 49283077);
    ifSetColour(colour(0x000080), Component.interface_752.component_752_5);
    ccDeleteAll(Component.interface_752.component_752_3);
}
