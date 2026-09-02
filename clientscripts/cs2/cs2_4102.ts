/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4102

function cs2_4102(intArg0: component, intArg1: number, intArg2: number, intArg3: number, strArg0: string): void {
    if (varbit_task_priority_mode == 0) {
        deltooltip_action(Component.interface_746.component_746_43);
        return;
    }

    if (intArg0 == Component.interface_746.component_746_199 && varbit_lore_lore_available == 0) {
        return;
    }
    let int4: component = Component.interface_746.component_746_43;
    intArg1 = intArg1 + 200;
    intArg2 = intArg2 + ifGetY(intArg0);
    let int5: number = 200;
    let int6: number = paraheight(strArg0, int5, Graphic.p12_full);
    let int7: number = parawidth(strArg0, int5, Graphic.p12_full);
    let int8: number = int6 * 14;

    switch (intArg3) {
        case 0:
            intArg1 = intArg1 - int7 / 2;
            intArg2 = intArg2 - 10;
            break;
        case 2:
            intArg1 = intArg1 - int7 / 2;
            intArg2 = intArg2 + int8 + 110;
            break;
        case 1:
            intArg2 = intArg2 - int8 / 2;
            intArg1 = intArg1 + 10;
            break;
        case 3:
            intArg2 = intArg2 - int8 / 2;
            intArg1 = intArg1 - (int7 + 10);
            break;
    }
    ccCreate(int4, 3, 0);
    ccSetSize(int7 + 4, 4 + int6 * 14, 0, 0);
    ccSetPosition(intArg1, intArg2, 0, 0);
    ccSetfill(true);
    ccSetColour(colour(0x0E0E0E));
    ccCreate(int4, 3, 1);
    ccSetSize(int7 + 4, 4 + int6 * 14, 0, 0);
    ccSetPosition(intArg1, intArg2, 0, 0);
    ccSetfill(false);
    ccSetColour(colour(0xEBECE6));
    ccCreate(int4, 4, 2);
    ccSetPosition(intArg1 + 2, intArg2 + 2, 0, 0);
    ccSetSize(int5, 16, 0, 0);
    ccSetTextFont(Graphic.p12_full);
    ccSetTextAlign(0, 0, 0);
    ccSetTextShadow(false);
    ccSetText(strArg0);
    ccSetColour(colour(0xF5B241));
}
