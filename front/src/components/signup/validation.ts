import i18n from 'i18next'
import * as Yup from 'yup'
export const signUpValidationSchema= 
    Yup.object().shape({
        username:Yup.string().min(
            3,i18n.language==='en'?
            "User Name  has to be 3 characters at least":
            "اسم المسنخدم يجب أن يكون 3 أحرف على الاقل"
        ).max(25,i18n.language==='en'?"User Name can't be more than 25 characters"
        :"اسم المستخدم لا يمكن أن يكون أكثر من 25 حرف")
        ,

        password:Yup.string().min(8,i18n.language==='en'?"Password has to be 8 characters at least":
        "لمة السر يجب أن تكون على الأقل 8 أحرف"),
        password_confirmation:Yup.string().oneOf([Yup.ref('password')]
        ,i18n.language ==='en'?'Password Confirmation must match Password':"تأكيد كلمة السر يجب أن تطابق كلمة السر")
    })
