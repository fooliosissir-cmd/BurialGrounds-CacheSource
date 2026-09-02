/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,topstat_prayer_custom]

function topstat_prayer_custom(intArg0: component): void {
    if (varc_181 == 1) {
        if (varbit_prayer_mode == 1) {
            ifSetOp(2, "Finish quick curse selection", intArg0);
            ifSetText("Select your quick curses:", Component.interface_271.component_271_46);
        } else {
            ifSetOp(2, "Finish quick prayer selection", intArg0);
            ifSetText("Select your quick prayers:", Component.interface_271.component_271_46);
        }
    } else if (varbit_prayer_mode == 1) {
        ifSetOp(2, "Select quick curses", intArg0);
    } else {
        ifSetOp(2, "Select quick prayers", intArg0);
    }
    cs2_817(5);
    proc_topstat_prayer_button_update();
}
