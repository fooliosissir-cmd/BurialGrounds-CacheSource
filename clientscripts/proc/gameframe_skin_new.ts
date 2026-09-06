/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,gameframe_skin_new]

function gameframe_skin_new(): boolean {
    if (getWindowMode() >= 2 && varbit_option_gameframe_skin != 1) {
        return true;
    }

    return false;
}
