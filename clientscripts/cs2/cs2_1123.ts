/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1123

function cs2_1123(intArg0: component): void {
    switch (varbit_mourning_gun_ammo) {
        case 1:
            ifSetObject(Obj.mourning_bloated_toad_red, 300, intArg0);
            break;
        case 2:
            ifSetObject(Obj.mourning_bloated_toad_green, 300, intArg0);
            break;
        case 3:
            ifSetObject(Obj.mourning_bloated_toad_blue, 300, intArg0);
            break;
        case 4:
            ifSetObject(Obj.mourning_bloated_toad_yellow, 300, intArg0);
            break;
        default:
            ifSetObject(-1, 300, intArg0);
            break;
    }
}
