/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,assist_tooltip]

function assist_tooltip(intArg0: component): void {
    let str0: string = "null";

    if (intArg0 == Component.interface_301.component_301_11) {
        str0 = "This is the total XP you have gained through the Assist System in the past 24 hours. There is a limit to the XP you can gain within 24 hours, but this amount gets reset once the day has passed.";
        cs2_39(intArg0, Component.interface_301.component_301_85, str0, 25, 180);
        return;
    }
    let [int1, str1] = cs2_530(intArg0);

    if (int1 == 1) {
        str0 = "Assist with " + str1 + " while using the Assist System (ON).";
    } else {
        str0 = "Assist with " + str1 + " while using the Assist System (OFF).";
    }
    cs2_39(intArg0, Component.interface_301.component_301_85, str0, 25, 180);
    varc_tooltip_built = 0;
}
