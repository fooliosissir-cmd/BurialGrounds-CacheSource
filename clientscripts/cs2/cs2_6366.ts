/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6366

function cs2_6366(): number {
    let int0: number = 0;

    while (int0 < 8) {
        if (cs2_6352(cs2_6362(int0)) == 0) {
            int0 = int0 + 1;
        } else {
            return 1;
        }
    }
    return 0;
}
