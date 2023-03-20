
import * as Yup from 'yup'

export const signInValidationSchema= (lang:string)=>
    Yup.object().shape({
        username:Yup.string().min(
            3,lang==='en'?
            "User Name  has to be 3 characters at least":
            "اسم المسنخدم يجب أن يكون 3 أحرف على الاقل"
        ).max(25,lang==='en'?"User Name can't be more than 25 characters"
        :"اسم المستخدم لا يمكن أن يكون أكثر من 25 حرف")
        ,

        password:Yup.string().min(8,lang==='en'?"Password has to be 8 characters at least":
        "كلمة السر يجب أن تكون على الأقل 8 أحرف")
    })
