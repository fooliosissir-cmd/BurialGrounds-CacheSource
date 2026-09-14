/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,login_popup_text_update]

function login_popup_text_update(strArg0: string): void {
    let int0: component = Component.interface_596.component_596_13;

    if (hasSignonKey() == 1) {
        int0 = Component.interface_975.component_975_4;
    }
    ifSetText(strArg0, int0);
}
