/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,evalid_check_email]

function evalid_check_email(): void {
    varc_1919 = 0;

    switch (mapLang()) {
        case 0:
            ifSetGraphic(Graphic.graphic_10940, Component.interface_906.component_906_388);
            break;
        case 1:
            ifSetGraphic(Graphic.graphic_10942, Component.interface_906.component_906_388);
            break;
        case 2:
            ifSetGraphic(Graphic.graphic_10941, Component.interface_906.component_906_388);
            break;
        case 3:
            ifSetGraphic(Graphic.graphic_10943, Component.interface_906.component_906_388);
            break;
    }
    ifSetHide(false, Component.interface_906.component_906_34);
    ifSetHide(true, Component.interface_906.component_906_338);
    ifSetHide(true, Component.interface_906.component_906_409);
    ifSetHide(false, Component.interface_906.component_906_382);
    ifSetHide(true, Component.interface_906.component_906_31);
    ifSetText("By validating your email you'll receive these great rewards:", Component.interface_906.component_906_396);
    ifSetSize(240, ifGetHeight(Component.interface_906.component_906_390), 0, 0, Component.interface_906.component_906_425);
    ifSetOnVarTransmit(hook(cs2_6214, "Y", [], [2611]), Component.interface_906.component_906_382);
}
