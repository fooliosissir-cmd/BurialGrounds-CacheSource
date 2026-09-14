/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6059

function cs2_6059(): void {
    if (boostAdvertExists("1066") == 1 && boostAdvertAvailable("1066") == 1) {
        boostAdvertLaunch("1066");
    }
}
