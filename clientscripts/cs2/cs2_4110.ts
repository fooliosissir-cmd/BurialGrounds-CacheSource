/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4110

function cs2_4110(): void {
    switch (varp_1108) {
        case 2:
            ifSetHide(true, Component.interface_106.component_106_126);
            ifSetHide(false, Component.interface_106.component_106_131);
            ifSetHide(true, Component.interface_106.component_106_140);
            cs2_671();
            ifSetText("Each box has two buttons. One button is for offering to buy items, the other is for offering to sell items.", Component.interface_106.component_106_124);
            break;
        case 5:
            ifSetHide(true, Component.interface_106.component_106_126);
            ifSetHide(true, Component.interface_106.component_106_131);
            ifSetHide(false, Component.interface_106.component_106_140);
            cs2_672();
            ifSetText("Now the offer is placed! You can return to the Grand Exchange at any time to check on the progress of your offers.", Component.interface_106.component_106_124);
            break;
        default:
            ifSetHide(false, Component.interface_106.component_106_126);
            ifSetHide(true, Component.interface_106.component_106_131);
            ifSetHide(true, Component.interface_106.component_106_140);
            cs2_670();
            ifSetText("First, you will see a selection of boxes. You can make several offers simultaneously, one in each box.", Component.interface_106.component_106_124);
            break;
    }
}
