/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2999

function cs2_2999(): void {
    let str0: string = "";
    let str1: string = "";
    let str2: string = "";
    let str3: string = "www";

    switch (userDetailLobbyEmailStatus()) {
        case 0:
            ifSetGraphic(Graphic.graphic_2672, Component.interface_907.component_907_34);
            cs2_3010(...cs2_3011(0));
            ifSetText("Unregistered", Component.interface_907.component_907_39);
            str1 = "You do not currently have an email address registered. Click " + "<col=0166ff>" + "<u=0166ff>" + "here" + "</u>" + "</col>" + " to register.";
            str2 = "You do not currently have an email address registered. Click " + "<col=0296fe>" + "<u=0296fe>" + "here" + "</u>" + "</col>" + " to register.";
            ifSetText(str1, Component.interface_907.component_907_40);
            ifSetOnMouseOver(hook(text_swapper, "Is", [event_com, str2]), Component.interface_907.component_907_40);
            ifSetOnMouseLeave(hook(text_swapper, "Is", [event_com, str1]), Component.interface_907.component_907_40);
            str0 = "account_settings.ws?mod=emailNew";
            break;
        case 1:
            ifSetGraphic(Graphic.graphic_2672, Component.interface_907.component_907_34);
            cs2_3010(...cs2_3011(0));
            ifSetText("Pending Parental Confirmation", Component.interface_907.component_907_39);
            str1 = "You have registered your email address. We are currently waiting for your parent to confirm their email address. Click " + "<col=0166ff>" + "<u=0166ff>" + "here" + "</u>" + "</col>" + " to submit a confirmation code.";
            str2 = "You have registered your email address. We are currently waiting for your parent to confirm their email address. Click " + "<col=0296fe>" + "<u=0296fe>" + "here" + "</u>" + "</col>" + " to submit a confirmation code.";
            ifSetText(str1, Component.interface_907.component_907_40);
            ifSetOnMouseOver(hook(text_swapper, "Is", [event_com, str2]), Component.interface_907.component_907_40);
            ifSetOnMouseLeave(hook(text_swapper, "Is", [event_com, str1]), Component.interface_907.component_907_40);
            str0 = "account_settings.ws?mod=emailNew";
            break;
        case 2:
            ifSetGraphic(Graphic.graphic_2672, Component.interface_907.component_907_34);
            cs2_3010(...cs2_3011(0));
            ifSetText("Pending Confirmation", Component.interface_907.component_907_39);
            str1 = "Your email address is currently pending confirmation. Click " + "<col=0166ff>" + "<u=0166ff>" + "here" + "</u>" + "</col>" + " to submit a confirmation code.";
            str2 = "Your email address is currently pending confirmation. Click " + "<col=0296fe>" + "<u=0296fe>" + "here" + "</u>" + "</col>" + " to submit a confirmation code.";
            ifSetText(str1, Component.interface_907.component_907_40);
            ifSetOnMouseOver(hook(text_swapper, "Is", [event_com, str2]), Component.interface_907.component_907_40);
            ifSetOnMouseLeave(hook(text_swapper, "Is", [event_com, str1]), Component.interface_907.component_907_40);
            str0 = "account_settings.ws?mod=emailNew";
            break;
        case 3:
            ifSetGraphic(Graphic.graphic_2669, Component.interface_907.component_907_34);
            cs2_3008(...cs2_3011(0));
            ifSetText("Registered", Component.interface_907.component_907_39);
            str1 = "Your email address is now registered. Click " + "<col=0166ff>" + "<u=0166ff>" + "here" + "</u>" + "</col>" + " to view or change your email preferences.";
            str2 = "Your email address is now registered. Click " + "<col=0296fe>" + "<u=0296fe>" + "here" + "</u>" + "</col>" + " to view or change your email preferences.";
            ifSetText(str1, Component.interface_907.component_907_40);
            ifSetOnMouseOver(hook(text_swapper, "Is", [event_com, str2]), Component.interface_907.component_907_40);
            ifSetOnMouseLeave(hook(text_swapper, "Is", [event_com, str1]), Component.interface_907.component_907_40);
            str0 = "account_settings.ws?mod=email";
            break;
        case 4:
            ifSetGraphic(Graphic.graphic_2669, Component.interface_907.component_907_34);
            cs2_3008(...cs2_3011(0));
            ifSetText("No longer registered", Component.interface_907.component_907_39);
            str1 = "Your account no longer has a registered email address. Click " + "<col=0166ff>" + "<u=0166ff>" + "here" + "</u>" + "</col>" + " to register again.";
            str2 = "Your account no longer has a registered email address. Click " + "<col=0296fe>" + "<u=0296fe>" + "here" + "</u>" + "</col>" + " to register again.";
            ifSetText(str1, Component.interface_907.component_907_40);
            ifSetOnMouseOver(hook(text_swapper, "Is", [event_com, str2]), Component.interface_907.component_907_40);
            ifSetOnMouseLeave(hook(text_swapper, "Is", [event_com, str1]), Component.interface_907.component_907_40);
            str0 = "account_settings.ws?mod=email";
            break;
    }
    ifSetOnClick(hook(lobbyscreen_link, "ss1", [str3, str0, true]), Component.interface_907.component_907_40);
    cs2_3376(Component.interface_907.component_907_40);
    let int0: number = userDetailLobbyRecoveryday();
    str3 = "www";

    if (int0 == 0) {
        ifSetGraphic(Graphic.graphic_2672, Component.interface_907.component_907_22);
        cs2_3010(...cs2_3011(1));
        ifSetText("Not Set", Component.interface_907.component_907_27);
        str1 = "You do not have any recovery questions set. It will be more difficult to recover your password if it gets stolen or you forget it. Click " + "<col=0166ff>" + "<u=0166ff>" + "here" + "</u>" + "</col>" + " to set your recovery questions.";
        str2 = "You do not have any recovery questions set. It will be more difficult to recover your password if it gets stolen or you forget it. Click " + "<col=0296fe>" + "<u=0296fe>" + "here" + "</u>" + "</col>" + " to set your recovery questions.";
        ifSetText(str1, Component.interface_907.component_907_28);
        ifSetOnMouseOver(hook(text_swapper, "Is", [event_com, str2]), Component.interface_907.component_907_28);
        ifSetOnMouseLeave(hook(text_swapper, "Is", [event_com, str1]), Component.interface_907.component_907_28);
        str0 = "account_settings.ws?mod=recoveries";
    } else if (int0 < dateRuneday() + 1) {
        ifSetGraphic(Graphic.graphic_2669, Component.interface_907.component_907_22);
        cs2_3008(...cs2_3011(1));
        ifSetText("Set", Component.interface_907.component_907_27);
        str1 = "Recovery questions last set: " + fromDate(int0) + ". Click " + "<col=0166ff>" + "<u=0166ff>" + "here" + "</u>" + "</col>" + " to change your recovery questions.";
        str2 = "Recovery questions last set: " + fromDate(int0) + ". Click " + "<col=0296fe>" + "<u=0296fe>" + "here" + "</u>" + "</col>" + " to change your recovery questions.";
        ifSetText(str1, Component.interface_907.component_907_28);
        ifSetOnMouseOver(hook(text_swapper, "Is", [event_com, str2]), Component.interface_907.component_907_28);
        ifSetOnMouseLeave(hook(text_swapper, "Is", [event_com, str1]), Component.interface_907.component_907_28);
        str0 = "account_settings.ws?mod=recoveries";
    } else {
        ifSetGraphic(Graphic.graphic_2672, Component.interface_907.component_907_22);
        cs2_3010(...cs2_3011(1));
        ifSetText("Changed", Component.interface_907.component_907_27);
        str1 = "Your new recovery questions will become active on " + fromDate(int0) + ". If you didn't request this, cancel it and change your password immediately. Click " + "<col=0166ff>" + "<u=0166ff>" + "here" + "</u>" + "</col>" + " to cancel.";
        str2 = "Your new recovery questions will become active on " + fromDate(int0) + ". If you didn't request this, cancel it and change your password immediately. Click " + "<col=0296fe>" + "<u=0296fe>" + "here" + "</u>" + "</col>" + " to cancel.";
        ifSetText(str1, Component.interface_907.component_907_28);
        ifSetOnMouseOver(hook(text_swapper, "Is", [event_com, str2]), Component.interface_907.component_907_28);
        ifSetOnMouseLeave(hook(text_swapper, "Is", [event_com, str1]), Component.interface_907.component_907_28);
        str0 = "account_settings.ws?mod=recoveries";
    }
    ifSetOnClick(hook(lobbyscreen_link, "ss1", [str3, str0, true]), Component.interface_907.component_907_28);
    cs2_3376(Component.interface_907.component_907_28);
    let int1: number = userDetailLobbyUnreadmessages();

    if (int1 == 0) {
        ifSetGraphic(Graphic.graphic_2669, Component.interface_907.component_907_10);
        cs2_3008(...cs2_3011(2));
        ifSetText(tostring(int1) + " Unread", Component.interface_907.component_907_15);
        str1 = "You have no unread messages. Click " + "<col=0166ff>" + "<u=0166ff>" + "here" + "</u>" + "</col>" + " to open your Message Centre.";
        str2 = "You have no unread messages. Click " + "<col=0296fe>" + "<u=0296fe>" + "here" + "</u>" + "</col>" + " to open your Message Centre.";
        ifSetText(str1, Component.interface_907.component_907_16);
        ifSetOnMouseOver(hook(text_swapper, "Is", [event_com, str2]), Component.interface_907.component_907_16);
        ifSetOnMouseLeave(hook(text_swapper, "Is", [event_com, str1]), Component.interface_907.component_907_16);
    } else {
        ifSetGraphic(Graphic.graphic_2672, Component.interface_907.component_907_10);
        cs2_3010(...cs2_3011(2));
        ifSetText(tostring(int1) + " Unread", Component.interface_907.component_907_15);
        if (int1 == 1) {
            str1 = "You have 1 unread message. Click " + "<col=0166ff>" + "<u=0166ff>" + "here" + "</u>" + "</col>" + " to open your Message Centre.";
            str2 = "You have 1 unread message. Click " + "<col=0296fe>" + "<u=0296fe>" + "here" + "</u>" + "</col>" + " to open your Message Centre.";
        } else {
            str1 = "You have " + tostring(int1) + " unread messages. Click " + "<col=0166ff>" + "<u=0166ff>" + "here" + "</u>" + "</col>" + " to open your Message Centre.";
            str2 = "You have " + tostring(int1) + " unread messages. Click " + "<col=0296fe>" + "<u=0296fe>" + "here" + "</u>" + "</col>" + " to open your Message Centre.";
        }
        ifSetText(str1, Component.interface_907.component_907_16);
        ifSetOnMouseOver(hook(text_swapper, "Is", [event_com, str2]), Component.interface_907.component_907_16);
        ifSetOnMouseLeave(hook(text_swapper, "Is", [event_com, str1]), Component.interface_907.component_907_16);
    }
    cs2_3376(Component.interface_907.component_907_16);
    let [int2, int3, int4] = userDetailLobbyMembership();
    let str4: string = formatDateTimeFromMinutes(int2);
    let int5: number = 0;
    let int6: number = 0;
    let int7: number = 0;
    let str5: string = "";

    if (int4 == 1) {
        ifSetGraphic(Graphic.graphic_2669, Component.interface_907.component_907_48);
        cs2_3008(...cs2_3011(3));
        ifSetText("Subscription Active", Component.interface_907.component_907_53);
        str1 = "You have an active subscription. Click " + "<col=0166ff>" + "<u=0166ff>" + "here" + "</u>" + "</col>" + " to view your account information. Make sure you play on a members' world to enjoy all of your members' benefits.";
        str2 = "You have an active subscription. Click " + "<col=0296fe>" + "<u=0296fe>" + "here" + "</u>" + "</col>" + " to view your account information. Make sure you play on a members' world to enjoy all of your members' benefits.";
        ifSetText(str1, Component.interface_907.component_907_54);
        ifSetOnMouseOver(hook(text_swapper, "Is", [event_com, str2]), Component.interface_907.component_907_54);
        ifSetOnMouseLeave(hook(text_swapper, "Is", [event_com, str1]), Component.interface_907.component_907_54);
        str3 = "billing_core";
        str0 = "userdetails.ws";
    } else if (playerMember() == 1) {
        int5 = int3 / 1440;
        int6 = int3 % 1440 / 60;
        int7 = int3 % 60;
        if (int5 + int6 + int7 != 0) {
            str5 = " (in " + date_tostring(int5, int6, int7) + ")";
        }
        ifSetGraphic(Graphic.graphic_2669, Component.interface_907.component_907_48);
        cs2_3008(...cs2_3011(3));
        ifSetText("Expires " + str4, Component.interface_907.component_907_53);
        str1 = "Your membership will expire on " + str4 + str5 + ". Renew now to avoid losing member status. Click " + "<col=0166ff>" + "<u=0166ff>" + "here" + "</u>" + "</col>" + " to renew.";
        str2 = "Your membership will expire on " + str4 + str5 + ". Renew now to avoid losing member status. Click " + "<col=0296fe>" + "<u=0296fe>" + "here" + "</u>" + "</col>" + " to renew.";
        ifSetText(str1, Component.interface_907.component_907_54);
        ifSetOnMouseOver(hook(text_swapper, "Is", [event_com, str2]), Component.interface_907.component_907_54);
        ifSetOnMouseLeave(hook(text_swapper, "Is", [event_com, str1]), Component.interface_907.component_907_54);
        str3 = "dob";
        str0 = "set_members_dob.ws";
    } else {
        ifSetGraphic(Graphic.graphic_2672, Component.interface_907.component_907_48);
        cs2_3010(...cs2_3011(3));
        ifSetText("Not a Member", Component.interface_907.component_907_53);
        str1 = "You are not a member. Members get loads of extra benefits and features. Click " + "<col=0166ff>" + "<u=0166ff>" + "here" + "</u>" + "</col>" + " to become a member.";
        str2 = "You are not a member. Members get loads of extra benefits and features. Click " + "<col=0296fe>" + "<u=0296fe>" + "here" + "</u>" + "</col>" + " to become a member.";
        ifSetText(str1, Component.interface_907.component_907_54);
        ifSetOnMouseOver(hook(text_swapper, "Is", [event_com, str2]), Component.interface_907.component_907_54);
        ifSetOnMouseLeave(hook(text_swapper, "Is", [event_com, str1]), Component.interface_907.component_907_54);
        str3 = "dob";
        str0 = "set_members_dob.ws";
    }
    ifSetOnClick(hook(lobbyscreen_link, "ss1", [str3, str0, true]), Component.interface_907.component_907_54);
    cs2_3376(Component.interface_907.component_907_54);
}
