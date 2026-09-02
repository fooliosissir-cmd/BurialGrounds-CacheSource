/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1891

function cs2_1891(): number {
    if (fcGetChatCount() > 0 && fcGetChatRank() >= fcGetChatMinKick()) {
        return 1;
    }
    return 0;
}
