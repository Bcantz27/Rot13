function doDecode() {
    var secret = document.getElementById("decodeInput").value;
    var d = rot(secret);
    document.getElementById("decodeResults").innerHTML = d;
}

function doEncode() {
    var secret = document.getElementById("encodeInput").value;
    var d = rot(secret);
    document.getElementById("encodeResults").innerHTML = d;
}

function rot(s) {
    //use a Regular Expression to Replace only the characters that are a-z or A-Z
    return s.replace(/[a-zA-Z]/g, function (c) {
        //Get the character code of the current character and add 13 to it
        //If it is larger than z's character code then subtract 26 to support wrap around.
        return String.fromCharCode((c <= "Z" ? 90 : 122) >= (c = c.charCodeAt(0) + 13) ? c : c - 26);
    });
}
