export function myAdversary(state, level){
    let gameState = Object.assign({}, state);
    let score = 0;
    let available = [];
    let comparer = {
        tl: 0,
        tc: 0,
        tr: 0,
        cl: 0,
        cc: 0,
        cr: 0,
        bl: 0,
        bc: 0,
        br: 0
    };

    if(
        ((gameState.topLeftValue === gameState.topCenterValue) && (gameState.topLeftValue  === gameState.topRightValue) && (gameState.topLeftValue === 'O')) ||
        ((gameState.centerLeftValue === gameState.centerCenterValue) && (gameState.centerLeftValue === gameState.centerRightValue) && (gameState.centerLeftValue === 'O')) ||
        ((gameState.bottomLeftValue === gameState.bottomCenterValue) && (gameState.bottomLeftValue === gameState.bottomRightValue) && (gameState.bottomLeftValue === 'O')) ||
        ((gameState.topLeftValue === gameState.centerLeftValue) && (gameState.topLeftValue  === gameState.bottomLeftValue) && (gameState.topLeftValue === 'O')) ||
        ((gameState.topCenterValue === gameState.centerCenterValue) && (gameState.topCenterValue === gameState.bottomCenterValue) && (gameState.topCenterValue === 'O')) ||
        ((gameState.topRightValue === gameState.centerRightValue) && (gameState.topRightValue  === gameState.bottomRightValue) && (gameState.topRightValue === 'O')) ||
        ((gameState.topLeftValue === gameState.centerCenterValue) && (gameState.topLeftValue  === gameState.bottomRightValue) && (gameState.topLeftValue === 'O')) ||
        ((gameState.topRightValue === gameState.centerCenterValue) && (gameState.topRightValue === gameState.bottomLeftValue) && (gameState.topRightValue === 'O'))
    ){
        return [null, 10]
    }
    if(
        ((gameState.topLeftValue === gameState.topCenterValue) && (gameState.topLeftValue  === gameState.topRightValue) && (gameState.topLeftValue === 'X')) ||
        ((gameState.centerLeftValue === gameState.centerCenterValue) && (gameState.centerLeftValue === gameState.centerRightValue) && (gameState.centerLeftValue === 'X')) ||
        ((gameState.bottomLeftValue === gameState.bottomCenterValue) && (gameState.bottomLeftValue === gameState.bottomRightValue) && (gameState.bottomLeftValue === 'X')) ||
        ((gameState.topLeftValue === gameState.centerLeftValue) && (gameState.topLeftValue  === gameState.bottomLeftValue) && (gameState.topLeftValue === 'X')) ||
        ((gameState.topCenterValue === gameState.centerCenterValue) && (gameState.topCenterValue === gameState.bottomCenterValue) && (gameState.topCenterValue === 'X')) ||
        ((gameState.topRightValue === gameState.centerRightValue) && (gameState.topRightValue  === gameState.bottomRightValue) && (gameState.topRightValue === 'X')) ||
        ((gameState.topLeftValue === gameState.centerCenterValue) && (gameState.topLeftValue  === gameState.bottomRightValue) && (gameState.topLeftValue === 'X')) ||
        ((gameState.topRightValue === gameState.centerCenterValue) && (gameState.topRightValue === gameState.bottomLeftValue) && (gameState.topRightValue === 'X'))
    ){
        return [null, -1]
    }
    if(
        (gameState.topLeftValue !== " ") && (gameState.topCenterValue !== " ") && (gameState.topRightValue !== " ") && 
        (gameState.centerLeftValue !== " ") && (gameState.centerCenterValue !== " ") && (gameState.centerRightValue !== " ") && 
        (gameState.bottomLeftValue !== " ") && (gameState.bottomCenterValue !== " ") && (gameState.bottomRightValue !== " ")
    ){
        return [null, 0]
    }
    if(gameState.topLeftValue === " "){
        available.push('tl')
    }
    if(gameState.topCenterValue === " "){
        available.push('tc')
    }
    if(gameState.topRightValue === " "){
        available.push('tr')
    }
    if(gameState.centerLeftValue === " "){
        available.push('cl')
    }
    if(gameState.centerCenterValue === " "){
        available.push('cc')
    }
    if(gameState.centerRightValue === " "){
        available.push('cr')
    }
    if(gameState.bottomLeftValue === " "){
        available.push('bl')
    }
    if(gameState.bottomCenterValue === " "){
        available.push('bc')
    }
    if(gameState.bottomRightValue === " "){
        available.push('br')
    }
    if(gameState.move === 1){
        for(let i =0; i < available.length; i++){
            if(available[i]==='tl'){
                gameState.move = 0;
                gameState.topLeftValue = 'X';
                comparer.tl= score + myAdversary(gameState, level+1)[1]
                gameState.topLeftValue = ' ';
                gameState.move = 1;
            }
            if(available[i]==='tc'){
                gameState.move = 0;
                gameState.topCenterValue = 'X';
                comparer.tc= score + myAdversary(gameState, level+1)[1]
                gameState.topCenterValue = ' ';
                gameState.move = 1;
            }
            if(available[i]==='tr'){
                gameState.move = 0;
                gameState.topRightValue = 'X';
                comparer.tr= score + myAdversary(gameState, level+1)[1]
                gameState.topRightValue = ' ';
                gameState.move = 1;
            }
            if(available[i]==='cl'){
                gameState.move = 0;
                gameState.centerLeftValue = 'X';
                comparer.cl= score + myAdversary(gameState, level+1)[1]
                gameState.centerLeftValue = ' ';
                gameState.move = 1;
            }
            if(available[i]==='cc'){
                gameState.move = 0;
                gameState.centerCenterValue = 'X';
                comparer.cc= score + myAdversary(gameState, level+1)[1]
                gameState.centerCenterValue = ' ';
                gameState.move = 1;
            }
            if(available[i]==='cr'){
                gameState.move = 0;
                gameState.centerRightValue = 'X';
                comparer.cr= score + myAdversary(gameState, level+1)[1]
                gameState.centerRightValue = ' ';
                gameState.move = 1;
            }
            if(available[i]==='bl'){
                gameState.move = 0;
                gameState.bottomLeftValue = 'X';
                comparer.bl= score + myAdversary(gameState, level+1)[1]
                gameState.bottomLeftValue = ' ';
                gameState.move = 1;
            }
            if(available[i]==='bc'){
                gameState.move = 0;
                gameState.bottomCenterValue = 'X';
                comparer.bc= score + myAdversary(gameState, level+1)[1]
                gameState.bottomCenterValue = ' ';
                gameState.move = 1;
            }
            if(available[i]==='br'){
                gameState.move = 0;
                gameState.bottomRightValue = 'X';
                comparer.br= score + myAdversary(gameState, level+1)[1]
                gameState.bottomRightValue = ' ';
                gameState.move = 1;
            }
        }

        let max = Number.POSITIVE_INFINITY
        let move = null

        for(let i =0; i < available.length; i++){
            if(available[i]==='tl'){
                if(comparer.tl <= max){
                    max = comparer.tl
                    move = 'tl'
                }
            }
            if(available[i]==='tc'){
                if(comparer.tc <= max){
                    max = comparer.tc
                    move = 'tc'
                }
            }
            if(available[i]==='tr'){
                if(comparer.tr <= max){
                    max = comparer.tr
                    move = 'tr'
                }
            }
            if(available[i]==='cl'){
                if(comparer.cl <= max){
                    max = comparer.cl
                    move = 'cl'
                }
            }
            if(available[i]==='cc'){
                if(comparer.cc <= max){
                    max = comparer.cc
                    move = 'cc'
                }
            }
            if(available[i]==='cr'){
                if(comparer.cr <= max){
                    max = comparer.cr
                    move = 'cr'
                }
            }
            if(available[i]==='bl'){
                if(comparer.bl <= max){
                    max = comparer.bl
                    move = 'bl'
                }
            }
            if(available[i]==='bc'){
                if(comparer.bc <= max){
                    max = comparer.bc
                    move = 'bc'
                }
            }
            if(available[i]==='br'){
                if(comparer.br <= max){
                    max = comparer.br
                    move = 'br'
                }
            }
        }
        let value = comparer.tl+comparer.tc+comparer.tr+comparer.bl+comparer.bc+comparer.br+comparer.cl+comparer.cc+comparer.cr;
        return [move, value/ level]
    }
    if(gameState.move === 0){
        for(let i =0; i < available.length; i++){
            if(available[i]==='tl'){
                gameState.move = 1;
                gameState.topLeftValue = 'O';
                comparer.tl= score + myAdversary(gameState, level+1)[1]
                gameState.topLeftValue = ' ';
                gameState.move = 0;
            }
            if(available[i]==='tc'){
                gameState.move = 1;
                gameState.topCenterValue = 'O';
                comparer.tc= score + myAdversary(gameState, level+1)[1]
                gameState.topCenterValue = ' ';
                gameState.move = 0;
            }
            if(available[i]==='tr'){
                gameState.move = 1;
                gameState.topRightValue = 'O';
                comparer.tr= score + myAdversary(gameState, level+1)[1]
                gameState.topRightValue = ' ';
                gameState.move = 0;
            }
            if(available[i]==='cl'){
                gameState.move = 1;
                gameState.centerLeftValue = 'O';
                comparer.cl= score + myAdversary(gameState, level+1)[1]
                gameState.centerLeftValue = ' ';
                gameState.move = 0;
            }
            if(available[i]==='cc'){
                gameState.move = 1;
                gameState.centerCenterValue = 'O';
                comparer.cc= score + myAdversary(gameState, level+1)[1]
                gameState.centerCenterValue = ' ';
                gameState.move = 0;
            }
            if(available[i]==='cr'){
                gameState.move = 1;
                gameState.centerRightValue = 'O';
                comparer.cr= score + myAdversary(gameState, level+1)[1]
                gameState.centerRightValue = ' ';
                gameState.move = 0;
            }
            if(available[i]==='bl'){
                gameState.move = 1;
                gameState.bottomLeftValue = 'O';
                comparer.bl= score + myAdversary(gameState, level+1)[1]
                gameState.bottomLeftValue = ' ';
                gameState.move = 0;
            }
            if(available[i]==='bc'){
                gameState.move = 1;
                gameState.bottomCenterValue = 'O';
                comparer.bc= score + myAdversary(gameState, level+1)[1]
                gameState.bottomCenterValue = ' ';
                gameState.move = 0;
            }
            if(available[i]==='br'){
                gameState.move = 1;
                gameState.bottomRightValue = 'O';
                comparer.br= score + myAdversary(gameState, level+1)[1]
                gameState.bottomRightValue = ' ';
                gameState.move = 0;
            }
        }
        let max = Number.NEGATIVE_INFINITY
        let move = null
        for(let i =0; i < available.length; i++){
            if(available[i]==='tl'){
                if(comparer.tl >= max){
                    max = comparer.tl
                    move = 'tl'
                }
            }
            if(available[i]==='tc'){
                if(comparer.tc >= max){
                    max = comparer.tc
                    move = 'tc'
                }
            }
            if(available[i]==='tr'){
                if(comparer.tr >= max){
                    max = comparer.tr
                    move = 'tr'
                }
            }
            if(available[i]==='cl'){
                if(comparer.cl >= max){
                    max = comparer.cl
                    move = 'cl'
                }
            }
            if(available[i]==='cc'){
                if(comparer.cc >= max){
                    max = comparer.cc
                    move = 'cc'
                }
            }
            if(available[i]==='cr'){
                if(comparer.cr >= max){
                    max = comparer.cr
                    move = 'cr'
                }
            }
            if(available[i]==='bl'){
                if(comparer.bl >= max){
                    max = comparer.bl
                    move = 'bl'
                }
            }
            if(available[i]==='bc'){
                if(comparer.bc >= max){
                    max = comparer.bc
                    move = 'bc'
                }
            }
            if(available[i]==='br'){
                if(comparer.br >= max){
                    max = comparer.br
                    move = 'br'
                }
            }
        }
        let value = comparer.tl+comparer.tc+comparer.tr+comparer.bl+comparer.bc+comparer.br+comparer.cl+comparer.cc+comparer.cr;
        return [move, value/level]
    }
  }