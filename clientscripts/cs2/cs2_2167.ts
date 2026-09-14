/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2167

function cs2_2167(): void {
    if (compare(subString(chatPlayerName(), 0, 1), "#") == 0) {
        return;
    }

    if (varp_2522 == 2) {
        ifSetHide(true, Component.interface_906.component_906_36);
        ifSetOnTimer(noHook(""), Component.interface_906.component_906_466);
        ifSetHide(false, Component.interface_906.component_906_37);
        ifSendtofront(Component.interface_906.component_906_37);
    }
}
