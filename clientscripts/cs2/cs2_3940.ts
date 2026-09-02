/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_3940

function cs2_3940(): void {
    ifSetOnKey(noHook(""), Component.interface_137.component_137_55);
    ifSetOnKey(hook(cs2_3944, "iz1", [event_keycode, event_keychar, false]), Component.interface_890.component_890_40);
    ifSetOnClick(hook(cs2_3217, "iIIIi", [event_mousex, Component.interface_890.component_890_44, Component.interface_890.component_890_45, Component.interface_890.component_890_46, 16]), Component.interface_890.component_890_45);
    varc_1099 = 0;
    varcstr_330 = "";
    varc_create_displayname_in_progress = 0;
    cs2_3218(Component.interface_890.component_890_44, Component.interface_890.component_890_45, Component.interface_890.component_890_46, varcstr_330, 16);
}
