window.blockly = window.blockly || {};
window.blockly.js = window.blockly.js || {};
window.blockly.js.blockly = window.blockly.js.blockly || {};
window.blockly.js.blockly.Controle = window.blockly.js.blockly.Controle || {};

/**
 * @function aoClicarSelecionaLinha
 *
 *
 *
 * @param listaItem
 * @param itemSelecionado
 * @param model
 *
 * @author Ícaro Da Silva Antunes
 * @since 25/09/2024, 15:39:47
 *
 */
window.blockly.js.blockly.Controle.aoClicarSelecionaLinhaArgs = [{ description: 'listaItem', id: '40570261' }, { description: 'itemSelecionado', id: 'b2396fc2' }, { description: 'model', id: '831cd2d4' }];
window.blockly.js.blockly.Controle.aoClicarSelecionaLinha = async function(listaItem, itemSelecionado, model) {
 var i;
  //
  for (var i_index in listaItem) {
    i = listaItem[i_index];
    //
    if (this.cronapi.json.getProperty(i, 'id') == this.cronapi.json.getProperty(itemSelecionado, 'id')) {
      //
      if (this.cronapi.json.getProperty(i, 'selecionado')) {
        //
        this.cronapi.json.setProperty(i, 'selecionado', false);
      } else {
        //
        this.cronapi.json.setProperty(i, 'selecionado', true);
      }
    }
  }
  //
  this.cronapi.screen.changeValueOfField(model, listaItem);
}
