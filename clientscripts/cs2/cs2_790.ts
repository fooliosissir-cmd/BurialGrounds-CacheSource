/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_790

function cs2_790(): string {
    let int0: number = random(75);
    let str0: string = "";

    if (int0 < 25) {
        str0 = "Did you know that most monsters can drop bonus spins?";
    } else if (int0 < 50) {
        str0 = "Earn bonus spins for gathering resources, making things, and other skilling.";
    } else {
        str0 = "Keep doing the things you like: there are lots of ways to get bonus spins!";
    }
    return str0;
}
