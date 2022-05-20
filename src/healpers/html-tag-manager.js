/**
 * HtmlTagManager class.
 */
class HtmlTagManager {
  /**
   * @function Create <table> HTML-tag.
   * @access public static
   * @return object
   */
  static createTable() {
    return document.createElement('table');
  }

  /**
   * @function Create <tr> HTML-tag.
   * @access public static
   * @return object
   */
  static createTr() {
    return document.createElement('tr');
  }

  /**
   * @function Create <td> HTML-tag.
   * @access public static
   * @return object
   */
  static createTd() {
    return document.createElement('td');
  }

  /**
   * @function Get HTML-tag by ID game-board.
   * @access public static
   * @return object
   */
  static getBoardTag() {
    return document.getElementById('game-board');
  }

  /**
   * @function Get HTML-tag by ID btn-start-stop.
   * @access public static
   * @return object
   */
  static getBtnStartStop() {
    return document.getElementById('btn-start-stop');
  }

  /**
   * @function Get HTML-tag by ID btn-clear.
   * @access public static
   * @return object
   */
  static getBtnClear() {
    return document.getElementById('btn-clear');
  }

  /**
   * @function Get HTML-tag by ID btn-random.
   * @access public static
   * @return object
   */
  static getBtnRandom() {
    return document.getElementById('btn-random');
  }
}

export default HtmlTagManager;
