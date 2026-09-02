/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_117

function cs2_117(): void {
    if (varbit_3756 < 1 || varbit_3756 > 20) {
        ifSetOnTimer(noHook(""), Component.interface_746.component_746_57);
        ifSetOnTimer(noHook(""), Component.interface_548.component_548_111);
        cs2_736(-1, -1, -1, -1);
        proc_subchanged();
        return;
    }
    cs2_2756();
}
