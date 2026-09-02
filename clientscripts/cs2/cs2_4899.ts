/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4899

function cs2_4899(intArg0: number): void {
    varbit_clan_stronghold_main_map_mode = intArg0;
    cs2_4935();
    cs2_4940();

    switch (intArg0) {
        case 0:
            ifSetHide(true, Component.interface_1261.component_1261_47);
            ifSetHide(true, Component.interface_1258.component_1258_103);
            ifSetHide(true, Component.interface_1258.component_1258_102);
            ifSetHide(false, Component.interface_1259.component_1259_5);
            ifSetText("", Component.interface_1259.component_1259_153);
            ifSetHide(true, Component.interface_1259.component_1259_150);
            break;
        case 1:
            ifSetHide(false, Component.interface_1261.component_1261_47);
            ifSetHide(true, Component.interface_1258.component_1258_103);
            ifSetHide(true, Component.interface_1258.component_1258_102);
            ifSetText("", Component.interface_1261.component_1261_266);
            ifSetHide(true, Component.interface_1261.component_1261_263);
            ifSetHide(true, Component.interface_1259.component_1259_5);
            cs2_5009();
            cs2_5011();
            break;
        case 2:
            cs2_4860();
            cs2_4863();
            cs2_4859();
            ifSetHide(true, Component.interface_1261.component_1261_47);
            ifSetHide(false, Component.interface_1258.component_1258_103);
            ifSetHide(false, Component.interface_1258.component_1258_102);
            ifSetText("", Component.interface_1258.component_1258_195);
            ifSetHide(true, Component.interface_1258.component_1258_192);
            ifSetHide(true, Component.interface_1259.component_1259_5);
            cs2_5009();
            break;
        case 4:
            ifSetHide(false, Component.interface_1261.component_1261_47);
            ifSetHide(true, Component.interface_1258.component_1258_103);
            ifSetHide(true, Component.interface_1258.component_1258_102);
            ifSetText("Please select an available spot from the map.", Component.interface_1261.component_1261_266);
            ifSetHide(false, Component.interface_1261.component_1261_263);
            ifSetHide(true, Component.interface_1259.component_1259_5);
            cs2_5010();
            cs2_4935();
            break;
        case 3:
            ifSetHide(false, Component.interface_1261.component_1261_47);
            ifSetHide(true, Component.interface_1258.component_1258_103);
            ifSetHide(true, Component.interface_1258.component_1258_102);
            ifSetText("Please select a spot from the map.", Component.interface_1261.component_1261_266);
            ifSetHide(false, Component.interface_1261.component_1261_263);
            ifSetHide(true, Component.interface_1259.component_1259_5);
            cs2_5010();
            break;
        case 5:
            ifSetHide(true, Component.interface_1261.component_1261_47);
            ifSetHide(false, Component.interface_1258.component_1258_103);
            ifSetHide(false, Component.interface_1258.component_1258_102);
            ifSetText("Please select an available spot from the map.", Component.interface_1258.component_1258_195);
            ifSetHide(false, Component.interface_1258.component_1258_192);
            ifSetHide(true, Component.interface_1259.component_1259_5);
            cs2_5009();
            break;
    }
    cs2_4853();
}
