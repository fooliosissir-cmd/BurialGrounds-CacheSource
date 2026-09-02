/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,clan_chat_list_refresh]

function clan_chat_list_refresh(intArg0: number): void {
    if (activeClanChannelFindAffined() == 1) {
        if (intArg0 <= -1) {
            intArg0 = varc_1035;
        }
        cs2_4436(Component.interface_1110.component_1110_14, intArg0);
    }
}
