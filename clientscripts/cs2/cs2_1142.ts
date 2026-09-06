/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1142

function cs2_1142(): void {
    ifSetOnVarTransmit(noHook(""), Component.interface_884.component_884_6);
    let int0: obj = invGetobj(94, 3);

    if (int0 == -1 || (ocMembers(int0) == 1 && mapMembers() == 0)) {
        cs2_1143("Punch", gameframe_skin_graphic(Graphic.combaticons_14), "Accurate" + "<br>" + "Crush" + "<br>" + "Attack XP", "Kick", gameframe_skin_graphic(Graphic.combaticons_15), "Aggressive" + "<br>" + "Crush" + "<br>" + "Strength XP", "Block", gameframe_skin_graphic(Graphic.combaticons_16), "Defensive" + "<br>" + "Crush" + "<br>" + "Defence XP", "", -1, "");
        return;
    }
    let int1: number = ocParam(int0, Param.param_686);
    let str0: string = "";

    switch (int1) {
        case 1:
            cs2_1143("Bash", gameframe_skin_graphic(Graphic.combaticons2_13), "Accurate" + "<br>" + "Crush" + "<br>" + "Attack XP", "Pound", gameframe_skin_graphic(Graphic.combaticons2_14), "Aggressive" + "<br>" + "Crush" + "<br>" + "Strength XP", "Focus", gameframe_skin_graphic(Graphic.combaticons_19), "Defensive" + "<br>" + "Crush" + "<br>" + "Defence XP", "", -1, "");
            break;
        case 23:
            cs2_1143("Slash", gameframe_skin_graphic(Graphic.combaticons2_13), "Accurate" + "<br>" + "Slash" + "<br>" + "Attack XP", "Crush", gameframe_skin_graphic(Graphic.combaticons2_14), "Aggressive" + "<br>" + "Crush" + "<br>" + "Strength XP", "Slash", gameframe_skin_graphic(Graphic.combaticons_19), "Defensive" + "<br>" + "Slash" + "<br>" + "Defence XP", "", -1, "");
            break;
        case 2:
            cs2_1143("Chop", gameframe_skin_graphic(Graphic.combaticons_1), "Accurate" + "<br>" + "Slash" + "<br>" + "Attack XP", "Hack", gameframe_skin_graphic(Graphic.combaticons_2), "Aggressive" + "<br>" + "Slash" + "<br>" + "Strength XP", "Smash", gameframe_skin_graphic(Graphic.combaticons_3), "Aggressive" + "<br>" + "Crush" + "<br>" + "Strength XP", "Block", gameframe_skin_graphic(Graphic.combaticons_0), "Defensive" + "<br>" + "Slash" + "<br>" + "Defence XP");
            break;
        case 3:
            cs2_1143("Bash", gameframe_skin_graphic(Graphic.combaticons2_13), "Accurate" + "<br>" + "Crush" + "<br>" + "Attack XP", "Pound", gameframe_skin_graphic(Graphic.combaticons2_14), "Aggressive" + "<br>" + "Crush" + "<br>" + "Strength XP", "Block", gameframe_skin_graphic(Graphic.combaticons_19), "Defensive" + "<br>" + "Crush" + "<br>" + "Defence XP", "", -1, "");
            break;
        case 4:
            cs2_1143("Spike", gameframe_skin_graphic(Graphic.graphic_274), "Accurate" + "<br>" + "Stab" + "<br>" + "Attack XP", "Impale", gameframe_skin_graphic(Graphic.graphic_276), "Aggressive" + "<br>" + "Stab" + "<br>" + "Strength XP", "Smash", gameframe_skin_graphic(Graphic.graphic_275), "Aggressive" + "<br>" + "Crush" + "<br>" + "Strength XP", "Block", gameframe_skin_graphic(Graphic.graphic_273), "Defensive" + "<br>" + "Stab" + "<br>" + "Defence XP");
            break;
        case 5:
            cs2_1143("Stab", gameframe_skin_graphic(Graphic.combaticons_7), "Accurate" + "<br>" + "Stab" + "<br>" + "Attack XP", "Lunge", gameframe_skin_graphic(Graphic.combaticons_6), "Aggressive" + "<br>" + "Stab" + "<br>" + "Strength XP", "Slash", gameframe_skin_graphic(Graphic.combaticons_5), "Aggressive" + "<br>" + "Slash" + "<br>" + "Strength XP", "Block", gameframe_skin_graphic(Graphic.combaticons_4), "Defensive" + "<br>" + "Stab" + "<br>" + "Defence XP");
            break;
        case 6:
            cs2_1143("Chop", gameframe_skin_graphic(Graphic.combaticons_6), "Accurate" + "<br>" + "Slash" + "<br>" + "Attack XP", "Slash", gameframe_skin_graphic(Graphic.combaticons_5), "Aggressive" + "<br>" + "Slash" + "<br>" + "Strength XP", "Lunge", gameframe_skin_graphic(Graphic.combaticons_7), "Controlled" + "<br>" + "Stab" + "<br>" + "Shared XP", "Block", gameframe_skin_graphic(Graphic.combaticons_4), "Defensive" + "<br>" + "Slash" + "<br>" + "Defence XP");
            break;
        case 7:
            cs2_1143("Chop", gameframe_skin_graphic(Graphic.combaticons_6), "Accurate" + "<br>" + "Slash" + "<br>" + "Attack XP", "Slash", gameframe_skin_graphic(Graphic.combaticons_5), "Aggressive" + "<br>" + "Slash" + "<br>" + "Strength XP", "Smash", gameframe_skin_graphic(Graphic.combaticons_5), "Aggressive" + "<br>" + "Crush" + "<br>" + "Strength XP", "Block", gameframe_skin_graphic(Graphic.combaticons_4), "Defensive" + "<br>" + "Slash" + "<br>" + "Defence XP");
            break;
        case 8:
            cs2_1143("Pound", gameframe_skin_graphic(Graphic.combaticons_13), "Accurate" + "<br>" + "Crush" + "<br>" + "Attack XP", "Pummel", gameframe_skin_graphic(Graphic.combaticons_11), "Aggressive" + "<br>" + "Crush" + "<br>" + "Strength XP", "Spike", gameframe_skin_graphic(Graphic.combaticons_12), "Controlled" + "<br>" + "Stab" + "<br>" + "Shared XP", "Block", gameframe_skin_graphic(Graphic.combaticons_10), "Defensive" + "<br>" + "Crush" + "<br>" + "Defence XP");
            break;
        case 9:
            cs2_1143("Chop", gameframe_skin_graphic(Graphic.graphic_279), "Accurate" + "<br>" + "Slash" + "<br>" + "Attack XP", "Slash", gameframe_skin_graphic(Graphic.graphic_278), "Aggressive" + "<br>" + "Slash" + "<br>" + "Strength XP", "Lunge", gameframe_skin_graphic(Graphic.graphic_277), "Controlled" + "<br>" + "Stab" + "<br>" + "Shared XP", "Block", gameframe_skin_graphic(Graphic.graphic_280), "Defensive" + "<br>" + "Slash" + "<br>" + "Defence XP");
            break;
        case 10:
            cs2_1143("Pound", gameframe_skin_graphic(Graphic.combaticons2_2), "Accurate" + "<br>" + "Crush" + "<br>" + "Attack XP", "Pummel", gameframe_skin_graphic(Graphic.combaticons2_3), "Aggressive" + "<br>" + "Crush" + "<br>" + "Strength XP", "Block", gameframe_skin_graphic(Graphic.combaticons2_0), "Defensive" + "<br>" + "Crush" + "<br>" + "Defence XP", "", -1, "");
            break;
        case 11:
            cs2_1143("Flick", gameframe_skin_graphic(Graphic.graphic_286), "Accurate" + "<br>" + "Slash" + "<br>" + "Attack XP", "Lash", gameframe_skin_graphic(Graphic.graphic_287), "Controlled" + "<br>" + "Slash" + "<br>" + "Shared XP", "Deflect", gameframe_skin_graphic(Graphic.graphic_286), "Defensive" + "<br>" + "Slash" + "<br>" + "Defence XP", "", -1, "");
            break;
        case 12:
            cs2_1143("Pound", gameframe_skin_graphic(Graphic.combaticons2_2), "Accurate" + "<br>" + "Crush" + "<br>" + "Attack XP", "Pummel", gameframe_skin_graphic(Graphic.combaticons2_3), "Aggressive" + "<br>" + "Crush" + "<br>" + "Strength XP", "Block", gameframe_skin_graphic(Graphic.combaticons2_0), "Defensive" + "<br>" + "Crush" + "<br>" + "Defence XP", "", -1, "");
            break;
        case 13:
            cs2_1143("Accurate", gameframe_skin_graphic(Graphic.combaticons2_10), "Accurate" + "<br>" + "Ranged XP", "Rapid", gameframe_skin_graphic(Graphic.combaticons2_11), "Rapid" + "<br>" + "Ranged XP", "Long range", gameframe_skin_graphic(Graphic.combaticons2_12), "Long range" + "<br>" + "Ranged XP" + "<br>" + "Defence XP", "", -1, "");
            break;
        case 14:
            cs2_1143("Lunge", gameframe_skin_graphic(Graphic.combaticons_8), "Controlled" + "<br>" + "Stab" + "<br>" + "Shared XP", "Swipe", gameframe_skin_graphic(Graphic.combaticons_18), "Controlled" + "<br>" + "Slash" + "<br>" + "Shared XP", "Pound", gameframe_skin_graphic(Graphic.combaticons_9), "Controlled" + "<br>" + "Crush" + "<br>" + "Shared XP", "Block", gameframe_skin_graphic(Graphic.combaticons_17), "Defensive" + "<br>" + "Stab" + "<br>" + "Defence XP");
            break;
        case 15:
            cs2_1143("Jab", gameframe_skin_graphic(Graphic.graphic_284), "Controlled" + "<br>" + "Stab" + "<br>" + "Shared XP", "Swipe", gameframe_skin_graphic(Graphic.graphic_285), "Aggressive" + "<br>" + "Slash" + "<br>" + "Strength XP", "Fend", gameframe_skin_graphic(Graphic.graphic_283), "Defensive" + "<br>" + "Stab" + "<br>" + "Defence XP", "", -1, "");
            break;
        case 16:
            cs2_1143("Accurate", gameframe_skin_graphic(Graphic.combaticons2_15), "Accurate" + "<br>" + "Ranged XP", "Rapid", gameframe_skin_graphic(Graphic.combaticons2_16), "Rapid" + "<br>" + "Ranged XP", "Long range", gameframe_skin_graphic(Graphic.combaticons2_17), "Long range" + "<br>" + "Ranged XP" + "<br>" + "Defence XP", "", -1, "");
            break;
        case 17:
            cs2_1143("Accurate", gameframe_skin_graphic(Graphic.combaticons2_5), "Accurate" + "<br>" + "Ranged XP", "Rapid", gameframe_skin_graphic(Graphic.combaticons2_6), "Rapid" + "<br>" + "Ranged XP", "Long range", gameframe_skin_graphic(Graphic.combaticons2_7), "Long range" + "<br>" + "Ranged XP" + "<br>" + "Defence XP", "", -1, "");
            break;
        case 18:
            cs2_1143("Accurate", gameframe_skin_graphic(Graphic.combaticons2_10), "Accurate" + "<br>" + "Ranged XP", "Rapid", gameframe_skin_graphic(Graphic.combaticons2_11), "Rapid" + "<br>" + "Ranged XP", "Long range", gameframe_skin_graphic(Graphic.combaticons2_12), "Long range" + "<br>" + "Ranged XP" + "<br>" + "Defence XP", "", -1, "");
            break;
        case 19:
            cs2_1143("Short fuse", gameframe_skin_graphic(Graphic.graphic_288), "Short fuse" + "<br>" + "Ranged XP", "Medium fuse", gameframe_skin_graphic(Graphic.graphic_282), "Medium fuse" + "<br>" + "Ranged XP", "Long fuse", gameframe_skin_graphic(Graphic.graphic_281), "Long fuse" + "<br>" + "Ranged XP" + "<br>" + "Defence XP", "", -1, "");
            break;
        case 20:
            cs2_1143("Aim and fire", Graphic.graphic_128, "Aim and fire", "", -1, "", "Kick", gameframe_skin_graphic(Graphic.combaticons_15), "Aggressive" + "<br>" + "Crush" + "<br>" + "Strength XP", "", -1, "");
            break;
        case 21:
            cs2_1143("Scorch", gameframe_skin_graphic(Graphic.graphic_289), "Aggressive" + "<br>" + "Slash" + "<br>" + "Strength XP", "Flare", gameframe_skin_graphic(Graphic.graphic_290), "Accurate" + "<br>" + "Ranged" + "<br>" + "Ranged XP", "Blaze", gameframe_skin_graphic(Graphic.graphic_291), "Defensive" + "<br>" + "Magic" + "<br>" + "Magic XP", "", -1, "");
            break;
        case 22:
            cs2_1143("Reap", gameframe_skin_graphic(Graphic.combaticons2_19), "Accurate" + "<br>" + "Slash" + "<br>" + "Attack XP", "Chop", gameframe_skin_graphic(Graphic.combaticons2_9), "Aggressive" + "<br>" + "Stab" + "<br>" + "Strength XP", "Jab", gameframe_skin_graphic(Graphic.combaticons2_18), "Aggressive" + "<br>" + "Crush" + "<br>" + "Strength XP", "Block", gameframe_skin_graphic(Graphic.combaticons2_8), "Defensive" + "<br>" + "Slash" + "<br>" + "Defence XP");
            break;
        case 24:
            cs2_1143("Sling", gameframe_skin_graphic(Graphic.combaticons2_10), "Accurate" + "<br>" + "Ranged XP", "Chuck", gameframe_skin_graphic(Graphic.combaticons2_11), "Rapid" + "<br>" + "Ranged XP", "Lob", gameframe_skin_graphic(Graphic.combaticons2_12), "Long range" + "<br>" + "Ranged XP" + "<br>" + "Defence XP", "", -1, "");
            break;
        case 25:
        case 26:
            cs2_1143("Jab", gameframe_skin_graphic(Graphic.combaticons2_13), "Accurate" + "<br>" + "Stab" + "<br>" + "Attack XP", "Swipe", gameframe_skin_graphic(Graphic.combaticons2_14), "Aggressive" + "<br>" + "Slash" + "<br>" + "Strength XP", "Fend", gameframe_skin_graphic(Graphic.combaticons_19), "Defensive" + "<br>" + "Crush" + "<br>" + "Defence XP", "", -1, "");
            break;
        case 27:
            cs2_1143("Hack!", gameframe_skin_graphic(Graphic.combaticons_1), "Controlled" + "<br>" + "Slash" + "<br>" + "Shared XP", "Gouge!", gameframe_skin_graphic(Graphic.combaticons_2), "Controlled" + "<br>" + "Stab" + "<br>" + "Shared XP", "Smash!", gameframe_skin_graphic(Graphic.combaticons_3), "Controlled" + "<br>" + "Crush" + "<br>" + "Shared XP", "", -1, "");
            break;
        case 28:
            ifSetOnVarTransmit(hook(cs2_1142, "Y", [], [439]), Component.interface_884.component_884_6);
            if (varbit_autocast_defmode == 1) {
                str0 = "Defensive casting is enabled";
            } else {
                str0 = "Defensive casting is disabled";
            }
            cs2_1143("Accurate", gameframe_skin_graphic(Graphic.combaticons2_15), "Accurate" + "<br>" + "Magic XP" + "<br>" + str0, "", -1, "", "Long range", gameframe_skin_graphic(Graphic.combaticons2_17), "Long range" + "<br>" + "Magic XP" + "<br>" + "Defence XP", "", -1, "");
            break;
        case 29:
            cs2_1143("Fire", Graphic.combaticons_25, "Fast, flaming fury" + "<br>" + "Interrupts enemy attacks" + "<br>" + "Fast attack rate", "Water", Graphic.combaticons_24, "Cold, aqueous suffocation" + "<br>" + "Slows enemy movement" + "<br>" + "Medium attack rate", "Earth", Graphic.combaticons_23, "Devastating terra impact" + "<br>" + "Heavy damage" + "<br>" + "Slow attack rate", "", -1, "");
            break;
        default:
            cs2_1143("Punch", gameframe_skin_graphic(Graphic.combaticons_14), "Accurate" + "<br>" + "Crush" + "<br>" + "Attack XP", "Kick", gameframe_skin_graphic(Graphic.combaticons_15), "Aggressive" + "<br>" + "Crush" + "<br>" + "Strength XP", "Block", gameframe_skin_graphic(Graphic.combaticons_16), "Defensive" + "<br>" + "Crush" + "<br>" + "Defence XP", "", -1, "");
            break;
    }

    if (mapMembers() == 1 && invGetobj(94, 13) == Obj.sniper_bolts && int1 == 17) {
        cs2_1143("Target-Head", Graphic.combaticons_20, "Chance to reduce Magic/casting speed in PvP" + "<br>" + "Ranged XP", "Target-Torso", Graphic.combaticons_21, "Chance to inflict bleeding damage in PvP" + "<br>" + "Ranged XP", "Target-Legs", Graphic.combaticons_22, "Chance to drain energy/freeze the target in PvP" + "<br>" + "Ranged XP", "", -1, "");
    }

    if (invGetobj(94, 3) == Obj.obj_24145 || invGetobj(94, 3) == Obj.easter12_handcannon_perm) {
        cs2_1143("Scotch-Egg", Graphic.combaticons_27, "Covers your foes in deep-fried, battered scotch egg", "Marshmallow", Graphic.combaticons_26, "Covers your foes in molten marshmallow", "", -1, "", "", -1, "");
    }

    if (int0 == Obj.fremsaga_thok2_gloves || int0 == Obj.fremsaga_thok2_gloves_poison || int0 == Obj.fremsaga_thok2_gloves_crab) {
        cs2_1143("Punch", gameframe_skin_graphic(Graphic.combaticons_14), "Devastating" + "<br>" + "Smash", "Punch", gameframe_skin_graphic(Graphic.combaticons_14), "Obliterating" + "<br>" + "Slam", "Punch", gameframe_skin_graphic(Graphic.combaticons_14), "Annihilating" + "<br>" + "Blow", "", -1, "");
    }
}
