import { MTG } from './main'

class Card {
  static getCardsList (card) {
    return MTG.get(`cards/search?q=${card}`)
  }
}

export { Card }
