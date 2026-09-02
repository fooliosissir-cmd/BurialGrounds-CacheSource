/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,maxlifepoints]

function maxlifepoints(): number {
    return max(stat(3), 0) * 10;
}
