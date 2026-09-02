/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4199

function cs2_4199(intArg0: component): void {
    ifSetGraphic(Graphic.graphic_5416, intArg0);
    ifSetHide(false, Component.interface_891.component_891_76);
    ifSetHide(false, Component.interface_891.component_891_65);

    if (intArg0 == Component.interface_891.component_891_56) {
        ifSetText("Cannon Room", Component.interface_891.component_891_75);
        ifSetText("62+", Component.interface_891.component_891_77);
        ifSetText("(Members only) Fix up broken cannons. This offers fast XP, for medium resource costs.", Component.interface_891.component_891_78);
    }

    if (intArg0 == Component.interface_891.component_891_57) {
        ifSetText("Burial Armour Room", Component.interface_891.component_891_75);
        ifSetText("30-70", Component.interface_891.component_891_77);
        ifSetText("Forge burial armour in line with the taskmaster's orders. Different XP rates at a range of resource costs.", Component.interface_891.component_891_78);
    }

    if (intArg0 == Component.interface_891.component_891_58) {
        ifSetText("Ceremonial Sword Room", Component.interface_891.component_891_75);
        ifSetText("70+", Component.interface_891.component_891_77);
        ifSetText("(Members Only) Smith beautiful ceremonial swords. High XP rate, for reasonably high resource costs.", Component.interface_891.component_891_78);
    }

    if (intArg0 == Component.interface_891.component_891_59) {
        ifSetText("Track Room", Component.interface_891.component_891_75);
        ifSetText("1-30", Component.interface_891.component_891_77);
        ifSetText("Build up sections of mine cart tracks. Low XP rate, no resource costs.", Component.interface_891.component_891_78);
    }

    if (intArg0 == Component.interface_891.component_891_60) {
        ifSetText("Reward Shop", Component.interface_891.component_891_75);
        ifSetText("--", Component.interface_891.component_891_77);
        ifSetText("Purchase unique rewards using respect earned in the workshop.", Component.interface_891.component_891_78);
    }
}
