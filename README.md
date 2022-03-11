# Chrome Extention Development

## Libraries
- Types
- @types/chrome
## manifest.json (original documentation => developer.chrome/extentions/manifest)
- Describes our extention 
- is an object 
- manifest.json tells the borewser you can open it.
- name, version, description, manifest_version, look up other attributes on documentation

### Background Scripts 
- Chrome listeers, listening the browser events,
- Events triggers background scripts,
- Navigating tabs, closing windows

### Content Scripts (globs)
- Matches 
- Exclude_matches
- js
- run_at

### Permissions

### Icons
### Browser Action
- Extention hover (default_title)


## Chrome Storage
- Have async operations like read and write 
- Firtsly me must add permision for using storage
- Storage => local storage (another browser) + sync storage (another device)
- chrome.storage.(sync/local).set()
- chrome.storage.(sync/local).get([key])

## Script Communication (message passing)
- one time request
- connections 
- foreground (content) => chrome.runtime.sendMessage({}, callback for response)
- background => chrome.runtime.onMessage.addListener((req,sender,res))

## Cross Origin Rexuests (XHR)
- Create instance from XHttpRequest 
- and use onreadystatechange from instance

## Internationalization
- Create _loacle folder in src folder
- in _locale folder create language folders
- in string __MSG_attributeName__
- chrome.i18n.getmessage(attributename) 