/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,skillguide_onload]

function skillguide_onload(): void {
    switch (mapLang()) {
        case 1:
            ifSetGraphic(Graphic.graphic_9212, Component.interface_1218.component_1218_182);
            break;
        case 2:
            ifSetGraphic(Graphic.graphic_9211, Component.interface_1218.component_1218_182);
            break;
        case 3:
            ifSetGraphic(Graphic.graphic_9213, Component.interface_1218.component_1218_182);
            break;
        default:
            ifSetGraphic(Graphic.graphic_9210, Component.interface_1218.component_1218_182);
            break;
    }
    skillguide_initialise();
}
