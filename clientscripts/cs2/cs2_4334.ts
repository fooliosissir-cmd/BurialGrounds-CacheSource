/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4334

function cs2_4334(intArg0: component, intArg1: component): void {
    if (activeClanSettingsGetAffinedCount() >= 5) {
        ifSetColour(hsvtorgb(pushVarClanSetting<18>()), intArg0);
        ifSetColour(hsvtorgb(pushVarClanSetting<19>()), intArg1);
    } else {
        ifSetColour(hsvtorgb(42550), intArg0);
        ifSetColour(hsvtorgb(39382), intArg1);
    }
}
