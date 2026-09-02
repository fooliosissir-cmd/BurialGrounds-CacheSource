/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_196

function cs2_196(): void {
    if (compare(subString(chatPlayerNameUnfiltered(), 0, 1), "#") == 0) {
        return;
    }

    if (varp_2522 == 1) {
        ifSetHide(false, Component.interface_906.component_906_35);
        ifSendtofront(Component.interface_906.component_906_35);
        if (varp_tutorial > 1000) {
            ifSetText("Explore and enjoy the members' game for 14 days," + "<br>" + "absolutely free! Click below to activate your trial" + "<br>" + "and enjoy the following members' benefits:" + "<br>" + "<br>" + "- Over 150 extra Quests" + "<br>" + "- 9 Exclusive Skills" + "<br>" + "- Over 40 Minigames" + "<br>" + "- Join the Members' Loyalty Programme" + "<br>" + "- Extra spins on the Squeal of Fortune" + "<br>" + "- Unlock over 400 extra bank spaces" + "<br>" + "- And much more!", Component.interface_906.component_906_436);
            ifSetText("You're eligible for Free Members' Access!", Component.interface_906.component_906_435);
            ifSetHide(true, Component.interface_906.component_906_437);
        } else {
            ifSetText("You're eligible for a free trial of the members-only" + "<br>" + "features of RuneScape!" + "<br>" + "<br>" + "Click the button below to start your two weeks of" + "<br>" + "membership and explore the wider and fuller world " + "<br>" + "we offer.", Component.interface_906.component_906_436);
            ifSetText("Your 14 days of free membership await...", Component.interface_906.component_906_435);
            ifSetHide(false, Component.interface_906.component_906_437);
        }
    }
}
