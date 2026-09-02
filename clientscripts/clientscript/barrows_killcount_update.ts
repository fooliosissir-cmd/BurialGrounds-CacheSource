/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,barrows_killcount_update]

function barrows_killcount_update(): void {
    let str0: string = "";
    let int0: number = 0;
    let int1: number = 0;

    if (varbit_barrows_killed_ahrim == 1) {
        str0 = append(str0, "Ahrim" + "<br>");
        int0 = int0 + 1;
        int1 = int1 + 1;
    }

    if (varbit_barrows_killed_dharok == 1) {
        str0 = append(str0, "Dharok" + "<br>");
        int0 = int0 + 1;
        int1 = int1 + 1;
    }

    if (varbit_barrows_killed_guthan == 1) {
        str0 = append(str0, "Guthan" + "<br>");
        int0 = int0 + 1;
        int1 = int1 + 1;
    }

    if (varbit_barrows_killed_karil == 1) {
        str0 = append(str0, "Karil" + "<br>");
        int0 = int0 + 1;
        int1 = int1 + 1;
    }

    if (varbit_barrows_killed_torag == 1) {
        str0 = append(str0, "Torag" + "<br>");
        int0 = int0 + 1;
        int1 = int1 + 1;
    }

    if (varbit_barrows_killed_verac == 1) {
        str0 = append(str0, "Verac" + "<br>");
        int0 = int0 + 1;
        int1 = int1 + 1;
    }

    if (varbit_mah5_killed_barrows_akrisae == 1) {
        str0 = append(str0, "Akrisae" + "<br>");
        int0 = int0 + 1;
        int1 = int1 + 1;
    }

    if (compare(str0, "") == 0) {
        str0 = "None";
        int0 = 1;
    }
    let int2: number = 52 + int0 * 12;
    ifSetSize(ifGetWidth(Component.interface_24.component_24_1), int2, 0, 0, Component.interface_24.component_24_1);
    ifSetText(str0, Component.interface_24.component_24_3);
    ifSetText(tostring(max(0, varbit_barrows_killed_count - int1)), Component.interface_24.component_24_6);
}
