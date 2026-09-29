/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_3001

function cs2_3001(): void {
    // Burial Grounds does not display RuneScape membership/billing marketing.
    ifSetText("", Component.interface_907.component_907_54);
    let int6: number = userDetailLobbyLastloginday();

    if (int6 == 0) {
        ifSetText("Welcome to Burial Grounds!", Component.interface_907.component_907_1);
        return;
    }
    let int7: number = dateRuneday() - int6;

    if (int7 < 1) {
        ifSetText("You last logged in earlier today from: " + userDetailLobbyLastloginaddress(), Component.interface_907.component_907_1);
    } else if (int7 == 1) {
        ifSetText("You last logged in yesterday from: " + userDetailLobbyLastloginaddress(), Component.interface_907.component_907_1);
    } else {
        ifSetText("You last logged in " + tostring(int7) + " days ago from: " + userDetailLobbyLastloginaddress(), Component.interface_907.component_907_1);
    }
}
