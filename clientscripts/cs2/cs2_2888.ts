/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2888

function cs2_2888(): void {
    if (getWindowMode() >= 2) {
        ifSetPosition(0, 287, 0, 0, Component.sfa.shard_num);
        ifSetPosition(0, 254, 0, 0, Component.sfa.shard);
    } else {
        ifSetPosition(18, 40, 2, 0, Component.sfa.shard_num);
        ifSetPosition(18, 7, 2, 0, Component.sfa.shard);
    }
}
