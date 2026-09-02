/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_182

function cs2_182(intArg0: number): void {
    let int1: number = cs2_179(intArg0);
    let int2: number = 0;

    if (int1 % 25 == 0) {
        cs2_178();
        int2 = int1 / 25;
        if (int2 <= 1) {
            ifSetOnTimer(noHook(""), enumOp(type_int, type_component, Enum.enum_683, intArg0));
        } else {
            cs2_183(intArg0, int1 - 1);
        }
    } else {
        cs2_183(intArg0, int1 - 1);
    }
}
