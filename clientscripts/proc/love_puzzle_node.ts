/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,love_puzzle_node]

function love_puzzle_node(intArg0: component, intArg1: number, intArg2: number, intArg3: colour): void {
    ccCreate(intArg0, 3, ifGetNextSubId(intArg0));
    ccSetSize(6, 6, 0, 0);
    ccSetColour(intArg3);
    ccSetfill(true);
    ccSetPosition(intArg1 * 16, intArg2 * 16, 1, 1);
}
