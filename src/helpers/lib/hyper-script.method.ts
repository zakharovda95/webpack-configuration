export function hyperScript(template: string, position: InsertPosition = 'afterbegin'): Element {
    const el: Element = document.createElement('div');
    el.insertAdjacentHTML(position, template);
    return el.firstElementChild;
}