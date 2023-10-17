import { LoginForm } from "../../components/forms/LoginForm";

export const LoginPage = ({setUser}) => {
    return (
        <main >
            <div>
                <div>
                 <LoginForm setUser={setUser}/>
                </div>
            </div>
        </main>
    )
};