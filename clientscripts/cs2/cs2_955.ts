/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_955

function cs2_955(): void {
    if (varbit_hvh_game_role == 3 && invTotal(Inv.worn, Obj.hvh_stone_5_6) == 0 && invTotal(Inv.inv, Obj.hvh_stone_5_6) == 0 && invTotal(Inv.worn, Obj.hvh_stone_4) == 0 && invTotal(Inv.inv, Obj.hvh_stone_4) == 0 && invTotal(Inv.worn, Obj.hvh_stone_3) == 0 && invTotal(Inv.inv, Obj.hvh_stone_3) == 0 && invTotal(Inv.worn, Obj.hvh_stone_2) == 0 && invTotal(Inv.inv, Obj.hvh_stone_2) == 0 && invTotal(Inv.worn, Obj.hvh_stone_1) == 0 && invTotal(Inv.inv, Obj.hvh_stone_1) == 0) {
        ifSetHide(false, Component.interface_730.component_730_24);
    }
}
