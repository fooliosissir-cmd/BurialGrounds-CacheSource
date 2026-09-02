/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,clan_keep_theatre_actors_onload]

function proc_clan_keep_theatre_actors_onload(intArg0: component): void {
    let int1: component = Component.interface_310.component_310_17;
    let int2: component = Component.interface_310.component_310_19;

    cs2_5330();
    ifSetOnVarcStrTransmit(hook(clan_keep_theatre_actors_refresh, "Y", [], [139, 141, 191, 192, 193, 289, 290, 291, 297, 298, 299, 300, 301, 302, 303]), intArg0);
    ifSetOnVarcTransmit(hook(clan_keep_theatre_actors_refresh, "Y", [], [1606]), intArg0);
    proc_scrollbar_vertical(int2, int1, Graphic.aif_scrollbar_dragger_2_3, Graphic.aif_scrollbar_dragger_2_0, Graphic.aif_scrollbar_dragger_2_1, Graphic.aif_scrollbar_dragger_2_2, Graphic.aif_scrollbar_arrow_2_1, Graphic.aif_scrollbar_arrow_2_0);
    clan_keep_theatre_actors_refresh_client();
}
