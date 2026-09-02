/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,clanwars_resynch_accept]

function clanwars_resynch_accept(): void {
    if (varp_clanwars_challengeuid != -1) {
        cs2_1801();
        if (varc_clanwars_rulevarc_accept == false) {
            cs2_1363(Component.interface_791.component_791_143);
            ifSetOnMouseOver(hook(cs2_95, "I", [event_com]), Component.interface_791.component_791_143);
            hookMouseExit(hook(cs2_97, "I", [event_com]), Component.interface_791.component_791_143);
            if (varc_259 == 0) {
                ifSetText("Accept", Component.interface_791.component_791_146);
                ifSetTextFont(Graphic.b12_full, Component.interface_791.component_791_146);
            } else {
                ifSetText("Accept -" + "<br>" + "Opponent has accepted.", Component.interface_791.component_791_146);
                ifSetTextFont(Graphic.p11_full, Component.interface_791.component_791_146);
            }
        } else {
            cs2_1360(Component.interface_791.component_791_143);
            ifSetOnMouseOver(noHook(""), Component.interface_791.component_791_143);
            hookMouseExit(noHook(""), Component.interface_791.component_791_143);
            ifSetText("Waiting for opponent...", Component.interface_791.component_791_146);
            ifSetTextFont(Graphic.p12_full, Component.interface_791.component_791_146);
        }
    } else {
        cs2_1802();
    }
}
