/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,lobbyscreen_report_abuse_ignore_choose]

function lobbyscreen_report_abuse_ignore_choose(intArg0: number): void {
    proc_lobbyscreen_report_abuse_ignore_close();
    let int1: number = 0;

    if (ifGetHide(enumOp(type_int, type_component, Enum.enum_941, 5)) == 0) {
        int1 = 1;
    }

    if (intArg0 == 1 && stringLength(varcstr_lobbyscreen_report_abuse_name) > 0) {
        if (friendTest(varcstr_lobbyscreen_report_abuse_name) == 1) {
            if (int1 == 0) {
                mesTyped(26, 0, "Sorry, you cannot ignore players in your Friends List.");
            } else {
                mesTyped(26, 0, "Sorry, you cannot ignore players in your Friends List.");
            }
        } else {
            ignoreAddTemp(varcstr_lobbyscreen_report_abuse_name);
            if (int1 == 0) {
                mesTyped(26, 0, "You are ignoring " + varcstr_lobbyscreen_report_abuse_name + " until you log out.");
            } else {
                mesTyped(26, 0, "You are ignoring " + varcstr_lobbyscreen_report_abuse_name + " until you log out.");
            }
        }
    }

    if (varc_lobbyscreen_report_abuse_bug == 1) {
        lobbyscreen_input("", "Open a bug report form?" + "<br>" + "(opens a new window)", 6, "", "");
        varc_lobbyscreen_report_abuse_bug = 0;
    }
}
