/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1378

function cs2_1378(intArg0: component, intArg1: component): void {
    let str0: string = ifGetText(intArg0);
    let str1: string = "";

    if (stringLength(str0) > 0) {
        switch (intArg1) {
            case Component.interface_1017.component_1017_166:
            case Component.interface_1017.component_1017_167:
            case Component.interface_1017.component_1017_168:
            case Component.interface_1017.component_1017_169:
            case Component.interface_1017.component_1017_170:
            case Component.interface_1017.component_1017_171:
            case Component.interface_1017.component_1017_172:
            case Component.interface_1017.component_1017_173:
            case Component.interface_1017.component_1017_174:
            case Component.interface_1017.component_1017_175:
            case Component.interface_1017.component_1017_176:
            case Component.interface_1017.component_1017_177:
            case Component.interface_1017.component_1017_178:
            case Component.interface_1017.component_1017_179:
            case Component.interface_1017.component_1017_180:
            case Component.interface_1017.component_1017_181:
            case Component.interface_1017.component_1017_182:
            case Component.interface_1017.component_1017_183:
            case Component.interface_1017.component_1017_184:
            case Component.interface_1017.component_1017_185:
            case Component.interface_1017.component_1017_186:
            case Component.interface_1017.component_1017_187:
            case Component.interface_1017.component_1017_188:
            case Component.interface_1017.component_1017_189:
            case Component.interface_1017.component_1017_190:
            case Component.interface_1017.component_1017_191:
            case Component.interface_1017.component_1017_192:
            case Component.interface_1017.component_1017_193:
            case Component.interface_1017.component_1017_194:
            case Component.interface_1017.component_1017_195:
            case Component.interface_1017.component_1017_196:
            case Component.interface_1017.component_1017_197:
            case Component.interface_1017.component_1017_198:
            case Component.interface_1017.component_1017_199:
            case Component.interface_1017.component_1017_200:
            case Component.interface_1017.component_1017_201:
            case Component.interface_1017.component_1017_202:
            case Component.interface_1017.component_1017_203:
            case Component.interface_1017.component_1017_204:
            case Component.interface_1017.component_1017_205:
            case Component.interface_1017.component_1017_206:
            case Component.interface_1017.component_1017_207:
            case Component.interface_1017.component_1017_208:
            case Component.interface_1017.component_1017_209:
            case Component.interface_1017.component_1017_210:
            case Component.interface_1017.component_1017_211:
            case Component.interface_1017.component_1017_212:
            case Component.interface_1017.component_1017_213:
            case Component.interface_1017.component_1017_214:
            case Component.interface_1017.component_1017_215:
            case Component.interface_1017.component_1017_216:
            case Component.interface_1017.component_1017_217:
            case Component.interface_1017.component_1017_218:
            case Component.interface_1017.component_1017_219:
            case Component.interface_1017.component_1017_220:
            case Component.interface_1017.component_1017_221:
            case Component.interface_1017.component_1017_222:
            case Component.interface_1017.component_1017_223:
            case Component.interface_1017.component_1017_224:
            case Component.interface_1017.component_1017_225:
                str1 = ifGetText(intArg1);
                break;
            default:
                return;
        }
        ifSetText(str0, intArg1);
        ifSetText(str1, intArg0);
        varc_conq_loading = 1;
    }
}
