/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1449

function cs2_1449(): void {
    varc_188 = 0;
    proc_bank_cert_button();
    proc_bank_sort_button();
    cs2_1450();
    cs2_1464();
    cs2_1455();
    cs2_1459();
    cs2_1463(varbit_4893);
    ifSetOnVarcTransmit(hook(cs2_1472, "Y", [], [190]), Component.interface_762.component_762_17);
    ifSetOnVarcTransmit(hook(cs2_1465, "Y", [], [192, 1038, 1324]), Component.interface_762.component_762_21);
    ifSetScrollPos(0, cs2_704(varbit_4893), Component.interface_762.component_762_95);
    scrollbar_ondrag_doscroll(Component.interface_762.component_762_116, Component.interface_762.component_762_95, ifGetScrollY(Component.interface_762.component_762_95), 1);
}
