/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2496

function cs2_2496(): void {
    let int0: number = 1;
    let int1: number = cs2_2497();
    let int2: component = -1;
    let int3: component = -1;

    while (int0 <= 9 || enumOp(type_int, type_component, Enum.enum_2400, int0) != 2949145) {
        if (int0 <= int1) {
            int2 = enumOp(type_int, type_component, Enum.enum_2400, int0);
            int3 = enumOp(type_int, type_component, Enum.enum_2402, int0);
            ifSetOnClick(hook(cs2_2499, "I", [event_com]), int2);
            ifSetOnClick(hook(cs2_2499, "I", [int2]), int3);
            ifSetColour(colour(0xE1981F), int3);
            ifSetOp(1, "Select", int2);
            ifSetOp(1, "Select", int3);
            ifSetText(enumOp(type_int, type_string, Enum.enum_2403, int0), int3);
        } else {
            int2 = enumOp(type_int, type_component, Enum.enum_2400, int0);
            int3 = enumOp(type_int, type_component, Enum.enum_2402, int0);
            ifSetOnClick(noHook(""), int2);
            ifSetOnClick(noHook(""), int3);
            ifSetColour(colour(0x996600), int3);
            ifClearops(int2);
            ifClearops(int3);
            ifSetText(enumOp(type_int, type_string, Enum.enum_2403, int0) + " - Locked", int3);
        }
        int0 = int0 + 1;
    }
}
