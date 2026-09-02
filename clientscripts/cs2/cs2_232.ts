/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_232

function cs2_232(): void {
    ifSetHide(true, Component.interface_594.component_594_62);
    ifSetHide(true, Component.interface_594.component_594_117);
    ifSetHide(true, Component.interface_594.component_594_121);
    ifSetHide(true, Component.interface_594.component_594_34);

    if (ifGetHide(Component.interface_594.component_594_61) == 0) {
        ifSetHide(false, Component.interface_594.component_594_62);
    } else if (ifGetHide(Component.interface_594.component_594_104) == 0) {
        ifSetHide(false, Component.interface_594.component_594_117);
    } else if (ifGetHide(Component.interface_594.component_594_120) == 0) {
        ifSetHide(false, Component.interface_594.component_594_121);
    } else if (ifGetHide(Component.interface_594.component_594_33) == 0) {
        ifSetHide(false, Component.interface_594.component_594_34);
    }
}
