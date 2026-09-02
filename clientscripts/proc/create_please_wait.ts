/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,create_please_wait]

function create_please_wait(intArg0: number): void {
    let int1: graphic = Graphic.set_but_end_4_1;
    let int2: graphic = Graphic.set_but_fill_4_1;

    if (intArg0 == 1) {
        cs2_3209();
        ifSetOnClick(noHook(""), Component.interface_673.component_673_63);
        hookMouseEnter(noHook(""), Component.interface_673.component_673_63);
        ifSetText("Please wait...", Component.interface_673.component_673_69);
        ifSetText("Please wait...", Component.interface_673.component_673_68);
        ifSetOnClick(noHook(""), Component.interface_673.component_673_26);
        hookMouseEnter(noHook(""), Component.interface_673.component_673_26);
    } else {
        ifSetOnClick(hook(cs2_2205, "", []), Component.interface_673.component_673_63);
        hookMouseEnter(hook(text_colour_swapper, "Ii", [event_com, colour(0xFAFAFA)]), Component.interface_673.component_673_63);
        ifSetText("Continue", Component.interface_673.component_673_69);
        ifSetText("Continue", Component.interface_673.component_673_68);
        ifSetOnClick(hook(cs2_2252, "", []), Component.interface_673.component_673_26);
        hookMouseEnter(hook(cs2_3937, "IdIdIdId", [Component.interface_673.component_673_64, int1, Component.interface_673.component_673_65, int2, Component.interface_673.component_673_66, int2, Component.interface_673.component_673_67, int1]), Component.interface_673.component_673_26);
    }
}
