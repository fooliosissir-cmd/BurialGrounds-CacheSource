/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5695

function cs2_5695(intArg0: number): void {
    if (ccFind(Component.interface_1218.component_1218_30, intArg0) == 1) {
        if (ccGetGraphic() == 9308) {
            ccSetGraphic(Graphic.aif_skill_select_btn_1_1);
        } else {
            ccSetGraphic(Graphic.aif_skill_select_btn_1_3);
        }
    }
}
