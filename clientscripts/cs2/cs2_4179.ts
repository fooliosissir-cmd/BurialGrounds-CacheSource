/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4179

function cs2_4179(intArg0: component, intArg1: component, intArg2: component, intArg3: component): void {
    let int4: number = cs2_4180(0, intArg0, "Boosted stats will be reset.", 0);

    if (varbit_642 > 0) {
        int4 = cs2_4180(int4, intArg0, "Some worn items will be taken off.", 0);
    }

    if (varbit_4166 == 1) {
        int4 = cs2_4180(int4, intArg0, "Existing prayers will be stopped.", 0);
    }

    if (int4 > ifGetHeight(intArg0)) {
        ifSetScrollSize(0, int4, intArg0);
        proc_scrollbar_vertical(intArg1, intArg0, Graphic.scrollbar_dragger_v2_3, Graphic.scrollbar_dragger_v2_0, Graphic.scrollbar_dragger_v2_1, Graphic.scrollbar_dragger_v2_2, Graphic.scrollbar_v2_0, Graphic.scrollbar_v2_1);
        ifSetHide(false, intArg1);
        ifSetPosition(0, 0, 0, 1, intArg0);
    } else {
        ifSetScrollSize(0, 0, intArg0);
        ccDeleteAll(intArg1);
        ifSetHide(true, intArg1);
        ifSetPosition(0, 0, 1, 1, intArg0);
    }
    let int5: number = 0;

    if (mapMembers() == 1 && (invTotal(Inv.inv, Obj.black_salamander) > 0 || invTotal(Inv.worn, Obj.black_salamander) > 0 || invTotal(Inv.inv, Obj.red_salamander) > 0 || invTotal(Inv.worn, Obj.red_salamander) > 0 || invTotal(Inv.inv, Obj.orange_salamander) > 0 || invTotal(Inv.worn, Obj.orange_salamander) > 0 || invTotal(Inv.inv, Obj.obj_10149) > 0 || invTotal(Inv.worn, Obj.obj_10149) > 0)) {
        int5 = 1;
    }
    int4 = 0;

    if (varbit_4159 == 1) {
        int4 = cs2_4180(int4, intArg2, "You cannot forfeit the duel.", varc_1453);
    }

    if (varbit_4160 == 1) {
        int4 = cs2_4180(int4, intArg2, "You cannot move.", varc_1454);
    }

    if (varbit_4275 == 1) {
        int4 = cs2_4180(int4, intArg2, "You can summon familiars.", varc_1464);
    }
    let str0: string = "You cannot use Ranged attacks.";

    if (varbit_4161 == 1) {
        if (int5 == 1) {
            str0 = "You cannot use Ranged attacks " + "<col=ffffff>" + "or salamanders" + "</col>" + ".";
        }
        int4 = cs2_4180(int4, intArg2, str0, varc_1455);
    }
    str0 = "You cannot use melee attacks.";

    if (varbit_4162 == 1) {
        if (int5 == 1) {
            str0 = "You cannot use melee attacks " + "<col=ffffff>" + "or salamanders" + "</col>" + ".";
        }
        int4 = cs2_4180(int4, intArg2, str0, varc_1456);
    }
    str0 = "You cannot use Magic attacks.";

    if (varbit_peng_spy_points == 1) {
        if (int5 == 1) {
            str0 = "You cannot use Magic attacks " + "<col=ffffff>" + "or salamanders" + "</col>" + ".";
        }
        int4 = cs2_4180(int4, intArg2, str0, varc_1457);
    }

    if (varbit_4169 == 1) {
        int4 = cs2_4180(int4, intArg2, "You cannot use special attacks.", varc_1463);
    }

    if (varbit_4168 == 1) {
        int4 = cs2_4180(int4, intArg2, "You can only attack with 'fun' weapons.", varc_1462);
    }

    if (varbit_4164 == 1) {
        int4 = cs2_4180(int4, intArg2, "You cannot use drinks.", varc_1458);
    }

    if (varbit_4165 == 1) {
        int4 = cs2_4180(int4, intArg2, "You cannot use food.", varc_1459);
    }

    if (varbit_4166 == 1) {
        int4 = cs2_4180(int4, intArg2, "You cannot use Prayer.", varc_1460);
    }

    if (varbit_4167 == 1) {
        int4 = cs2_4180(int4, intArg2, "There will be obstacles in the arena.", varc_1461);
    }

    if (testBit(varbit_642, 0) == 1) {
        int4 = cs2_4180(int4, intArg2, "You cannot wear items on your head.", varc_1465);
    }

    if (testBit(varbit_642, 1) == 1) {
        int4 = cs2_4180(int4, intArg2, "You cannot wear items on your back, such as capes.", varc_1466);
    }

    if (testBit(varbit_642, 2) == 1) {
        int4 = cs2_4180(int4, intArg2, "You cannot wear items on your front, such as amulets.", varc_1467);
    }

    if (testBit(varbit_642, 3) == 1) {
        int4 = cs2_4180(int4, intArg2, "You cannot wield items in your right hand.", varc_740);
    }

    if (testBit(varbit_642, 4) == 1) {
        int4 = cs2_4180(int4, intArg2, "You cannot wear items on your torso.", varc_745);
    }

    if (testBit(varbit_642, 5) == 1) {
        int4 = cs2_4180(int4, intArg2, "You cannot wield items in your left hand or use 2-handed weapons.", varc_780);
    }

    if (testBit(varbit_642, 7) == 1) {
        int4 = cs2_4180(int4, intArg2, "You cannot wear items on your legs.", varc_781);
    }

    if (testBit(varbit_642, 9) == 1) {
        int4 = cs2_4180(int4, intArg2, "You cannot wear items on your hands.", varc_782);
    }

    if (testBit(varbit_642, 10) == 1) {
        int4 = cs2_4180(int4, intArg2, "You cannot wear items on your feet.", varc_789);
    }

    if (testBit(varbit_642, 12) == 1) {
        int4 = cs2_4180(int4, intArg2, "You cannot use your ring slot.", varc_1409);
    }

    if (testBit(varbit_642, 13) == 1) {
        int4 = cs2_4180(int4, intArg2, "You cannot use your quiver.", varc_1410);
    }

    if (int4 > ifGetHeight(intArg2)) {
        ifSetScrollSize(0, int4, intArg2);
        proc_scrollbar_vertical(intArg3, intArg2, Graphic.scrollbar_dragger_v2_3, Graphic.scrollbar_dragger_v2_0, Graphic.scrollbar_dragger_v2_1, Graphic.scrollbar_dragger_v2_2, Graphic.scrollbar_v2_0, Graphic.scrollbar_v2_1);
        ifSetHide(false, intArg3);
        ifSetPosition(0, 0, 0, 1, intArg2);
    } else {
        ifSetScrollSize(0, 0, intArg2);
        ccDeleteAll(intArg3);
        ifSetHide(true, intArg3);
        ifSetPosition(0, 0, 1, 1, intArg2);
    }
}
