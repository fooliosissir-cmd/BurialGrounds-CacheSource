/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,xp_reward_textbox]

function xp_reward_textbox(strArg0: string, intArg0: component, intArg1: number): void {
    let int2: number = stringWidth(strArg0, ifGetfontmetrics(intArg0));
    let int3: component = ifGetLayer(intArg0);

    ifSetSize(int2 + intArg1, ifGetHeight(int3), 0, 0, int3);
    ifSetText(strArg0, intArg0);
}
