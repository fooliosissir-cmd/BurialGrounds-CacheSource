/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2504

function cs2_2504(): void {
    ifSetText(varcstr_180, Component.interface_291.component_291_73);
    ifSetText(varcstr_181, Component.interface_291.component_291_28);
    let int0: number = paraheight(varcstr_180, 207, Graphic.q8_full) * 17 + 5;
    ifSetSize(207, int0, 0, 0, Component.interface_291.component_291_73);
    ifSetScrollSize(0, int0, Component.interface_291.component_291_72);
    scrollbar_resize(Component.interface_291.component_291_69, Component.interface_291.component_291_72, 0);
    int0 = paraheight(varcstr_181, 207, Graphic.q8_full) * 17 + 5;
    ifSetSize(207, int0, 0, 0, Component.interface_291.component_291_28);
    ifSetScrollSize(0, int0, Component.interface_291.component_291_68);
    scrollbar_resize(Component.interface_291.component_291_70, Component.interface_291.component_291_68, 0);
}
