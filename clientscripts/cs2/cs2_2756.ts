/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2756

function cs2_2756(): void {
    if (varbit_3756 == 16 + 1) {
        cs2_736(Component.interface_746.component_746_198, -1, Component.interface_548.component_548_162, -1);
    } else if (varbit_3756 == 18 + 1) {
        cs2_736(Component.interface_746.component_746_201, -1, Component.interface_548.component_548_157, -1);
    } else if (varbit_3756 == 19 + 1) {
        cs2_736(Component.interface_746.component_746_194, -1, Component.interface_548.component_548_155, -1);
    } else if (cs2_1314(varbit_3756 - 1) == 0) {
        cs2_736(Component.interface_746.component_746_32, -1, Component.interface_548.component_548_14, -1);
    } else {
        cs2_736(cs2_1742(varbit_3756 - 1), -1, cs2_121(varbit_3756 - 1), -1);
    }
}
