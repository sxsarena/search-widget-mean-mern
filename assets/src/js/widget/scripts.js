// Desabilitar os campos de entrada e saida, mediante a uma ação do usuario
Desafio.util.enableDisableFields( $('.js-disabledate'), $('.js-date') );

// Não permitir caracteres especias e digitos
Desafio.util.alphaFieldsValidate($('.js-field-string'));

//Validação ao submeter um formulario
Desafio.util.formSubmit($('.form'), $('.form-field:enabled'));

//Validacao na digitação do usuario
Desafio.util.alterFields( $('.form-field:enabled') );

// Regra para campos de entrada e saida utilizando o plugin Pickadate
Desafio.fromToPickadate.init( $('.js-entrydate'), $('.js-releasedate') );