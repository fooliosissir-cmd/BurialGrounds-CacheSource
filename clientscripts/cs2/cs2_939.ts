/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_939

function cs2_939(): void {
    let int0: number = 0;
    let int1: obj = -1;

    while (int0 < invSize(90)) {
        if (ccFind(Component.interface_335.component_335_34, int0) == 1) {
            int1 = invotherGetobj(90, int0);
            cs2_812(int1);
        }
        int0 = int0 + 1;
    }
}
