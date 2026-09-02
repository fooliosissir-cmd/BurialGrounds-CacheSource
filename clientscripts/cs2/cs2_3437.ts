/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_3437

function cs2_3437(): void {
    let int0: model = -1;

    if (varbit_csi_gather_evid_1 == 0 || (varbit_csi_active_case == 8 && varbit_csi_gather_fing_fakeout == 1 && varbit_csi_gather_evid_5 == 0)) {
        if (varbit_csi_gather_fing_culp < 3) {
            if (varbit_csi_gather_fing_select == 1) {
                int0 = enumOp(type_int, type_model, Enum.csi_get_finger_model_culprit, varbit_csi_gather_fing_culp);
            }
            if (varbit_csi_gather_fing_select == 2) {
                int0 = enumOp(type_int, type_model, Enum.csi_get_finger_model_alt1, varbit_csi_gather_fing_culp);
            }
            if (varbit_csi_gather_fing_select == 3) {
                int0 = enumOp(type_int, type_model, Enum.csi_get_finger_model_alt2, varbit_csi_gather_fing_culp);
            }
        } else if (varbit_csi_gather_fing_culp < 6) {
            if (varbit_csi_gather_fing_select == 1) {
                int0 = enumOp(type_int, type_model, Enum.csi_get_finger_model_alt1, varbit_csi_gather_fing_culp);
            }
            if (varbit_csi_gather_fing_select == 2) {
                int0 = enumOp(type_int, type_model, Enum.csi_get_finger_model_alt2, varbit_csi_gather_fing_culp);
            }
            if (varbit_csi_gather_fing_select == 3) {
                int0 = enumOp(type_int, type_model, Enum.csi_get_finger_model_culprit, varbit_csi_gather_fing_culp);
            }
        } else if (varbit_csi_gather_fing_culp == 10) {
            if (varbit_csi_gather_fing_select == 3) {
                int0 = enumOp(type_int, type_model, Enum.csi_get_finger_model_alt1, varbit_csi_gather_fing_culp);
            }
            if (varbit_csi_gather_fing_select == 2) {
                int0 = enumOp(type_int, type_model, Enum.csi_get_finger_model_alt2, varbit_csi_gather_fing_culp);
            }
            if (varbit_csi_gather_fing_select == 1) {
                int0 = enumOp(type_int, type_model, Enum.csi_get_finger_model_culprit, varbit_csi_gather_fing_culp);
            }
        } else {
            if (varbit_csi_gather_fing_select == 1) {
                int0 = enumOp(type_int, type_model, Enum.csi_get_finger_model_alt2, varbit_csi_gather_fing_culp);
            }
            if (varbit_csi_gather_fing_select == 2) {
                int0 = enumOp(type_int, type_model, Enum.csi_get_finger_model_culprit, varbit_csi_gather_fing_culp);
            }
            if (varbit_csi_gather_fing_select == 3) {
                int0 = enumOp(type_int, type_model, Enum.csi_get_finger_model_alt1, varbit_csi_gather_fing_culp);
            }
        }
        ifSetModel(int0, Component.csi_fingerprint.fingerprint_magnified);
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
    }
}
