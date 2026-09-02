/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_425

function cs2_425(): void {
    if (varc_1366 == 1) {
        ifSetOp(1, "Accept Victory", Component.interface_1019.component_1019_16);
        ifSetText("Accept Victory", Component.interface_1019.component_1019_16);
        ifSetText("Your opponent has logged out. You may end the Conquest now and be declared the winner.", Component.interface_1019.component_1019_0);
    } else {
        ifSetOp(1, "Resign", Component.interface_1019.component_1019_16);
        ifSetText("Resign", Component.interface_1019.component_1019_16);
        ifSetText("If you resign, the Conquest will end immediately.", Component.interface_1019.component_1019_0);
        ifClose();
    }
}
