/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2486

function cs2_2486(): void {
    if (varc_882 != -1) {
        ifSetText("Players: " + tostring(varc_882), Component.interface_655.component_655_42);
    }

    if (varc_887 != -1) {
        ifSetText("Players: " + tostring(varc_887), Component.interface_655.component_655_31);
    }

    if (varc_892 != -1) {
        ifSetText("Players: " + tostring(varc_892), Component.interface_655.component_655_38);
    }

    if (varc_897 != -1) {
        ifSetText("Players: " + tostring(varc_897), Component.interface_655.component_655_26);
    }
    ifSetColour(colour(0xE1981F), Component.interface_655.component_655_42);
    ifSetColour(colour(0xE1981F), Component.interface_655.component_655_31);
    ifSetColour(colour(0xE1981F), Component.interface_655.component_655_38);
    ifSetColour(colour(0xE1981F), Component.interface_655.component_655_26);
}
