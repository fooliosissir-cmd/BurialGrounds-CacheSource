/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,champions_onop]

function champions_onop(intArg0: number, intArg1: number, intArg2: number): void {
    if (intArg0 != 1) {
        return;
    }

    if (intArg1 == intArg2) {
        return;
    }
    updatemodel(intArg1);
    varbit_champions_reward_followerstate = intArg1;
    ccDeleteAll(Component.interface_84.component_84_22);
    const [tmpInt0, tmpInt1] = cs2_1674(intArg1);
    discard(tmpInt1);
    discard(tmpInt0);
}
