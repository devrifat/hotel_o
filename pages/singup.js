import axios from 'axios'
import Link from 'next/link'
import { useState } from 'react'
import { toast } from 'react-toastify'
import InputFields from '../component/input/input-field'
import LayoutOne from '../component/layouts/page-design-one'
import { SuSpinner } from '../component/spinner/su-spinner'


const SingUp = () => {
    const [name, setName] = useState('rid')
    const [email, setEmail] = useState('ridcoder@gmail.com')
    const [password, setPassword] = useState('ridcoder')
    const [spinner, setSpinner] = useState(false)
    const updateName = e => {
        setName(e.target.value)
    }
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
                `api/singup`,
                {
                    name,
                    email,
                    password
                }
            )
            console.log(data);
            toast('good job');
            setSpinner(false)
        } catch (err) {
            setSpinner(true)
            console.log(err.response);
            toast.error(err.response.data);
            setSpinner(false)
        }
    }
    return (
        <LayoutOne title={'SingUp page'}>
            <div className="singup-page-area py-5">
                <div className="container">
                    <form onSubmit={handelSubmit} className="row">
                        <div className="col">
                            <InputFields
                                type={'text'}
                                value={name}
                                placeholder={'name'}
                                handeler={updateName}
                            />
                        </div>
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
                            <button disabled={!name || !password || !email } type="submit" className="btn btn-dark">
                                Sign up
                                { spinner ? <SuSpinner/> : null}
                            </button>
                            
                            <Link href="/login">
                                <a className="btn btn-dark ms-2">login</a>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </LayoutOne>
    )
}



export default SingUp