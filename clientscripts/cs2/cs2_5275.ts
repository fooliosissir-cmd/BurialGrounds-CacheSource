/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5275

function cs2_5275(intArg0: number): void {
    let int1: number = 0;
    let int2: component = -1;
    let int3: obj = -1;
    let int4: number = 1;
    let str0: string = "";
    let int5: model = -1;
    let int6: number = -1;
    let int7: Enum = -1;
    let int8: Enum = -1;

    switch (varbit_mercenaries_viewed) {
        case 0:
            return;
        case 1:
            int5 = Model.model_52948;
            int6 = 808;
            int7 = Enum.enum_5138;
            int8 = Enum.enum_5139;
            break;
        case 2:
            int5 = Model.model_52954;
            int6 = 808;
            int7 = Enum.enum_5134;
            int8 = Enum.enum_5135;
            break;
        case 3:
            int5 = Model.model_52984;
            int6 = 808;
            int7 = Enum.enum_5136;
            int8 = Enum.enum_5137;
            break;
    }
    ccDeleteAll(Component.interface_1138.component_1138_31);
    ccCreate(Component.interface_1138.component_1138_31, 6, ifGetNextSubId(Component.interface_1138.component_1138_31));
    ccSetSize(0, 0, 1, 1);
    ccSetPosition(0, 0, 1, 1);
    ccSetModel(int5);
    ccSetModelAngle(0, 125, 0, 0, 0, 375);
    ccSetModelAnim(int6);
    cs2_2647(Component.interface_1138.component_1138_31);
    ccDeleteAll(Component.interface_1138.component_1138_33);

    while (int1 < invSize(94)) {
        int4 = 1;
        switch (int1) {
            case 0:
                int2 = Component.interface_1138.component_1138_34;
                break;
            case 1:
                int2 = Component.interface_1138.component_1138_36;
                break;
            case 2:
                int2 = Component.interface_1138.component_1138_37;
                break;
            case 3:
                int2 = Component.interface_1138.component_1138_39;
                break;
            case 4:
                int2 = Component.interface_1138.component_1138_40;
                break;
            case 5:
                int2 = Component.interface_1138.component_1138_41;
                break;
            case 7:
                int2 = Component.interface_1138.component_1138_42;
                break;
            case 9:
                int2 = Component.interface_1138.component_1138_44;
                break;
            case 10:
                int2 = Component.interface_1138.component_1138_43;
                break;
            case 12:
                int2 = Component.interface_1138.component_1138_45;
                break;
            case 13:
                int2 = Component.interface_1138.component_1138_38;
                int4 = 900;
                break;
            case 14:
                int2 = Component.interface_1138.component_1138_35;
                break;
            default:
                int2 = -1;
                break;
        }
        ccCreate(Component.interface_1138.component_1138_33, 5, int1);
        if (int2 != -1) {
            int3 = enumOp(type_int, type_obj, int8, int1);
            if (int3 != -1) {
                ccSetSize(36, 32, 0, 0);
                ccSetPosition(...cs2_788(int2, 2, 2), 0, 0);
                ccSetObject(int3, int4);
                ccSetOpBase(append("<col=ff9040>", ocName(int3)));
                ccSetOp(1, "Information");
                ccSetGraphicShadow(3153952);
                ccSetOutline(1);
                ccSetOnOpt(hook(cs2_1620, "Iiiii", [event_com, event_comsubid, 100, 0, 8]));
            } else {
                ccSetSize(32, 32, 0, 0);
                ccSetPosition(...cs2_788(int2, 2, 2), 0, 0);
                ccSetGraphic(enumOp(type_int, type_graphic, Enum.enum_796, int1));
            }
        } else {
            ccSetHide(true);
        }
        int1 = int1 + 1;
    }
    ifSetText(appendSignnum("Stab: ", enumOp(type_int, type_int, int7, 0)), Component.interface_1138.component_1138_50);
    ifSetText(appendSignnum("Slash: ", enumOp(type_int, type_int, int7, 1)), Component.interface_1138.component_1138_51);
    ifSetText(appendSignnum("Crush: ", enumOp(type_int, type_int, int7, 2)), Component.interface_1138.component_1138_52);
    ifSetText(appendSignnum("Magic: ", enumOp(type_int, type_int, int7, 3)), Component.interface_1138.component_1138_53);
    ifSetText(appendSignnum("Ranged: ", enumOp(type_int, type_int, int7, 4)), Component.interface_1138.component_1138_54);
    ifSetText(appendSignnum("Stab: ", enumOp(type_int, type_int, int7, 5)), Component.interface_1138.component_1138_55);
    ifSetText(appendSignnum("Slash: ", enumOp(type_int, type_int, int7, 6)), Component.interface_1138.component_1138_56);
    ifSetText(appendSignnum("Crush: ", enumOp(type_int, type_int, int7, 7)), Component.interface_1138.component_1138_57);
    ifSetText(appendSignnum("Ranged: ", enumOp(type_int, type_int, int7, 9)), Component.interface_1138.component_1138_59);
    ifSetText(appendSignnum("Summoning: ", enumOp(type_int, type_int, int7, 10)), Component.interface_1138.component_1138_60);
    ifSetText(appendSignnum("Magic: ", enumOp(type_int, type_int, int7, 8)), Component.interface_1138.component_1138_58);
    ifSetText(append(appendSignnum("Absorb Melee: ", enumOp(type_int, type_int, int7, 11)), "%"), Component.interface_1138.component_1138_61);
    ifSetText(append(appendSignnum("Absorb Magic: ", enumOp(type_int, type_int, int7, 12)), "%"), Component.interface_1138.component_1138_62);
    ifSetText(append(appendSignnum("Absorb Ranged: ", enumOp(type_int, type_int, int7, 13)), "%"), Component.interface_1138.component_1138_63);
    ifSetText(appendSignnum("Strength: ", enumOp(type_int, type_int, int7, 14)), Component.interface_1138.component_1138_64);
    ifSetText(appendSignnum("Ranged Strength: ", enumOp(type_int, type_int, int7, 15)), Component.interface_1138.component_1138_65);
    ifSetText(appendSignnum("Prayer: ", enumOp(type_int, type_int, int7, 16)), Component.interface_1138.component_1138_66);
    ifSetText(append(appendSignnum("Magic Damage: ", enumOp(type_int, type_int, int7, 17)), "%"), Component.interface_1138.component_1138_67);
}
