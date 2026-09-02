/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1111

function cs2_1111(): string {
    switch (varc_754) {
        case 0:
        case 9:
        case 17:
            if (cs2_1103() == 1 && varbit_8095 >= varbit_8094) {
                return "Make All";
            }
            return "Make " + tostring(varbit_8095);
        case 1:
        case 18:
            if (varbit_8095 == 1) {
                return "Make 1 set";
            }
            return "Make " + tostring(varbit_8095) + " sets";
        case 2:
            if (cs2_1103() == 1 && varbit_8095 >= varbit_8094) {
                return "Cook All";
            }
            return "Cook " + tostring(varbit_8095);
        case 3:
            if (cs2_1103() == 1 && varbit_8095 >= varbit_8094) {
                return "Roast All";
            }
            return "Roast " + tostring(varbit_8095);
        case 4:
            if (cs2_1103() == 1 && varbit_8095 >= varbit_8094) {
                return "Offer All";
            }
            return "Offer " + tostring(varbit_8095);
        case 5:
            if (cs2_1103() == 1 && varbit_8095 >= varbit_8094) {
                return "Sell All";
            }
            return "Sell " + tostring(varbit_8095);
        case 6:
        case 20:
            if (cs2_1103() == 1 && varbit_8095 >= varbit_8094) {
                return "Bake All";
            }
            return "Bake " + tostring(varbit_8095);
        case 7:
            if (cs2_1103() == 1 && varbit_8095 >= varbit_8094) {
                return "Cut All";
            }
            return "Cut " + tostring(varbit_8095);
        case 8:
            if (cs2_1103() == 1 && varbit_8095 >= varbit_8094) {
                return "Deposit All";
            }
            return "Deposit " + tostring(varbit_8095);
        case 10:
            if (cs2_1103() == 1 && varbit_8095 >= varbit_8094) {
                return "Teleport All";
            }
            return "Teleport " + tostring(varbit_8095);
        case 11:
        case 19:
            if (cs2_1103() == 1 && varbit_8095 >= varbit_8094) {
                return "Select All";
            }
            break;
        case 12:
            if (varbit_8095 == 1) {
                return "Make 1 set";
            }
            return "Make " + tostring(varbit_8095) + " sets";
        case 13:
            if (cs2_1103() == 1 && varbit_8095 >= varbit_8094) {
                return "Take All";
            }
            return "Take " + tostring(varbit_8095);
        case 14:
            if (cs2_1103() == 1 && varbit_8095 >= varbit_8094) {
                return "Return All";
            }
            return "Return " + tostring(varbit_8095);
        case 15:
            if (cs2_1103() == 1 && varbit_8095 >= varbit_8094) {
                return "Heat All";
            }
            return "Heat " + tostring(varbit_8095);
        case 16:
            if (cs2_1103() == 1 && varbit_8095 >= varbit_8094) {
                return "Add All";
            }
            return "Add " + tostring(varbit_8095);
    }
    return "Select";
}
