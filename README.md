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