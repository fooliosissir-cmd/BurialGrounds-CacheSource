/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1474

function cs2_1474(): void {
    ifSetHide(true, Component.interface_762.component_762_117);
    ifSetHide(true, Component.interface_762.component_762_118);
    ifSetGraphic(Graphic.bank_buttons_new1_0, Component.interface_762.component_762_18);
    ifSetGraphic(Graphic.bank_buttons_new2_0, Component.interface_762.component_762_17);

    if (varbit_4893 == 0) {
        cs2_1456();
    }
    cs2_1463(1);
    varcstr_138 = "";
    proc_meslayer_close(11);
    varc_188 = 0;
    ifSetText("Bank of RuneScape", Component.interface_762.component_762_47);
    ifSetOnTimer(noHook(""), Component.interface_762.component_762_17);
}
