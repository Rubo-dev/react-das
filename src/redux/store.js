let reRender = () =>{

}

let state = {
    header:{
        header_menus:[
            {
                title:'Home',
                link: '/home'
            },
            {
                title:'About Us',
                link:'/about-us'
            },
            {
                title:'Contact Us',
                link:'/contact-us'
            }
        ]
    },
    pages:{
        home:{
            counter:0,
        },
        contact_page:{
            contact_form:{
                name:{
                    type:'name',
                    value:'',
                    placeholder:'Name'
                },
                email:{
                    type:'email',
                    value:'',
                    placeholder:'E-Mail'
                },
                textarea:{
                    value:'',
                    placeholder:'Write your message'
                }
            }
            
        }
    },
    footer:{
        footer_copyright:[
            {
                author:'Rubo',
                link:'/rubo'
            },
            {
                author:'Vlo',
                link:'/vlo'
            }
        ]
    }
}

window.state = state;

export const setName = (value) => {
    state.pages.contact_page.contact_form.name.value = value.target.value;   
    reRender(state);
}

export const setEmail= (value) => {
    state.pages.contact_page.contact_form.email.value = value.target.value;
    reRender (state);
}

export const setText = (value) => {
    state.pages.contact_page.contact_form.textarea.value = value.target.value;
    reRender (state);
}

export const subscribe = (observer) =>{
    reRender = observer;
} 

export default state;