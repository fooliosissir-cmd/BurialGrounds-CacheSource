/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_863

function cs2_863(): void {
    if (varbit_csi_gather_evid_1 == 1 && varbit_csi_gather_fing_fakeout == 0) {
        ifSetModel(enumOp(type_int, type_model, Enum.csi_get_finger_model_culprit, varbit_csi_gather_fing_culp), Component.csi_fingerprint.fingerprint_magnified);
        ifSetHide(true, Component.csi_fingerprint.confirm_layer);
        if (varbit_csi_gather_fing_select != 0) {
            ifSetHide(false, Component.csi_fingerprint.selected);
        }
        if (varbit_csi_gather_fing_select == 1) {
            ifSetPosition(30, 205, 0, 0, Component.csi_fingerprint.selected);
        } else if (varbit_csi_gather_fing_select == 2) {
            ifSetPosition(112, 205, 0, 0, Component.csi_fingerprint.selected);
        } else if (varbit_csi_gather_fing_select == 3) {
            ifSetPosition(196, 205, 0, 0, Component.csi_fingerprint.selected);
        } else {
            ifSetHide(true, Component.csi_fingerprint.selected);
        }
    } else {
        ifSetModel(-1, Component.csi_fingerprint.fingerprint_magnified);
    }
}
