/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,info_reset]

function info_reset(): void {
    ccDeleteAll(Component.interface_1177.component_1177_0);
    ccDeleteAll(Component.interface_746.component_746_46);
    ccDeleteAll(Component.interface_746.component_746_2);
    ifSetOnTimer(noHook(""), Component.interface_1177.component_1177_0);
    ifSetOnTimer(noHook(""), Component.interface_746.component_746_46);
    ifSetOnTimer(noHook(""), Component.interface_746.component_746_2);
    varc_1696 = -1;
}
