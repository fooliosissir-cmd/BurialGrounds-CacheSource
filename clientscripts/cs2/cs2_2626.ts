/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2626

function cs2_2626(): void {
    ifSettargetcursors(Cursor.cursor_0, Cursor.cursor_1, Component.interface_859.component_859_13);
    ifSettargetcursors(Cursor.cursor_2, Cursor.cursor_3, Component.interface_859.component_859_14);

    if (varbit_mob_current_scenario == 2) {
        ifSettargetcursors(Cursor.cursor_4, Cursor.cursor_5, Component.interface_859.component_859_16);
        ifSettargetcursors(Cursor.cursor_12, Cursor.cursor_13, Component.interface_859.component_859_17);
    } else if (varbit_mob_current_scenario == 3) {
        ifSettargetcursors(Cursor.cursor_6, Cursor.cursor_7, Component.interface_859.component_859_16);
    } else if (varbit_mob_current_scenario == 4) {
        ifSettargetcursors(Cursor.cursor_10, Cursor.cursor_11, Component.interface_859.component_859_16);
        ifSettargetcursors(Cursor.cursor_8, Cursor.cursor_9, Component.interface_859.component_859_17);
    }
    cs2_2628();
}
