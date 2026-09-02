/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,ql4_init]

function ql4_init(): void {
    let int0: number = max(stringWidth(ifGetText(Component.interface_190.component_190_6), ifGetfontmetrics(Component.interface_190.component_190_6)), stringWidth(ifGetText(Component.interface_190.component_190_10), ifGetfontmetrics(Component.interface_190.component_190_10)));

    int0 = int0 + ifGetWidth(Component.interface_190.component_190_3) + 1;
    ifSetSize(int0, ifGetHeight(Component.interface_190.component_190_2), 0, 0, Component.interface_190.component_190_2);
    ifSetSize(int0 + 1 + ifGetX(Component.interface_190.component_190_26) * 2, ifGetHeight(Component.interface_190.component_190_26), 1, 0, Component.interface_190.component_190_26);
    ql4_init_general(1);
    ifSetOnVarTransmit(hook(ql4_refresh, "Y", [], [1384]), Component.interface_190.component_190_15);
    ifSetOnVarcTransmit(hook(ql4_refresh, "Y", [], [695]), Component.interface_190.component_190_15);
}
