/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_3045

function cs2_3045(): void {
    switch (chatGetFilterPrivate()) {
        case 0:
            ifSetText("Everybody", Component.interface_909.component_909_66);
            break;
        case 1:
            ifSetText("Friends", Component.interface_909.component_909_66);
            break;
        case 2:
            ifSetText("Nobody", Component.interface_909.component_909_66);
            break;
    }
}
