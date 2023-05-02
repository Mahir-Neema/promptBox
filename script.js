function copyEasyToClipboard() {
    var text = document.getElementById("text-box").value;
    text = "Explain this in easy language:\n" + text;
    navigator.clipboard.writeText(text);
    var copySuccess = document.querySelector(".copy-success");
    copySuccess.style.display = "block";
    setTimeout(function() {
        copySuccess.style.display = "none";
    }, 3000);
}

function copyDetailToClipboard() {
    var text = document.getElementById("text-box").value;
    text = "Explain this in detail: \n" + text;
    navigator.clipboard.writeText(text);
    var copySuccess = document.querySelector(".copy-success");
    copySuccess.style.display = "block";
    setTimeout(function() {
        copySuccess.style.display = "none";
    }, 3000);
}

function copyCommentCodeToClipboard() {
    var text = document.getElementById("text-box").value;
    text = "Comment this Code properly: \n" + text;
    navigator.clipboard.writeText(text);
    var copySuccess = document.querySelector(".copy-success");
    copySuccess.style.display = "block";
    setTimeout(function() {
        copySuccess.style.display = "none";
    }, 3000);
}

