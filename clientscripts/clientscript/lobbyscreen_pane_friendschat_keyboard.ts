/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,lobbyscreen_pane_friendschat_keyboard]

function lobbyscreen_pane_friendschat_keyboard(intArg0: number, intArg1: number): void {
    if (fcGetChatCount() <= 0 || userDetailQuickChat() == 1 || lobbyscreen_report_abuse_open() == 1) {
        return;
    }

    switch (intArg0) {
        case 84:
            if (fcGetChatCount() > 0) {
                if (stringLength(varcstr_lobbyscreen_input_friendschat) > 0) {
                    chatSetMode(1);
                    chatSendpublic(varcstr_lobbyscreen_input_friendschat);
                }
            } else {
                mesTyped(11, 0, "You are not in a Friends Chat Channel.");
            }
            varcstr_lobbyscreen_input_friendschat = "";
            ifSetText(escape(varcstr_lobbyscreen_input_friendschat), Component.interface_589.component_589_27);
            varc_lobby_caret_friendschat = stringLength(varcstr_lobbyscreen_input_friendschat);
            cs2_4571(Component.interface_589.component_589_27, Component.interface_589.component_589_28, varcstr_lobbyscreen_input_friendschat);
            break;
        case 96:
        case 97:
        case 98:
        case 99:
        case 102:
        case 103:
            varc_lobby_caret_friendschat = cs2_1553(intArg0, varc_lobby_caret_friendschat, varcstr_lobbyscreen_input_friendschat);
            cs2_4571(Component.interface_589.component_589_27, Component.interface_589.component_589_28, varcstr_lobbyscreen_input_friendschat);
            break;
        case -1:
        case 85:
        case 101:
            if (charIsprintable(intArg1) == 1 || intArg0 == 85 || intArg0 == 101) {
                [varcstr_lobbyscreen_input_friendschat, varc_lobby_caret_friendschat] = cs2_802(varc_lobby_caret_friendschat, varcstr_lobbyscreen_input_friendschat, 0, intArg0, intArg1);
                ifSetText(escape(varcstr_lobbyscreen_input_friendschat), Component.interface_589.component_589_27);
                cs2_4571(Component.interface_589.component_589_27, Component.interface_589.component_589_28, varcstr_lobbyscreen_input_friendschat);
            }
            break;
    }
}
