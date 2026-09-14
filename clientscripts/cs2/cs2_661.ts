/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_661

function cs2_661(intArg0: component, intArg1: component, intArg2: graphic, intArg3: graphic, intArg4: number, strArg0: string, strArg1: string, intArg5: obj, intArg6: number, intArg7: obj, intArg8: number, intArg9: obj, intArg10: number, intArg11: obj, intArg12: number): void {
    if (ccFind(intArg0, 0) == 1) {
        switch (intArg5) {
            case Obj.rand_loremel_01_spell:
                [intArg4, strArg0, intArg5] = cs2_3357();
                break;
            case Obj.rand_loreran_01_spell:
                [intArg4, strArg0, intArg5] = cs2_3358();
                break;
            case Obj.rand_loremag_01_spell:
                [intArg4, strArg0, intArg5] = cs2_3359();
                break;
            case Obj.rand_loreskill_01_spell:
                [intArg4, strArg0, intArg5] = cs2_3360();
                break;
            case Obj.rand_lorebob_01_spell:
                [intArg4, strArg0, intArg5] = cs2_3361();
                break;
            case Obj.rand_loreheal_01_spell:
                [intArg4, strArg0, intArg5] = cs2_3362();
                break;
            case Obj.obj_12461:
                [intArg4, strArg0, intArg5] = cs2_775();
                break;
        }
        strArg0 = append(strArg0, " (" + tostring(varbit_4288) + " Special Move points)");
        lore_updateicon_v2(Component.interface_662.component_662_74, intArg2, intArg3, intArg4, intArg5, intArg6, intArg7, intArg8, intArg9, intArg10, intArg11, intArg12);
        ccSetOnMouseRepeat(hook(cs2_10, "IIissoioioioi", [event_com, Component.interface_662.component_662_73, intArg4, strArg0, strArg1, intArg5, intArg6, intArg7, intArg8, intArg9, intArg10, intArg11, intArg12]));
        ccSetOnMouseLeave(hook(lore_deltooltip, "I", [Component.interface_662.component_662_73]));
    }
}
