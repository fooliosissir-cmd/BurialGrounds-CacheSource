/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5702

function cs2_5702(intArg0: number): void {
    switch (intArg0) {
        case 1:
            varc_1755 = 1;
            ifSetText("Level: High-Low", Component.interface_1218.component_1218_71);
            break;
        case 2:
            varc_1755 = 2;
            ifSetText("Name: A-Z", Component.interface_1218.component_1218_71);
            break;
        case 3:
            varc_1755 = 3;
            ifSetText("Name: Z-A", Component.interface_1218.component_1218_71);
            break;
        default:
            varc_1755 = 0;
            ifSetText("Level: Low-High", Component.interface_1218.component_1218_71);
            break;
    }
    ifSetHide(true, Component.interface_1218.component_1218_66);
    skillguide_skill_refresh(varc_skillguide_skill_clicked);
}
