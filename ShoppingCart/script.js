function Item(_nomeItem, _quantidadeitem, _precoItem){
    this.nomeItem = _nomeItem;
    this.quantidadeItem = _quantidadeitem;
    this.precoItem = _precoItem;
}

var itens = [];

function adicionaItem(){
    var nomeDoItem = $("#nomeItemId").val();
    var quantidadeDoItem = $("#quantidadeId").val();
    var precoDoItem = $("#precoId").val();

    var itemDaTabela = new Item(nomeDoItem, quantidadeDoItem, precoDoItem);
    itens.push(itemDaTabela)
    atualizaTabela(itemDaTabela)
}

function atualizaTabela(item){
    var htmlFinal = "<tr>";
    htmlFinal += "<td>" + item.nomeItem + "</td>"; 
    htmlFinal += "<td>" + item.quantidadeItem + "</td>"; 
    htmlFinal += "<td>" + item.precoItem + "</td>";
    htmlFinal += "</tr>";
    console.log(htmlFinal);

    $("#tabelaItensId").append(htmlFinal);
}



function fechaCompra(){
    var htmlFinal = "Você comprou: ";
    var soma = 0;

    for(var i = 0; i < itens.length; i++){
        htmlFinal += itens[i].quantidadeItem + " " + itens[i].nomeItem + "; ";
        var valorPorProduto = itens[i].quantidadeItem * itens[i].precoItem;
        soma += valorPorProduto;

    }

    var numeroDePessoas = $("#pessoasId").val();

    var total = soma / numeroDePessoas;

    htmlFinal += "Total: R$" + total + "!";

    $("#fechamentoDeCompraId").text(htmlFinal);
}