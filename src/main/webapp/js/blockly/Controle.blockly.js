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
 * @since 30/09/2024, 16:24:47
 *
 */
window.blockly.js.blockly.Controle.aoClicarSelecionaLinhaArgs = [{ description: 'listaItem', id: '40570261' }, { description: 'itemSelecionado', id: 'b2396fc2' }, { description: 'model', id: '831cd2d4' }];
window.blockly.js.blockly.Controle.aoClicarSelecionaLinha = async function(listaItem, itemSelecionado, model) {

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

/**
 * @function moverParaDireita
 *
 *
 *
 * @param listaDeItens
 * @param listaDeItensParaDireita
 *
 * @author Ícaro Da Silva Antunes
 * @since 30/09/2024, 16:24:47
 *
 */
window.blockly.js.blockly.Controle.moverParaDireitaArgs = [{ description: 'listaDeItens', id: 'a360e8fc' }, { description: 'listaDeItensParaDireita', id: 'd714ad80' }];
window.blockly.js.blockly.Controle.moverParaDireita = async function(listaDeItens, listaDeItensParaDireita) {
 var listaDeItensDaEsquerda;
  //
  itensNaoSelecionados = [];
  //
  for (var i_index in listaDeItens) {
    i = listaDeItens[i_index];
    //
    if (this.cronapi.json.getProperty(i, 'selecionado')) {
      //
      this.cronapi.json.setProperty(i, 'selecionado', false);
      //
      this.cronapi.json.setProperty(i, 'posicao', (listaDeItensParaDireita.length + 1));
      //
      listaDeItensParaDireita.push(i);
    } else {
      //
      this.cronapi.json.setProperty(i, 'selecionado', false);
      //
      this.cronapi.json.setProperty(i, 'posicao', (itensNaoSelecionados.length + 1));
      //
      itensNaoSelecionados.push(i);
    }
  }
  //
  this.cronapi.screen.changeValueOfField("vars.cursos", itensNaoSelecionados);
  //
  this.cronapi.screen.changeValueOfField("vars.cursosUsuario", listaDeItensParaDireita);
}

/**
 * @function moverParaEsquerda
 *
 *
 *
 * @param listaDeItens
 * @param listaDeItensParaEsquerda
 *
 * @author Ícaro Da Silva Antunes
 * @since 30/09/2024, 16:24:47
 *
 */
window.blockly.js.blockly.Controle.moverParaEsquerdaArgs = [{ description: 'listaDeItens', id: 'a360e8fc' }, { description: 'listaDeItensParaEsquerda', id: 'd714ad80' }];
window.blockly.js.blockly.Controle.moverParaEsquerda = async function(listaDeItens, listaDeItensParaEsquerda) {
 var listaDeItensDaEsquerda;
  //
  itensNaoSelecionados = [];
  //
  for (var i_index in listaDeItens) {
    i = listaDeItens[i_index];
    //
    if (this.cronapi.json.getProperty(i, 'selecionado')) {
      //
      this.cronapi.json.setProperty(i, 'selecionado', false);
      //
      this.cronapi.json.setProperty(i, 'posicao', (listaDeItensParaEsquerda.length + 1));
      //
      listaDeItensParaEsquerda.push(i);
    } else {
      //
      this.cronapi.json.setProperty(i, 'selecionado', false);
      //
      this.cronapi.json.setProperty(i, 'posicao', (itensNaoSelecionados.length + 1));
      //
      itensNaoSelecionados.push(i);
    }
  }
  //
  this.cronapi.screen.changeValueOfField("vars.cursos", listaDeItensParaEsquerda);
  //
  this.cronapi.screen.changeValueOfField("vars.cursosUsuario", itensNaoSelecionados);
}

/**
 * @function moverTodosParaDireita
 *
 *
 *
 * @param listaDeItens
 * @param listaDeItensDaDireita
 *
 * @author Ícaro Da Silva Antunes
 * @since 30/09/2024, 16:24:47
 *
 */
window.blockly.js.blockly.Controle.moverTodosParaDireitaArgs = [{ description: 'listaDeItens', id: 'a360e8fc' }, { description: 'listaDeItensDaDireita', id: 'd714ad80' }];
window.blockly.js.blockly.Controle.moverTodosParaDireita = async function(listaDeItens, listaDeItensDaDireita) {
 var listaDeItensDaEsquerda;
  //
  for (var i_index in listaDeItens) {
    i = listaDeItens[i_index];
    //
    this.cronapi.json.setProperty(i, 'selecionado', false);
    //
    this.cronapi.json.setProperty(i, 'posicao', (listaDeItensDaDireita.length + 1));
    //
    listaDeItensDaDireita.push(i);
  }
  //
  this.cronapi.screen.changeValueOfField("vars.cursos", []);
  //
  this.cronapi.screen.changeValueOfField("vars.cursosUsuario", listaDeItensDaDireita);
}

/**
 * @function moverTodosParaEsquerda
 *
 *
 *
 * @param listaDeItens
 * @param listaDeItensDaEsquerda
 *
 * @author Ícaro Da Silva Antunes
 * @since 30/09/2024, 16:24:47
 *
 */
window.blockly.js.blockly.Controle.moverTodosParaEsquerdaArgs = [{ description: 'listaDeItens', id: 'a360e8fc' }, { description: 'listaDeItensDaEsquerda', id: 'd714ad80' }];
window.blockly.js.blockly.Controle.moverTodosParaEsquerda = async function(listaDeItens, listaDeItensDaEsquerda) {
 var i;
  //
  for (var i_index in listaDeItens) {
    i = listaDeItens[i_index];
    //
    this.cronapi.json.setProperty(i, 'selecionado', false);
    //
    this.cronapi.json.setProperty(i, 'posicao', (listaDeItensDaEsquerda.length + 1));
    //
    listaDeItensDaEsquerda.push(i);
  }
  //
  this.cronapi.screen.changeValueOfField("vars.cursos", listaDeItensDaEsquerda);
  //
  this.cronapi.screen.changeValueOfField("vars.cursosUsuario", []);
}
