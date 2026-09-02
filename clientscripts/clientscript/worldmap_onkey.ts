/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,worldmap_onkey]

function worldmap_onkey(intArg0: number, intArg1: number, intArg2: component, intArg3: coord): void {
    switch (intArg0) {
        case 84:
            if (intArg3 != -1) {
                worldMapJumptodisplaycoord(intArg3);
            }
            varcstr_worldmap_findtext = "";
            cs2_308(intArg2);
            return;
        case 96:
            worldmap_arrowkey(-1, 0);
            return;
        case 97:
            worldmap_arrowkey(1, 0);
            return;
        case 98:
            worldmap_arrowkey(0, 1);
            return;
        case 99:
            worldmap_arrowkey(0, -1);
            return;
    }
    let str0: string = removetags(add_to_inputstring(varcstr_worldmap_findtext, 4, intArg0, intArg1));

    if (stringIndexofString(str0, "  ", 0) != -1) {
        return;
    }

    if (compare(str0, " ") == 0) {
        return;
    }

    if (paraheight(str0, ifGetWidth(intArg2), Graphic.p11_full) > 1) {
        return;
    }
    varcstr_worldmap_findtext = lowercase(str0);
    let int4: number = stringLength(varcstr_worldmap_findtext);

    if (int4 <= 0) {
        cs2_308(intArg2);
        return;
    }
    let int5: number = -1;
    let int6: number = 0;
    let str1: string = "";
    let int7: coord = -1;
    let int8: number = 2147483647;
    let int9: number = 2147483647;
    let [int10, int11] = worldMapListelementStart();

    while (int10 != -1) {
        str0 = removetags(cs2_2332(mecText(int10), "<br>", " "));
        int5 = stringIndexofString(lowercase(str0), varcstr_worldmap_findtext, 0);
        if (int5 != -1 && int5 <= int8) {
            int6 = stringLength(str0);
            if (int6 < int9) {
                int7 = int11;
                str1 = str0;
                [int8, int9] = [int5, int6];
            }
        }
        [int10, int11] = worldMapListelementNext();
    }

    if (int7 == -1) {
        ifSetOnKey(hook(worldmap_onkey, "izIc", [event_keycode, event_keychar, intArg2, -1]), intArg2);
        if (parawidth(varcstr_worldmap_findtext, ifGetWidth(intArg2), Graphic.p11_full) > ifGetWidth(intArg2)) {
            ifSetTextAlign(2, 1, 0, intArg2);
        } else {
            ifSetTextAlign(0, 1, 0, intArg2);
        }
        ifSetText("<col=ff0000>" + varcstr_worldmap_findtext + "</col>", intArg2);
        return;
    }
    str0 = "";

    if (int8 > 0) {
        str0 = subString(str1, 0, int8);
    }
    str0 = append(str0, "<col=ffffff>" + subString(str1, int8, int8 + int4) + "</col>");
    str0 = append(str0, subString(str1, int8 + int4, stringLength(str1)));
    ifSetText(str0, intArg2);
    ifSetOnKey(hook(worldmap_onkey, "izIc", [event_keycode, event_keychar, intArg2, int7]), intArg2);
}
