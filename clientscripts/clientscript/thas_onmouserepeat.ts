/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,thas_onmouserepeat]

function thas_onmouserepeat(intArg0: component, strArg0: string): void {
    let int1: number = ifGetX(intArg0) - 101;
    let int2: number = ifGetY(intArg0);
    let int3: graphic = cs2_6003(ifGetGraphic(intArg0));

    int1 = max(int1, 20);
    int1 = min(int1, 230);

    if (int2 <= 150) {
        int2 = int2 + 40;
    } else {
        int2 = int2 - 50;
    }
    let int4: number = 0;

    switch (intArg0) {
        case Component.interface_1092.component_1092_7:
            if (varbit_deserttreasure == 15) {
                int4 = 1;
            }
            break;
        case Component.interface_1092.component_1092_39:
            if (varbit_lunar_quest_main == 190) {
                int4 = 1;
            }
            break;
        case Component.interface_1092.component_1092_40:
            int4 = varbit_thas_active_al_kharid;
            break;
        case Component.interface_1092.component_1092_41:
            int4 = varbit_thas_active_ardougne;
            break;
        case Component.interface_1092.component_1092_42:
            int4 = varbit_thas_active_burthorpe;
            break;
        case Component.interface_1092.component_1092_43:
            int4 = varbit_thas_active_catherby;
            break;
        case Component.interface_1092.component_1092_44:
            int4 = varbit_thas_active_draynor;
            break;
        case Component.interface_1092.component_1092_45:
            int4 = varbit_thas_active_edgeville;
            break;
        case Component.interface_1092.component_1092_46:
            int4 = varbit_thas_active_falador;
            break;
        case Component.interface_1092.component_1092_47:
            int4 = varbit_thas_active_lumbridge;
            break;
        case Component.interface_1092.component_1092_48:
            int4 = varbit_thas_active_port_sarim;
            break;
        case Component.interface_1092.component_1092_49:
            int4 = varbit_thas_active_seers;
            break;
        case Component.interface_1092.component_1092_50:
            int4 = varbit_thas_active_taverley;
            break;
        case Component.interface_1092.component_1092_51:
            int4 = varbit_thas_active_varrock;
            break;
        case Component.interface_1092.component_1092_52:
            int4 = varbit_thas_active_yanille;
            break;
    }

    if (int4 == 1) {
        ifSetText("Click to teleport" + "<br>" + "to this lodestone.", Component.interface_1092.component_1092_66);
    } else {
        ifSetText("This lodestone" + "<br>" + "is not yet active.", Component.interface_1092.component_1092_66);
    }
    ifSetGraphic(int3, Component.interface_1092.component_1092_64);
    ifSetText(strArg0, Component.interface_1092.component_1092_65);
    ifSetPosition(int1, int2, 0, 0, Component.interface_1092.component_1092_55);
    ifSetHide(false, Component.interface_1092.component_1092_55);
    ifSetGraphic(int3, Component.interface_1092.component_1092_54);
    ifSetPosition(ifGetX(intArg0) - 5, ifGetY(intArg0) - 5, 0, 0, Component.interface_1092.component_1092_53);
    ifSetHide(false, Component.interface_1092.component_1092_53);
}
