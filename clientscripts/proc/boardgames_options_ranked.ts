/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,boardgames_options_ranked]

function proc_boardgames_options_ranked(): void {
    if (varbit_boardgames_rankedgame == 1) {
        ifSetGraphic(Graphic.miscgraphics_11, Component.interface_756.component_756_50);
    } else {
        ifSetGraphic(Graphic.miscgraphics_10, Component.interface_756.component_756_50);
    }
}
