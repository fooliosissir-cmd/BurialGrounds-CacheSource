/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5696

function cs2_5696(intArg0: number): void {
    if (ccFind(Component.interface_1218.component_1218_30, intArg0) == 1) {
        ccSetColour(colour(0xFFFFFF));
        if (ccGetGraphic() == 9309) {
            ccSetGraphic(Graphic.aif_skill_select_btn_1_0);
        } else {
            ccSetGraphic(Graphic.aif_skill_select_btn_1_2);
        }
    }
    ifSetHide(true, Component.interface_1218.component_1218_80);
}
