function encrypt() {
  var inputText = document.getElementById('inputText').value;
  var outputText = inputText.replace(/[eioua]/g, function(match) {
      switch(match) {
          case 'e':
              return 'enter';
          case 'i':
              return 'imes';
          case 'a':
              return 'ai';
          case 'o':
              return 'ober';
          case 'u':
              return 'ufat';
          default:
              return match;
      }
  });
  document.getElementById('outputText').value = outputText;
}

function decrypt() {
  var inputText = document.getElementById('inputText').value;
  var outputText = inputText.replace(/(enter|imes|ai|ober|ufat)/g, function(match) {
      switch(match) {
          case 'enter':
              return 'e';
          case 'imes':
              return 'i';
          case 'ai':
              return 'a';
          case 'ober':
              return 'o';
          case 'ufat':
              return 'u';
          default:
              return match;
      }
  });
  document.getElementById('outputText').value = outputText;
}
document.getElementById('clearBtn').addEventListener('click', function() {
  document.getElementById('inputText').value = '';
  document.getElementById('outputText').value = '';
});