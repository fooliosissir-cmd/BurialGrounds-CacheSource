/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6266

function cs2_6266(): void {
    let int0: number = 0;
    let int1: component = -1;
    let int2: graphic = -1;
    let int3: number = 200;

    while ((int1 != -1 || int0 == 0) && int0 < int3) {
        int1 = cs2_6268(int0);
        if (int1 != -1) {
            int2 = ifGetGraphic(int1);
            int2 = cs2_6267(int2);
            ifSetGraphic(int2, int1);
        }
        int0 = int0 + 1;
    }
}
