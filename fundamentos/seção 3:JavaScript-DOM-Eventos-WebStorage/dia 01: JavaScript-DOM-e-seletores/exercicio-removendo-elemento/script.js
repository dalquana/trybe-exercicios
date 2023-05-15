//removendo um elemento usando for
const parent = document.getElementById('parent');
const allChildren = parent.childNodes;
for(let i = allChildren.length -1;i >= 0;i-=1){
    const currentChild = allChildren[i];
    if(currentChild.id === 'where-are-you'){
        currentChild.removeChild(currentChild.firstElementChild)
    }
}
//solução sem usar o for 
const paren = document.getElementById('where-are-you');
parent.removeChild(parent.firstElementChild);