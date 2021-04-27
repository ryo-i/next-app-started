import { message } from './message';

const text: string = message.text;
const selector: string = message.selector;


const hello = (): void => {
    const dom: HTMLButtonElement = document.querySelector(selector) as HTMLButtonElement;
    console.log(dom);
    if (dom) {
        dom.innerHTML = text;
        console.log('text-> ' + text);
    }
}

export { hello };