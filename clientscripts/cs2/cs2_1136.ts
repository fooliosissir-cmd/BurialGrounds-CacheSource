/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1136

function cs2_1136(intArg0: component): void {
    if (mapMembers() == 1 && ocParam(invGetobj(94, 3), Param.special_attack) != 0) {
        ifSetHide(false, intArg0);
        return;
    }
    ifSetHide(true, intArg0);
    deltooltip_action(Component.interface_884.component_884_14);
}
