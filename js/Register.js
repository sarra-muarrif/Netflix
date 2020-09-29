import logo from "../images/logo.svg";

const Register = function render() {
  return ` <section class="logo">
        <img class="logo" src = "${logo}" width = "126" class="register">
        <form id="register-form">
         <span class="form-field">
           <label for="email">البريد الإلكتروني</label>
           <input type="email" id ="email"/>
         </span>
         <span class="form-field">
           <label for="password">كلمة السر </label>
           <input type="password" id ="password"/>
         </span>
         <span class="form-field">
         <label for="password">إعادة كلمة السر </label>
         <input type="password" id ="password"/>
       </span>
         <span class="form-field">
         <input type="submit" value ="إنشاء حساب" />
         <a href="#/login">تسجيل الدخول </a> 
       </span>
        </form>
    </section > `;
};

export default Register;
