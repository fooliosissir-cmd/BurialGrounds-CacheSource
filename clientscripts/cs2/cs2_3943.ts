/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_3943

function cs2_3943(): void {
    ifSetHide(false, Component.interface_1028.component_1028_112);
    ifSetHide(true, Component.interface_1028.component_1028_59);
    ifSetHide(true, Component.interface_1028.component_1028_139);
    ifSetHide(true, Component.interface_1028.component_1028_138);
    ifSetHide(true, Component.interface_1028.component_1028_137);
    ifSetHide(true, Component.interface_1028.component_1028_109);
    playerdesign4_tooltip_clear();
    ifSetOnKey(hook(cs2_3944, "iz1", [event_keycode, event_keychar, true]), Component.interface_1028.component_1028_185);
    ifSetOnClick(hook(cs2_3217, "iIIIi", [event_mousex, Component.interface_1028.component_1028_189, Component.interface_1028.component_1028_190, Component.interface_1028.component_1028_191, 16]), Component.interface_1028.component_1028_190);
    varc_1099 = 0;
    varcstr_330 = "";
    varc_create_displayname_in_progress = 0;
    cs2_3218(Component.interface_1028.component_1028_189, Component.interface_1028.component_1028_190, Component.interface_1028.component_1028_191, varcstr_330, 16);
}
