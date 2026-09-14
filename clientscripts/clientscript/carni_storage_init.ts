/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,carni_storage_init]

function carni_storage_init(intArg0: component): void {
    let int1: number = enumGetoutputcount(Enum.carni_storage_item);

    ifSetOnInvTransmit(hook(clientscript_carni_storage_refresh, "IiY", [intArg0, int1], [93]), intArg0);
    ifSetOnVarTransmit(hook(clientscript_carni_storage_refresh, "IiY", [intArg0, int1], [2644, 2645]), intArg0);
    ccDeleteAll(intArg0);
    let int2: number = 0;
    let int3: obj = -1;

    while (int2 < int1) {
        ccCreate(intArg0, 5, int2);
        ccSetSize(36, 32, 0, 0);
        ccSetGraphicShadow(3153952);
        ccSetOnOp(hook(cs2_1620, "Iiiii", [intArg0, int2, 100, 0, 8]));
        ccSetOp(1, "Take");
        ccSetOp(10, "Examine");
        int3 = enumOp(type_int, type_obj, Enum.carni_storage_item, int2);
        ccSetOpBase(cs2_4033(int3) + ocName(int3));
        int2 = int2 + 1;
    }
    proc_carni_storage_refresh(intArg0, int1);
}
