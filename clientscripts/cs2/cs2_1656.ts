/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1656

function cs2_1656(): void {
    if (varbit_bank_help_bankavailable == 0) {
        ifSetOnOpt(hook(closebutton_click, "", []), Component.interface_767.component_767_10);
        ifSetHide(true, Component.interface_767.component_767_54);
    } else {
        ifSetOnOpt(noHook(""), Component.interface_767.component_767_10);
        ifSetHide(false, Component.interface_767.component_767_54);
        cs2_679(Component.interface_767.component_767_55);
    }
}
