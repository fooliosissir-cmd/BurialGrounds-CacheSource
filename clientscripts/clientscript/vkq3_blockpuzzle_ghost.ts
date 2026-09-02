/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,vkq3_blockpuzzle_ghost]

function vkq3_blockpuzzle_ghost(intArg0: component): void {
    ifSendtofront(intArg0);

    if (varp_vkq3_active_piece == -1) {
        return;
    }
    let int1: component = enumOp(type_component, type_component, Enum.enum_1592, varp_vkq3_active_piece);
    let int2: number = ifGetX(intArg0);
    let int3: number = ifGetY(intArg0);

    if (intArg0 == Component.interface_1053.component_1053_82) {
        int2 = int2 + ifGetWidth(intArg0) / 2 - ifGetWidth(int1) / 2;
        int3 = int3 + ifGetHeight(intArg0) / 2 - ifGetHeight(int1) / 2;
    }
    ifSetPosition(int2, int3, 0, 0, int1);
}
