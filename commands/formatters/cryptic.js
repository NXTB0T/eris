"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.aliases = exports.help = exports.run = void 0;
const reversal_map = {
    'A': 'Δ', 'B': 'β', 'C': 'Ɔ', 'D': 'Ɖ', 'E': 'Є', 'F': 'Ғ',
    'G': 'Ǥ', 'H': 'Ħ', 'I': 'Ɩ', 'J': 'Ĵ', 'K': 'Ƙ', 'L': '˩',
    'M': 'Ѧ', 'N': 'И', 'O': 'Ѳ', 'P': 'Ƥ', 'Q': 'Ǫ', 'R': 'Я',
    'S': 'Ƨ', 'T': 'Ƭ', 'U': 'Ʋ', 'V': 'Ѵ', 'W': 'Ɯ', 'X': 'χ',
    'Y': 'Ƴ', 'Z': 'Ƶ',
    'a': 'α', 'b': 'в', 'c': 'c', 'd': '∂', 'e': 'ɛ', 'f': 'ғ',
    'g': 'ɢ', 'h': 'н', 'i': 'ι', 'j': 'ʝ', 'k': 'κ', 'l': 'ℓ',
    'm': 'м', 'n': 'и', 'o': 'σ', 'p': 'ρ', 'q': 'զ', 'r': 'я',
    's': 'ƨ', 't': 'т', 'u': 'ʋ', 'v': 'ʌ', 'w': 'ω', 'x': 'ϰ',
    'y': 'ʏ', 'z': 'ʓ'
};
var complete_map;
function scramble_text(text) {
    if (!complete_map) {
        complete_map = {};
        for (var key in reversal_map) {
            var val = reversal_map[key];
            if (!reversal_map[val])
                complete_map[reversal_map[key]] = key;
            complete_map[key] = val;
        }
    }
    var str = "";
    for (var i = 0; i < text.length; ++i) {
        var ch = text.charAt(i);
        var rev = complete_map[ch];
        if (rev)
            str += rev;
        else
            str += ch;
    }
    return str;
}
async function run(_message, args) {
    return {
        content: scramble_text(args.join(' ')),
        disableMentions: 'everyone'
    };
}
exports.run = run;
exports.help = 'Ɔяʏρтιc Ƭɛϰт Ғσямαттɛя';
exports.aliases = [];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3J5cHRpYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNyeXB0aWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBV0EsTUFBTSxZQUFZLEdBQ2xCO0lBQ0UsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHO0lBQzFELEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRztJQUMxRCxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUc7SUFDMUQsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHO0lBQzFELEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUc7SUFFbEIsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHO0lBQzFELEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRztJQUMxRCxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUc7SUFDMUQsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHO0lBQzFELEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUc7Q0FDbkIsQ0FBQTtBQUlELElBQUksWUFBcUIsQ0FBQTtBQUV6QixTQUFTLGFBQWEsQ0FBRSxJQUFZO0lBQ2xDLElBQUksQ0FBQyxZQUFZLEVBQUU7UUFDakIsWUFBWSxHQUFHLEVBQUUsQ0FBQTtRQUNqQixLQUFLLElBQUksR0FBRyxJQUFJLFlBQVksRUFBRTtZQUM1QixJQUFJLEdBQUcsR0FBRyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUE7WUFDM0IsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUM7Z0JBQ3BCLFlBQVksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUE7WUFDdkMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtTQUN4QjtLQUNGO0lBRUQsSUFBSSxHQUFHLEdBQUcsRUFBRSxDQUFBO0lBRVosS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLEVBQUU7UUFDcEMsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUN2QixJQUFJLEdBQUcsR0FBRyxZQUFZLENBQUMsRUFBRSxDQUFDLENBQUE7UUFDMUIsSUFBSSxHQUFHO1lBQ0wsR0FBRyxJQUFJLEdBQUcsQ0FBQTs7WUFFVixHQUFHLElBQUksRUFBRSxDQUFBO0tBQ1o7SUFFRCxPQUFPLEdBQUcsQ0FBQTtBQUNaLENBQUM7QUFHTSxLQUFLLFVBQVUsR0FBRyxDQUFFLFFBQWlCLEVBQUUsSUFBYztJQUMxRCxPQUFPO1FBQ0wsT0FBTyxFQUFFLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3RDLGVBQWUsRUFBRSxVQUFVO0tBQzVCLENBQUE7QUFDSCxDQUFDO0FBTEQsa0JBS0M7QUFDWSxRQUFBLElBQUksR0FBRyx3QkFBd0IsQ0FBQTtBQUMvQixRQUFBLE9BQU8sR0FBRyxFQUFFLENBQUEifQ==