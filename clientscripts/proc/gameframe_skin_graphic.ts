/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,gameframe_skin_graphic]

function gameframe_skin_graphic(intArg0: graphic): graphic {
    if (varbit_option_gameframe_skin != 1) {
        return intArg0;
    }

    return gameframe_skin_graphic_2011(intArg0);
}
