    const clearAll = (str, res) => {
        str = "";
        res.innerHTML = "(click 'Process')"; 
    }
    
    const delimit = (str, res, table) => {
            const x = 
         str.replace(/( )(?=(A|B|C|D|E|F|G|H|I|J|K|L|M|N|O|P|Q|R|S|T|U|V|W|X|Y|Z|II|III|IV|V|JR|SR|ESQ|DE|LA|LE|VAN|DER|DEL|DELLA|E|VON|AL|BEN|BIN|DA|DAS|DEN|DI|DO|DOS|D|DU|EL|IL|L|MAC|O|SAINT|SAINTE|ST|STE|TEN|TER|V|VD|SEN|ZUM)( |\.))/ig, "900001VARHOLDER")
            .replace(/((?:[^ ]* ){1}[^ ]*) /ig, '<tr><td>'+'$1'+'<br></td></tr>')
            .replace(/900001VARHOLDER/g, " ");
      
            res.innerHTML = "<b>Select and copy the following into excel for formatted rows:</b> </br><br><br>" + x;
            table.innerHTML = x;
    }
