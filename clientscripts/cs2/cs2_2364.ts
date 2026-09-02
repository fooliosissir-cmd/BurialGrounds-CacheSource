/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2364

function cs2_2364(intArg0: number): void {
    let int1: number = 1;
    let int2: number = 0;
    let int3: component = -1;
    let int4: number = -1;

    while (int1 < 9) {
        int3 = enumOp(type_int, type_component, Enum.vkq3_puzz1_anchors, int1);
        if (ifFind(int3) == 1) {
            int2 = ccParam(Param.vkq3_linker);
            int4 = enumOp(type_int, type_component, Enum.vkq3_puzz1_pieces, int2);
            if (intArg0 == int4) {
                cs2_2365(int3);
                return;
            }
        }
        int1 = int1 + 1;
    }
}
