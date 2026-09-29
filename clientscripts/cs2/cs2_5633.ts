/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5633

function cs2_5633(): void {
    let int0: number = createConnectReply();

    if (int0 == -3) {
        return;
    }
    ifSetOnTimer(noHook(""), Component.interface_673.component_673_26);
    let str0: string = "";
    let int1: number = 1;
    let int2: number = 0;
    let int3: graphic = Graphic.loadingwheel_9;
    let int4: number = 0;
    let int5: number = 0;
    let str1: string = "";
    let int6: number = 1;
    let str2: string = "Back";
    let int7: number = -1;

    if (int0 == 2) {
        create_please_wait(0);
    } else {
        cs2_2206();
        switch (int0) {
            case 37:
                int7 = 6;
                int1 = 0;
                int3 = Graphic.loadingwheel_11;
                str0 = "Burial Grounds has been updated. Please restart the client.";
                break;
            case -5:
                int7 = -5;
                str0 = "No response from server.";
                break;
            default:
                int7 = 25;
                str0 = "Unexpected server response.";
                break;
        }
        login_popup(int7, int1, str0, int2, int3, int4, int5, str1, int6, str2);
    }
}
