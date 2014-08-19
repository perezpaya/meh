Meh
===============

Meh.js is a toolset that extends javascript classes functionanlity.

## Including
```javascript
require('meh');

// now the extensions are loaded

'Hola {0}'.format('hey');
```

## String

### String.prototype.format()
```javascript
'Hello {name}, how are you?'.format({
    name: 'pedro'
});
-> 'Hello pedro, how are you?'

'{0} and {1} are happy'.format('Paca', 'Pedro');
-> 'Paca and Pedro are happy'
 
'{0} and {1} car'.format(['Blue', 'Green', 'Yellow']);
-> 'Blue and Green car'
```

## Array

### Array.prototype.equals(***Array***)
```javascript
[0, 1, 3].equals([0, 1, 3]);
-> true

[0,[1,2,3],3].equals([0,[1,2,3],3]);
-> true

[0,1,3].equals([0,3,1]);
-> false
```

# Contributions

Feel free to pull request new freatures to this repo, if we consider your extension is useful we will merge it :)

# License
Do the fuck you want with this code license.