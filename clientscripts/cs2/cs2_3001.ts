/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_3001

function cs2_3001(): void {
    let str0: string = "";
    let int0: number = 0;
    let int1: number = 0;
    let int2: number = 0;
    let str1: string = "";
    let str2: string = "";
    let str3: string = "";

    let [int3, int4, int5] = userDetailLobbyMembership();

    if (int5 == 0 && playerMember() == 1) {
        str0 = formatDateTimeFromMinutes(int3);
        int0 = int4 / 1440;
        int1 = int4 % 1440 / 60;
        int2 = int4 % 60;
        if (int0 + int1 + int2 != 0) {
            str1 = " (in " + date_tostring(int0, int1, int2) + ")";
        }
        str2 = "Your membership will expire on " + str0 + str1 + ". Renew now to avoid losing member status. Click " + "<col=0166ff>" + "<u=0166ff>" + "here" + "</u>" + "</col>" + " to renew.";
        str3 = "Your membership will expire on " + str0 + str1 + ". Renew now to avoid losing member status. Click " + "<col=0296fe>" + "<u=0296fe>" + "here" + "</u>" + "</col>" + " to renew.";
        ifSetText(str2, Component.interface_907.component_907_54);
        hookMouseEnter(hook(text_swapper, "Is", [event_com, str3]), Component.interface_907.component_907_54);
        hookMouseExit(hook(text_swapper, "Is", [event_com, str2]), Component.interface_907.component_907_54);
    }
    let int6: number = userDetailLobbyLastloginday();

    if (int6 == 0) {
        ifSetText("Welcome to RuneScape!", Component.interface_907.component_907_1);
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
