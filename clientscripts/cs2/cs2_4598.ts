/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4598

function cs2_4598(intArg0: component): void {
    ccDeleteAll(Component.interface_16.component_16_20);
    cs2_4534(Component.interface_16.component_16_20);
    ccDeleteAll(Component.interface_16.component_16_39);
    cs2_4534(Component.interface_16.component_16_39);
    ccDeleteAll(Component.interface_16.component_16_59);
    cs2_4535(Component.interface_16.component_16_59);
    cs2_4513(Component.interface_16.component_16_8, Struct.struct_1746);
    cs2_4510(Component.interface_16.component_16_68, Struct.struct_1736);
    cs2_4510(Component.interface_16.component_16_69, Struct.struct_1737);
    cs2_4530(Component.interface_16.component_16_2);
    cs2_4531(Component.interface_16.component_16_72);
    cs2_4532(Component.interface_16.component_16_74);
    cs2_4530(Component.interface_16.component_16_77);
    cs2_4531(Component.interface_16.component_16_81);
    cs2_4599(Obj.godwars_armadyl_completed_godsword, 1, "A beautiful, heavy sword.", Component.interface_16.component_16_14);
    cs2_4599(Obj.godwars2_body_range_100, 1, "An ancient ranger's body armour.", Component.interface_16.component_16_15);
    cs2_4599(Obj.godwars2_legs_magic_100, 1, "An ancient mage's robe legs.", Component.interface_16.component_16_16);
    cs2_4599(Obj.obj_2667, 1, "A rune kiteshield in the colours of Saradomin.", Component.interface_16.component_16_31);
    cs2_4599(Obj.dragon_scimitar, 1, "A vicious, curved sword.", Component.interface_16.component_16_32);
    cs2_4599(Obj.cooking_apple, 1, "Keeps the doctor away.", Component.interface_16.component_16_33);
    cs2_4599(Obj.darkbow, 1, "A bow from a darker dimension.", Component.interface_16.component_16_34);
    cs2_4599(Obj.deathrune, 1337, "Used for medium level missile spells.", Component.interface_16.component_16_35);
    cs2_4599(Obj.abyssal_whip, 1, "A weapon from the Abyss.", Component.interface_16.component_16_36);
    cs2_4599(Obj.coins, 6969, "Lovely money!", Component.interface_16.component_16_48);
    cs2_4599(Obj.dragon_slayer_qip_elvargs_head, 1, "The severed head of the great dragon Elvarg!", Component.interface_16.component_16_49);
    cs2_4599(Obj.hammer, 1, "Good for hitting things!", Component.interface_16.component_16_50);
    cs2_4599(Obj.growncatobject_swept_purple, 1, "This cat definitely likes you.", Component.interface_16.component_16_51);
    let str0: string = enumOp(type_int, type_string, Enum.deathkeep_respawns_names, 0);
    ifSetText(str0, Component.interface_16.component_16_63);
    let int1: number = max(stringWidth(ifGetText(Component.interface_16.component_16_58), Graphic.p11_full), stringWidth(str0, Graphic.p11_full)) + 26;
    ifSetSize(int1, ifGetHeight(Component.interface_16.component_16_52), 0, 0, Component.interface_16.component_16_52);
    ifSetSize(int1, ifGetHeight(Component.interface_16.component_16_59), 0, 0, Component.interface_16.component_16_59);
    ifSetPosition(max(int1 + 1 - (ifGetWidth(Component.interface_16.component_16_3) - ifGetWidth(Component.interface_16.component_16_4)) / 2, 0), 0, 1, 0, Component.interface_16.component_16_4);
    ifSetOnVarcTransmit(hook(cs2_4601, "IY", [intArg0], [1514]), intArg0);
    cs2_4602(varc_1514, intArg0);
}
