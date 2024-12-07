'use client';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { useEffect } from "react";
import '../css/bubble.css';
import '../css/profile.css'

export default function Profile() {
    const clientID = '919597223573-bb7q4pknpu77j6toc2i518hnav3jseh3.apps.googleusercontent.com'; 

    useEffect(() => {
        console.log("Google OAuth initialized");
    }, []);

    const onSuccess = (response: any) => {
        console.log("Login Success:", response);
    };

    return (
        <>
            <div className="bubbles">
                <span style={{'--i':11} as React.CSSProperties}></span>
                <span style={{'--i':12} as React.CSSProperties}></span>
                <span style={{'--i':24} as React.CSSProperties}></span>
                <span style={{'--i':10} as React.CSSProperties}></span>
                <span style={{'--i':14} as React.CSSProperties}></span>
                <span style={{'--i':23} as React.CSSProperties}></span>
                <span style={{'--i':18} as React.CSSProperties}></span>
                <span style={{'--i':16} as React.CSSProperties}></span>
                <span style={{'--i':19} as React.CSSProperties}></span>
                <span style={{'--i':20} as React.CSSProperties}></span>
                <span style={{'--i':22} as React.CSSProperties}></span>
                <span style={{'--i':25} as React.CSSProperties}></span> 
                <span style={{'--i':18} as React.CSSProperties}></span>
                <span style={{'--i':21} as React.CSSProperties}></span>
                <span style={{'--i':15} as React.CSSProperties}></span>
                <span style={{'--i':26} as React.CSSProperties}></span>
                <span style={{'--i':17} as React.CSSProperties}></span>
                <span style={{'--i':13} as React.CSSProperties}></span>
                <span style={{'--i':28} as React.CSSProperties}></span>
                <span style={{'--i':10} as React.CSSProperties}></span>
                <span style={{'--i':14} as React.CSSProperties}></span>
                <span style={{'--i':23} as React.CSSProperties}></span>
                <span style={{'--i':11} as React.CSSProperties}></span>
                <span style={{'--i':12} as React.CSSProperties}></span>
                <span style={{'--i':24} as React.CSSProperties}></span>
                <span style={{'--i':15} as React.CSSProperties}></span>
                <span style={{'--i':12} as React.CSSProperties}></span>
                <span style={{'--i':24} as React.CSSProperties}></span>
                <span style={{'--i':15} as React.CSSProperties}></span>
            </div>

            <GoogleOAuthProvider clientId={clientID}>
                <div className="panel">
                    <div className="text-inputs">
                        <label htmlFor="email" className="label">E-mail:</label>
                        <input 
                            type="email" 
                            id="email" 
                            placeholder="Enter your email" 
                            className="text-box" 
                        />
                        
                        <label htmlFor="password" className="label">Password:</label>
                        <input 
                            type="password" 
                            id="password" 
                            placeholder="Enter your password" 
                            className="text-box" 
                        />
                    </div>

                    <div className="btns">
                        <button className="btn-login">Iniciar Sesión</button>
                        <button className="btn-create">Crear Cuenta</button>
                    </div>

                    <div className="btn">
                        <GoogleLogin onSuccess={onSuccess} />
                    </div>
                </div>
            </GoogleOAuthProvider>
        </>
    );
}
