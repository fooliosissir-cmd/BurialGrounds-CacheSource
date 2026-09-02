/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,ra3_package_update_interface]

function ra3_package_update_interface(): void {
    if (invTotal(Inv.inv, Obj.ra3_rod) > 0 || invTotal(Inv.bank, Obj.ra3_rod) > 0 || varbit_ra3_quest >= 44) {
        ifSetHide(true, Component.ra3_package.handled_rod);
    } else {
        ifSetHide(false, Component.ra3_package.handled_rod);
    }

    if (invTotal(Inv.inv, Obj.ra3_turnscrew) > 0 || invTotal(Inv.bank, Obj.ra3_turnscrew) > 0) {
        ifSetHide(true, Component.ra3_package.turn_screw);
    } else {
        ifSetHide(false, Component.ra3_package.turn_screw);
    }

    if (invTotal(Inv.inv, Obj.ra3_bowl) > 0 || invTotal(Inv.bank, Obj.ra3_bowl) > 0 || varbit_ra3_quest == 42) {
        ifSetHide(true, Component.ra3_package.bowl);
    } else {
        ifSetHide(false, Component.ra3_package.bowl);
    }

    if (invTotal(Inv.inv, Obj.ra3_boot) > 0 || invTotal(Inv.bank, Obj.ra3_boot) > 0) {
        ifSetHide(true, Component.ra3_package.boot);
    } else {
        ifSetHide(false, Component.ra3_package.boot);
    }

    if (invTotal(Inv.inv, Obj.ra3_green_stone) > 0 || invTotal(Inv.bank, Obj.ra3_green_stone) > 0 || varbit_ra3_quest >= 52 || varbit_ra3_cart_switch == 1) {
        ifSetHide(true, Component.ra3_package.green_stone);
    } else {
        ifSetHide(false, Component.ra3_package.green_stone);
    }

    if (invTotal(Inv.inv, Obj.ra3_yellow_stone) > 0 || invTotal(Inv.bank, Obj.ra3_yellow_stone) > 0 || varbit_ra3_quest >= 52 || varbit_ra3_cart_switch == 2) {
        ifSetHide(true, Component.ra3_package.yellow_stone);
    } else {
        ifSetHide(false, Component.ra3_package.yellow_stone);
    }

    if (invTotal(Inv.inv, Obj.ra3_rectangle) > 0 || invTotal(Inv.bank, Obj.ra3_rectangle) > 0) {
        ifSetHide(true, Component.ra3_package.sheet);
    } else {
        ifSetHide(false, Component.ra3_package.sheet);
    }
}
