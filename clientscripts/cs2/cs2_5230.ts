/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5230

function cs2_5230(intArg0: number, intArg1: component, intArg2: component): void {
    if (activeClanSettingsFindListened() == 1) {
        cs2_4340(intArg0, pushVarClanSetting(), intArg1, intArg2);
        ifSetOnClanSettingsTransmit(noHook(""), intArg2);
    }
}
