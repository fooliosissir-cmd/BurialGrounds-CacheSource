/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_3047

function cs2_3047(intArg0: number): void {
    switch (intArg0) {
        case 0:
        case 1:
        case 2:
            chatSetFilter(chatGetFilterPublic(), intArg0, chatGetFilterTrade());
            break;
    }
    cs2_3045();
}
