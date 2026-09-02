/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1608

function cs2_1608(): void {
    let int0: obj = invGetobj(94, 3);

    if (cs2_6500(0) == 1 && invFreespace(670) < invSize(670)) {
        int0 = invGetobj(670, 3);
    }
    let int1: number = basGetAnimReady(ocParam(int0, Param.param_644));
    ifSetModelAnim(int1, Component.interface_549.component_549_82);
    ifSetPlayerModelSelf(Component.interface_549.component_549_82);
}
