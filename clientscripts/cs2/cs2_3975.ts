/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_3975

function cs2_3975(): void {
    deltooltip_action(Component.interface_1056.component_1056_158);
    let int0: component = -1;
    ifSetHide(true, Component.interface_1056.component_1056_60);
    ifSetHide(true, Component.interface_1056.component_1056_138);
    ifSetHide(true, Component.interface_1056.component_1056_143);
    ifSetHide(true, Component.interface_1056.component_1056_148);
    ifSetHide(true, Component.interface_1056.component_1056_153);
    ifSetHide(true, Component.interface_1056.component_1056_159);

    switch (varbit_8577) {
        case 1:
            int0 = Component.interface_1056.component_1056_60;
            break;
        case 2:
            int0 = Component.interface_1056.component_1056_138;
            break;
        case 3:
            int0 = Component.interface_1056.component_1056_143;
            break;
        case 4:
            int0 = Component.interface_1056.component_1056_148;
            break;
        case 5:
            int0 = Component.interface_1056.component_1056_153;
            break;
        case 6:
            int0 = Component.interface_1056.component_1056_159;
            break;
    }

    if (int0 != -1) {
        ifSetHide(false, int0);
    }
}
