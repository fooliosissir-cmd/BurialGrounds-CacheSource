/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,notes_get_colour]

function notes_get_colour(intArg0: number): colour {
    let int1: colour = colour(0xFFFFFF);

    switch (intArg0) {
        case 0:
            int1 = notes_convert_colour(varbit_notes_colour0);
            break;
        case 1:
            int1 = notes_convert_colour(varbit_notes_colour1);
            break;
        case 2:
            int1 = notes_convert_colour(varbit_notes_colour2);
            break;
        case 3:
            int1 = notes_convert_colour(varbit_notes_colour3);
            break;
        case 4:
            int1 = notes_convert_colour(varbit_notes_colour4);
            break;
        case 5:
            int1 = notes_convert_colour(varbit_notes_colour5);
            break;
        case 6:
            int1 = notes_convert_colour(varbit_notes_colour6);
            break;
        case 7:
            int1 = notes_convert_colour(varbit_notes_colour7);
            break;
        case 8:
            int1 = notes_convert_colour(varbit_notes_colour8);
            break;
        case 9:
            int1 = notes_convert_colour(varbit_notes_colour9);
            break;
        case 10:
            int1 = notes_convert_colour(varbit_notes_colour10);
            break;
        case 11:
            int1 = notes_convert_colour(varbit_notes_colour11);
            break;
        case 12:
            int1 = notes_convert_colour(varbit_notes_colour12);
            break;
        case 13:
            int1 = notes_convert_colour(varbit_notes_colour13);
            break;
        case 14:
            int1 = notes_convert_colour(varbit_notes_colour14);
            break;
        case 15:
            int1 = notes_convert_colour(varbit_notes_colour15);
            break;
        case 16:
            int1 = notes_convert_colour(varbit_notes_colour16);
            break;
        case 17:
            int1 = notes_convert_colour(varbit_notes_colour17);
            break;
        case 18:
            int1 = notes_convert_colour(varbit_notes_colour18);
            break;
        case 19:
            int1 = notes_convert_colour(varbit_notes_colour19);
            break;
        case 20:
            int1 = notes_convert_colour(varbit_notes_colour20);
            break;
        case 21:
            int1 = notes_convert_colour(varbit_notes_colour21);
            break;
        case 22:
            int1 = notes_convert_colour(varbit_notes_colour22);
            break;
        case 23:
            int1 = notes_convert_colour(varbit_notes_colour23);
            break;
        case 24:
            int1 = notes_convert_colour(varbit_notes_colour24);
            break;
        case 25:
            int1 = notes_convert_colour(varbit_notes_colour25);
            break;
        case 26:
            int1 = notes_convert_colour(varbit_notes_colour26);
            break;
        case 27:
            int1 = notes_convert_colour(varbit_notes_colour27);
            break;
        case 28:
            int1 = notes_convert_colour(varbit_notes_colour28);
            break;
        case 29:
            int1 = notes_convert_colour(varbit_notes_colour29);
            break;
    }
    return int1;
}
