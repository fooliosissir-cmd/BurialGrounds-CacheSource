/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4768

function cs2_4768(): void {
    let int0: number = 1;
    let int1: number = 0;
    let int2: number = 0;
    let int3: number = 0;
    let int4: number = 0;
    let int5: number = 0;
    let int6: number = 0;
    let int7: number = 0;

    if (clanProfileFind() == 1) {
        int1 = loadClanVar<2724>() / 100;
        int2 = loadClanVar<2725>() / 100;
        int3 = loadClanVar<2728>() / 100;
        int4 = loadClanVar<2732>() / 100;
        int5 = loadClanVar<2731>() / 100;
        int6 = loadClanVar<2730>() / 100;
        int7 = loadClanVar<2733>() / 100;
        ccDeleteAll(Component.interface_1115.component_1115_67);
        ccDeleteAll(Component.interface_1115.component_1115_65);
        ccDeleteAll(Component.interface_1115.component_1115_63);
        [int0, int1, int2, int3, int4, int5, int6, int7] = cs2_4769(1, int0, int1, int2, int3, int4, int5, int6, int7);
        [int0, int1, int2, int3, int4, int5, int6, int7] = cs2_4769(2, int0, int1, int2, int3, int4, int5, int6, int7);
        [int0, int1, int2, int3, int4, int5, int6, int7] = cs2_4769(3, int0, int1, int2, int3, int4, int5, int6, int7);
    }
}
