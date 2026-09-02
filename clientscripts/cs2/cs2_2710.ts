/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2710

function cs2_2710(intArg0: component, intArg1: component, intArg2: component, intArg3: component, intArg4: component, intArg5: component): void {
    ifSetTrans(0, intArg2);
    ifSetOnTimer(noHook(""), intArg2);
    ifSetHide(false, intArg2);
    ifSetOnTimer(noHook(""), intArg0);
    ifSetOnCamFinished(noHook(""), intArg0);
    ifSetHide(true, intArg0);
    detailRemoveroofsOptionOverride(1);
    ifSetOnTimer(noHook(""), intArg1);
    ifSetColour(colour(0x000000), intArg1);
    ifSetTrans(0, intArg1);
    ifSetHide(false, intArg1);

    if (varc_994 == 1) {
        varc_986 = 1;
    } else if (varc_994 != 2) {
        if (profileCpu() > 400) {
            varc_994 = 1;
            varc_986 = 1;
            if (getWindowMode() > 1) {
                setWindowMode(1);
            }
            if (getDefaultWindowMode() > 1) {
                setDefaultWindowMode(1);
            }
        } else {
            varc_994 = 2;
        }
    }
    ifSetOnClick(hook(cs2_2713, "IIIIII", [intArg0, intArg1, intArg2, intArg3, intArg4, intArg5]), intArg3);
    ifSetOnMouseOver(hook(cs2_2961, "II1", [intArg4, intArg5, true]), intArg3);
    hookMouseExit(hook(cs2_2961, "II1", [intArg4, intArg5, false]), intArg3);
    varc_986 = 1;

    if (varc_986 == 1) {
        ifSetGraphic(Graphic.graphic_2700, intArg4);
        return;
    }
    let [int6, int7] = cs2_1239(0);
    camMoveto(int6, 1000, 100, 100);
    camLookat(int6, 0, 100, 100);
    ifSetGraphic(Graphic.graphic_2703, intArg4);
    varc_177 = clientClock() + 30 + 30;
    ifSetOnTimer(hook(cs2_2712, "III", [intArg0, intArg2, intArg1]), intArg2);
}
