import axios from 'axios';
import Link from 'next/link';
import { useState } from 'react';
import { toast } from 'react-toastify';
import InputFields from '../component/input/input-field';
import LayoutOne from '../component/layouts/page-design-one';
import { SuSpinner } from '../component/spinner/su-spinner';


export default function Login() {



    const [email, setEmail] = useState('ridcoder@gmail.com')
    const [password, setPassword] = useState('ridcoder')
    const [spinner, setSpinner] = useState(false)
    const updateEmail = e => {
        setEmail(e.target.value)
    }
    const updatePassword = e => {
        setPassword(e.target.value)
    }
    const handelSubmit = async (e) => {
        e.preventDefault()
        try {
            setSpinner(true)
            const {data} = await axios.post(
                `api/login`,
                {
                    email,
                    password
                }
            )
            setSpinner(false)
            console.log(data)
            toast('Login Done');
        } catch (err) {
            setSpinner(true)
            console.log(err.response);
            toast.error(err.response.data);
            setSpinner(false)
        }
    }
  return (
    <LayoutOne title={'Login page'}>
        <div className="login-page-area py-5">
            <div className="container">
                <form onSubmit={handelSubmit} className="row">
                    <div className="col">
                        <InputFields
                            type={'email'}
                            value={email}
                            placeholder={'email'}
                            handeler={updateEmail}
                        />
                    </div>
                    <div className="col">
                        <InputFields
                            type={'password'}
                            value={password}
                            placeholder={'password'}
                            handeler={updatePassword}
                        />
                    </div>
                    <div className="col-12 mt-3">
                        <button type="submit" className="btn btn-dark">
                            Login 
                            { spinner ? <SuSpinner/> : null}
                        </button>
                        <Link href="/singup">
                            <a className="btn btn-dark ms-2 ">singup</a>
                        </Link>
                        <Link href="/reset">
                            <a className="btn btn-dark ms-2">Reset password</a>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    </LayoutOne>
  )
}
