/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,lobbyscreen_input_close]

function proc_lobbyscreen_input_close(): void {
    lobbyscreen_input_clear();
    ifSetHide(true, Component.interface_906.component_906_56);

    if (ifGetHide(enumOp(type_int, type_component, Enum.enum_941, 5)) == 0) {
        cs2_3161(1);
    } else if (ifGetHide(enumOp(type_int, type_component, Enum.enum_941, 3)) == 0) {
        cs2_4556(1);
    }
}
