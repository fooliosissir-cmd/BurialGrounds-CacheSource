/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5146

function cs2_5146(intArg0: number): number {
    if (activeClanSettingsFindAffined() == 1) {
        return cs2_5147(intArg0);
    }
    return 0;
}
