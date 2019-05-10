    const clearAll = (str, res) => {
        str.value = ""; str.innerHTML = ""; res.innerHTML = "(click 'Process')"; 
    }
    
    const delimit = (str, res) => {
         var date1 = new Date();
         res.innerHTML = 
         str.replace(/( )(?=(A|B|C|D|E|F|G|H|I|J|K|L|M|N|O|P|Q|R|S|T|U|V|W|X|Y|Z|II|III|IV|V|JR|SR|ESQ|DE|LA|LE|VAN|DER|DEL|DELLA|E|VON|AL|BEN|BIN|DA|DAS|DEN|DI|DO|DOS|D|DU|EL|IL|L|MAC|O|SAINT|SAINTE|ST|STE|TEN|TER|V|VD|SEN|ZUM)( |\.))/ig, "900001VARHOLDER")
            .replace(/((?:[^ ]* ){1}[^ ]*) /ig, '<tr><td>'+'$1'+'<br></td></tr>')
            .replace(/900001VARHOLDER/g, " ");
         var date2 = new Date();
         var diff = date2 - date1; console.log(diff)
    }
