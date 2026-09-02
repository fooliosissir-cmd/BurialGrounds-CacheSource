/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,fremsaga_bilrach_mind_toggle_help]

function fremsaga_bilrach_mind_toggle_help(): void {
    if (ifGetHide(Component.interface_1270.component_1270_71) == 1) {
        ifSetHide(false, Component.interface_1270.component_1270_71);
    } else {
        ifSetHide(true, Component.interface_1270.component_1270_71);
    }
}
