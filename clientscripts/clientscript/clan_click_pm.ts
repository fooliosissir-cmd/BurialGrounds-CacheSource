/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,clan_click_pm]

function clan_click_pm(): void {
    let str0: string = removetags(ifGetText(Component.interface_1107.component_1107_92));

    if (friendTest(str0) == 0) {
        mes("Attempting to add " + str0 + " to your Friends List.");
        friendAdd(str0);
    } else {
        mes("You've already added " + str0 + " to your friends list.");
    }
}
