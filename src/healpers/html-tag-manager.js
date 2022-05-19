/**
 * HtmlTagManager class.
 */
class HtmlTagManager {
  static createTable() {
    return document.createElement('table');
  }

  static createTr() {
    return document.createElement('tr');
  }

  static createTd() {
    return document.createElement('td');
  }

  static getBoardTag() {
    return document.getElementById('game-board');
  }

  static getBtnStartStop() {
    return document.getElementById('btn-start-stop');
  }

  static getBtnClear() {
    return document.getElementById('btn-clear');
  }

  static getBtnRandom() {
    return document.getElementById('btn-random');
  }
}

export default HtmlTagManager;
