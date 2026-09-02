/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,evalid_rewards]

function proc_evalid_rewards(): void {
    switch (mapLang()) {
        case 0:
            ifSetGraphic(Graphic.graphic_10787, Component.interface_906.component_906_415);
            ifSetGraphic(Graphic.graphic_10791, Component.interface_906.component_906_424);
            break;
        case 1:
            ifSetGraphic(Graphic.graphic_10789, Component.interface_906.component_906_415);
            ifSetGraphic(Graphic.graphic_10793, Component.interface_906.component_906_424);
            break;
        case 2:
            ifSetGraphic(Graphic.graphic_10788, Component.interface_906.component_906_415);
            ifSetGraphic(Graphic.graphic_10792, Component.interface_906.component_906_424);
            break;
        case 3:
            ifSetGraphic(Graphic.graphic_10790, Component.interface_906.component_906_415);
            ifSetGraphic(Graphic.graphic_10794, Component.interface_906.component_906_424);
            break;
    }

    if (varc_1919 < 1) {
        if (varp_2611 == 1) {
            evalid_ignore();
            varp_2522 = 1;
            cs2_196();
            return;
        }
        ifSetText(" - A unique Cape!" + "<br>" + "- An exclusive in-game title 'The Real'" + "<br>" + "- Up to 20 additional Bank Spaces" + "<br>" + "- An XP lamp in a skill of your choice", Component.interface_906.component_906_418);
        ifSetPosition(ifGetX(Component.interface_906.component_906_421), 390, 0, 0, Component.interface_906.component_906_421);
        ifSetPosition(ifGetX(Component.interface_906.component_906_425), 278, 0, 0, Component.interface_906.component_906_425);
        ifSetHide(true, Component.interface_906.component_906_31);
        ifSetHide(false, Component.interface_906.component_906_34);
        ifSetHide(true, Component.interface_906.component_906_338);
        ifSetHide(true, Component.interface_906.component_906_382);
        ifSetHide(false, Component.interface_906.component_906_409);
        ifSetSize(240, ifGetHeight(Component.interface_906.component_906_425), 0, 0, Component.interface_906.component_906_425);
    } else {
        evalid_ignore();
    }
}
