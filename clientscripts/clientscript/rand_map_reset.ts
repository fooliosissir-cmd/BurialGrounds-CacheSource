/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,rand_map_reset]

function rand_map_reset(): void {
    varc_1149 = 0;
    varc_1150 = 0;
    varc_1151 = 0;
    varc_1152 = 0;
    ccDeleteAll(Component.interface_942.component_942_3);
    ccDeleteAll(Component.interface_942.component_942_5);
    ccDeleteAll(Component.interface_942.component_942_4);
}
