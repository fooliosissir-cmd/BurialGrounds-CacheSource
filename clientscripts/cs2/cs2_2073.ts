/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2073

function cs2_2073(intArg0: number): void {
    switch (intArg0) {
        case 18087988:
        case 18087940:
            ifSetHide(false, Component.interface_276.component_276_79);
            ifSetHide(true, Component.interface_276.component_276_80);
            ifSetHide(true, Component.interface_276.component_276_78);
            break;
        case 18087987:
        case 18087957:
            ifSetHide(true, Component.interface_276.component_276_79);
            ifSetHide(true, Component.interface_276.component_276_80);
            ifSetHide(false, Component.interface_276.component_276_78);
            break;
        case 18087958:
        case 18087941:
            ifSetHide(true, Component.interface_276.component_276_79);
            ifSetHide(false, Component.interface_276.component_276_80);
            ifSetHide(true, Component.interface_276.component_276_78);
            break;
        default:
            return;
    }
}
