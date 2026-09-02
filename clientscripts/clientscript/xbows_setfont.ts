/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,xbows_setfont]

function xbows_setfont(): void {
    if (mapLang() == 2 || mapLang() == 3) {
        ifSetTextFont(Graphic.p11_full, Component.interface_433.component_433_16);
        ifSetTextFont(Graphic.p11_full, Component.interface_433.component_433_17);
        ifSetTextFont(Graphic.p11_full, Component.interface_433.component_433_18);
        ifSetTextFont(Graphic.p11_full, Component.interface_433.component_433_19);
        ifSetTextFont(Graphic.p11_full, Component.interface_433.component_433_20);
    }
}
