/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,fremsaga_thok2_overlay_update_text]

function fremsaga_thok2_overlay_update_text(intArg0: number): void {
    let str0: string = "";

    switch (intArg0) {
        case 0:
            str0 = "Kill them all!";
            break;
        case 1:
            str0 = "Kill the enemies until reinforcements stop coming!";
            break;
        case 2:
            str0 = "Everything is dead! Marmaros has stopped fighting too.";
            break;
        case 3:
            str0 = "Kill that boss!";
            break;
        case 4:
            str0 = "The boss has legged it with your sword - get him!";
            break;
        case 5:
            str0 = "Kill more enemies than Marmaros to be the best brother!";
            break;
        default:
            str0 = "Unexpected value " + tostring(intArg0) + ".";
            break;
    }

    if (compare(str0, ifGetText(Component.interface_621.component_621_34)) == 0) {
        return;
    }
    let int1: number = stringWidth(str0, Graphic.p11_full);
    ifSetSize(int1, 32, 0, 0, Component.interface_621.component_621_34);
    ifSetSize(int1 + 64, 28, 0, 0, Component.interface_621.component_621_11);
    ifSetText(str0, Component.interface_621.component_621_34);
}
