//               Hey...where's the cheese? Saw some robots run by with it. 
//               They left a textfile somewhere around here, because they're not able read the text. 
//               I think it's encrypted though. Can you decrypt it?
//           o_o /
//           (")
//          \/'\/
//   ____(__(,_,)__________________________________________________________


// Level 1: Reverse-nge of the Strings
const level1 = (input) => {
    const rev = input.split('').reverse().join('');
    return rev;
};

// Level 2: XOR-tainly Confusing Encryption
const level2 = (input) => {
    const key = "flex";
    const xor = (str, key) => {
        let result = '';
        for (let i = 0; i < str.length; i += key.length) {
            for (let j = 0; j < key.length; j++) {
                result += String.fromCharCode(str.charCodeAt(i + j) ^ key.charCodeAt(j));
            }
        }
        return result;
    };
    let enc = xor(input, key);
    return enc;
};

// Level 3: The BASE-ics and the Secret Caesar
const level3 = (input) => {
    const data = btoa(input);
    let enc = '';
    const shift = 5;
    for (let i = 0; i < data.length; i++) {
        let charCode = data.charCodeAt(i);
        if (charCode >= 65 && charCode <= 90) {
            charCode = ((charCode - 65 + shift) % 26) + 65;
        } else if (charCode >= 97 && charCode <= 122) {
            charCode = ((charCode - 97 + shift) % 26) + 97;
        }
        enc += String.fromCharCode(charCode);
    }
    return enc;
};

// Level 4: Flip-rehension and Letter Substitootion
const level4 = (input) => {
    const rev = input.split('').reverse().join('');
    const sub = rev.replace(/./g, (c) => {
        return String.fromCharCode(c.charCodeAt(0) + 3);
    });
    return sub;
};

// Final Challenge: The Pun-derful Decryption
const flag = "RDCTF{this_is_a_fake_flag}"; //use this only to test your decryption code
const encryptedMessage = (input) => level4(level3(level2(level1(input))));
console.log("Decrypt this message:", encryptedMessage(flag));