/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2145

function cs2_2145(intArg0: stat, intArg1: number, intArg2: number): [string, number, number] {
    let int3: struct = enumOp(type_int, type_struct, Enum.ql4_intstruct_lists, intArg1);
    let int4: struct = enumOp(type_int, type_struct, structParam(int3, Param.param_61), intArg2);
    let int5: number = statBase(intArg0);
    let str0: string = "null";
    let int6: number = -1;
    let int7: number = 0;

    if (int4 == -1) {
        return [str0, int6, 0];
    }

    if (intArg1 == 1 && cs2_2193(intArg2) == 2) {
        return [str0, int6, 0];
    }

    if (structParam(int4, Param.param_871) == -1) {
        return [str0, int6, 0];
    }

    if (structParam(int4, Param.param_871) == intArg0 && int5 == structParam(int4, Param.param_872)) {
        [str0, int6, int7] = cs2_2146(intArg0, intArg1, int5, intArg2, structParam(int4, Param.param_845));
        return [str0, int6, int7];
    }

    if (structParam(int4, Param.param_873) == -1) {
        return [str0, int6, 0];
    }

    if (structParam(int4, Param.param_873) == intArg0 && int5 == structParam(int4, Param.param_874)) {
        [str0, int6, int7] = cs2_2146(intArg0, intArg1, int5, intArg2, structParam(int4, Param.param_845));
        return [str0, int6, int7];
    }

    if (structParam(int4, Param.param_875) == -1) {
        return [str0, int6, 0];
    }

    if (structParam(int4, Param.param_875) == intArg0 && int5 == structParam(int4, Param.param_876)) {
        [str0, int6, int7] = cs2_2146(intArg0, intArg1, int5, intArg2, structParam(int4, Param.param_845));
        return [str0, int6, int7];
    }

    if (structParam(int4, Param.param_877) == -1) {
        return [str0, int6, 0];
    }

    if (structParam(int4, Param.param_877) == intArg0 && int5 == structParam(int4, Param.param_878)) {
        [str0, int6, int7] = cs2_2146(intArg0, intArg1, int5, intArg2, structParam(int4, Param.param_845));
        return [str0, int6, int7];
    }

    if (structParam(int4, Param.param_879) == -1) {
        return [str0, int6, 0];
    }

    if (structParam(int4, Param.param_879) == intArg0 && int5 == structParam(int4, Param.param_880)) {
        [str0, int6, int7] = cs2_2146(intArg0, intArg1, int5, intArg2, structParam(int4, Param.param_845));
        return [str0, int6, int7];
    }

    if (structParam(int4, Param.param_881) == -1) {
        return [str0, int6, 0];
    }

    if (structParam(int4, Param.param_881) == intArg0 && int5 == structParam(int4, Param.param_882)) {
        [str0, int6, int7] = cs2_2146(intArg0, intArg1, int5, intArg2, structParam(int4, Param.param_845));
        return [str0, int6, int7];
    }

    if (structParam(int4, Param.param_883) == -1) {
        return [str0, int6, 0];
    }

    if (structParam(int4, Param.param_883) == intArg0 && int5 == structParam(int4, Param.param_884)) {
        [str0, int6, int7] = cs2_2146(intArg0, intArg1, int5, intArg2, structParam(int4, Param.param_845));
        return [str0, int6, int7];
    }

    if (structParam(int4, Param.param_885) == -1) {
        return [str0, int6, 0];
    }

    if (structParam(int4, Param.param_885) == intArg0 && int5 == structParam(int4, Param.param_886)) {
        [str0, int6, int7] = cs2_2146(intArg0, intArg1, int5, intArg2, structParam(int4, Param.param_845));
        return [str0, int6, int7];
    }

    if (structParam(int4, Param.param_887) == -1) {
        return [str0, int6, 0];
    }

    if (structParam(int4, Param.param_887) == intArg0 && int5 == structParam(int4, Param.param_888)) {
        [str0, int6, int7] = cs2_2146(intArg0, intArg1, int5, intArg2, structParam(int4, Param.param_845));
        return [str0, int6, int7];
    }

    if (structParam(int4, Param.param_889) == -1) {
        return [str0, int6, 0];
    }

    if (structParam(int4, Param.param_889) == intArg0 && int5 == structParam(int4, Param.param_890)) {
        [str0, int6, int7] = cs2_2146(intArg0, intArg1, int5, intArg2, structParam(int4, Param.param_845));
        return [str0, int6, int7];
    }

    if (structParam(int4, Param.param_891) == -1) {
        return [str0, int6, 0];
    }

    if (structParam(int4, Param.param_891) == intArg0 && int5 == structParam(int4, Param.param_892)) {
        [str0, int6, int7] = cs2_2146(intArg0, intArg1, int5, intArg2, structParam(int4, Param.param_845));
        return [str0, int6, int7];
    }

    if (structParam(int4, Param.param_893) == -1) {
        return [str0, int6, 0];
    }

    if (structParam(int4, Param.param_893) == intArg0 && int5 == structParam(int4, Param.param_894)) {
        [str0, int6, int7] = cs2_2146(intArg0, intArg1, int5, intArg2, structParam(int4, Param.param_845));
        return [str0, int6, int7];
    }
    return ["", -1, 0];
}
