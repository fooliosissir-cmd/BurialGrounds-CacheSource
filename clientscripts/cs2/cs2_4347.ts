/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4347

function cs2_4347(): void {
    let int0: Enum = -1;

    if (varp_clan_keyword_temp_cat_varp > 0) {
        int0 = enumOp(type_int, type_enum, Enum.clan_keyword_categories_id, varp_clan_keyword_temp_cat_varp);
        if (int0 != -1) {
            ifSetHide(true, Component.interface_1097.component_1097_202);
            ifSetScrollPos(0, 0, Component.interface_1097.component_1097_207);
            cs2_4499(int0, 1, "Select a keyword", enumGetoutputcount(int0), 7, Component.interface_1097.component_1097_196, Component.interface_1097.component_1097_206, Component.interface_1097.component_1097_208, Component.interface_1097.component_1097_207, Component.interface_1097.component_1097_213);
        }
    } else {
        ifSetHide(false, Component.interface_1097.component_1097_202);
        cs2_4501(Component.interface_1097.component_1097_196, "Select a keyword");
        cs2_4501(Component.interface_1097.component_1097_182, "Select a category");
    }
}
