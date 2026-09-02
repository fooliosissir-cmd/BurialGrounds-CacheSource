/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5367

function cs2_5367(intArg0: number, intArg1: number): void {
    if (ccFind(Component.agidad_overlay.foreground, intArg0) == 1) {
        switch (intArg1) {
            case 0:
                ccSetHide(true);
                ccSetOnTimer(noHook(""));
                break;
            case 1:
                ccSetHide(false);
                ccSetOnTimer(hook(cs2_5368, "i", [event_comsubid]));
                break;
            case 2:
                ccSetHide(false);
                ccSetOnTimer(noHook(""));
                ccSetTrans(0);
                break;
        }
    }
}
