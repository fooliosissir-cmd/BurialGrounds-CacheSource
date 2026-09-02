/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,snapshot_selected_highlight]

function proc_snapshot_selected_highlight(): void {
    let int0: number = 0;

    while (int0 < ifGetNextSubId(Component.interface_594.component_594_92)) {
        if (ccFind(Component.interface_594.component_594_92, int0) == 1) {
            ccSetTrans(255);
        }
        int0 = int0 + 1;
    }

    if (ccFind(Component.interface_594.component_594_92, varc_792) == 1) {
        ccSetTrans(110);
    }
}
