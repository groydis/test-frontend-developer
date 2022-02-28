type props = {
  symbol: string
}

type EmojiType = {
  [key:string]: any
}

const emojis: EmojiType = {
  wow: '🤩',
  bin: '🗑',
  boom: '🤯',
  list: '📝',
  tick: '✔',
}

function Emoji({ symbol }: props) {
  return emojis[symbol]
}

export default Emoji
