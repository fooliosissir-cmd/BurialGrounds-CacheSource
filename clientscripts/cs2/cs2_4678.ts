/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4678

function cs2_4678(intArg0: component, intArg1: component): void {
    let int2: number = ifGetWidth(intArg1);
    let int3: number = int2 / enumOp(type_int, type_int, Enum.deadly_hunting_fails, varbit_deadly_extra_hunts);
    let int4: number = varbit_deadly_track_fails * int3;

    ifSetSize(int4, ifGetHeight(intArg0), 0, 0, intArg0);
}
