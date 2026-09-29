/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,graphics_options_setwindowmode]

function graphics_options_setwindowmode(intArg0: number, intArg1: number, intArg2: number, intArg3: number, intArg4: number): void {
    if (intArg0 == getWindowMode()) {
        return;
    }
    let int5: number = -1;

    if (intArg0 != 3) {
        setWindowMode(intArg0);
        int5 = getWindowMode();
        setDefaultWindowMode(int5);
        if (intArg0 != int5) {
            graphics_options_message(intArg4, 0, "Burial Grounds could not switch to that display mode. Your previous display mode has been restored.", "", "");
            proc_graphics_options_rebuild(intArg3, int5, intArg1, intArg2, intArg4);
            return;
        }
        proc_graphics_options_rebuild(intArg3, int5, intArg1, intArg2, intArg4);
        if (intArg0 >= 2 && int5 >= 2) {
            varc_994 = 2;
        }
        return;
    }

    if (fullScreenModeCount() > varc_178) {
        if (fullScreenEnter(...fullScreenGetMode(varc_178)) == 1) {
            proc_graphics_options_rebuild(intArg3, intArg0, intArg1, intArg2, intArg4);
            cs2_2700(2, intArg4, false, false);
            return;
        }
    }
    intArg0 = getDefaultWindowMode();
    setWindowMode(intArg0);

    if (intArg4 == 1) {
        mes("Unable to enter fullscreen mode at that resolution.");
    }
    proc_graphics_options_rebuild(intArg3, intArg0, intArg1, intArg2, intArg4);
}
