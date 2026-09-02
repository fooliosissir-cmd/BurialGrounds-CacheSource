/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2268

function cs2_2268(intArg0: component): void {
    if (varp_option_mouse == 0) {
        ifSetText("Right-click the object to see more options.", intArg0);
    } else {
        ifSetText("Click the object to see more options.", intArg0);
    }
}
