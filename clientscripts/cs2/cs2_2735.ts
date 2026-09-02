/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2735

function cs2_2735(intArg0: component, intArg1: component, intArg2: component, intArg3: component, intArg4: component, intArg5: component): void {
    if (varp_287 <= 0) {
        ifSetHide(false, intArg0);
        ifSetHide(true, intArg2);
    } else {
        ifSetHide(true, intArg0);
        ifSetHide(false, intArg2);
    }
    ifSetColour(enumOp(type_int, type_int, Enum.enum_3724, varbit_option_clanchatcolour), intArg1);
    ifSetColour(enumOp(type_int, type_int, Enum.pm_colours, varp_287), intArg3);
    ifSetColour(enumOp(type_int, type_int, Enum.friend_colours, varbit_option_friendchatcolour), intArg4);
    ifSetColour(enumOp(type_int, type_int, Enum.guest_colours, varbit_option_guestchatcolour), intArg5);
    ifSetTextShadow(enumOp(type_int, type_boolean, Enum.pm_shadows, varp_287), intArg3);
    cs2_3418(Component.interface_982.component_982_17, 0, varbit_option_clanchatcolour);
    cs2_3418(Component.interface_982.component_982_18, 1, varbit_option_clanchatcolour);
    cs2_3418(Component.interface_982.component_982_19, 2, varbit_option_clanchatcolour);
    cs2_3418(Component.interface_982.component_982_20, 3, varbit_option_clanchatcolour);
    cs2_3418(Component.interface_982.component_982_21, 4, varbit_option_clanchatcolour);
    cs2_3418(Component.interface_982.component_982_22, 5, varbit_option_clanchatcolour);
    cs2_3418(Component.interface_982.component_982_23, 6, varbit_option_clanchatcolour);
    cs2_3418(Component.interface_982.component_982_24, 7, varbit_option_clanchatcolour);
    cs2_3418(Component.interface_982.component_982_25, 8, varbit_option_clanchatcolour);
    cs2_3418(Component.interface_982.component_982_26, 9, varbit_option_clanchatcolour);
    cs2_3418(Component.interface_982.component_982_27, 10, varbit_option_clanchatcolour);
    cs2_3418(Component.interface_982.component_982_28, 11, varbit_option_clanchatcolour);
    cs2_3418(Component.interface_982.component_982_29, 12, varbit_option_clanchatcolour);
    cs2_3418(Component.interface_982.component_982_30, 13, varbit_option_clanchatcolour);
    cs2_3418(Component.interface_982.component_982_31, 14, varbit_option_clanchatcolour);
    cs2_3418(Component.interface_982.component_982_32, 15, varbit_option_clanchatcolour);
    cs2_3418(Component.interface_982.component_982_33, 20, varbit_option_clanchatcolour);
    cs2_3418(Component.interface_982.component_982_34, 17, varbit_option_clanchatcolour);
    cs2_3418(Component.interface_982.component_982_35, 18, varbit_option_clanchatcolour);
    cs2_3418(Component.interface_982.component_982_36, 19, varbit_option_clanchatcolour);
    cs2_3418(Component.interface_982.component_982_97, 0, varbit_option_guestchatcolour);
    cs2_3418(Component.interface_982.component_982_98, 1, varbit_option_guestchatcolour);
    cs2_3418(Component.interface_982.component_982_99, 2, varbit_option_guestchatcolour);
    cs2_3418(Component.interface_982.component_982_100, 3, varbit_option_guestchatcolour);
    cs2_3418(Component.interface_982.component_982_101, 4, varbit_option_guestchatcolour);
    cs2_3418(Component.interface_982.component_982_102, 5, varbit_option_guestchatcolour);
    cs2_3418(Component.interface_982.component_982_103, 6, varbit_option_guestchatcolour);
    cs2_3418(Component.interface_982.component_982_104, 7, varbit_option_guestchatcolour);
    cs2_3418(Component.interface_982.component_982_105, 8, varbit_option_guestchatcolour);
    cs2_3418(Component.interface_982.component_982_106, 9, varbit_option_guestchatcolour);
    cs2_3418(Component.interface_982.component_982_107, 10, varbit_option_guestchatcolour);
    cs2_3418(Component.interface_982.component_982_108, 11, varbit_option_guestchatcolour);
    cs2_3418(Component.interface_982.component_982_109, 12, varbit_option_guestchatcolour);
    cs2_3418(Component.interface_982.component_982_110, 13, varbit_option_guestchatcolour);
    cs2_3418(Component.interface_982.component_982_111, 14, varbit_option_guestchatcolour);
    cs2_3418(Component.interface_982.component_982_112, 15, varbit_option_guestchatcolour);
    cs2_3418(Component.interface_982.component_982_113, 20, varbit_option_guestchatcolour);
    cs2_3418(Component.interface_982.component_982_114, 17, varbit_option_guestchatcolour);
    cs2_3418(Component.interface_982.component_982_115, 18, varbit_option_guestchatcolour);
    cs2_3418(Component.interface_982.component_982_116, 19, varbit_option_guestchatcolour);
    cs2_3418(Component.interface_982.component_982_72, 0, varbit_option_friendchatcolour);
    cs2_3418(Component.interface_982.component_982_73, 1, varbit_option_friendchatcolour);
    cs2_3418(Component.interface_982.component_982_74, 2, varbit_option_friendchatcolour);
    cs2_3418(Component.interface_982.component_982_75, 3, varbit_option_friendchatcolour);
    cs2_3418(Component.interface_982.component_982_76, 4, varbit_option_friendchatcolour);
    cs2_3418(Component.interface_982.component_982_77, 5, varbit_option_friendchatcolour);
    cs2_3418(Component.interface_982.component_982_78, 6, varbit_option_friendchatcolour);
    cs2_3418(Component.interface_982.component_982_79, 7, varbit_option_friendchatcolour);
    cs2_3418(Component.interface_982.component_982_80, 8, varbit_option_friendchatcolour);
    cs2_3418(Component.interface_982.component_982_81, 9, varbit_option_friendchatcolour);
    cs2_3418(Component.interface_982.component_982_82, 10, varbit_option_friendchatcolour);
    cs2_3418(Component.interface_982.component_982_83, 11, varbit_option_friendchatcolour);
    cs2_3418(Component.interface_982.component_982_84, 12, varbit_option_friendchatcolour);
    cs2_3418(Component.interface_982.component_982_85, 13, varbit_option_friendchatcolour);
    cs2_3418(Component.interface_982.component_982_86, 14, varbit_option_friendchatcolour);
    cs2_3418(Component.interface_982.component_982_87, 15, varbit_option_friendchatcolour);
    cs2_3418(Component.interface_982.component_982_88, 20, varbit_option_friendchatcolour);
    cs2_3418(Component.interface_982.component_982_89, 17, varbit_option_friendchatcolour);
    cs2_3418(Component.interface_982.component_982_90, 18, varbit_option_friendchatcolour);
    cs2_3418(Component.interface_982.component_982_91, 19, varbit_option_friendchatcolour);
    cs2_3418(Component.interface_982.component_982_49, 1, varp_287);
    cs2_3418(Component.interface_982.component_982_50, 2, varp_287);
    cs2_3418(Component.interface_982.component_982_51, 3, varp_287);
    cs2_3418(Component.interface_982.component_982_52, 4, varp_287);
    cs2_3418(Component.interface_982.component_982_53, 5, varp_287);
    cs2_3418(Component.interface_982.component_982_54, 6, varp_287);
    cs2_3418(Component.interface_982.component_982_55, 7, varp_287);
    cs2_3418(Component.interface_982.component_982_56, 8, varp_287);
    cs2_3418(Component.interface_982.component_982_57, 9, varp_287);
    cs2_3418(Component.interface_982.component_982_58, 10, varp_287);
    cs2_3418(Component.interface_982.component_982_59, 11, varp_287);
    cs2_3418(Component.interface_982.component_982_60, 12, varp_287);
    cs2_3418(Component.interface_982.component_982_61, 13, varp_287);
    cs2_3418(Component.interface_982.component_982_62, 14, varp_287);
    cs2_3418(Component.interface_982.component_982_63, 15, varp_287);
    cs2_3418(Component.interface_982.component_982_64, 16, varp_287);
    cs2_3418(Component.interface_982.component_982_65, 17, varp_287);
    cs2_3418(Component.interface_982.component_982_66, 18, varp_287);
    rebuildchatbox();
    cs2_89();
}
