import React , {FC,useEffect,useState} from 'react';
import {Typography,Box,CircularProgress,Button,FormControl} from '@mui/material/';
import useStore from '../src/appStore';
import InputElement from './InputElement';



const Form: FC = () => {
const {formfields,fetchFields,loading} = useStore();
const [submit, setSubmit] = useState(false);
const [data,setData] = useState('');

useEffect(() => {
  fetchFields();

  
  
}, []);

const handleSubmit = async () => {
    setSubmit(true);
    const newData = formfields.reduce((obj, item) => (obj[item.fieldName] = item.value, obj) ,{});

    const res = await fetch('https://ulventech-react-exam.netlify.app/api/form',{ 
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newData)
    });
        const resdata = await res.json();

        setData(JSON.stringify(resdata));
        setSubmit(false);
    }



    return (
        <Box
        sx={{
          mt: 2,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          
        }}
      >
          <Box 
            sx={{
                display: 'flex',
                alignItems: 'center',
                width : '100%',
            }}
          >
            <Typography variant="h5"  mb={5}>
            Dynamic Form
            </Typography>
        </Box>
       

        {

            loading ? <CircularProgress size={40} sx={{position:'absolute',top: '50vh', left: '50vw'}} /> :
            
            formfields.map(({fieldName,type,value,options},i) => 
            {
                return <InputElement 
                        key={i}
                        fieldName={fieldName}
                        type={type}
                        value={value}
                        options={options}
                        disabled={submit}
                />
           }

            )
            
            } 
           
            {!loading ? <Button disabled={submit} variant="contained" onClick={handleSubmit} >Submit</Button>:null}

            {(!submit && !loading && !data=='')  ? <Box  sx={{mt : 5,mb : 5,width: '100%'}}>
                <Typography variant="h6" >
                    Response
                </Typography>
                
                        <code>
                        {data}
                        </code>
            </Box>: null }
      </Box>
    )


}


export default Form;