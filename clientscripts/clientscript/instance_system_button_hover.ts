/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,instance_system_button_hover]

function clientscript_instance_system_button_hover(intArg0: component, intArg1: number, intArg2: number, intArg3: number, intArg4: number, intArg5: graphic, intArg6: graphic, intArg7: graphic, intArg8: colour): void {
    if (ccFind(intArg0, intArg1) == 1) {
        ccSetGraphic(intArg5);
    }
    if (ccFind(intArg0, intArg2) == 1) {
        ccSetGraphic(intArg6);
    }
    if (ccFind(intArg0, intArg3) == 1) {
        ccSetGraphic(intArg7);
    }
    if (ccFind(intArg0, intArg4) == 1) {
        ccSetColour(intArg8);
    }
}
