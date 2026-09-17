/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,tli_optext_host]

function tli_optext_host(): [component, component] {
    if (getWindowMode() < 2) {
        return [Component.interface_548.tooltip, Component.interface_548.tooltip_layer];
    }
    return [Component.interface_746.component_746_215, Component.interface_746.component_746_52];
}
