/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4662

function cs2_4662(intArg0: component, intArg1: colour): void {
    let [int2, int3] = cs2_4661();

    if (int2 == 1 && int3 >= 3) {
        switch (intArg0) {
            case Component.fremsagamulti4.multi4a:
                ifSetColour(intArg1, intArg0);
                break;
            case Component.fremsagamulti4.multi4b:
                ifSetColour(intArg1, intArg0);
                break;
            case Component.fremsagamulti4.multi4c:
                return;
            case Component.fremsagamulti4.multi4d:
                return;
        }
    } else if (int2 == 2 && int3 >= 3) {
        switch (intArg0) {
            case Component.fremsagamulti4.multi4c:
                ifSetColour(intArg1, intArg0);
                break;
            case Component.fremsagamulti4.multi4d:
                ifSetColour(intArg1, intArg0);
                break;
            case Component.fremsagamulti4.multi4a:
                return;
            case Component.fremsagamulti4.multi4b:
                return;
        }
    } else {
        switch (intArg0) {
            case Component.fremsagamulti4.multi4b:
                ifSetColour(intArg1, intArg0);
                break;
            case Component.fremsagamulti4.multi4c:
                ifSetColour(intArg1, intArg0);
                break;
            case Component.fremsagamulti4.multi4a:
                return;
            case Component.fremsagamulti4.multi4d:
                return;
        }
    }
}
