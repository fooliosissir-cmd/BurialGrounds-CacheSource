/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5580

function cs2_5580(): void {
    let str0: string = "";
    let str1: string = "";
    let int0: number = -1;

    ifSetHide(true, Component.interface_1181.component_1181_67);
    ifSetHide(true, Component.interface_1181.component_1181_79);
    ifSetHide(true, Component.interface_1181.component_1181_91);
    ifSetHide(true, Component.interface_1181.component_1181_103);
    ifSetHide(true, Component.interface_1181.component_1181_115);
    ifSetHide(true, Component.interface_1181.component_1181_127);
    ifSetHide(true, Component.interface_1181.component_1181_139);
    ifSetHide(true, Component.interface_1181.component_1181_151);
    ifSetHide(true, Component.interface_1181.component_1181_222);
    ifSetHide(true, Component.interface_1181.component_1181_234);
    ifSetHide(true, Component.interface_1181.component_1181_245);
    ifSetHide(true, Component.interface_1181.component_1181_256);
    ifSetHide(true, Component.interface_1181.component_1181_267);
    ifSetHide(true, Component.interface_1181.component_1181_278);

    switch (varbit_rden2_selected_item) {
        case 0:
        case -1:
            str0 = "Select an item to buy";
            str1 = "Select an item to buy";
            int0 = -1;
            break;
        case 1:
            str0 = tostring(varbit_rden2_selected_quantity) + "x 1,200 Thieving XP";
            str1 = "1.2k Thieving XP (x" + tostring(varbit_rden2_selected_quantity) + ")";
            int0 = 10 * varbit_rden2_selected_quantity;
            ifSetHide(false, Component.interface_1181.component_1181_67);
            break;
        case 2:
            str0 = tostring(varbit_rden2_selected_quantity) + "x 12,000 Thieving XP";
            str1 = "12k Thieving XP (x" + tostring(varbit_rden2_selected_quantity) + ")";
            int0 = 100 * varbit_rden2_selected_quantity;
            ifSetHide(false, Component.interface_1181.component_1181_79);
            break;
        case 3:
            str0 = tostring(varbit_rden2_selected_quantity) + "x 120,000 Thieving XP";
            str1 = "120k Thieving XP (x" + tostring(varbit_rden2_selected_quantity) + ")";
            int0 = 1000 * varbit_rden2_selected_quantity;
            ifSetHide(false, Component.interface_1181.component_1181_91);
            break;
        case 4:
            str0 = tostring(varbit_rden2_selected_quantity) + "x 1.2M Thieving XP";
            str1 = "1.2M Thieving XP (x" + tostring(varbit_rden2_selected_quantity) + ")";
            int0 = 10000 * varbit_rden2_selected_quantity;
            ifSetHide(false, Component.interface_1181.component_1181_103);
            break;
        case 5:
            str0 = tostring(varbit_rden2_selected_quantity) + "x 950 Agility XP";
            str1 = "950 Agility XP (x" + tostring(varbit_rden2_selected_quantity) + ")";
            int0 = 10 * varbit_rden2_selected_quantity;
            ifSetHide(false, Component.interface_1181.component_1181_115);
            break;
        case 6:
            str0 = tostring(varbit_rden2_selected_quantity) + "x 9,500 Agility XP";
            str1 = "9.5k Agility XP (x" + tostring(varbit_rden2_selected_quantity) + ")";
            int0 = 100 * varbit_rden2_selected_quantity;
            ifSetHide(false, Component.interface_1181.component_1181_127);
            break;
        case 7:
            str0 = tostring(varbit_rden2_selected_quantity) + "x 95,000 Agility XP";
            str1 = "95k Agility XP (x" + tostring(varbit_rden2_selected_quantity) + ")";
            int0 = 1000 * varbit_rden2_selected_quantity;
            ifSetHide(false, Component.interface_1181.component_1181_139);
            break;
        case 8:
            str0 = tostring(varbit_rden2_selected_quantity) + "x 950,000 Agility XP";
            str1 = "950k Agility XP (x" + tostring(varbit_rden2_selected_quantity) + ")";
            int0 = 10000 * varbit_rden2_selected_quantity;
            ifSetHide(false, Component.interface_1181.component_1181_151);
            break;
        case 9:
            str0 = "Factory mask";
            str1 = "Factory mask";
            int0 = 2250;
            ifSetHide(false, Component.interface_1181.component_1181_222);
            break;
        case 10:
            str0 = "Factory body";
            str1 = "Factory body";
            int0 = 3500;
            ifSetHide(false, Component.interface_1181.component_1181_234);
            break;
        case 11:
            str0 = "Factory legs";
            str1 = "Factory legs";
            int0 = 2750;
            ifSetHide(false, Component.interface_1181.component_1181_245);
            break;
        case 12:
            str0 = "Factory gloves";
            str1 = "Factory gloves";
            int0 = 1750;
            ifSetHide(false, Component.interface_1181.component_1181_256);
            break;
        case 13:
            str0 = "Factory boots";
            str1 = "Factory boots";
            int0 = 1750;
            ifSetHide(false, Component.interface_1181.component_1181_267);
            break;
        case 14:
            str0 = "Rogues' Den multitool";
            str1 = "Vintage Rogues' Den multitool kit";
            int0 = 35;
            ifSetHide(false, Component.interface_1181.component_1181_278);
            break;
        default:
            return;
    }
    ifSetText(str0, Component.interface_1181.component_1181_166);
    ifSetText("Buy " + str0 + " for " + tostring(int0) + " points?", Component.interface_1181.component_1181_6);
    cs2_5578(int0);
}
