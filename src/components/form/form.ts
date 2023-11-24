import { addDoc, collection } from "firebase/firestore";
import { db } from "../../utils/firebase";

class Form extends HTMLElement {
    constructor(){
        super ()
        this.attachShadow({mode:"open"})
    }
}
render (){
    if (!this.shadowRoot) return;
    this.shadowRoot.innerHTML = `
    <input name="Nombre de usuario" type="text" placeholder="Nombre del usuario">
    <input name="Color" type="text" placeholder="Color deseado">
    <input name="Letra" type="text" placeholder="Letra deseada">
    <button class="crear">Crear</button>
    `
}
const nameinput = this.shadowRoot.querySelector <HTMLInputElement> ('[name="Nombre de usuario"]')
const Colorinput = this.shadowRoot.querySelector <HTMLInputElement> ('[name="Color"]')
const letterinput = this.shadowRoot.querySelector <HTMLInputElement> ('[name="Letra"]')
const button = this.shadowRoot.querySelector <HTMLInputElement> ('button')
button?.addEventListener("click", async ()=>{
    //aquí va lo que pasa al dar click en el botón
    const namevalue = nameinput?.value;
    const Colorvalue = Colorinput?.value;
    const lettervalue = letterinput?.value;
    const col = collection (db, "products")
    await addDoc (col, {
        name: namevalue,
        Color: Colorvalue,
        letter: lettervalue,

    }) 
    window.alert("Producto creado")
})

{
connectedCallback(){
this.render()
}
}
customElements.define ("product-info", Form)
