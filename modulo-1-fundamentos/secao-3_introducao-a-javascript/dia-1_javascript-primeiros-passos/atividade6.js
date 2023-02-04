// passo 1: usar switch/case
// passo 2: criar variaveis pra cada peça do xadrez (Rei, Rainha, Bispo, Cavalo, Torre, Peão)
// passo 3: returnar dizendo que movimento cada um faz
// passo 4: toLowerCase pra deixar as letras minusculas
// passo 5: se a peça passado por invalida console.log(ERRO)

let peca = 'dama';
switch(peca.toLowerCase()){
    case 'rei': console.log(`O ${peca} pode movimentar uma casa em qualquer direção livre`);
    break;
    case 'rainha': console.log(`A ${peca} pode movimentar para frente, atrás, lados, diagonal, quantas casas quiser`);
    break;
    case 'torre': console.log(`A ${peca} se movimenta para frente, atrás e pelos lados, quantas casas quiser`);
    break;
    case 'bispo': console.log(`O ${peca} se movimenta pela diagonal`);
    break;
    case 'cavalo': console.log(`O ${peca} se movimenta duas casas pra frente e pro lado, ou uma casa pra frente e dois pro lado`);
    break;
    case 'peão': console.log(`O ${peca} caso for a primeira jogada do peão pode andar duas casas pra frente, se não só uma casa pra frente`);
    break;
    default: console.log(`ERRO, a peça ${peca} é inválida`);
    break;

};