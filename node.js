

function add_item() 
{
    const item_list_el = document.getElementById("item_list")
    let input_text_el = document.getElementById("todo_list_input_field")
    input_text=input_text_el.value
    
    console.log(input_text)

    if (!input_text)
    {
        alert("Please fill in something");
        return;
    }

    const item_el=document.createElement("div");
    item_el.classList.add("item");

    const text_field_el= document.createElement("div");
    text_field_el.classList.add("text_field");

    
    const text_el= document.createElement("input")
    text_el.classList.add("text")
    text_el.type= "text"
    text_el.setAttribute("readonly", true)
    text_el.value= input_text
    


    text_field_el.append(text_el)


    const buttons_el= document.createElement("div")
    buttons_el.classList.add("buttons")
    
    const edit_button_el= document.createElement("button")
    edit_button_el.innerHTML= "Edit"

    const delete_button_el= document.createElement("button")
    delete_button_el.innerHTML="Delete"

    buttons_el.appendChild(edit_button_el)
    buttons_el.appendChild(delete_button_el)


    item_el.appendChild(text_field_el);
    item_el.appendChild(buttons_el)

    item_list_el.appendChild(item_el);
    input_text_el.value=""

    edit_button_el.addEventListener("click", ()=>
    {
        text_el.removeAttribute("readonly");
        text_el.focus();
    })

    text_el.addEventListener("keypress", (e)=>
    {
        if (e.key === "Enter")
        {
            text_el.setAttribute("readonly", true)
        }
    })

    delete_button_el.addEventListener("click", ()=>
    {
        item_el.remove();
    })


    


}

const action= document.getElementById("input_but")
action.addEventListener("click",add_item)
  