/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6357

function cs2_6357(intArg0: component): component {
    if (intArg0 < Component._100guide_eggs_overlay._100_q5 || intArg0 >= Component._100guide_eggs_overlay._100_egg_anim2) {
        return -1;
    }

    if (getWindowMode() >= 2) {
        switch (intArg0) {
            case Component._100guide_eggs_overlay._100_q5:
                return Component.interface_746.component_746_282;
            case Component._100guide_eggs_overlay._100_q_anim5:
                return Component.interface_746.component_746_304;
            case Component._100guide_eggs_overlay._100_egg_anim5:
                return Component.interface_746.component_746_326;
            case Component._100guide_eggs_overlay._100_q_anim4:
                return Component.interface_746.component_746_348;
            case Component._100guide_eggs_overlay._100_egg_anim4:
                return Component.interface_746.component_746_370;
            case Component._100guide_eggs_overlay._100_q_anim3:
                return Component.interface_746.component_746_392;
            case Component._100guide_eggs_overlay._100_egg_anim3:
                return Component.interface_746.component_746_414;
            case Component._100guide_eggs_overlay._100_q_anim2:
                return Component.interface_746.component_746_436;
        }
    } else {
        switch (intArg0) {
            case Component._100guide_eggs_overlay._100_q5:
                return Component.interface_548.component_548_249;
            case Component._100guide_eggs_overlay._100_q_anim5:
                return Component.interface_548.component_548_271;
            case Component._100guide_eggs_overlay._100_egg_anim5:
                return Component.interface_548.component_548_293;
            case Component._100guide_eggs_overlay._100_q_anim4:
                return Component.interface_548.component_548_315;
            case Component._100guide_eggs_overlay._100_egg_anim4:
                return Component.interface_548.component_548_337;
            case Component._100guide_eggs_overlay._100_q_anim3:
                return Component.interface_548.component_548_359;
            case Component._100guide_eggs_overlay._100_egg_anim3:
                return Component.interface_548.component_548_381;
            case Component._100guide_eggs_overlay._100_q_anim2:
                return Component.interface_548.component_548_403;
        }
    }
    return -1;
}
