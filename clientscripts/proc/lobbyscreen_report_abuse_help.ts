/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,lobbyscreen_report_abuse_help]

function proc_lobbyscreen_report_abuse_help(intArg0: number, intArg1: component, intArg2: component, intArg3: component, intArg4: component, intArg5: component): void {
    let int6: component = -1;
    let str0: string = "";
    let str1: string = "";

    switch (intArg0) {
        case 1:
            str0 = "Help - selecting an offender";
            str1 = "Here you can enter the name of a player to report." + "<br>" + "<br>" + "Clicking 'Next' will then allow you to select the offence you believe that player has committed.";
            break;
        case 2:
            str0 = "Help - selecting an offender";
            str1 = "You can select a player to report from the chat list shown." + "<br>" + "<br>" + "Chat from other players appears in black, while your chat is grey. You can't select your own chat." + "<br>" + "<br>" + "To report a player, click on any line of their chat and click the 'Next' button to continue. You will then be shown a list of offences: choose the offence you are reporting the player for." + "<br>" + "<br>" + "The list of offences has a 'Change player' button, so you can choose again if you select the wrong player." + "<br>" + "<br>" + "Don't delay; once chat leaves the chat box, it can no longer be reported.";
            break;
        case 3:
            str0 = "Help - selecting an offence";
            str1 = "Here you can select the offence that you believe the player has committed." + "<br>" + "<br>" + "Clicking one of the offence buttons will send recent chat to Player Support for investigation. You should act quickly to report the player, particularly in areas where there is a lot of chat, such as at the Grand Exchange." + "<br>" + "<br>" + "If you have selected the wrong player, you can use the 'Change player' button to return to the chat list and choose again." + "<br>" + "<br>" + "You can only report players who have spoken recently." + "<br>" + "<br>" + "Once your report has been sent, you'll be asked if you want to temporarily add the offender to your Ignore List.";
            break;
        case 4:
            str0 = "Help - honour";
            str1 = "An item scam is defined as cheating another player during a trade. We don't consider it a scam to ask for large amounts of gp for an item, but it is not in the spirit of the game to overprice an item. It is your responsibility to make sure that you are paying a good price." + "<br>" + "<br>" + "Asking for someone's bank PIN or recovery answers is just as serious as asking for a password; giving out your bank PIN allows other players access to your bank space. Never tell another player your password, PIN number or any other account security details." + "<br>" + "<br>" + "If you notice a bug, please report it to us straight away. If, after noticing a bug, you continue to exploit it, you are likely to have action taken against your account." + "<br>" + "<br>" + "There are no cheats for any of our games. Anyone that approaches you in-game to offer you cheats should be reported under 'Encouraging rule-breaking'." + "<br>" + "<br>" + "Don't encourage rule-breaking, such as encouraging someone to try real-world trading, scamming or exploiting bugs." + "<br>" + "<br>" + "You should not swap your account with another player, or share your account with anyone else. Sharing your account makes it less secure, and is also unfair to other players.";
            break;
        case 5:
            str0 = "Help - respect";
            str1 = "There's no need to report anyone for using the term 'noob', it simply means 'new player'." + "<br>" + "<br>" + "Seriously offensive language includes racism and chat of a sexual nature." + "<br>" + "<br>" + "You don't need to report players for using abbreviations such as 'lmao', 'wtf', 'gtfo'." + "<br>" + "<br>" + "You shouldn't report any chat that has been starred out (like this: ****), as the censor has prevented anything that may have been offensive from being seen." + "<br>" + "<br>" + "Solicitation includes asking for a boyfriend or girlfriend in-game." + "<br>" + "<br>" + "Disruptive behaviour includes flooding the chat window with lines of unnecessary chat, but only if you feel it's impairing your gameplay." + "<br>" + "<br>" + "Beware of context when reporting players for real-life threats: they could be talking about in-game combat!";
            break;
        case 6:
            str0 = "Help - security";
            str1 = "Giving out your contact information in-game can put the security of your account at risk. There are some unscrupulous people out there, so, to protect your account and your privacy, it makes sense not to give your details to anyone you don't know." + "<br>" + "<br>" + "Contact information includes: full name, email addresses, instant messenger screen names, telephone numbers, your home/work address or age." + "<br>" + "<br>" + "Promoting a non-Jagex website in the forums or in-game could get you banned, even if you post the URL for your clan's site. We understand this rule may cause some inconvenience, but we want it to be impossible for people to send players to scam sites.";
            break;
        case 7:
            str0 = "Help - ignoring a player temporarily";
            str1 = "Now that your report has been sent, you can choose whether or not to ignore the offender. This is a temporary measure, and will only last until you log out. To permanently ignore a player, make a note of their name and add them to your Ignore List once the 'Report' windows are closed." + "<br>" + "<br>" + "You cannot ignore moderators or people on your Friends List.";
            break;
    }
    ifSetText(str0, intArg1);
    ifSetText(str1, intArg2);
    ifSetSize(ifGetWidth(intArg3), paraheight(str1, ifGetWidth(intArg2), Graphic.verdana_11pt_regular) * 12 + 48, 0, 0, intArg3);

    switch (intArg5) {
        case Component.interface_913.component_913_0:
            int6 = Component.interface_906.component_906_79;
            break;
        case Component.interface_914.component_914_0:
            int6 = Component.interface_906.component_906_95;
            break;
        case Component.interface_979.component_979_0:
            int6 = Component.interface_906.component_906_69;
            break;
        case Component.interface_915.component_915_18:
            int6 = Component.interface_906.component_906_87;
            break;
    }

    if (int6 != -1) {
        ifSetSize(ifGetWidth(int6), ifGetHeight(intArg3), 0, 0, int6);
        ifSetSize(ifGetWidth(intArg5), ifGetHeight(intArg3), 0, 0, intArg5);
    }
    ifSetHide(false, intArg4);
}
