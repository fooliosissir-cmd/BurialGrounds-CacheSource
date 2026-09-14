/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1946

function cs2_1946(): void {
    let int0: number = 0;
    let str0: string = "";

    ifSetOnMouseLeave(hook(clientscript_deltooltip, "I", [Component.interface_810.component_810_5]), Component.interface_810.component_810_10);

    if (varc_589 == 99999992) {
        ifSetText("You abandon the game!", Component.interface_810.component_810_81);
        ifSetText("You abandon the game." + "<br>" + "<br>" + "The mystics don't seem happy and scowl at you, muttering unpleasant sentiments under their breath." + "<br>" + "<br>" + "You notice that you received no score as a result.", Component.interface_810.component_810_17);
        ifSetText("-100%", Component.interface_810.component_810_58);
        ifSetText("", Component.interface_810.component_810_32);
        ifSetText("", Component.interface_810.component_810_33);
        str0 = "The awards tab is not available when you leave a game early.";
        ifSetOnMouseRepeat(hook(cs2_38, "IIsii", [Component.interface_810.component_810_10, Component.interface_810.component_810_5, str0, 25, 189]), Component.interface_810.component_810_10);
    } else {
        if (varc_588 == 1) {
            ifSetText(tostring(varc_597), Component.interface_810.component_810_32);
            ifSetText(tostring(varc_598), Component.interface_810.component_810_33);
        } else {
            ifSetText(tostring(varc_598), Component.interface_810.component_810_32);
            ifSetText(tostring(varc_597), Component.interface_810.component_810_33);
        }
        if (varc_588 == varc_589) {
            ifSetText("Your valiant team takes the victory!", Component.interface_810.component_810_81);
            if (int0 == 1) {
                ifSetText("With the heroic conquest of all resources and facilities, your team have ripped success from the feeble fingers of your unworthy foes." + "<br>" + "<br>" + "The mystics stand in awe of your power, and you hear them praising you in excited whispers." + "<br>" + "<br>" + "You notice that they have increased your score as a reward.", Component.interface_810.component_810_17);
            } else {
                ifSetText("The heroic, skilful and brave deeds of your team have ripped success from the feeble fingers of your unworthy foes." + "<br>" + "<br>" + "The mystics stand in awe of your power, and you hear them praising you in excited whispers." + "<br>" + "<br>" + "You notice that they have increased your score as a reward.", Component.interface_810.component_810_17);
            }
            ifSetText("+10%", Component.interface_810.component_810_58);
        } else if (varc_589 == 0) {
            ifSetText("The game was a draw!", Component.interface_810.component_810_81);
            ifSetText("As if ordained by fate, the teams were equally brave and skillful, resulting in a draw." + "<br>" + "<br>" + "The mystics nod knowingly, and you hear them discussing how the balance of the universe is reflected beautifully in the conflict's outcome." + "<br>" + "<br>", Component.interface_810.component_810_17);
            ifSetText("+0%", Component.interface_810.component_810_58);
        } else {
            ifSetText("The enemy team has defeated you!", Component.interface_810.component_810_81);
            if (int0 == 1) {
                ifSetText("Despite your best efforts, your team was beaten; the victory snatched away as the enemy took control of all resources and facilities." + "<br>" + "<br>" + "The mystics frown at you, and shake their heads sadly." + "<br>" + "<br>" + "You hear them arguing over whether they overestimated you, or if you were just unlucky.", Component.interface_810.component_810_17);
            }
            ifSetText("Despite your best efforts, your team was beaten; the victory snatched away by your fearsome foes." + "<br>" + "<br>" + "The mystics frown at you, and shake their heads sadly." + "<br>" + "<br>" + "You hear them arguing over whether they overestimated you, or if you were just unlucky.", Component.interface_810.component_810_17);
            ifSetText("+0%", Component.interface_810.component_810_58);
        }
    }
    ifSetText(tostring(varc_590), Component.interface_810.component_810_59);
    ifSetText(tostring(varc_590), Component.interface_810.component_810_59);
    ifSetText(tostring(varc_591), Component.interface_810.component_810_60);
    ifSetText(tostring(varc_592), Component.interface_810.component_810_61);
    ifSetText(tostring(varc_593), Component.interface_810.component_810_62);
    ifSetText(tostring(varc_594), Component.interface_810.component_810_23);
    ifSetText(tostring(varc_595), Component.interface_810.component_810_25);

    if (varc_589 != 99999992) {
        ifSetText(tostring(varc_596), Component.interface_810.component_810_63);
    } else {
        ifSetText(tostring(0), Component.interface_810.component_810_63);
    }

    if (varc_600 > 0 || varc_603 > 0) {
        ifSetText(tostring(varc_599), Component.interface_810.component_810_136);
        ifSetText(tostring(varc_600), Component.interface_810.component_810_135);
        ifSetText(tostring(varc_601), Component.interface_810.component_810_139);
        ifSetText(tostring(varc_602), Component.interface_810.component_810_140);
        ifSetText(tostring(varc_603), Component.interface_810.component_810_138);
        ifSetText(tostring(varc_604), Component.interface_810.component_810_137);
        ifSetText(tostring(varc_605), Component.interface_810.component_810_141);
        ifSetText(tostring(varc_606), Component.interface_810.component_810_142);
        cs2_1587(varcstr_44, Component.interface_810.component_810_118, Component.interface_810.component_810_143, Graphic.p12_full);
        cs2_1587(varcstr_45, Component.interface_810.component_810_117, Component.interface_810.component_810_143, Graphic.p12_full);
        cs2_1587(varcstr_46, Component.interface_810.component_810_121, Component.interface_810.component_810_143, Graphic.p12_full);
        cs2_1587(varcstr_47, Component.interface_810.component_810_122, Component.interface_810.component_810_143, Graphic.p12_full);
        cs2_1587(varcstr_48, Component.interface_810.component_810_120, Component.interface_810.component_810_143, Graphic.p12_full);
        cs2_1587(varcstr_49, Component.interface_810.component_810_119, Component.interface_810.component_810_143, Graphic.p12_full);
        cs2_1587(varcstr_50, Component.interface_810.component_810_123, Component.interface_810.component_810_143, Graphic.p12_full);
        cs2_1587(varcstr_51, Component.interface_810.component_810_124, Component.interface_810.component_810_143, Graphic.p12_full);
        if (varc_607 > 0) {
            ifSetText(tostring(varc_607), Component.interface_810.component_810_127);
        }
        if (varc_608 > 0) {
            ifSetText(tostring(varc_608), Component.interface_810.component_810_126);
        }
        if (varc_609 > 0) {
            ifSetText(tostring(varc_609), Component.interface_810.component_810_130);
        }
        if (varc_610 > 0) {
            ifSetText(tostring(varc_610), Component.interface_810.component_810_131);
        }
        if (varc_611 > 0) {
            ifSetText(tostring(varc_611), Component.interface_810.component_810_129);
        }
        if (varc_612 > 0) {
            ifSetText(tostring(varc_612), Component.interface_810.component_810_128);
        }
        if (varc_613 > 0) {
            ifSetText(tostring(varc_613), Component.interface_810.component_810_132);
        }
        if (varc_614 > 0) {
            ifSetText(tostring(varc_614), Component.interface_810.component_810_133);
        }
    }
}
