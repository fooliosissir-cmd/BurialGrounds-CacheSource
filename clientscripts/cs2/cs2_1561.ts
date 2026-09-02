/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1561

function cs2_1561(): void {
    let str0: string = chatGetbyline(0);
    let int0: number = 1;
    let int1: number = 0;
    let str1: string = "";

    while (int1 == 0 && int0 < chatGethistorylength()) {
        str1 = chatGetbyline(int0);
        if (enumOp(type_int, type_boolean, Enum.chattype_goes_in_meslayer, chatGettypebyline(int0)) == 0) {
            int1 = 1;
        } else if (chatLineGetcycles20ms(int0) <= varc_1269) {
            int1 = 1;
        } else if (stringLength(removetags(str1)) > 0) {
            str0 = append(append(str1, "<br>"), str0);
        } else {
            str0 = append("<br>", str0);
        }
        int0 = int0 + 1;
    }
    meslayer_mode1(str0);
}
