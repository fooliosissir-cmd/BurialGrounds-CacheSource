/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_608

function cs2_608(): void {
    if (ccFind(Component.interface_662.component_662_74, 0) == 1) {
        ccSetOpBase("<col=00ff00>" + varcstr_lore_spell_opbase);
        ccSettargetverb("Cast");
        if (varc_lore_spell_op_binary == 1) {
            ccSetOp(1, "Cast");
        }
    }

    if (ccFind(Component.interface_747.component_747_18, 0) == 1) {
        ccSetOpBase("<col=00ff00>" + varcstr_lore_spell_opbase);
        ccSettargetverb("Cast");
        if (varc_lore_spell_op_binary == 1) {
            ccSetOp(1, "Cast");
        }
    }
}
