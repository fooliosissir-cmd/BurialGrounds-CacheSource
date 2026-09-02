/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2126

function cs2_2126(intArg0: component, intArg1: component, intArg2: component, intArg3: component, intArg4: component, intArg5: component, intArg6: component, intArg7: component): void {
    varc_681 = (varc_681 + random(4) + 2) % 2048;
    varc_684 = (varc_684 + random(4) + 2) % 2048;
    varc_687 = (varc_687 + random(4) + 2) % 2048;
    varc_690 = (varc_690 + random(4) + 2) % 2048;

    if (varc_680 < 20 && (varc_680 < -20 || random(2) == 0)) {
        varc_680 = min(varc_680 + random(3) + 1, 25);
    } else {
        varc_680 = max(varc_680 - (random(3) + 1), -25);
    }

    if (varc_683 < 20 && (varc_683 < -20 || random(2) == 0)) {
        varc_683 = min(varc_683 + random(3) + 1, 25);
    } else {
        varc_683 = max(varc_683 - (random(3) + 1), -25);
    }

    if (varc_686 < 20 && (varc_686 < -20 || random(2) == 0)) {
        varc_686 = min(varc_686 + random(3) + 1, 25);
    } else {
        varc_686 = max(varc_686 - (random(3) + 1), -25);
    }

    if (varc_689 < 20 && (varc_689 < -20 || random(2) == 0)) {
        varc_689 = min(varc_689 + random(3) + 1, 25);
    } else {
        varc_689 = max(varc_689 - (random(3) + 1), -25);
    }
    cs2_2127(intArg0, intArg1, intArg2, intArg3, intArg4, intArg5, intArg6, intArg7);
}
