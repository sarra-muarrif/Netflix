import logo from "../images/logo.svg";

const Login = function render() {
  return ` <section class="logo">
        <img class="logo" src = "${logo}" width = "126" >
        <form id="login-form">
         <span class="form-field">
           <label for="email">البريد الإلكتروني</label>
           <input required type="email" id ="email"/>
         </span>
         <span class="form-field">
           <label for="password">كلمة السر </label>
           <input type="password" id ="password"/>
         </span>
         <span class="form-field" id="submit-form">
          <input required type="submit" value =" تسجيل الدخول"/>
          <a href="#/register"> إنشاء حساب </a> 
       </span>
        </form>
    </section > `;
};

export default Login;
