/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2112

function cs2_2112(intArg0: component, intArg1: component, intArg2: component, intArg3: component, intArg4: number, intArg5: number): void {
    ifSetModelAngle(0, 0, ifGetModelAngleX(intArg0), ifGetModelAngleY(intArg0), ifGetModelAngleZ(intArg0), 395 + intArg5 + intArg5, intArg0);
    ifSetModelAngle(0, 0, ifGetModelAngleX(intArg1), ifGetModelAngleY(intArg1), ifGetModelAngleZ(intArg1), 395 + intArg5 + intArg5, intArg1);
    ifSetModelAngle(0, 0, ifGetModelAngleX(intArg2), ifGetModelAngleY(intArg2), ifGetModelAngleZ(intArg2), 395 + intArg5 + intArg5, intArg2);
    ifSetModelAngle(0, 0, ifGetModelAngleX(intArg3), ifGetModelAngleY(intArg3), ifGetModelAngleZ(intArg3), 395 + intArg5 + intArg5, intArg3);

    switch (intArg4) {
        case 0:
            ifSetPosition(0, 43, 1, 0, intArg0);
            ifSetPosition(0, 126, 1, 0, intArg1);
            ifSetPosition(0, 210, 1, 0, intArg2);
            ifSetPosition(0, -70, 1, 0, intArg3);
            break;
        case 1:
            ifSetPosition(0, 43, 1, 0, intArg1);
            ifSetPosition(0, 126, 1, 0, intArg2);
            ifSetPosition(0, 210, 1, 0, intArg3);
            ifSetPosition(0, -70, 1, 0, intArg0);
            break;
        case 2:
            ifSetPosition(0, 43, 1, 0, intArg2);
            ifSetPosition(0, 126, 1, 0, intArg3);
            ifSetPosition(0, 210, 1, 0, intArg0);
            ifSetPosition(0, -70, 1, 0, intArg1);
            break;
        default:
            ifSetPosition(0, 43, 1, 0, intArg3);
            ifSetPosition(0, 126, 1, 0, intArg0);
            ifSetPosition(0, 210, 1, 0, intArg1);
            ifSetPosition(0, -70, 1, 0, intArg2);
            break;
    }
}
