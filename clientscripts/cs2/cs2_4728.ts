/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4728

function cs2_4728(intArg0: number): void {
    if (clanProfileFind() == 1) {
        cs2_4896();
        switch (loadClanVarbit<2074>()) {
            case 0:
            case 1:
            case 2:
            case 3:
                cs2_4897(loadClanVarbit<2074>());
                break;
            default:
                cs2_4897(loadClanVarbit<2598>());
                break;
        }
        proc_scrollbar_vertical(Component.interface_1261.component_1261_55, Component.interface_1261.component_1261_56, Graphic.aif_scrollbar_dragger_2_3, Graphic.aif_scrollbar_dragger_2_0, Graphic.aif_scrollbar_dragger_2_1, Graphic.aif_scrollbar_dragger_2_2, Graphic.aif_scrollbar_arrow_2_1, Graphic.aif_scrollbar_arrow_2_0);
        cs2_4991();
        cs2_4900();
        cs2_4905();
        cs2_5012();
        cs2_4859();
        proc_clan_stronghold_main_buildings_tab_onop();
        cs2_4989(intArg0);
    } else {
        mes("Clan stronghold information not yet available.");
    }
}
