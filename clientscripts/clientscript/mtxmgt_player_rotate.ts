/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,mtxmgt_player_rotate]

function mtxmgt_player_rotate(intArg0: component, intArg1: number, intArg2: number, intArg3: number): void {
    if (ifGetGraphic(Component.interface_1311.component_1311_0) == gameframe_skin_graphic(Graphic.aif_worn_bnt_2_1)) {
        return;
    }
    let int4: number = 0;
    let int5: number = 0;
    intArg2 = intArg2 - ifGetWidth(intArg0) / 2;

    if (ccFind(intArg0, intArg1) == 1) {
        if (intArg2 > 0) {
            int5 = cs2_686(ccGetModelAngleY() - 10, 2048);
        } else if (intArg2 < 0) {
            int5 = (ccGetModelAngleY() + 10) % 2048;
        }
        if (intArg3 == 1) {
            if (int5 > 1024) {
                int5 = max(int5, 1572);
            } else {
                int5 = min(int5, 512);
            }
        }
        ccSetModelAngle(ccGetmodelxof(), ccGetmodelyof(), ccGetModelAngleX(), int5, ccGetModelAngleZ(), ccGetModelZoom());
    }
}
