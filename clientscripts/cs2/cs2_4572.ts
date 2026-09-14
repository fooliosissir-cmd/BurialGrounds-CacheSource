/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4572

function cs2_4572(intArg0: number, intArg1: component): void {
    if (clanGetChatCount() <= 0) {
        ifSetText("", Component.interface_589.component_589_27);
        ifSetHide(true, intArg1);
        return;
    }

    if ((clientClock() - intArg0) % 40 < 20 && appletHasFocus() == 1) {
        ifSetHide(false, intArg1);
    } else {
        ifSetHide(true, intArg1);
    }
}
