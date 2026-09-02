/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,graphic_toggle_child]

function graphic_toggle_child(intArg0: component, intArg1: number, intArg2: graphic, intArg3: graphic): void {
    if (ccFind(intArg0, intArg1) == 1) {
        if (ccGetGraphic() == intArg2) {
            ccSetGraphic(intArg3);
        } else {
            ccSetGraphic(intArg2);
        }
    }
}
