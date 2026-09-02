/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1814

function cs2_1814(strArg0: string): string {
    let int0: number = stringLength(strArg0);

    if (int0 <= 0) {
        return strArg0;
    }
    let str1: string = append("\xa0", strArg0);
    str1 = cs2_2332(str1, "\xa0a", "\xa0A");
    str1 = cs2_2332(str1, "\xa0b", "\xa0B");
    str1 = cs2_2332(str1, "\xa0c", "\xa0C");
    str1 = cs2_2332(str1, "\xa0d", "\xa0D");
    str1 = cs2_2332(str1, "\xa0e", "\xa0E");
    str1 = cs2_2332(str1, "\xa0f", "\xa0F");
    str1 = cs2_2332(str1, "\xa0g", "\xa0G");
    str1 = cs2_2332(str1, "\xa0h", "\xa0H");
    str1 = cs2_2332(str1, "\xa0i", "\xa0I");
    str1 = cs2_2332(str1, "\xa0j", "\xa0J");
    str1 = cs2_2332(str1, "\xa0k", "\xa0K");
    str1 = cs2_2332(str1, "\xa0l", "\xa0L");
    str1 = cs2_2332(str1, "\xa0m", "\xa0M");
    str1 = cs2_2332(str1, "\xa0n", "\xa0N");
    str1 = cs2_2332(str1, "\xa0o", "\xa0O");
    str1 = cs2_2332(str1, "\xa0p", "\xa0P");
    str1 = cs2_2332(str1, "\xa0q", "\xa0Q");
    str1 = cs2_2332(str1, "\xa0r", "\xa0R");
    str1 = cs2_2332(str1, "\xa0s", "\xa0S");
    str1 = cs2_2332(str1, "\xa0t", "\xa0T");
    str1 = cs2_2332(str1, "\xa0u", "\xa0U");
    str1 = cs2_2332(str1, "\xa0v", "\xa0V");
    str1 = cs2_2332(str1, "\xa0w", "\xa0W");
    str1 = cs2_2332(str1, "\xa0x", "\xa0X");
    str1 = cs2_2332(str1, "\xa0y", "\xa0Y");
    str1 = cs2_2332(str1, "\xa0z", "\xa0Z");
    return subString(str1, 1, int0 + 1);
}
