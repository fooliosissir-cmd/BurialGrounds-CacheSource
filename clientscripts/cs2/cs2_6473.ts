/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6473

function cs2_6473(): void {
    let int0: number = 0;
    let int1: component = -1;

    while (int0 < enumGetoutputcount(Enum.enum_5960)) {
        int1 = enumOp(type_int, type_component, Enum.enum_5960, int0);
        ccDeleteAll(int1);
        int1 = enumOp(type_int, type_component, Enum.enum_5961, int0);
        ccDeleteAll(int1);
        int0 = int0 + 1;
    }
}
