    const clearAll = () => {
    document.getElementById("results").innerHTML = "(click 'Process')"; 
    document.getElementById("string").value = "";
    }
    const delimit = () => {
        const banWords = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", 
                          "S", "T", "U", "V", "W", "X", "Y", "Z", "II", "III", "IV", "V", "JR", "SR", "ESQ", "DE", "LA", "LE", 
                          "VAN", "DER", "DEL", "DELLA", "VON", "AL", "BEN", "BIN", "DA", "DAS", "DEN", "DI", "DO", "DOS", "DU",
                          "EL", "IL", "MAC", "MC", "SAINT", "SAINTE", "ST", "STE", "TEN", "TER", "VD", "SEN", "ZUM"]
              
        let counter = 0,
        dArray = String(document.getElementById('string').value).split(" "),
        banCount = 0
        // Capture ban word match, eliminate fusion between ban word + prior word, halt comparison after match
        checkInput: for (let i = 0; i < dArray.length; i++){
            checkBans: for (let b = 0; b < banWords.length; b++){
                if (dArray[i].toUpperCase() == banWords[b] || dArray[i].toUpperCase() == banWords[b]+"."
                    || dArray[i].toUpperCase() == banWords[b]+"'"){
                    banCount++ 
                    dArray.splice(i, 1, " " + dArray[i])
                    break checkBans;
                }
            }
        if (banCount == 0){
          counter++
        } else {
          banCount--
}
        if (counter % 4 == 0){
          dArray.splice(i, 0, "<br>")
       } else 
            if (counter % 2 == 0){
                dArray.splice(i, 0, " ")
}
}
       dArray = dArray.join('')
       document.getElementById('results').innerHTML = "<b>Select and copy the following into excel for formatted rows: </b><br><br>" + dArray
    }

