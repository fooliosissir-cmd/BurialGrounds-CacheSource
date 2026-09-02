/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,assist_skill_update]

function assist_skill_update(intArg0: component, intArg1: stat): void {
    let int2: number = statVisibleXp(intArg1);
    let int3: number = statVisibleXp(intArg1);

    int2 = enum_var(intArg1);
    let int4: number = int3 - int2;
    ifSetText(tostring(int4), intArg0);
}
