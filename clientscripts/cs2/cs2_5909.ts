/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5909

function cs2_5909(intArg0: number, intArg1: number, intArg2: obj, intArg3: number): string {
    let str0: string = "";

    switch (cs2_5907(intArg0, intArg1)) {
        case 0:
            if (intArg3 > 1) {
                str0 = "You won: " + tostring(intArg3) + " x " + cs2_5908(intArg2);
            } else {
                str0 = "You won: " + cs2_5908(intArg2) + "<br>";
            }
            if (ocMembers(intArg2) == 1 && mapMembers() == 0) {
                str0 = str0 + " This is a members item. Subscribe now to claim it!";
            }
            break;
        case 1:
            if (intArg3 > 1) {
                str0 = "Not bad! You won: " + tostring(intArg3) + " x " + cs2_5908(intArg2) + "<br>";
            } else {
                str0 = "Not bad! You won: " + cs2_5908(intArg2) + "<br>";
            }
            if ((ocMembers(intArg2) == 1 || intArg0 == 1 || intArg0 == 2 || intArg0 == 4) && mapMembers() == 0) {
                str0 = str0 + " This is a members item. Subscribe now to claim it!";
            }
            break;
        case 2:
            if (intArg3 > 1) {
                str0 = "Congratulations! You won: " + tostring(intArg3) + " x " + cs2_5908(intArg2) + "<br>" + enumOp(type_obj, type_string, Enum.enum_5704, intArg2);
            } else {
                str0 = "Congratulations! You won: " + cs2_5908(intArg2) + "<br>" + enumOp(type_obj, type_string, Enum.enum_5704, intArg2);
            }
            if (mapMembers() == 0) {
                str0 = str0 + " This is a members item. Subscribe now to claim it!";
            }
            break;
    }
    return str0;
}
