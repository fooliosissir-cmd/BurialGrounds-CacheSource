/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4405

function cs2_4405(): number {
    let int0: number = ccGetY<1>();
    let int1: component = ccGetLayer<1>();

    while (int1 != -1) {
        int0 = int0 + ifGetY(int1) - ifGetScrollY(int1);
        int1 = ifGetLayer(int1);
    }
    return int0;
}
