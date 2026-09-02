/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,csi_jury_select_highlight]

function csi_jury_select_highlight(): void {
    if (varbit_csi_court_jury_select != 0) {
        ifSetHide(false, Component.interface_987.component_987_30);
    } else {
        ifSetHide(true, Component.interface_987.component_987_30);
    }

    switch (varbit_csi_court_jury_select) {
        case 1:
            ifSetPosition(16, 28, 0, 0, Component.interface_987.component_987_30);
            break;
        case 7:
            ifSetPosition(16, 161, 0, 0, Component.interface_987.component_987_30);
            break;
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            ifSetPosition(16 + (varbit_csi_court_jury_select - 1) * 79, 28, 0, 0, Component.interface_987.component_987_30);
            break;
        case 8:
        case 9:
        case 10:
        case 11:
        case 12:
            ifSetPosition(16 + (varbit_csi_court_jury_select - 7) * 79, 161, 0, 0, Component.interface_987.component_987_30);
            break;
    }
}
