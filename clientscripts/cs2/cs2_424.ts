/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_424

function cs2_424(): void {
    let int0: number = varc_1365 * 6 / 10;
    let int1: number = 0;
    let str0: string = "1 minute";

    if (int0 < 60) {
        ifSetText("Your opponent has logged out." + "<br>" + "You may wait for them to return or end the Conquest now and be declared the winner.", Component.interface_1027.component_1027_24);
        return;
    }

    if (int0 > 120) {
        int1 = int0 / 60;
        str0 = tostring(int1) + " minutes";
    }
    ifSetText("Your opponent has been logged out for " + str0 + "." + "<br>" + "You may wait for them to return or end the Conquest now and be declared the winner.", Component.interface_1027.component_1027_24);
}
