/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,notes_drag_end]

function notes_drag_end(intArg0: component): void {
    ifSetHide(true, Component.interface_34.component_34_10);
    ifSetGraphic(Graphic.notes_add_delete_icons_3, Component.interface_34.component_34_8);
    varc_821 = 0;
    proc_notes_click(0);

    if (intArg0 != -1) {
        ifSetHide(false, Component.interface_34.component_34_44);
    }
}
