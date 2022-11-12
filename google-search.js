function getParameterByName(name) {
    var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
    return match && match[1];
}

if (window.location.hostname.split('.').slice(0, 2).join('.') == 'www.google') {
  window.prompt("Copy", "https://www.google.com/search?q=" + getParameterByName('q'));
}
