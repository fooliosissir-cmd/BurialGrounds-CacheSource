/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2176

function cs2_2176(intArg0: number): void {
    let str0: string = "";

    switch (intArg0) {
        case 12451846:
        case 12451843:
            if (varc_692 == 1) {
                str0 = "Click to hide the quests you cannot start." + "<br>" + "<br>" + "Some recommended stats and abilities (such as combat levels) are left for you to decide.";
            } else {
                str0 = "Click to show all quests regardless of requirements.";
            }
            break;
        case 12451850:
        case 12451847:
            if (varc_692 == 1) {
                str0 = "Click to hide the quests you have completed.";
            } else {
                str0 = "Click to show all quests regardless of completion status.";
            }
            break;
    }
    cs2_569(Component.interface_190.component_190_22, -1, Component.interface_190.component_190_23, str0, 25, 450);
}
