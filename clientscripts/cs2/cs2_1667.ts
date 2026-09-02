/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1667

function cs2_1667(): void {
    let int0: number = 0;

    if (activeClanSettingsFindAffined() == 1) {
        cs2_4310();
        if (cs2_4292() == 1) {
            ifSetHide(true, Component.interface_1096.component_1096_271);
            ifSetHide(true, Component.interface_1096.component_1096_257);
        } else {
            ifSetHide(false, Component.interface_1096.component_1096_271);
            ifSetHide(false, Component.interface_1096.component_1096_257);
        }
    }
    cs2_4310();
}
