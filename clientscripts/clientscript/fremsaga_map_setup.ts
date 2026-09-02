/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,fremsaga_map_setup]

function fremsaga_map_setup(): void {
    switch (varbit_fremsaga_current_saga) {
        case 1:
            cs2_4647();
            break;
        case 2:
            cs2_4648();
            break;
        case 4:
            cs2_4649();
            break;
        default:
            return;
    }
}
