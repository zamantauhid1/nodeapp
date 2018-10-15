function addMessage(){
    return "Result is:"
}

function promptUserForChoice(){
    var string = "Please Make Your Choice:"
    string += "\n 1) Press A to add two numbers"
    string += "\n 1) Press S to subtract two numbers"
    string += "\n 1) Press M to multiply two numbers"
    string += "\n 1) Press D to divide two numbers"

    return string;
}

module.exports = {addMessage,promptUserForChoice}