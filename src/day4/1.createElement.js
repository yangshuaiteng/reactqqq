class Element{
    constructor(type,attr,children){
        this.type=type;
        this.attr=attr;
        this.children=children;
    }
go(){
let ele=document.createElement(this.type)
for (const key in this.attr) {
   if (key ==="className") {
       ele.setAttribute("class",this.attr[key])
   }
   if (key==="htmlFor") {
       ele.setAttribute("for",this.attr[key])
   }
        ele.setAttribute(key,this.attr[key])
    }
    this.children.forEach((item,index) => {
        let newEle=item instanceof Element?item.go():document.createTextNode(item);
    })
    return ele

}
}

let React={
    createElement(type,attr,...children){
        return new Element(type,attr,children)
    }
}
let ReactDOM={
    render(element,container){
         container.appendChild(element.go())
    }
}
let atr=React.createElement("p",null,"asd")
ReactDOM.render(atr,window.root);
