/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,lobbyscreen_pane_clanchat_keyboard]

function lobbyscreen_pane_clanchat_keyboard(intArg0: number, intArg1: number): void {
    if (userDetailQuickChat() == 1 || lobbyscreen_report_abuse_open() == 1) {
        return;
    }

    switch (intArg0) {
        case 84:
            if (activeClanChannelFindAffined() == 1) {
                if (stringLength(varcstr_lobbyscreen_input_clan) > 0) {
                    chatSetMode(2);
                    chatSendpublic(varcstr_lobbyscreen_input_clan);
                }
            } else {
                mesTyped(43, 0, "You are not in a Clan.");
            }
            varcstr_lobbyscreen_input_clan = "";
            ifSetText(escape(varcstr_lobbyscreen_input_clan), Component.interface_912.component_912_24);
            varc_lobby_caret_clan = stringLength(varcstr_lobbyscreen_input_clan);
            cs2_1390(Component.interface_912.component_912_24, Component.interface_912.component_912_25, varcstr_lobbyscreen_input_clan);
            break;
        case 96:
        case 97:
        case 98:
        case 99:
        case 102:
        case 103:
            varc_lobby_caret_clan = cs2_1553(intArg0, varc_lobby_caret_clan, varcstr_lobbyscreen_input_clan);
            cs2_1390(Component.interface_912.component_912_24, Component.interface_912.component_912_25, varcstr_lobbyscreen_input_clan);
            break;
        case -1:
        case 85:
        case 101:
            if (charIsprintable(intArg1) == 1 || intArg0 == 85 || intArg0 == 101) {
                [varcstr_lobbyscreen_input_clan, varc_lobby_caret_clan] = cs2_802(varc_lobby_caret_clan, varcstr_lobbyscreen_input_clan, 0, intArg0, intArg1);
                ifSetText(escape(varcstr_lobbyscreen_input_clan), Component.interface_912.component_912_24);
                cs2_1390(Component.interface_912.component_912_24, Component.interface_912.component_912_25, varcstr_lobbyscreen_input_clan);
            }
            break;
    }
}
