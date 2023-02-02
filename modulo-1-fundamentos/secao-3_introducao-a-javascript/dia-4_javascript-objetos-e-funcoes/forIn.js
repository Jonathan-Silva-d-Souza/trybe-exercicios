let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };
console.log(`Bem-vinda ${info.personagem}`)
info.recorrente = 'Sim'
console.log(info)

for (let key in info){
    //console.log(key)
    console.log(info[key])
}

let info2 = {
    personagem: 'Margarida e Tio Patinhas' ,
    origem: 'Pato Donald e Christmas on Bear Mountain, Dell’s Four Color Comics #178',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald e O último MacPatinhas' ,
    recorrente: 'Sim' ,
}
for (let key in info){
    if(key === 'recorrente' && info[key] === 'Sim' && info2[key] === 'Sim'){
        console.log('Ambos recorrentes')
    } else{
        console.log(info[key] + ' e ' + info2[key])
    }
}


let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
  };