/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,firedup_map_info]

function firedup_map_info(intArg0: number): void {
    let int1: number = intArg0;

    let [int2, int3, int4] = cs2_814(intArg0);
    ifSetModel(int4, int3);
    firedup_update_tooltip(intArg0);
    int1 = intArg0 - 1;

    while (int1 > 0) {
        [int2, int3, int4] = cs2_814(int1);
        ifSetModel(int4, int3);
        firedup_update_tooltip(int1);
        if (int2 > 1) {
            int1 = int1 - 1;
        } else {
            int1 = int1 - 1;
            while (int1 > 0) {
                cs2_818(int1);
                int1 = int1 - 1;
            }
        }
    }
    int1 = intArg0 + 1;

    while (int1 <= 14) {
        [int2, int3, int4] = cs2_814(int1);
        ifSetModel(int4, int3);
        firedup_update_tooltip(int1);
        if (int2 > 1) {
            int1 = int1 + 1;
        } else {
            int1 = int1 + 1;
            while (int1 <= 14) {
                cs2_818(int1);
                int1 = int1 + 1;
            }
        }
    }
}
