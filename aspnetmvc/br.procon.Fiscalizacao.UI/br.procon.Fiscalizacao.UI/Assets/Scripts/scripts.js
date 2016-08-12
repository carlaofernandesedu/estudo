$(document).ready(function() {
    //TABELAS			
    $('#grupo_lista_relacionar').dataTable({
	
        /*Coluna que não permite ordenação, partindo do array 0*/
        "aoColumnDefs": [{ "bSortable": false, "aTargets": [ "no-sort" ] }],
		
        /*Coluna que incia em ORDENAÇÃO ASC ou DESC*/
        "order": [[ 0, "asc" ]],
		
		
        /*Resposividade da tabela*/
        responsive: true
    });
	
    $('.confirma-excluir').on('click', function () {
        return confirm('Deseja excluir o item selecionado?');
    });

    $('.confirma-altera-status').on('click', function () {
        return confirm('Deseja alterar o status do registro?');
    });
	
    // aumentando a fonte
    $(".inc-font").click(function () {
        var size = $("body").css('font-size');

        size = size.replace('px', '');
        size = parseInt(size) + 1.4;
		
        if(size < 19){		
            $("body").animate({'font-size' : size + 'px'});
            $(".inc-font").removeClass('iconOff');	
            $(".dec-font").removeClass('iconOff');			
        }
        else{
            $(".inc-font").addClass('iconOff');
            $(".dec-font").removeClass('iconOff');
        }
    });

    //diminuindo a fonte
    $(".dec-font").click(function () {
        var size = $("body").css('font-size');
        size = size.replace('px', '');
        size = parseInt(size) - 1.4;
			
        if(size > 10){
            $("body").animate({'font-size' : size + 'px'});
            $(".dec-font").removeClass('iconOff');	
            $(".inc-font").removeClass('iconOff');				
        }
        else{
            $(".dec-font").addClass('iconOff');
            $(".inc-font").removeClass('iconOff');	
        }
			
    });

    // resetando a fonte
    $(".res-font").click(function () {

        $("body").animate({'font-size' : '14px'});
        $(".inc-font").removeClass('iconOff');	
        $(".dec-font").removeClass('iconOff');	
    });
	
    //Reset Inputs
    $(".reset-form").click(function () {
        $('#form_filtro input').each(function () {
            $(this).val('');
        });
        $('#form_filtro select').each(function () {
            $(this).val('');
        });
    });

    $('#form_filtro').submit(function () {
        var submit = false;

        $('#form_filtro input').each(function () {
            if ($(this).val() != '')
                submit = true;
        });
        $('#form_filtro select').each(function () {
            if ($(this).val() != '')
                submit = true; 
        });

        if (!submit)
            alert('Favor preencher um dos campos para efetuar a pesquisa');

        return submit; // return false to cancel form action
    });

    //Eventos AJAX
	//$('.ddlEmpresa').change(function () {
	//    $.getJSON("/Perfil/GetAplicacao?emp=" + $(this).val(), function (result) {
	//        $('.ddlAplicacao').children().remove().end().append($('<option value>--Selecione--</option>'))
	//        $.each(result, function (i, field) {
	//            $('.ddlAplicacao').append($('<option>', {
	//                value: field.Codigo,
	//                text: field.Descricao
	//            }));
	//        });
	//    });
	//})
    } 
);

//MENU E RECURSOS
function GetRecursos() {
    var id = $('.ddlAplicacao option:selected').val();
    ListarItens(id);
}
function ListarItens(id) {
    $.ajax({
        url: "/Recurso/GetRecursoByAplicacao",
        data: { id: id },
        success: function (result) {
            $('.ddlRecurso').children().remove().end().append($('<option value>--Selecione--</option>'))
            $.each(result, function (i, field) {
                $('.ddlRecurso').append($('<option>', {
                    value: field.Codigo,
                    text: field.Nome
                }));
            });
        }

    });
};

function GetRecursosDisponivelMenu(menuItem) {
    var id = $('.ddlMenu option:selected').val();
    $.ajax({
        url: "/MenuItem/GetRecursoDisponivelMenu",
        data: { id: id, idItem: menuItem },
        success: function (result) {
            $('.ddlRecurso').children().remove().end().append($('<option value>--Selecione--</option>'))
            $.each(result, function (i, field) {
                $('.ddlRecurso').append($('<option>', {
                    value: field.Codigo,
                    text: field.Nome
                }));
            });
        }
    });
}