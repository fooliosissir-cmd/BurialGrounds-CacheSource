/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_385

function cs2_385(intArg0: struct): void {
    if (intArg0 == varc_543 && intArg0 != -1) {
        return;
    }
    varc_543 = intArg0;

    switch (intArg0) {
        case Struct.struct_1112:
            ifOpenSubClient(Component.interface_1028.component_1028_58, Interface.interface_1033);
            break;
        case Struct.struct_1118:
            ifOpenSubClient(Component.interface_1028.component_1028_58, Interface.interface_1043);
            break;
        case Struct.struct_1120:
            ifOpenSubClient(Component.interface_1028.component_1028_58, Interface.interface_1032);
            break;
        case Struct.struct_1127:
            ifOpenSubClient(Component.interface_1028.component_1028_58, Interface.interface_1038);
            break;
        case Struct.struct_1125:
            ifOpenSubClient(Component.interface_1028.component_1028_58, Interface.interface_1034);
            break;
        case Struct.struct_1122:
            ifOpenSubClient(Component.interface_1028.component_1028_58, Interface.interface_1036);
            break;
        case Struct.struct_1128:
            ifOpenSubClient(Component.interface_1028.component_1028_58, Interface.interface_1044);
            break;
        case Struct.struct_1129:
            ifOpenSubClient(Component.interface_1028.component_1028_58, Interface.interface_1042);
            break;
        case Struct.struct_1119:
            ifOpenSubClient(Component.interface_1028.component_1028_58, Interface.interface_1041);
            break;
        case Struct.struct_1114:
            ifOpenSubClient(Component.interface_1028.component_1028_58, Interface.interface_1029);
            break;
        case Struct.struct_1124:
            ifOpenSubClient(Component.interface_1028.component_1028_58, Interface.interface_1030);
            break;
        case Struct.struct_1121:
            ifOpenSubClient(Component.interface_1028.component_1028_58, Interface.interface_1031);
            break;
        case Struct.struct_1115:
            ifOpenSubClient(Component.interface_1028.component_1028_58, Interface.interface_1046);
            break;
        case Struct.struct_1130:
            ifOpenSubClient(Component.interface_1028.component_1028_58, Interface.interface_1047);
            break;
        case Struct.struct_1116:
            ifOpenSubClient(Component.interface_1028.component_1028_58, Interface.interface_1045);
            break;
        case Struct.struct_1126:
            ifOpenSubClient(Component.interface_1028.component_1028_58, Interface.interface_1049);
            break;
        case Struct.struct_1131:
            ifOpenSubClient(Component.interface_1028.component_1028_58, Interface.interface_1035);
            break;
        case Struct.struct_1117:
            ifOpenSubClient(Component.interface_1028.component_1028_58, Interface.interface_1039);
            break;
        case Struct.struct_1113:
            ifOpenSubClient(Component.interface_1028.component_1028_58, Interface.interface_1048);
            break;
        case Struct.struct_1123:
            ifOpenSubClient(Component.interface_1028.component_1028_58, Interface.interface_1037);
            break;
        case -1:
            ifCloseSubClient(67371066);
            break;
        default:
            ifOpenSubClient(Component.interface_1028.component_1028_58, Interface.interface_1033);
            break;
    }
}
