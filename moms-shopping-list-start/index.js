const form = document.addItem

form.addEventListener("submit",function(event){
    event.preventDefault()

    //adding new items to list
    const listInput = form.title.value
    form.title.value = ""
    const listItem = document.createElement('li')
    listItem.textContent = listInput
    document.getElementsByTagName("ul")[0].append(listItem)
    
    // delete buttons
    
    let btn2 = document.createElement("button")
    btn2.innerHTML = "X"
    listItem.append(btn2)
    btn2.addEventListener("click",() => {
        listItem.remove("li");
    })
    
    // let btn1 = document.createElement("button");
    // btn1.innerHTML = "edit"
    // listItem.append(btn1)
    // btn1.addEventListener("click",() => {
    //     const button = event.target;
    //     const li = button.parentNode;
    //     const ul = li.parentNode;
    //     if(button.textContent === 'edit'){
    //         const input = document.createElement('input');
    //         input.type = 'text';
    //         input.value = textContent;
    //         li.insertBefore(input);
    //         button.textContent = 'save';
    //     else if (button.textContent === 'save'){
    //     )}    
    // })
    
})