/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_194

function cs2_194(intArg0: number): void {
    if (intArg0 == 1) {
        if (fcGetChatCount() > 0) {
            fcLeaveChat();
        } else {
            meslayer_mode10();
        }
    }
}
