/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,lobby_worldswitcher_timer]

function lobby_worldswitcher_timer(): void {
    if (worldListFetch() == 0) {
        return;
    }

    // Refresh ping/status periodically using the native world-list timer.
    ifSetOnTimer(hook(lobby_worldswitcher_pingtimer, "i", [clientClock() + 500]), Component.interface_910.component_910_0);

    let int0: component = Component.interface_910.component_910_64;
    ccDeleteAll(int0);

    // Clear dynamic remnants from the old multi-column world table.
    ccDeleteAll(Component.interface_910.component_910_68);
    ccDeleteAll(Component.interface_910.component_910_69);
    ccDeleteAll(Component.interface_910.component_910_70);
    ccDeleteAll(Component.interface_910.component_910_71);
    ccDeleteAll(Component.interface_910.component_910_72);
    ccDeleteAll(Component.interface_910.component_910_73);
    ccDeleteAll(Component.interface_910.component_910_74);
    ccDeleteAll(Component.interface_910.component_910_75);
    ccDeleteAll(Component.interface_910.component_910_76);
    ccDeleteAll(Component.interface_910.component_910_77);
    ccDeleteAll(Component.interface_910.component_910_78);

    // Burial Grounds has only two worlds; the old sortable table/favourites UI
    // is intentionally removed in favour of large, clear world cards.
    ifSetHide(true, Component.interface_910.component_910_21);
    ifSetHide(true, Component.interface_910.component_910_22);
    ifSetHide(true, Component.interface_910.component_910_23);
    ifSetHide(true, Component.interface_910.component_910_24);
    ifSetHide(true, Component.interface_910.component_910_25);
    ifSetHide(true, Component.interface_910.component_910_67);

    let [int1, int2, int3, int4, int5, str0, str1, str2] = worldListStart();

    if (int1 == -1) {
        cs2_3143(1, "Unable to load worlds.");
        ifSetText("The Burial Grounds worlds could not be loaded.<br>Please try again.", Component.interface_910.component_910_1);
        ifSetHide(false, Component.interface_910.component_910_1);
        return;
    }

    let int6: number = 0;
    let int7: number = 12;
    let int8: number = ifGetWidth(int0) - 24;
    let int9: number = 68;

    while (int1 != -1) {
        // Never surface an unconfigured legacy world in the Burial Grounds UI.
        if (int1 == 1 || int1 == 3) {
            let str3: string = "";
            let str4: string = "";
            let str5: string = "";
            let int10: colour = colour(0x2E2B26);
            let int11: colour = colour(0x655D4E);

            if (int1 == 3) {
                str3 = "MAIN WORLD";
                str4 = "Greyhaven and the live Burial Grounds adventure";
            } else {
                str3 = "DEVELOPER WORLD";
                str4 = "Local development and testing";
            }

            if (int1 == mapWorld()) {
                int10 = colour(0x40382C);
                int11 = colour(0xA6C68A);
                str3 = str3 + "  -  CURRENT";
            }

            if (int4 < 0) {
                str5 = "Offline";
            } else {
                str5 = tostring(int4) + " players";
                if (int5 >= 0 && int5 < 1000) {
                    str5 = str5 + "   |   " + tostring(int5) + " ms";
                }
            }

            // Clickable card background. Keep sub-id == row index because the
            // native world-selection callback expects to find that row again.
            ccCreate(int0, 3, int6);
            ccSetSize(int8, int9, 0, 0);
            ccSetPosition(12, int7, 0, 0);
            ccSetfill(true);
            ccSetColour(int10);
            ccSetTrans(0);
            ccSetOp(1, "Select");
            ccSetOpBase(str3);
            ccSetOnOp(hook(cs2_3129, "iiis", [event_opindex, int6, int1, str2]));

            // Left accent.
            ccCreate(int0, 3, 100 + int6);
            ccSetSize(4, int9, 0, 0);
            ccSetPosition(12, int7, 0, 0);
            ccSetfill(true);
            ccSetColour(int11);
            ccSetTrans(0);

            // World name.
            ccCreate(int0, 4, 200 + int6);
            ccSetSize(int8 - 190, 22, 0, 0);
            ccSetPosition(30, int7 + 10, 0, 0);
            ccSetTextFont(Graphic.b12_full);
            ccSetTextAlign(0, 1, 0);
            ccSetColour(colour(0xEBE0BC));
            ccSetText(str3);

            // Purpose / lore description.
            ccCreate(int0, 4, 300 + int6);
            ccSetSize(int8 - 210, 20, 0, 0);
            ccSetPosition(30, int7 + 36, 0, 0);
            ccSetTextFont(Graphic.p11_full);
            ccSetTextAlign(0, 1, 0);
            ccSetColour(colour(0xC9BE9D));
            ccSetText(str4);

            // Live status on the right.
            ccCreate(int0, 4, 400 + int6);
            ccSetSize(170, 22, 0, 0);
            ccSetPosition(ifGetWidth(int0) - 194, int7 + 23, 0, 0);
            ccSetTextFont(Graphic.p11_full);
            ccSetTextAlign(2, 1, 0);
            ccSetColour(colour(0xEBE0BC));
            ccSetText(str5);

            int7 = int7 + int9 + 12;
            int6 = int6 + 1;
        }

        [int1, int2, int3, int4, int5, str0, str1, str2] = worldListNext();
    }

    if (int6 == 0) {
        cs2_3143(1, "No Burial Grounds worlds are available.");
        ifSetText("No configured Burial Grounds worlds are currently available.", Component.interface_910.component_910_1);
        ifSetHide(false, Component.interface_910.component_910_1);
        return;
    }

    ifSetHide(true, Component.interface_910.component_910_1);
    ifSetHide(false, Component.interface_910.component_910_13);

    let int12: number = int7 + 8;
    let int13: number = ifGetHeight(Component.interface_910.component_910_62);

    if (int12 <= int13) {
        ifSetScrollPos(0, 0, Component.interface_910.component_910_62);
        ifSetScrollSize(0, int13, Component.interface_910.component_910_62);
        ifSetHide(true, Component.interface_910.component_910_86);
    } else {
        ifSetScrollSize(0, int12, Component.interface_910.component_910_62);
        ifSetHide(false, Component.interface_910.component_910_86);
        proc_scrollbar_vertical(Component.interface_910.component_910_86, Component.interface_910.component_910_62, Graphic.scrollbar_dragger_v2_3, Graphic.scrollbar_dragger_v2_0, Graphic.scrollbar_dragger_v2_1, Graphic.scrollbar_dragger_v2_2, Graphic.scrollbar_v2_0, Graphic.scrollbar_v2_1);
    }
}
