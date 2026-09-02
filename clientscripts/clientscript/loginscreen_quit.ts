/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,loginscreen_quit]

function loginscreen_quit(): void {
    if (ifGetHide(Component.interface_744.component_744_48) == 0 || ifGetHide(Component.interface_744.component_744_49) == 0) {
        cs2_2206();
    } else {
        quit();
    }
}
