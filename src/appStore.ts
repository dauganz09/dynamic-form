import create,{SetState,GetState} from 'zustand';
import FieldObj from './types'

interface FieldStore {
    formfields : Array<FieldObj>,
    loading : boolean,
    fetchFields : () => void,
    changeValue : (id : string, value : string) => void,
    
} 

const useStore = create((set : SetState<FieldStore>,get : GetState<FieldStore>) => ({
    formfields : [],
    loading : false,
    fetchFields :async () => {
        set({loading : true});
        const res = await fetch('https://ulventech-react-exam.netlify.app/api/form');
        const {data} = await res.json();
        set({formfields : data});
        set({loading : false});
    },
    changeValue : ((id : string, value : string) => {handleChange(id, value, set,get)})
       
    }
    ));


const handleChange=(id : string, value : string,set:any ,get :any) => {
   const formFields = get().formfields;
   const n = [...formFields];
   let field = n.find(f => f.fieldName === id);
   field.value = value;
   set({formfields : n});

}


export default useStore;