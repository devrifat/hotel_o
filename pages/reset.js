import Link from 'next/link';
import { useState } from 'react';
import InputFields from '../component/input/input-field';
import LayoutOne from '../component/layouts/page-design-one';

export default function Reset() {
    const [email, setEmail] = useState('ridcoder@gmail.com')

    const updateEmail = e => {
        setEmail(e.target.value)
    }
    const handelSubmit = e => {
        e.preventDefault()
        console.log(
            {
                email
            }
        );
        // const singUpRequest = axios.post(
        //     `http://localhost:1000/api/singup`,
        //     {
        //         email
        //     }
        // )
        // .then(
        //     ({data}) => {
        //         console.log(data);
        //     }
        // )
    }
  return (
    <LayoutOne title={'Reset password page'}>
        <div className="reset-password-page-area py-5">
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
                    <div className="col-12 mt-3">
                        <button type="submit" className="btn btn-dark">Reset password</button>
                        <Link href="/login">
                            <a className="btn btn-dark ms-2 ">login</a>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    </LayoutOne>
  )
}
