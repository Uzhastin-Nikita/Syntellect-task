// В комнате находится человек. 
// Через какое-то время в комнату заходит еще один человек и здоровается с первым. 
// Людей в комнате становится 2, а счетчик рукопожатий становится равен 1. 
// Через какое-то время заходит еще один человек и здоровается с другими людьми в комнате. 
// Людей в комнате - 3 и счетчик рукопожатий - 3. И т.д. 
// Требуется написать код на JS для подсчета кол-ва рукопожатий для 10 человек и дать ответ.

const PEOPLE = 10;

const peopleHandshake = (peopleCount) => {
    let people = 0;
    
    handshakeCount = handshakeResult(people, peopleCount);
    
    return handshakeCount;
    };

const handshakeResult = (people, peopleCount) => {
    let handshakeCount = 0;

    while ( people < peopleCount ) {
        people++;
        handshakeCount += people - 1;
    }

    return handshakeCount;
};


console.log(peopleHandshake(PEOPLE)); // 45
