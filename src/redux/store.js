let store = {
    _subscriber() {
        console.log('state')
    },
    _state : {
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
                // slide_images:[
                //     '/'
                // ]
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
                    },
                    button:{
                        type:'submit',
                        value:'Send',
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
    },
    getState(){
        return this._state
    },
    subscribe (observer) {
        this._subscriber = observer;
    }, 
    dispatch(action){
       if (action.type === 'SET-NAME'){
        this._state.pages.contact_page.contact_form.name.value = action.value.target.value;   
        this._subscriber(this._state);
       } else if( action.type === 'SET-EMAIL'){
        this._state.pages.contact_page.contact_form.email.value = action.value.target.value;
        this._subscriber(this._state);
       }else if(action.type === 'SET-TEXT'){
        this._state.pages.contact_page.contact_form.textarea.value = action.value.target.value;
        this._subscriber(this._state);
       }
    }
    
}

export default store;
window.store = store;