/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6299

function cs2_6299(): string {
    let str0: string = "";
    let int0: number = dateRuneday() % 28;
    let int1: number = random(3);
    let str1: string = "Did you know that most monsters can drop bonus spins?";

    if (int0 >= 0 && int0 <= 6) {
        str0 = "Earn a bonus spin this week for redeeming penguin points.";
    } else if (int0 >= 7 && int0 <= 13) {
        str0 = "Earn a bonus spin this week at the Circus.";
    } else if (int0 >= 14 && int0 <= 20) {
        str0 = "Earn a bonus spin this week from an Evil Tree.";
    } else if (int0 >= 21 && int0 <= 27) {
        str0 = "Earn a bonus spin this week from a Shooting Star.";
    }

    if (varbit_wof_earned_dd == 0) {
        str1 = str0;
    } else if (int1 == 0) {
        if (varc_1800 >= 20) {
            str1 = "Once the wheel is slowing down, press the button again to skip to a stop.";
        } else {
            str1 = cs2_790();
        }
    } else if (int1 == 1) {
        if (varc_1800 >= 20) {
            str1 = "Once a prize is selected, press the button again to skip to the next screen.";
        } else {
            str1 = cs2_790();
        }
    } else if (varc_1804 == varbit_loy_month_completed) {
        str1 = "Complete Troll Invasion this month for great rewards and a bonus spin.";
    } else {
        str1 = cs2_790();
    }
    return str1;
}
