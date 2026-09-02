/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,sc_remaining_clay_help]

function sc_remaining_clay_help(): void {
    if (ifGetHide(Component.interface_806.component_806_122) == 1) {
        ifSetHide(false, Component.interface_806.component_806_122);
    } else {
        ifSetHide(true, Component.interface_806.component_806_122);
    }
}
