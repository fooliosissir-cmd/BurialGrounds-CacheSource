/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4832

function cs2_4832(intArg0: component, intArg1: number): void {
    cs2_4834(intArg0);

    if (ccFind(intArg0, intArg1) == 1) {
        if (ccGetGraphic() == 6009) {
            switch (varbit_clan_custom_stronghold_current_slot_varp) {
                case 1:
                    switch (intArg0) {
                        case Component.interface_1258.component_1258_426:
                        case Component.interface_1258.component_1258_358:
                        case Component.interface_1258.component_1258_284:
                            varbit_clan_custom_slot_1_options1_varp = 1 + intArg1;
                            break;
                        case Component.interface_1258.component_1258_414:
                        case Component.interface_1258.component_1258_344:
                        case Component.interface_1258.component_1258_268:
                            varbit_clan_custom_slot_1_options2_varp = 1 + intArg1;
                            break;
                        case Component.interface_1258.component_1258_402:
                        case Component.interface_1258.component_1258_330:
                        case Component.interface_1258.component_1258_252:
                            varbit_clan_custom_slot_1_options3_varp = 1 + intArg1;
                            break;
                    }
                    break;
                case 2:
                    switch (intArg0) {
                        case Component.interface_1258.component_1258_426:
                        case Component.interface_1258.component_1258_358:
                        case Component.interface_1258.component_1258_284:
                            varbit_clan_custom_slot_2_options1_varp = 1 + intArg1;
                            break;
                        case Component.interface_1258.component_1258_414:
                        case Component.interface_1258.component_1258_344:
                        case Component.interface_1258.component_1258_268:
                            varbit_clan_custom_slot_2_options2_varp = 1 + intArg1;
                            break;
                        case Component.interface_1258.component_1258_402:
                        case Component.interface_1258.component_1258_330:
                        case Component.interface_1258.component_1258_252:
                            varbit_clan_custom_slot_2_options3_varp = 1 + intArg1;
                            break;
                    }
                    break;
                case 3:
                    switch (intArg0) {
                        case Component.interface_1258.component_1258_426:
                        case Component.interface_1258.component_1258_358:
                        case Component.interface_1258.component_1258_284:
                            varbit_clan_custom_slot_3_options1_varp = 1 + intArg1;
                            break;
                        case Component.interface_1258.component_1258_414:
                        case Component.interface_1258.component_1258_344:
                        case Component.interface_1258.component_1258_268:
                            varbit_clan_custom_slot_3_options2_varp = 1 + intArg1;
                            break;
                        case Component.interface_1258.component_1258_402:
                        case Component.interface_1258.component_1258_330:
                        case Component.interface_1258.component_1258_252:
                            varbit_clan_custom_slot_3_options3_varp = 1 + intArg1;
                            break;
                    }
                    break;
            }
            ccSetGraphic(gameframe_skin_graphic(Graphic.aif_checkbox_large_0));
        } else {
            cs2_4834(intArg0);
        }
    }
    cs2_4838();
    cs2_4810();
    cs2_4840();
    cs2_4814();
}
