/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,raf_login_popup_onload]

function raf_login_popup_onload(): void {
    if (mapLang() == 1) {
        ifSetGraphic(Graphic.aif_refer_friend_text_ger, Component.interface_329.component_329_11);
    } else if (mapLang() == 2) {
        ifSetGraphic(Graphic.aif_refer_friend_text_fr, Component.interface_329.component_329_11);
    } else if (mapLang() == 3) {
        ifSetGraphic(Graphic.aif_refer_friend_text_pt, Component.interface_329.component_329_11);
    }
}
