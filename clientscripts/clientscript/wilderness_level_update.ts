/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,wilderness_level_update]

function wilderness_level_update(intArg0: component): void {
    let int1: number = 0;

    if (inzone(coord(2944, 3520, 0), coord(3397, 4351, 3), coord()) == 1 || inzone(coord(2880, 3904, 0), coord(2943, 3967, 3), coord()) == 1) {
        int1 = (coordZ(coord()) - 3520) / 8 + 1;
    } else if (inzone(coord(2944, 9920, 0), coord(3391, 10879, 3), coord()) == 1) {
        int1 = (coordZ(coord()) - 9920) / 8 + 1;
    } else {
        ifSetText("", intArg0);
        return;
    }
    int1 = max(min(int1, 99), 0);
    ifSetText("Level: " + tostring(int1), intArg0);
}
