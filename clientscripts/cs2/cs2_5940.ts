/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5940

function cs2_5940(): void {
    varc_1411 = 1;
    varcstr_evalid_input_1 = "";
    varcstr_evalid_input_2 = "";
    varc_1919 = 0;
    ifSetHide(true, Component.interface_906.component_906_31);
    ifSetHide(false, Component.interface_906.component_906_34);

    switch (mapLang()) {
        case 0:
            ifSetGraphic(Graphic.graphic_10940, Component.interface_906.component_906_344);
            ifSetGraphic(Graphic.graphic_10795, Component.interface_906.component_906_376);
            break;
        case 1:
            ifSetGraphic(Graphic.graphic_10942, Component.interface_906.component_906_344);
            ifSetGraphic(Graphic.graphic_10797, Component.interface_906.component_906_376);
            break;
        case 2:
            ifSetGraphic(Graphic.graphic_10941, Component.interface_906.component_906_344);
            ifSetGraphic(Graphic.graphic_10796, Component.interface_906.component_906_376);
            break;
        case 3:
            ifSetGraphic(Graphic.graphic_10943, Component.interface_906.component_906_344);
            ifSetGraphic(Graphic.graphic_10798, Component.interface_906.component_906_376);
            break;
    }
    ifSetText("Validate your email now for increased account security and these great rewards:", Component.interface_906.component_906_352);
    ifSetSize(240, ifGetHeight(Component.interface_906.component_906_346), 0, 0, Component.interface_906.component_906_346);
    ifSetOnVarTransmit(hook(cs2_6213, "Y", [], [2611]), Component.interface_906.component_906_338);
}
