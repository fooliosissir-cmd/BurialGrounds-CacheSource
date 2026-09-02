/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_217

function cs2_217(): void {
    ifSetText("Reporting: " + varcstr_snapshot_name, Component.interface_594.component_594_106);
    ifSetText(varcstr_snapshot_name, Component.interface_594.component_594_71);

    if (compare(varcstr_snapshot_name, "") != 0) {
        ifSetHide(true, Component.interface_594.component_594_81);
    } else {
        ifSetHide(false, Component.interface_594.component_594_81);
    }
}
