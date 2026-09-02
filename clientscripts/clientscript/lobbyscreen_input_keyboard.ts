/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,lobbyscreen_input_keyboard]

function lobbyscreen_input_keyboard(intArg0: number, intArg1: number, intArg2: component, intArg3: number, intArg4: number, strArg0: string): void {
    switch (intArg0) {
        case 84:
            proc_lobbyscreen_input_ok(intArg4, strArg0);
            return;
        case 13:
            proc_lobbyscreen_input_close();
            return;
        case 96:
        case 97:
        case 98:
        case 99:
        case 102:
        case 103:
            if (intArg4 != -1 && intArg4 != 6) {
                varc_1097 = cs2_1553(intArg0, varc_1097, varcstr_lobbyscreen_input);
                cs2_1875(Component.interface_906.component_906_166, Component.interface_906.component_906_167, varcstr_lobbyscreen_input);
            }
            return;
        case -1:
        case 85:
        case 101:
            if (intArg4 != -1 && intArg4 != 6 && (charIsprintable(intArg1) == 1 || intArg0 == 85 || intArg0 == 101)) {
                [varcstr_lobbyscreen_input, varc_1097] = cs2_802(varc_1097, varcstr_lobbyscreen_input, intArg3, intArg0, intArg1);
                ifSetText(escape(varcstr_lobbyscreen_input), intArg2);
                cs2_1875(Component.interface_906.component_906_166, Component.interface_906.component_906_167, varcstr_lobbyscreen_input);
            }
            return;
    }
}
