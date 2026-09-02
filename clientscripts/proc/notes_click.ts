/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,notes_click]

function proc_notes_click(intArg0: number): void {
    let int1: number = 0;

    while (ccFind(Component.interface_34.component_34_9, int1) == 1) {
        ccSetOp(1, "Select");
        int1 = int1 + 1;
    }

    if (ccFind(Component.interface_34.component_34_9, varp_notes_selected) == 1) {
        ccSetOp(1, "Unselect");
        if (ifGetHide(Component.interface_34.component_34_10) == 0) {
            ifSetHide(true, Component.interface_34.component_34_14);
            return;
        }
        ifSetHide(false, Component.interface_34.component_34_14);
        ifSetPosition(ccGetX(), ccGetY(), 0, 0, Component.interface_34.component_34_14);
        ifSetSize(ccGetWidth(), ccGetHeight(), 0, 0, Component.interface_34.component_34_14);
        if (intArg0 == 1) {
            if (ccGetY() < ifGetScrollY(Component.interface_34.component_34_9)) {
                scrollbar_ondrag_doscroll(Component.interface_34.component_34_15, Component.interface_34.component_34_9, ccGetY() - 5, 1);
            } else if (ccGetY() + ccGetHeight() > ifGetScrollY(Component.interface_34.component_34_9) + ifGetHeight(Component.interface_34.component_34_9)) {
                scrollbar_ondrag_doscroll(Component.interface_34.component_34_15, Component.interface_34.component_34_9, ccGetY() - ifGetHeight(Component.interface_34.component_34_9) + ccGetHeight() + 5, 1);
            }
        }
    } else {
        ifSetHide(true, Component.interface_34.component_34_14);
    }
}
