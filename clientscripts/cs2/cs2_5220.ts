/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5220

function cs2_5220(): void {
    let int0: number = clan_stronghold_main_get_tab();

    switch (int0) {
        case 0:
            proc_deltooltip(Component.interface_1259.component_1259_33);
            proc_deltooltip(Component.interface_1259.component_1259_57);
            break;
        case 1:
            proc_deltooltip(Component.interface_1261.component_1261_126);
            proc_deltooltip(Component.interface_1261.component_1261_153);
            proc_deltooltip(Component.interface_1261.component_1261_102);
            break;
        case 2:
            proc_deltooltip(Component.interface_1258.component_1258_119);
            proc_deltooltip(Component.interface_1258.component_1258_147);
            proc_deltooltip(Component.interface_1258.component_1258_108);
            proc_deltooltip(Component.interface_1258.component_1258_484);
            break;
        case 3:
            proc_deltooltip(Component.interface_1260.component_1260_324);
            proc_deltooltip(Component.interface_1260.component_1260_93);
            break;
    }
}
