/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4799

function cs2_4799(): number {
    let int0: number = 0;
    let int1: number = 0;
    let int2: number = 1;

    while (int2 <= 31) {
        int0 = cs2_4790(int2);
        if (int0 >= 604 && int0 <= 615) {
            int1 = int1 + 1;
        }
        int2 = int2 + 1;
    }
    return int1;
}
