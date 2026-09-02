/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,lobby_popup_close]

function proc_lobby_popup_close(): void {
    ifClearops(Component.interface_906.component_906_253);
    ifClearops(Component.interface_906.component_906_258);
    ifSetOnOpt(noHook(""), Component.interface_906.component_906_253);
    ifSetOnOpt(noHook(""), Component.interface_906.component_906_258);
    hookMouseEnter(noHook(""), Component.interface_906.component_906_258);
    hookMouseExit(noHook(""), Component.interface_906.component_906_258);
    hookMouseEnter(noHook(""), Component.interface_906.component_906_253);
    hookMouseExit(noHook(""), Component.interface_906.component_906_253);
    ifSetPosition(6, 5, 0, 2, Component.interface_906.component_906_253);
    ifSetPosition(6, 5, 0, 2, Component.interface_906.component_906_258);
    ifSetText("", Component.interface_906.component_906_257);
    ifSetText("", Component.interface_906.component_906_262);
    ifSetHide(true, Component.interface_906.component_906_253);
    ifSetHide(true, Component.interface_906.component_906_258);
    ifSetText("", Component.interface_906.component_906_252);
    varc_1092 = 0;
    ifSetGraphic(-1, Component.interface_906.component_906_251);
    ifSetOnTimer(noHook(""), Component.interface_906.component_906_251);
    ifSetOnKey(noHook(""), Component.interface_906.component_906_59);
    ifSetHide(true, Component.interface_906.component_906_59);
    ifSetHide(true, Component.interface_906.component_906_44);
}
