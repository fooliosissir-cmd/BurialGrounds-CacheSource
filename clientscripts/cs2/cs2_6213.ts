/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6213

function cs2_6213(): void {
    if (varp_2611 == 1) {
        switch (mapLang()) {
            case 0:
                ifSetGraphic(Graphic.graphic_10944, Component.interface_906.component_906_344);
                break;
            case 1:
                ifSetGraphic(Graphic.graphic_10946, Component.interface_906.component_906_344);
                break;
            case 2:
                ifSetGraphic(Graphic.graphic_10945, Component.interface_906.component_906_344);
                break;
            case 3:
                ifSetGraphic(Graphic.graphic_10947, Component.interface_906.component_906_344);
                break;
        }
        ifSetHide(true, Component.interface_906.component_906_346);
        ifSetPosition(ifGetX(Component.interface_906.component_906_352), 130, 0, 0, Component.interface_906.component_906_352);
        ifSetHide(false, Component.interface_906.component_906_351);
        ifSetText("", Component.interface_906.component_906_351);
        ifSetText(" - Over 150 extra Quests" + "<br>" + " - 9 Exclusive Skills" + "<br>" + " - Over 40 Minigames" + "<br>" + " - Join the Members Loyalty Programme" + "<br>" + " - Extra Spins on the Squeal of Fortune" + "<br>" + " - Unlock over 400 extra bank spaces" + "<br>" + " - And much more!" + "<br>" + "<br>" + "You'll also get some extra rewards for validating," + "<br>" + "including a title, cape and bank space!", Component.interface_906.component_906_353);
        ifSetPosition(ifGetX(Component.interface_906.component_906_353), 181, 0, 0, Component.interface_906.component_906_353);
        ifSetText("Congratulations! You're eligible for a 14 day Free Members trial! Start your trial now by validating your email and you'll soon be enjoying the full benefits of membership, including:", Component.interface_906.component_906_352);
        ifSetSize(300, ifGetHeight(Component.interface_906.component_906_346), 0, 0, Component.interface_906.component_906_346);
        ifSetOnVarTransmit(noHook(""), Component.interface_906.component_906_338);
        ifSetHide(true, Component.interface_906.component_906_377);
    }
}
