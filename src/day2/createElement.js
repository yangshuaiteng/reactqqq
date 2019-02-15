
class Element {
    constructor(type,props,children){
        this.type = type;
        this.props = props;
        this.children = children;
    }
    render(){
        let ele = document.createElement(this.type)
        for ( var key in this.props) {
            console.log(key);
            if (key === 'className') {
                ele.setAttribute('class',this.props[key])
            }else if (key === 'htmlFor') {
                ele.setAttribute('for',this.props[key])
            }else if(key === '__self'){
                continue
            }else if(key === '__source'){
                continue
            } else{
                ele.setAttribute(key,this.props[key])
            }
        }
        this.children.forEach((item,index) => {
            let newEle = item instanceof Element ? item.render() : document.createTextNode(item);
            ele.appendChild(newEle)
        })
        return ele;
    }
}

let React = {
    createElement(type,props,...children){
        return new Element(type,props,children)
    }
}
let ReactDOM = {
    render(element,container){
        if (!(element instanceof Object)) {
            container.appendChild(document.createTextNode(element))
        }else{
            return container.appendChild(element.render())
        }
    }
}
