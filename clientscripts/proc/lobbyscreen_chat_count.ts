/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,lobbyscreen_chat_count]

function lobbyscreen_chat_count(): [number, number, number] {
    let int0: number = 0;
    let int1: number = 0;
    let int2: number = 0;
    let int3: number = 0;

    while (int3 < 100) {
        switch (chatGethistorytype(int3)) {
            case 3:
            case 7:
            case 18:
                int0 = int0 + 1;
                break;
            case 9:
            case 20:
                int2 = int2 + 1;
                break;
            case 41:
            case 42:
            case 44:
            case 45:
                int1 = int1 + 1;
                break;
        }
        int3 = int3 + 1;
    }
    return [int0, int1, int2];
}
