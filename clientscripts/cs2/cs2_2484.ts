/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2484

function cs2_2484(): void {
    let int0: number = 1;

    varc_838 = varbit_mob_scenarios_unlocked;

    while (int0 <= 4 && enumOp(type_int, type_component, Enum.enum_2383, int0) != 42926100) {
        if (int0 <= varc_838) {
            ifSetColour(colour(0xE1981F), enumOp(type_int, type_component, Enum.enum_2384, int0));
            ifSetOp(1, "Select", enumOp(type_int, type_component, Enum.enum_2383, int0));
            switch (int0) {
                case 1:
                    ifSetText("Conflict", enumOp(type_int, type_component, Enum.enum_2384, int0));
                    break;
                case 2:
                    ifSetText("Siege", enumOp(type_int, type_component, Enum.enum_2384, int0));
                    break;
                case 3:
                    ifSetText("Hoard", enumOp(type_int, type_component, Enum.enum_2384, int0));
                    break;
                case 4:
                    ifSetText("Rescue", enumOp(type_int, type_component, Enum.enum_2384, int0));
                    break;
            }
        } else {
            ifSetColour(colour(0x996600), enumOp(type_int, type_component, Enum.enum_2384, int0));
            ifSetOp(1, "Select", enumOp(type_int, type_component, Enum.enum_2383, int0));
            switch (int0) {
                case 2:
                    ifSetText("Siege" + "<br>" + "- Locked", enumOp(type_int, type_component, Enum.enum_2384, int0));
                    break;
                case 3:
                    ifSetText("Hoard" + "<br>" + "- Locked", enumOp(type_int, type_component, Enum.enum_2384, int0));
                    break;
                case 4:
                    ifSetText("Rescue" + "<br>" + "- Locked", enumOp(type_int, type_component, Enum.enum_2384, int0));
                    break;
            }
        }
        int0 = int0 + 1;
    }
    ifSetColour(colour(0x996600), Component.interface_655.component_655_42);
    ifSetColour(colour(0x996600), Component.interface_655.component_655_31);
    ifSetColour(colour(0x996600), Component.interface_655.component_655_38);
    ifSetColour(colour(0x996600), Component.interface_655.component_655_26);
    cs2_2486();
}
