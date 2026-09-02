/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_249

function cs2_249(): void {
    varc_799 = varc_799 + 1;

    if (varc_799 >= 30) {
        varc_799 = 0;
        if (varc_798 == 1) {
            varc_798 = 0;
        } else {
            varc_798 = 1;
        }
    }

    if (varc_798 == 1) {
        ifSetText(escape(varcstr_snapshot_name) + "<col=ffff00>" + " ", Component.interface_594.component_594_53);
    } else {
        ifSetText(escape(varcstr_snapshot_name) + "<col=ffff00>" + "|", Component.interface_594.component_594_53);
    }

    if (compare(varcstr_snapshot_name, "") == 0) {
        ifSetColour(colour(0xBBBBBB), Component.interface_594.component_594_58);
    } else {
        ifSetColour(colour(0xFFFFFF), Component.interface_594.component_594_58);
    }
}
