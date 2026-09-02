/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6298

function cs2_6298(): string {
    let int0: number = cs2_6304();
    let int1: number = random(int0);
    let int2: number = 0;
    let int3: number = 0;

    while (int3 <= int1) {
        if (stringLength(cs2_6302(int2)) > 0) {
            if (int3 == int1) {
                return cs2_6302(int2);
            }
            int3 = int3 + 1;
        }
        int2 = int2 + 1;
    }
    return "When the \u201cearn free spin\u201d button appears on your claim screen, spare a moment to watch a short video ad for a free spin!";
}
