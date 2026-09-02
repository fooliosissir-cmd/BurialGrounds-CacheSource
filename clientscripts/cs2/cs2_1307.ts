/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1307

function cs2_1307(intArg0: component): void {
    if (varbit_csi_gather_evid_1 == 0 || (varbit_csi_active_case == 8 && varbit_csi_gather_fing_fakeout == 1 && varbit_csi_gather_evid_5 == 0)) {
        ifSetModel(ifGetModel(intArg0), Component.csi_fingerprint.fingerprint_magnified);
    }
}
