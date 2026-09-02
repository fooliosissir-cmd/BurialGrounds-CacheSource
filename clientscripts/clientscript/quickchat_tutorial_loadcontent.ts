/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,quickchat_tutorial_loadcontent]

function quickchat_tutorial_loadcontent(): void {
    if (varbit_quickchat_tutorial_show != varc_quickchat_tutorial_show_client) {
        varc_quickchat_tutorial_show_client = varbit_quickchat_tutorial_show;
        if (varbit_quickchat_tutorial_show == 1) {
            cs2_1029(Enum.enum_1484, 9);
        } else if (varbit_quickchat_tutorial_show == 2) {
            proc_quickchat_tutorial_showpage(Enum.enum_1486, 0, 7);
        } else if (varbit_quickchat_tutorial_show == 3) {
            cs2_1030(1485);
        }
    }
}
