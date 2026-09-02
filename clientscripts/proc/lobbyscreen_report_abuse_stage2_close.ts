/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,lobbyscreen_report_abuse_stage2_close]

function proc_lobbyscreen_report_abuse_stage2_close(): void {
    ifCloseSubClient(59375703);
    ifSetHide(true, Component.interface_906.component_906_70);
    ifSetOnKey(noHook(""), Component.interface_915.component_915_18);
    varc_lobbyscreen_report_abuse_bug = 0;

    if (ifGetHide(enumOp(type_int, type_component, Enum.enum_941, 5)) == 0) {
        cs2_3161(1);
    }
}
