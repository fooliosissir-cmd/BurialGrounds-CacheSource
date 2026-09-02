/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,ii_storage_update]

function ii_storage_update(intArg0: component, intArg1: obj, intArg2: number, intArg3: component): void {
    let int4: component = ifGetLayer(intArg0);
    let int5: number = 0;

    if (intArg1 == Obj.hunting_butterfly_net) {
        switch (varbit_ii_stored_net) {
            case 1:
                int5 = 1;
                break;
            case 2:
                int5 = 1;
                intArg1 = Obj.ii_magic_butterfly_net;
                break;
        }
    } else if (intArg1 == Obj.ii_imp_repellent) {
        int5 = varbit_ii_stored_repellent;
    } else if (intArg1 == Obj.ii_impling_jar) {
        int5 = varbit_ii_stored_impling_jars;
    }
    ifSetText(ocName(intArg1) + "<br>" + "(" + tostring(int5) + "/" + tostring(intArg2) + ")", intArg3);
    ifSetObjectNonum(intArg1, -1, intArg0);
    ifSetOutline(1, intArg0);

    if (int5 > 0) {
        ifSetColour(colour(0xFFFF00), intArg3);
    } else {
        ifSetColour(colour(0xCC0000), intArg3);
    }
}
