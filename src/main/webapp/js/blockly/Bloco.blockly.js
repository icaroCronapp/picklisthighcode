window.blockly = window.blockly || {};
window.blockly.js = window.blockly.js || {};
window.blockly.js.blockly = window.blockly.js.blockly || {};
window.blockly.js.blockly.Bloco = window.blockly.js.blockly.Bloco || {};

/**
 * @function chamaBackEMostraNatela
 *
 *
 *
 *
 * @author Ícaro Da Silva Antunes
 * @since 25/09/2024, 15:31:36
 *
 */
window.blockly.js.blockly.Bloco.chamaBackEMostraNatelaArgs = [];
window.blockly.js.blockly.Bloco.chamaBackEMostraNatela = async function() {
 var cursosdoback, listaCurso, i, cursoAtual, objeto, dados;
  //
  console.log('ab###########c');
  //
  idUser = this.cronapi.screen.getParam('id');
  //
  if (this.cronapi.logic.isNullOrEmpty(idUser)) {
    //
    this.cronapi.screen.back();
    //
    this.cronapi.screen.notify('error','mensagem do erro');
  } else {
    //
    this.cronapi.util.callServerBlocklyAsynchronous('blockly.Dados:retornaCursoQueUsuarioNTem', async function(sender_cursosGeais) {
        cursosGeais = sender_cursosGeais;
      //
      (await this.cronapi.client('blockly.js.blockly.Bloco.montarListaDeCursos').run(cursosGeais));
      //
      this.cronapi.util.callServerBlocklyAsynchronous('blockly.Dados:retornaOsCursoQueUserTem', async function(sender_cursosUsuario) {
          cursosUsuario = sender_cursosUsuario;
        //
        (await this.cronapi.client('blockly.js.blockly.Bloco.montarListaDeCursosDoUsuario').run(cursosUsuario));
      }.bind(this), idUser);
    }.bind(this), idUser);
  }
}

/**
 * @function montarListaDeCursos
 *
 *
 *
 * @param dados
 *
 * @author Ícaro Da Silva Antunes
 * @since 25/09/2024, 15:31:36
 *
 */
window.blockly.js.blockly.Bloco.montarListaDeCursosArgs = [{ description: 'dados', id: '141bb071' }];
window.blockly.js.blockly.Bloco.montarListaDeCursos = async function(dados) {
 var cursosdoback, listaCurso, i, cursoAtual, objeto;
  //
  listaCurso = [];
  //
  if (!(!dados.length)) {
    //
    var i_end = dados.length;
    var i_inc = 1;
    if (1 > i_end) {
      i_inc = -i_inc;
    }
    for (i = 1; i_inc >= 0 ? i <= i_end : i >= i_end; i += i_inc) {
      //
      cursoAtual = dados[(i - 1)];
      //
      objeto = this.cronapi.json.createObjectFromString('{}');
      //
      this.cronapi.json.setProperty(objeto, 'id', this.cronapi.json.getProperty(cursoAtual, 'id'));
      //
      this.cronapi.json.setProperty(objeto, 'posicao', i);
      //
      this.cronapi.json.setProperty(objeto, 'nome', this.cronapi.json.getProperty(cursoAtual, 'name'));
      //
      this.cronapi.json.setProperty(objeto, 'selecionado', false);
      //
      listaCurso.push(objeto);
    }
  }
  //
  this.cronapi.screen.changeValueOfField("vars.cursos", listaCurso);
}

/**
 * @function montarListaDeCursosDoUsuario
 *
 *
 *
 * @param cursosdoback
 *
 * @author Ícaro Da Silva Antunes
 * @since 25/09/2024, 15:31:36
 *
 */
window.blockly.js.blockly.Bloco.montarListaDeCursosDoUsuarioArgs = [{ description: 'cursosdoback', id: '0aea3e98' }];
window.blockly.js.blockly.Bloco.montarListaDeCursosDoUsuario = async function(cursosdoback) {
 var listaCurso, i, cursoAtual, objeto, dados;
  //
  listaCurso = [];
  //
  if (!(!cursosdoback.length)) {
    //
    var i_end = cursosdoback.length;
    var i_inc = 1;
    if (1 > i_end) {
      i_inc = -i_inc;
    }
    for (i = 1; i_inc >= 0 ? i <= i_end : i >= i_end; i += i_inc) {
      //
      cursoAtual = cursosdoback[(i - 1)];
      //
      objeto = this.cronapi.json.createObjectFromString('{}');
      //
      this.cronapi.json.setProperty(objeto, 'id', this.cronapi.json.getProperty(cursoAtual, 'id'));
      //
      this.cronapi.json.setProperty(objeto, 'posicao', i);
      //
      this.cronapi.json.setProperty(objeto, 'nome', this.cronapi.json.getProperty(cursoAtual, 'name'));
      //
      this.cronapi.json.setProperty(objeto, 'selecionado', false);
      //
      listaCurso.push(objeto);
    }
  }
  //
  this.cronapi.screen.changeValueOfField("vars.cursosUsuario", listaCurso);
}
