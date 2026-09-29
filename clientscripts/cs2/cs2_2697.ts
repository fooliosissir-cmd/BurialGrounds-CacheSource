/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2697

function cs2_2697(intArg0: number, intArg1: number): void {
    if (intArg0 == detailGetToolkit()) {
        return;
    }
    detailToolkit(intArg0);
    let int2: number = detailGetToolkit();
    cs2_2593(int2);

    if (intArg0 != int2) {
        detailToolkitDefault(int2, 1);
        graphics_options_message(intArg1, 1, "Burial Grounds could not switch to that display mode. Your previous display mode has been restored.", "", "");
        cs2_3387(int2, getWindowMode(), ...graphics_options_reviewoptions(int2), intArg1);
    }
    cs2_3387(int2, getWindowMode(), ...graphics_options_reviewoptions(int2), intArg1);

    if (int2 == 1 || int2 == 3) {
        cs2_2700(1, intArg1, false, true);
    } else {
        detailToolkitDefault(int2, 0);
    }
}
