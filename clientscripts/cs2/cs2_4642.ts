/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4642

function cs2_4642(): void {
    if (varp_fremsaga_temp_1 == 0) {
        return;
    }
    let str0: string = "null";

    switch (varp_fremsaga_temp_1) {
        case 1:
            str0 = "Abridged: 750 Dungeoneering XP. 75 Dungeoneering tokens." + "<br>" + "Unabridged: 3750 XP in a choice of Attack, Ranged or Magic.";
            break;
        case 2:
            str0 = "Abridged: 2410 Dungeoneering XP. 241 Dungeoneering tokens." + "<br>" + "Unabridged: 25415 XP in either Agility or Thieving.";
            break;
        case 4:
            str0 = "Abridged: 37080 Dungeoneering XP. 3708 Dungeoneering tokens." + "<br>" + "Unabridged: 75765 Strength XP.";
            break;
        case 3:
            str0 = "Abridged: 3750 Dungeoneering XP. 375 Dungeoneering tokens." + "<br>" + "Unabridged: 21670 Dungeoneering XP. 2167 Dungeoneering tokens. 11660 Thieving XP or 37080 Attack XP.";
            break;
        case 6:
            str0 = "Abridged: 53440 Dungeoneering XP. 5344 Dungeoneering tokens." + "<br>" + "Unabridged: 105010 Strength XP.";
            break;
        default:
            return;
    }
    str0 = append(str0, "<br>" + "Replay: Up to " + tostring(enumOp(type_int, type_int, Enum.fremsaga_repeat_token_reward, varp_fremsaga_temp_1)) + " Dungeoneering tokens.");
    soundVorbisVolume(6185, 1, 0, 150);
    ifSetHide(true, Component.interface_153.component_153_52);
    ifSetText(str0, Component.interface_153.component_153_50);
}
