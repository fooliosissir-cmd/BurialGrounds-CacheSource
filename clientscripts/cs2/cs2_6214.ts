/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6214

function cs2_6214(): void {
    if (varp_2611 == 1) {
        switch (mapLang()) {
            case 0:
                ifSetGraphic(Graphic.graphic_10948, Component.interface_906.component_906_388);
                break;
            case 1:
                ifSetGraphic(Graphic.graphic_10950, Component.interface_906.component_906_388);
                break;
            case 2:
                ifSetGraphic(Graphic.graphic_10949, Component.interface_906.component_906_388);
                break;
            case 3:
                ifSetGraphic(Graphic.graphic_10951, Component.interface_906.component_906_388);
                break;
        }
        ifSetPosition(ifGetX(Component.interface_906.component_906_395), 130, 0, 0, Component.interface_906.component_906_395);
        ifSetPosition(ifGetX(Component.interface_906.component_906_398), 345, 0, 0, Component.interface_906.component_906_398);
        ifSetPosition(ifGetX(Component.interface_906.component_906_396), 185, 0, 0, Component.interface_906.component_906_396);
        ifSetPosition(ifGetX(Component.interface_906.component_906_397), 232, 0, 0, Component.interface_906.component_906_397);
        ifSetPosition(ifGetX(Component.interface_906.component_906_403), 302, 0, 0, Component.interface_906.component_906_403);
        ifSetPosition(ifGetX(Component.interface_906.component_906_390), 372, 0, 0, Component.interface_906.component_906_390);
        ifSetText("An email from noreply@email.runescape.com has been sent to your inbox.", Component.interface_906.component_906_395);
        ifSetText("In addition to all the members' benefits, you'll also receive these great rewards so hurry and check your inbox!", Component.interface_906.component_906_396);
        ifSetHide(true, Component.interface_906.component_906_404);
        ifSetSize(300, ifGetHeight(Component.interface_906.component_906_390), 0, 0, Component.interface_906.component_906_390);
        ifSetOnVarTransmit(noHook(""), Component.interface_906.component_906_382);
    }
}
