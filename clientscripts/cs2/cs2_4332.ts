/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4332

function cs2_4332(intArg0: component, intArg1: component): void {
    let [int2, int3] = cs2_4384(loadClanSettingVarbit<14>(), loadClanSettingVarbit<15>(), 1);
    ifSetGraphic(int2, intArg0);
    ifSetGraphic(int3, intArg1);

    if (activeClanSettingsGetAffinedCount() >= 5) {
        ifSetColour(hsvtorgb(loadClanSettingVar<16>()), intArg0);
        ifSetColour(hsvtorgb(loadClanSettingVar<17>()), intArg1);
    } else {
        ifSetColour(hsvtorgb(6716), intArg0);
        ifSetColour(hsvtorgb(6716), intArg1);
    }
}
