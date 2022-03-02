import * as yup from 'yup'


const formSchema = yup.object().shape({
    name: yup.string().trim().min(2, 'name must be at least 2 characters'),
    size: yup.string().required('size required'),
    pepperoni: yup.bool(),
    sausage: yup.bool(),
    mushrooms: yup.bool(),
    olives: yup.bool(),
    special: yup.string()

})

export default formSchema