/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,fremsaga_update_flavour_text]

function fremsaga_update_flavour_text(intArg0: number): void {
    let str0: string = "";
    let int1: number = 0;
    let int2: number = 0;

    ifSetHide(false, Component.interface_153.component_153_52);
    ifSetText("", Component.interface_153.component_153_50);
    soundVorbisVolume(6185, 1, 0, 150);

    switch (intArg0) {
        case 1:
            if (ifGetHide(Component.interface_153.component_153_104) == 0) {
                return;
            }
            str0 = "Three's Company" + "<br>" + "<br>";
            if (fremsaga_unabridged(1) == 0) {
                str0 = append(str0, "<col=cb6b3d>" + "Attack 30, Ranged 30, Magic 30 required to play the unabridged version." + "<br>" + "<br>");
            }
            str0 = append(str0, "Manage a party of adventurers in this saga. " + "<br>" + "<br>" + "+ Select 'Switch' to change to a target character. " + "<br>" + "+ Select 'Mark' on an enemy to focus your allies' attacks on that target." + "<br>" + "+ Human enemies will focus their attacks on you, animals will attack your allies.");
            ccCreate(Component.interface_153.component_153_42, 4, 0);
            break;
        case 2:
            if (ifGetHide(Component.interface_153.component_153_117) == 0) {
                return;
            }
            str0 = "Vengeance" + "<br>" + "<br>";
            if (fremsaga_unabridged(2) == 0) {
                str0 = append(str0, "<col=cb6b3d>" + "Agility 55, Thieving 55 required to play the unabridged version." + "<br>" + "<br>");
            }
            str0 = append(str0, "A tragic tale of grief, warped into furious vengeance." + "<br>" + "<br>" + "+ At some point in this saga, you will become poisoned. Keep an eye on your health. You will not take poison damage whilst in a conversation." + "<br>" + "+ Look for alternative methods of defeating your human foes. Your environment may offer more indirect solutions." + "<br>" + "+ Hellhounds will drop antipoison elixirs that will lessen your suffering temporarily." + "<br>" + "+ Spiders drop food, but their bites may negate the effect of an antipoison elixir." + "<br>" + "+ Choices you make in the saga will lead you towards 'noble' or 'ruthless' vengeance. Each has a different special attack. The further along that path you are, the more potent the special attack.");
            break;
        case 4:
            if (ifGetHide(Component.interface_153.component_153_130) == 0) {
                return;
            }
            str0 = "Thok It To 'Em" + "<br>" + "<br>";
            if (fremsaga_unabridged(4) == 0) {
                str0 = append(str0, "<col=cb6b3d>" + "Strength 70 required to play the unabridged version." + "<br>" + "<br>");
            }
            str0 = append(str0, "Control mighty Thok, Fremennik warrior." + "<br>" + "<br>" + "+ Thok heals damage and recovers special attack by killing enemies. Bosses provide greater health and special attack boosts than normal enemies." + "<br>" + "+ Thok can eat food raw. He likes the taste." + "<br>" + "+ Thok will randomly choose a special attack when you perform one. These include the awe-inspiring 'Northern Kiss'.");
            break;
        case 5:
            if (ifGetHide(Component.interface_153.component_153_173) == 0) {
                return;
            }
            str0 = "Love stories are so often tied to tragedy, and few are as tragic as this tale of two sorcerors.";
            break;
        case 3:
            if (ifGetHide(Component.interface_153.component_153_206) == 0) {
                return;
            }
            str0 = "Nadir" + "<br>" + "<br>";
            if (fremsaga_unabridged(3) == 0) {
                str0 = append(str0, "<col=cb6b3d>" + "Attack 60, Thieving 45 required to play the unabridged version." + "<br>" + "<br>");
            }
            str0 = append(str0, "Take command of the mysterious Moia." + "<br>" + "<br>" + "+ Moia works best undetected. Find information in the minds of others to progress safely." + "<br>" + "+ Avoid the suspicions of those around you to avoid later combat." + "<br>" + "+ At some point in the saga, Moia will enter a special combat mode. Keep an eye on her ability meter." + "<br>" + "+ There is a wealth of information to find. Stay a while, and listen to the people of Daemonheim.");
            break;
        case 6:
            if (ifGetHide(Component.interface_153.component_153_190) == 0) {
                return;
            }
            str0 = "Thok Your Block Off" + "<br>" + "<br>";
            [int1, int2] = fremsaga_completed(4);
            if (int1 == 0 && int2 == 0) {
                str0 = append(str0, "<col=cb6b3d>" + "You must complete " + "</col>" + "Thok It To 'Em" + "<col=cb6b3d>" + " to play this saga." + "<br>" + "<br>");
            } else if (fremsaga_unabridged(6) == 0) {
                str0 = append(str0, "<col=cb6b3d>" + "Strength 75 required to play the unabridged version." + "<br>" + "<br>");
            }
            str0 = append(str0, "Mighty Thok returns with his brother Marmaros." + "<br>" + "<br>" + "+ Kill more enemies than your brother Marmaros to become the best brother." + "<br>" + "+ Thok heals damage and recovers special attack by killing enemies." + "<br>" + "+ Thok can heal by eating raw fish." + "<br>" + "+ Thok brings his special attack 'Northern Kiss' into battle once again." + "<br>" + "+ Thok will upgrade his fists during the tale, dealing greater damage." + "<br>" + "+ Thok can obtain a special item that will yield him many fish.");
            break;
    }
    ifSetText(str0, Component.interface_153.component_153_44);
    let int3: number = paraheight(str0, 366, Graphic.p12_full);
    let int4: number = int3 * 15;

    if (ccFind(Component.interface_153.component_153_42, 0) == 1) {
        if (intArg0 == 1) {
            ccSetPosition(5, int4 + 7, 0, 0);
            ccSetSize(366, 15, 0, 0);
            ccSetTextAlign(1, 1, 0);
            str0 = "All three characters must survive.";
            ccSetText(str0);
            ccSetTextFont(Graphic.b12_full);
            ccSetColour(colour(0xCB6B3D));
            int4 = int4 + 24;
        } else {
            ccDelete();
        }
    }
    ifSetScrollSize(0, int4, Component.interface_153.component_153_42);
    scrollbar_resize(Component.interface_153.component_153_43, Component.interface_153.component_153_42, 0);
    cs2_4638(intArg0);
}
