/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,instance_system_stepper_hover]

function clientscript_instance_system_stepper_hover(intArg0: component, intArg1: number, intArg2: graphic, intArg3: number, intArg4: colour): void {
    if (ccFind(intArg0, intArg1) == 1) {
        ccSetGraphic(intArg2);
    }
    if (ccFind(intArg0, intArg3) == 1) {
        ccSetColour(intArg4);
    }
}
