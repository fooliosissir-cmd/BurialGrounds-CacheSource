/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4641

function cs2_4641(): void {
    cs2_4639();

    if (testBit(varp_2189, 1) == 1) {
        ifSetGraphic(Graphic.fremsaga_icons_0, Component.interface_153.component_153_15);
        ifSetOnOp(hook(fremsaga_update_flavour_text, "i", [1]), Component.interface_153.component_153_100);
        cs2_4645(1);
    } else {
        ifSetGraphic(Graphic.fremsaga_icons_3, Component.interface_153.component_153_15);
        ifSetOnOp(hook(cs2_6154, "", []), Component.interface_153.component_153_100);
    }

    if (testBit(varp_2189, 2) == 1) {
        ifSetGraphic(Graphic.fremsaga_icons_2, Component.interface_153.component_153_12);
        ifSetOnOp(hook(fremsaga_update_flavour_text, "i", [2]), Component.interface_153.component_153_113);
        cs2_4645(2);
    } else {
        ifSetGraphic(Graphic.fremsaga_icons_3, Component.interface_153.component_153_12);
        ifSetOnOp(hook(cs2_6154, "", []), Component.interface_153.component_153_113);
    }

    if (testBit(varp_2189, 4) == 1) {
        ifSetGraphic(Graphic.fremsaga_icons_1, Component.interface_153.component_153_9);
        ifSetOnOp(hook(fremsaga_update_flavour_text, "i", [4]), Component.interface_153.component_153_126);
        cs2_4645(4);
    } else {
        ifSetGraphic(Graphic.fremsaga_icons_3, Component.interface_153.component_153_9);
        ifSetOnOp(hook(cs2_6154, "", []), Component.interface_153.component_153_126);
    }

    if (testBit(varp_2189, 3) == 1) {
        ifSetGraphic(Graphic.fremsaga_icons_5, Component.interface_153.component_153_200);
        ifSetOnOp(hook(fremsaga_update_flavour_text, "i", [3]), Component.interface_153.component_153_199);
        cs2_4645(3);
    } else {
        ifSetGraphic(Graphic.fremsaga_icons_3, Component.interface_153.component_153_200);
        ifSetOnOp(hook(cs2_6154, "", []), Component.interface_153.component_153_199);
    }

    if (testBit(varp_2189, 6) == 1) {
        ifSetGraphic(Graphic.fremsaga_icons_4, Component.interface_153.component_153_184);
        ifSetOnOp(hook(fremsaga_update_flavour_text, "i", [6]), Component.interface_153.component_153_183);
        cs2_4645(6);
    } else {
        ifSetGraphic(Graphic.fremsaga_icons_3, Component.interface_153.component_153_184);
        ifSetOnOp(hook(cs2_6154, "", []), Component.interface_153.component_153_183);
    }
}
