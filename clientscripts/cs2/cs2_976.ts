/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_976

function cs2_976(intArg0: number): [obj, obj, string] {
    switch (intArg0) {
        case 0:
            return [Obj.nulodions_notes, Obj.slayer_gem, "Members now have the Combat level required to request Slayer tasks from the Burthorpe Slayer Master."];
        case 1:
            return [Obj.whitecog, Obj.slayer_gem, "Members now have the Combat level required to request Slayer tasks from Mazchna."];
        case 2:
            return [Obj.iron_arrowheads, Obj.slayer_gem, "Members now have the Combat level required to request Slayer tasks from Vannaka."];
        case 3:
            return [Obj.iron_arrowheads, Obj.obj_11673, "Members now have the Combat level required to board the novice lander in Pest Control."];
        case 4:
            return [Obj.obj_70, Obj.slayer_gem, "Members now have the Combat level required to request Slayer tasks from Chaeldar."];
        case 5:
            return [Obj.obj_70, Obj.obj_11673, "Members now have the Combat level required to board the intermediate lander in Pest Control."];
        case 6:
            return [Obj.ikov_shinykey, Obj.obj_6513, "Members now have the Combat level required to start Dream Mentor."];
        case 7:
            return [Obj.ikov_shinykey, Obj.obj_6513, "Members now have the Combat level required to start Smoking Kills."];
        case 8:
            return [Obj.obj_100, Obj.slayer_gem, "Members now have the Combat level required to request Slayer tasks from the Shilo Village Slayer Master. (Level 50 Slayer is also required.)"];
        case 9:
            return [Obj.obj_100, Obj.obj_11673, "Members now have the Combat level required to board the veteran lander in Pest Control."];
        default:
            return [-1, -1, ""];
    }
}
