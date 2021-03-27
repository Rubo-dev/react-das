const handleNameChange = 'SET-NAME';
const handleEmailChange = 'SET-EMAIL';
const handleTextChange = 'SET-TEXT';

let store = {
    _subscriber() {
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
       if (action.type === handleNameChange){
        this._state.pages.contact_page.contact_form.name.value = action.value;   
        this._subscriber(this._state);
       } else if( action.type === handleEmailChange){
        this._state.pages.contact_page.contact_form.email.value = action.value;
        this._subscriber(this._state);
       }else if(action.type === handleTextChange){
        this._state.pages.contact_page.contact_form.textarea.value = action.value;
        this._subscriber(this._state);
       }
    }  
}

export const handleNameChangeActionCreator = (newName) =>({type:handleNameChange, value:newName.target.value})
export const handleEmailChangeActionCreator = (newEmail) => ({type:handleEmailChange, value:newEmail.target.value})
export const handleTextChangeActionCreator = (newText) =>({type:handleTextChange, value:newText.target.value})

export default store;
window.store = store;