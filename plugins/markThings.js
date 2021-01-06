import Vue from 'vue'

Vue.filter('highlightText', (value) => {
    var text = value
    // hashtags
    const hashregex = /#(\w*[0-9a-zA-Z]+\w*[0-9a-zA-Z])/g
    const hashmatches = [...value.matchAll(hashregex)]
    var x
    for (x of hashmatches) {
      const forURl = x[0].substring(1)
      const replacement = '<b><a href="https://twitter.com/hashtag/' + forURl + '" target="_blank">' + x[0] + '</a></b>'
      console.log(replacement)
      text = text.replace(x[0], replacement)
    }
    // @s
    const atregex = /@(\w*[0-9a-zA-Z]+\w*[0-9a-zA-Z])/g
    const atmatches = [...value.matchAll(atregex)]
    var x
    for (x of atmatches) {
        const forURl = x[0].substring(1)
        const replacement = '<i><a href="https://twitter.com/' + forURl + '" target="_blank">' + x[0] + '</a></i>'
      console.log(replacement)
      text = text.replace(x[0], replacement)
    }
    return text
})