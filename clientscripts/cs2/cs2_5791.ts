/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5791

function cs2_5791(): void {
    let int0: number = 0;
    let int1: number = 0;
    let int2: number = 0;
    let int3: number = 0;
    let str0: string = "Keep doing this for as long as you want.";
    let int4: number = 0;
    let str1: string = "";

    ifSetHide(true, Component.interface_1220.component_1220_8);
    ifSetHide(true, Component.interface_1220.component_1220_0);
    ifSetHide(true, Component.interface_1220.component_1220_22);

    if (cs2_3999(varbit_10700) == 0 && varbit_10700 == varbit_8576) {
        ifSetHide(false, Component.interface_1220.component_1220_22);
        ifSetHide(false, Component.interface_1220.component_1220_25);
        ifSetHide(false, Component.interface_1056.component_1056_125);
        cs2_4212(Component.interface_1220.component_1220_29, "Recommended", Graphic.graphic_4040, colour(0xEBE0BC), colour(0x000000));
        ifSetPosition(ifGetX(Component.interface_1220.component_1220_23), ifGetY(Component.interface_1220.component_1220_21) + 2, 0, 0, Component.interface_1220.component_1220_23);
        cs2_5784(Component.interface_1220.component_1220_21);
    } else if (varbit_task_priority_mode == 1) {
        ifSetHide(true, Component.interface_1220.component_1220_25);
        ifSetHide(true, Component.interface_1056.component_1056_125);
        cs2_4212(Component.interface_1220.component_1220_29, "Next Task", Graphic.graphic_4040, colour(0xEBE0BC), colour(0x000000));
        ifSetPosition(ifGetX(Component.interface_1220.component_1220_23), ifGetY(Component.interface_1220.component_1220_21) + 2, 0, 0, Component.interface_1220.component_1220_23);
        [int0, int1, int2] = cs2_5814(varbit_8576);
        if (int0 != 0 && mapMembers() == 1) {
            ifSetHide(false, Component.interface_1220.component_1220_8);
            ifSetHide(false, Component.interface_1220.component_1220_0);
            proc_aif_progressbar_set(scale(int1, int2, 100), Component.interface_1220.component_1220_34, Component.interface_1220.component_1220_39);
            cs2_4212(Component.interface_1220.component_1220_39, "", Graphic.p11_full, colour(0xEBE0BC), colour(0x000000));
            ifSetText(enumOp(type_int, type_string, Enum.enum_5482, int0), Component.interface_1220.component_1220_10);
            ifSetColour(colour(0xE5B051), Component.interface_1220.component_1220_10);
            str1 = tostring(int1) + " of " + tostring(int2) + " Tasks done in this stage.";
            ifSetOnMouseRepeat(hook(cs2_4538, "IIisifdiiiiii", [Component.interface_1220.component_1220_28, event_com, -1, str1, 180, Graphic.verdana_11pt_regular, Graphic.verdana_11pt_regular, colour(0xFFFFFF), 13, 4, 0, event_mousex, event_mousey]), Component.interface_1220.component_1220_0);
        }
        cs2_4531(Component.interface_1220.component_1220_21);
    } else {
        ifSetHide(false, Component.interface_1220.component_1220_25);
        ifSetHide(false, Component.interface_1056.component_1056_125);
        cs2_4212(Component.interface_1220.component_1220_29, "Active Task", Graphic.graphic_4040, colour(0xEBE0BC), colour(0x000000));
        ifSetPosition(ifGetX(Component.interface_1220.component_1220_23), ifGetY(Component.interface_1220.component_1220_21) + 2, 0, 0, Component.interface_1220.component_1220_23);
        cs2_4531(Component.interface_1220.component_1220_21);
    }
}
