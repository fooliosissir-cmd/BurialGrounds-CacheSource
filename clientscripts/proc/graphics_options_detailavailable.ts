/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,graphics_options_detailavailable]

function graphics_options_detailavailable(intArg0: struct, intArg1: number): boolean {
    switch (intArg0) {
        case Struct.struct_839:
            if (detailcansetWaterDetail(intArg1) == 3) {
                return false;
            }
            break;
    }
    return true;
}
