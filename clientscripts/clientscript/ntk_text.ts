/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,ntk_text]

function ntk_text(intArg0: component, intArg1: component): void {
    ifSetText("Room:" + "<br>" + tostring(varbit_ntk_room_number) + " / 8", intArg0);
    ifSetText("Level:" + "<br>" + tostring(varbit_ntk_thieving_required), intArg1);
}
