import React,{FC} from 'react';
import { TextField,MenuItem } from '@mui/material';
import  useStore  from '../src/appStore';

type FieldProps = {
    key : number,
    fieldName : string,
    type : string,
    value : string,
    options? : Array<string>,
    disabled : boolean
    
}



const InputElement :FC<FieldProps> = ({fieldName,type,value,options,disabled}) => {

 const changeValue = useStore(state => state.changeValue)

  return <TextField
            fullWidth
            type={type}
            multiline={type === 'multiline'}
            select={type === 'select'}
            rows ={type==='multiline'? 5:1}
            label={changeCase(fieldName)}
            placeholder={fieldName}
            value={value}
            onChange={(e) => changeValue(fieldName,e.target.value)}
            sx={{mb : 3}}
            disabled = {disabled}
    >
        {
            options ? options.map((option:string,i:number) => <MenuItem key={i} value={option}>{option}</MenuItem>) : null
        }

    </TextField>
};


const changeCase = (str:string) => {
    let newStr =  str.split(/(?=[A-Z])/);
    return newStr.map(s=>s[0].toUpperCase() + s.slice(1)).join(' ');

}


export default InputElement;
