/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4343

function cs2_4343(intArg0: component): void {
    let str0: string = "";

    let [str1, str2, str3, str4, str5, str6, str7, str8, str9, str10] = cs2_4721();

    if (compare(str1, "") != 0) {
        str0 = str1;
    }

    if (compare(str2, "") != 0) {
        if (stringLength(str0) > 0) {
            str0 = append(str0, ", ");
        }
        str0 = append(str0, str2);
    }

    if (compare(str3, "") != 0) {
        if (stringLength(str0) > 0) {
            str0 = append(str0, ", ");
        }
        str0 = append(str0, str3);
    }

    if (compare(str4, "") != 0) {
        if (stringLength(str0) > 0) {
            str0 = append(str0, ", ");
        }
        str0 = append(str0, str4);
    }

    if (compare(str5, "") != 0) {
        if (stringLength(str0) > 0) {
            str0 = append(str0, ", ");
        }
        str0 = append(str0, str5);
    }

    if (compare(str6, "") != 0) {
        if (stringLength(str0) > 0) {
            str0 = append(str0, ", ");
        }
        str0 = append(str0, str6);
    }

    if (compare(str7, "") != 0) {
        if (stringLength(str0) > 0) {
            str0 = append(str0, ", ");
        }
        str0 = append(str0, str7);
    }

    if (compare(str8, "") != 0) {
        if (stringLength(str0) > 0) {
            str0 = append(str0, ", ");
        }
        str0 = append(str0, str8);
    }

    if (compare(str9, "") != 0) {
        if (stringLength(str0) > 0) {
            str0 = append(str0, ", ");
        }
        str0 = append(str0, str9);
    }

    if (compare(str10, "") != 0) {
        if (stringLength(str0) > 0) {
            str0 = append(str0, ", ");
        }
        str0 = append(str0, str10);
    }
    ifSetText(str0, intArg0);
}
