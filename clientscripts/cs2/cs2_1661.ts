/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1661

function cs2_1661(intArg0: component, intArg1: number, intArg2: component): void {
    ccDeleteAll(intArg2);

    if (varbit_tutorial_version != 3 || varp_tutorial != 55) {
        ifSetOnTimer(noHook(""), intArg2);
        return;
    }
    ccCreate(intArg2, 6, 0);
    ccSetModel(Model.model_41760);
    ccSetModelAnim(10221);
    ccSetSize(43, 43, 0, 0);
    cs2_1663(intArg0, intArg1, intArg2);
    ifSetOnTimer(hook(cs2_1662, "IiI", [intArg0, intArg1, intArg2]), intArg2);
}
