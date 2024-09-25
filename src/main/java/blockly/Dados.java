package blockly;

import cronapi.*;
import cronapi.rest.security.CronappSecurity;
import java.util.Iterator;
import java.util.concurrent.Callable;


@CronapiMetaData(type = "blockly")
@CronappSecurity
public class Dados {

public static final int TIMEOUT = 300;

/**
 *
 * @param idUser
 *
 * @author Ícaro Da Silva Antunes
 * @since 24/09/2024, 14:33:40
 *
 */
public static Var retornaCursoQueUsuarioNTem(@ParamMetaData(description = "idUser", id = "dadf80a4") Var idUser) throws Exception {
 return new Callable<Var>() {

   private Var cursos = Var.VAR_NULL;
   private Var cursosusuario = Var.VAR_NULL;
   private Var listaCurso = Var.VAR_NULL;
   private Var i = Var.VAR_NULL;
   private Var cursoAssociado = Var.VAR_NULL;

   public Var call() throws Exception {
    cursos =
    cronapi.json.Operations.toJson(
    cronapi.database.Operations.query(Var.valueOf("app.entity.Cursos"),Var.valueOf("select \n	c \nfrom \n	Cursos c")));
    cursosusuario =
    cronapi.json.Operations.toJson(
    cronapi.database.Operations.query(Var.valueOf("app.entity.CursosUsuario"),Var.valueOf("select \n	c \nfrom \n	CursosUsuario c  \nwhere \n	c.user = :user"),Var.valueOf("user",idUser)));
    listaCurso =
    cronapi.list.Operations.newList();
    for (Iterator it_i = cursos.iterator(); it_i.hasNext();) {
        i = Var.valueOf(it_i.next());
        cursoAssociado =
        cronapi.list.Operations.findFirst(cursosusuario, i);
        if (
        Var.valueOf(cursoAssociado.equals(
        Var.valueOf(0))).getObjectAsBoolean()) {
            cronapi.list.Operations.addLast(listaCurso,i);
        }
    } // end for
    return listaCurso;
   }
 }.call();
}

/**
 *
 * @param idUser
 *
 * @author Ícaro Da Silva Antunes
 * @since 24/09/2024, 14:33:40
 *
 */
public static Var retornaOsCursoQueUserTem(@ParamMetaData(description = "idUser", id = "dadf80a4") Var idUser) throws Exception {
 return new Callable<Var>() {

   private Var cursosusuario = Var.VAR_NULL;

   public Var call() throws Exception {
    cursosusuario =
    cronapi.json.Operations.toJson(
    cronapi.database.Operations.query(Var.valueOf("app.entity.CursosUsuario"),Var.valueOf("select \n	c.cursos \nfrom \n	CursosUsuario c  \nwhere \n	c.user = :user"),Var.valueOf("user",idUser)));
    return cursosusuario;
   }
 }.call();
}

}

