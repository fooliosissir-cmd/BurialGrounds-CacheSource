/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1231

function cs2_1231(): void {
    let int0: obj = -1;
    let int1: model = -1;
    let int2: component = -1;
    let int3: number = 0;

    while (int3 < 81) {
        int0 = invGetobj(308, int3);
        switch (int0) {
            case Obj.airrune:
            case Obj.roguetrader_airrune:
                int1 = Model.model_8975;
                break;
            case Obj.waterrune:
            case Obj.roguetrader_waterrune:
                int1 = Model.model_8987;
                break;
            case Obj.earthrune:
            case Obj.roguetrader_earthrune:
                int1 = Model.model_8979;
                break;
            case Obj.firerune:
            case Obj.roguetrader_firerune:
                int1 = Model.model_8980;
                break;
            case Obj.mindrune:
            case Obj.roguetrader_mindrune:
                int1 = Model.model_8982;
                break;
            case Obj.bodyrune:
            case Obj.roguetrader_bodyrune:
                int1 = Model.model_8976;
                break;
            case Obj.deathrune:
            case Obj.roguetrader_deathrune:
                int1 = Model.model_8978;
                break;
            case Obj.chaosrune:
            case Obj.roguetrader_chaosrune:
                int1 = Model.model_8977;
                break;
            case Obj.lawrune:
            case Obj.roguetrader_lawrune:
                int1 = Model.model_8981;
                break;
            default:
                int1 = -1;
                break;
        }
        int2 = enumOp(type_int, type_component, Enum.rogue_component_big, int3);
        if (ifFind(int2) == 1) {
            ccSetModel(int1);
        }
        if (int0 == Obj.roguetrader_airrune || int0 == Obj.roguetrader_airrune || int0 == Obj.roguetrader_waterrune || int0 == Obj.roguetrader_earthrune || int0 == Obj.roguetrader_firerune || int0 == Obj.roguetrader_mindrune || int0 == Obj.roguetrader_bodyrune || int0 == Obj.roguetrader_deathrune || int0 == Obj.roguetrader_chaosrune || int0 == Obj.roguetrader_lawrune) {
            int2 = enumOp(type_int, type_component, Enum.rogue_component_big_unmovable, int3);
            if (ifFind(int2) == 1) {
                ccSetColour(colour(0x440000));
            }
        }
        int3 = int3 + 1;
    }
}
