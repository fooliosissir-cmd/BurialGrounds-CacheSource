/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6059

function cs2_6059(): void {
    if (browserIsPageOpen("1066") == 1 && browserHasPlugin("1066") == 1) {
        browserSetPage("1066");
    }
}
