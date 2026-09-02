/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2221

function cs2_2221(): void {
    switch (varp_easter10_resourcegame_errortextflag) {
        case 0:
            ifSetText("", Component.interface_931.component_931_156);
            break;
        case 1:
            ifSetText("Not enough workers.", Component.interface_931.component_931_156);
            break;
        case 2:
            ifSetText("Not enough resources.", Component.interface_931.component_931_156);
            break;
        case 3:
            ifSetText("Worker limit reached.", Component.interface_931.component_931_156);
            break;
    }
}
