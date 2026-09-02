/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_180

function cs2_180(intArg0: number): void {
    if (intArg0 == varc_chat_view) {
        return;
    }

    if (intArg0 == 3 && varp_287 > 0 && varc_chat_view != -1) {
        return;
    }

    if (cs2_179(intArg0) > 24) {
        return;
    }
    cs2_183(intArg0, 249);
    ifSetOnTimer(hook(cs2_182, "i", [intArg0]), enumOp(type_int, type_component, Enum.enum_683, intArg0));
}
