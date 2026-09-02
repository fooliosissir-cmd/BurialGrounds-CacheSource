/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_439

function cs2_439(intArg0: component): void {
    switch (varbit_conq_max_turn_time_selection) {
        case 0:
            ifSetText("0:30", intArg0);
            break;
        case 1:
            ifSetText("1:00", intArg0);
            break;
        case 2:
            ifSetText("1:30", intArg0);
            break;
        case 3:
            ifSetText("2:00", intArg0);
            break;
        case 4:
            ifSetText("2:30", intArg0);
            break;
        case 5:
            ifSetText("3:00", intArg0);
            break;
    }
}
