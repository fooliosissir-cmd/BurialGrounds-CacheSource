/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5144

function cs2_5144(intArg0: number): number {
    if (activeClanSettingsFindAffined() == 1) {
        return cs2_5145(intArg0);
    }
    return 0;
}
