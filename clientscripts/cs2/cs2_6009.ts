/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6009

function cs2_6009(intArg0: number): number {
    if (activeClanSettingsFindAffined() == 1) {
        return cs2_6010(intArg0);
    }
    return 0;
}
