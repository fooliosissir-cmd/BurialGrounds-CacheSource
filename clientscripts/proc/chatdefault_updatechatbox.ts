/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,chatdefault_updatechatbox]

function proc_chatdefault_updatechatbox(intArg0: boolean): void {
    if (intArg0 == true && (ifHasSub(Component.interface_752.component_752_10) == 1 || ifHasSub(Component.interface_752.component_752_11) == 1) && enumOp(type_int, type_boolean, Enum.chattype_goes_in_meslayer, chatGethistorytype(0)) == 1) {
        cs2_1561();
    }
    rebuildchatbox();
    cs2_89();
    cs2_192();
    cs2_178();
}
