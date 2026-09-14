/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4994

function cs2_4994(): void {
    let int0: number = -1;
    let int1: number = -1;
    let int2: number = -1;
    let int3: number = -1;
    let int4: number = -1;
    let int5: number = -1;
    let int6: number = -1;
    let int7: number = -1;
    let int8: number = -1;
    let int9: number = -1;
    let int10: number = -1;
    let int11: number = -1;
    let int12: number = -1;
    let int13: number = -1;
    let int14: number = -1;
    let int15: number = -1;
    let int16: number = -1;
    let int17: number = -1;
    let int18: number = -1;
    let int19: number = -1;
    let int20: number = -1;
    let int21: number = -1;
    let int22: number = -1;
    let int23: number = -1;
    let int24: number = -1;
    let int25: number = -1;
    let int26: number = -1;
    let int27: number = -1;

    if (clanProfileFind() == 1) {
        int0 = cs2_4948(1);
        int1 = cs2_4948(2);
        int2 = cs2_4948(3);
        int3 = cs2_4948(4);
        int4 = cs2_4948(7);
        int5 = cs2_4948(6);
        int6 = cs2_4948(5);
        int7 = cs2_4959(int0);
        int8 = cs2_4959(int1);
        int9 = cs2_4959(int2);
        int10 = cs2_4959(int3);
        int11 = cs2_4959(int4);
        int12 = cs2_4959(int5);
        int13 = cs2_4959(int6);
        int14 = cs2_4961(int0, 3);
        int15 = cs2_4961(int1, 3);
        int16 = cs2_4961(int2, 3);
        int17 = cs2_4961(int3, 3);
        int18 = cs2_4961(int4, 3);
        int19 = cs2_4961(int5, 3);
        int20 = cs2_4961(int6, 3);
        int21 = cs2_4953(int14);
        int22 = cs2_4953(int15);
        int23 = cs2_4953(int16);
        int24 = cs2_4953(int17);
        int25 = cs2_4953(int18);
        int26 = cs2_4953(int19);
        int27 = cs2_4953(int20);
        ifSetText("Tier " + tostring(pushVarClanBit<2580>()), Component.interface_1261.component_1261_187);
        ifSetText("Tier " + tostring(pushVarClanBit<2581>()), Component.interface_1261.component_1261_195);
        ifSetText("Tier " + tostring(pushVarClanBit<2582>()), Component.interface_1261.component_1261_203);
        ifSetText("Tier " + tostring(int7), Component.interface_1261.component_1261_211);
        ifSetText("Tier " + tostring(int8), Component.interface_1261.component_1261_219);
        ifSetText("Tier " + tostring(int9), Component.interface_1261.component_1261_227);
        ifSetText("Tier " + tostring(int10), Component.interface_1261.component_1261_235);
        ifSetText("Tier " + tostring(int11), Component.interface_1261.component_1261_251);
        ifSetText("Tier " + tostring(int12), Component.interface_1261.component_1261_243);
        ifSetText("Tier " + tostring(int13), Component.interface_1261.component_1261_260);
        if (int7 == 0) {
            if (int21 > 0) {
                ifSetText("Building", Component.interface_1261.component_1261_211);
            } else {
                ifSetText("Buy", Component.interface_1261.component_1261_211);
            }
        }
        if (int8 == 0) {
            if (int22 > 0) {
                ifSetText("Building", Component.interface_1261.component_1261_219);
            } else {
                ifSetText("Buy", Component.interface_1261.component_1261_219);
            }
        }
        if (int9 == 0) {
            if (int23 > 0) {
                ifSetText("Building", Component.interface_1261.component_1261_227);
            } else {
                ifSetText("Buy", Component.interface_1261.component_1261_227);
            }
        }
        if (int10 == 0) {
            if (int24 > 0) {
                ifSetText("Building", Component.interface_1261.component_1261_235);
            } else {
                ifSetText("Buy", Component.interface_1261.component_1261_235);
            }
        }
        if (int11 == 0) {
            if (int25 > 0) {
                ifSetText("Building", Component.interface_1261.component_1261_251);
            } else {
                ifSetText("Buy", Component.interface_1261.component_1261_251);
            }
        }
        if (int12 == 0) {
            if (int26 > 0) {
                ifSetText("Building", Component.interface_1261.component_1261_243);
            } else {
                ifSetText("Buy", Component.interface_1261.component_1261_243);
            }
        }
        if (int13 == 0) {
            if (int27 > 0) {
                ifSetText("Building", Component.interface_1261.component_1261_260);
            } else {
                ifSetText("Buy", Component.interface_1261.component_1261_260);
            }
        }
    }
}
