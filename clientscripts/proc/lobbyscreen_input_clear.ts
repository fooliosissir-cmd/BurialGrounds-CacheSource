/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,lobbyscreen_input_clear]

function lobbyscreen_input_clear(): void {
    ifSetText("", Component.interface_906.component_906_164);
    ifSetText("", Component.interface_906.component_906_166);
    ifSetOnKey(noHook(""), Component.interface_906.component_906_166);
    ifSetOnOpt(noHook(""), Component.interface_906.component_906_170);
    ifSetText("Ok", Component.interface_906.component_906_174);
    ifSetOp(1, "Ok", Component.interface_906.component_906_174);
    ifSetText("Close", Component.interface_906.component_906_176);
    ifSetOp(1, "Close", Component.interface_906.component_906_176);
    ifSetSize(265, 136, 0, 0, Component.interface_906.component_906_162);
    ifSetSize(0, 0, 1, 1, Component.interface_906.component_906_166);
    ifSetSize(8034, 0, 2, 1, Component.interface_906.component_906_170);
    ifSetSize(8034, 0, 2, 1, Component.interface_906.component_906_174);
    ifSetSize(8034, 0, 2, 1, Component.interface_906.component_906_175);
    ifSetSize(8034, 0, 2, 1, Component.interface_906.component_906_176);
    ifSetHide(false, Component.interface_906.component_906_175);
    ifSetHide(false, Component.interface_906.component_906_176);
    varcstr_lobbyscreen_input = "";
    varc_1650 = 0;
}
