const smallCaps = [
    'ᴀ',
    'ʙ',
    'ᴄ',
    'ᴅ',
    'ᴇ',
    'ғ',
    'ɢ',
    'ʜ',
    'ɪ',
    'ᴊ',
    'ᴋ',
    'ʟ',
    'ᴍ',
    'ɴ',
    'ᴏ',
    'ᴘ',
    'ᴏ̨',
    'ʀ',
    's',
    'ᴛ',
    'ᴜ',
    'ᴠ',
    'ᴡ',
    'x',
    'ʏ',
    'ᴢ',
    'ᴀ̄',
    'ᴀ̌',
    'ᴀ̆',
    'ᴀ́',
    'ᴀ̀',
    'ᴀ̂',
    'ᴀ̃',
    'ᴀ̈',
    'ᴀ̊',
    'ᴁ',
    'ᴄ̇',
    'ᴄ̌',
    'đ',
    'ᴄ̧',
    'ᴅ̌',
    'ᴄ̂',
    'ᴇ́',
    'ᴇ̀',
    'ᴇ̄',
    'ᴇ̌',
    'ᴇ̆',
    'ᴇ̂',
    'ᴇ̈',
    'ᴇ̨',
    'ɢ̇',
    'ɢ̂',
    'ɢ̆',
    'ɪ̄',
    'ɪ̌',
    'ɪ̆',
    'ɪ́',
    'ɪ̃',
    'ı̀',
    'ɪ̈',
    'ɪ̂',
    'ɪ̨',
    'ɨ',
    'ᴊ̂',
    'ᴋ̧',
    'ʟ̌',
    'ʟ́',
    'ʟ̧',
    'ᴌ',
    'ɴ̃',
    'ɴ́',
    'ɴ̧',
    'ɴ̌',
    'ɴ̇',
    'ᴏ̄',
    'ᴏ̌',
    'ᴏ́',
    'ᴏ̂',
    'ᴏ̀',
    'ᴏ̈',
    'ᴏ̆',
    'ø',
    'ᴏ̃',
    'ɶ',
    'ᴏ̋',
    'ʀ́',
    'ʀ̌',
    'ʀ̧',
    'ś',
    'ʂ',
    'š',
    'ŝ',
    'ᴜ̄',
    'ᴜ̌',
    'ᴜ̆',
    'ᴜ́',
    'ᴜ̂',
    'ᴜ̃',
    'ᴜ̀',
    'ᴜ̋',
    'ᴜ̈̄',
    'ᴜ̈̀',
    'ᴜ̈́',
    'ᴜ̈̌',
    'ᴜ̨',
    'ᴜ̈',
    'ʏ́',
    'ᴡ̂',
    'ʏ̂',
    'ʏ̈',
    'ᴢ́',
    'ᴢ̇',
    'ᴢ̌',
]
const lowerCase =
    'abcdefghijklmnopqrstuvwxyzāǎăáàâãäåæċčđçďĉéèēěĕêëęġĝğīǐĭíĩìïîįɨĵķľĺļłñńņňṅōǒóôòöŏøõœőŕřŗśʂšŝūǔŭúûũùűǖǜǘǚųüýŵŷÿźżž'.split(
        ''
    )
/**
 * convert a normal lower case and upper case string to small caps string
 * @param str the normal string
 * @returns the small caps string
 * @example "Ayato-san" -> "ᴀʏᴀᴛᴏ-sᴀɴ"
 */
export default (str: string): string => {
    return str
        .toLowerCase()
        .split('')
        .map((letter) => {
            const index = lowerCase.indexOf(letter)
            return index >= 0 ? smallCaps[index] : letter
        })
        .join('')
}
