/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,lobbyscreen_report_abuse_stage1_keyboard]

function lobbyscreen_report_abuse_stage1_keyboard(intArg0: number, intArg1: number, intArg2: component): void {
    switch (intArg0) {
        case 84:
            proc_lobbyscreen_report_abuse_stage1_next();
            return;
        case 13:
            proc_lobbyscreen_report_abuse_stage1_close();
            return;
        case 96:
        case 97:
        case 98:
        case 99:
        case 102:
        case 103:
            varc_1097 = cs2_1553(intArg0, varc_1097, varcstr_lobbyscreen_input);
            cs2_1879(Component.interface_914.component_914_27, Component.interface_914.component_914_28, varcstr_lobbyscreen_input);
            return;
        case -1:
        case 85:
        case 101:
            if (charIsprintable(intArg1) == 1 || intArg0 == 85 || intArg0 == 101) {
                if (intArg0 == -1 && stringLength(removetags(appendChar("", intArg1))) == 0) {
                    return;
                }
                [varcstr_lobbyscreen_input, varc_1097] = cs2_802(varc_1097, varcstr_lobbyscreen_input, 2, intArg0, intArg1);
                ifSetText(varcstr_lobbyscreen_input, intArg2);
                cs2_1879(Component.interface_914.component_914_27, Component.interface_914.component_914_28, varcstr_lobbyscreen_input);
            }
            break;
    }
}
