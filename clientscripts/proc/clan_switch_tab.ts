/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,clan_switch_tab]

function proc_clan_switch_tab(intArg0: number): void {
    ifSetHide(true, Component.interface_1105.component_1105_64);
    ifSetHide(true, Component.interface_1105.component_1105_67);
    ifSetHide(true, Component.interface_1105.component_1105_68);
    ifSetHide(true, Component.interface_1105.component_1105_69);
    ifSetHide(true, Component.interface_1105.component_1105_70);
    ifSetHide(true, Component.interface_1105.component_1105_164);
    ifSetHide(true, Component.interface_1105.component_1105_176);
    ifSetHide(true, Component.interface_1105.component_1105_188);

    switch (intArg0) {
        case 72417446:
            ifSetHide(false, Component.interface_1105.component_1105_64);
            ifSetHide(false, Component.interface_1105.component_1105_67);
            ifSetHide(false, Component.interface_1105.component_1105_164);
            break;
        case 72417457:
            ifSetHide(false, Component.interface_1105.component_1105_68);
            ifSetHide(false, Component.interface_1105.component_1105_69);
            ifSetHide(false, Component.interface_1105.component_1105_176);
            break;
        case 72417469:
            ifSetHide(false, Component.interface_1105.component_1105_70);
            ifSetHide(false, Component.interface_1105.component_1105_188);
            break;
    }
}
