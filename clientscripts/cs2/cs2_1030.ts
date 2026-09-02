/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1030

function cs2_1030(intArg0: number): void {
    ifSetHide(true, Component.interface_157.component_157_17);
    ifSetHide(false, Component.interface_157.component_157_35);
    ccDeleteAll(Component.interface_157.component_157_23);
    ccDeleteAll(Component.interface_157.component_157_25);
    ifSetOnClick(hook(cs2_1031, "", []), Component.interface_157.component_157_30);
    ifSetText("Safety Guide", Component.interface_157.component_157_30);
    quickchat_tutorial_displaydata(enumOp(type_int, type_string, Enum.quickchat_tutorial_safetywarning, 0));
}
