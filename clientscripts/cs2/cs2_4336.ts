/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4336

function cs2_4336(intArg0: component): void {
    if (pushVarClanSettingBit<9>() == 0 && activeClanSettingsGetAffinedCount() >= 5) {
        ifSetText(removetags(pushVarClanSettingString<1>()), intArg0);
        return;
    }
    ifSetText("", intArg0);
}
