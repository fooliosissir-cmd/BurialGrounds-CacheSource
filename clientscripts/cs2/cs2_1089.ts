/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1089

function cs2_1089(): void {
    if (chatGetFilterPrivate() == 2) {
        chatSetFilter(chatGetFilterPublic(), 1, chatGetFilterTrade());
        cs2_178();
        rebuildchatbox();
        cs2_89();
    }
}
