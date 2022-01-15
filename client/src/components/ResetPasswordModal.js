import React, {useEffect, useState, useRef} from 'react';
import {useSearchParams} from 'react-router-dom';
import {auth} from '../config/firebase-config'
import { Modal, Alert } from 'react-bootstrap';
import { useNavigate } from "react-router-dom"
import { toast } from 'react-toastify';
import { useAuth } from "../contexts/AuthContext"


function ResetPasswordModal() {
    const [showReset, setShowReset] = useState(false);
    const [email, setEmail] = useState('');
    const [searchParams] = useSearchParams();
    const [error, setError] = useState(undefined);

    const navigate = useNavigate();

    const {login} = useAuth();

    let mode = searchParams.get('mode'), actionCode = searchParams.get('oobCode');
    let newPassword = useRef();
    let newPasswordConfirm = useRef();

    useEffect(()=> {
        if (mode === 'resetPassword') {
            auth.verifyPasswordResetCode(actionCode).then((email) => {
                setShowReset(true)
                setEmail(email);
            }).catch(function(error) {
                navigate('/')
                toast.error('Your password reset session has expired. Please request a new password reset.', {
                    position: "top-right",
                    autoClose: 7000,
                    hideProgressBar: false,
                    pauseOnHover: false,
                    closeOnClick: true,
                    draggable: true,
                    progress: undefined,
                });
            });
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    async function confirmPasswordReset(e) {
        e.preventDefault();
        setError(undefined);

        if (newPassword.current.value !== newPasswordConfirm.current.value) {
            setError('Please check that your passwords match.');
            return;
        }
        auth.confirmPasswordReset(actionCode, newPassword.current.value).then(async (resp) => {
            console.log(resp);
            await login(email,newPassword.current.value)
            navigate('/')
            toast.success('Your password has been reset!', {
                position: "top-right",
                autoClose: 7000,
                hideProgressBar: false,
                pauseOnHover: false,
                closeOnClick: true,
                draggable: true,
                progress: undefined,
            });
        }).catch(function(error) {
            switch (error.code) {
                case 'auth/expired-action-code':
                    setError('Your password reset session has expired. Please request a new password reset.');
                    break;
                case 'auth/invalid-action-code':
                    setError('Invalid password reset code. Please request a new password reset.');
                    break;
                case 'auth/weak-password':
                    setError('Your password is too weak. Please choose a stronger password.');
                    break;
                default:
                    setError('Something went wrong. Please try again.');
            }
        })
    }

    return ( 
        <Modal id="reset-modal" show={showReset} onHide={() => {setShowReset(true)}} aria-labelledby="contained-modal-title-vcenter" backdrop="static" centered>
            <Modal.Header>
                <Modal.Title>Reset your password</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h5>{email}</h5>
                <form id="item-information"className="form-horizontal" onSubmit={confirmPasswordReset}>
                    {error && <Alert variant = 'danger'>{error}</Alert>}
                    <label className="control-label label-name" style={{margin:"0px"}} id="password-label"> New Password </label>
                    <input ref = {newPassword} className="form-control green-border" type="password" id="password" name="password" autoComplete="off" placeholder="At least 6 characters/numbers" required/><br></br>
                    <label className="control-label label-name" style={{margin:"0px"}} id="password-label"> Confirm Password </label>
                    <input ref = {newPasswordConfirm} className="form-control green-border" type="password" id="password" name="password" autoComplete="off" placeholder="At least 6 characters/numbers" required/><br></br>
                    <input id="submit-btn" className="btn btn-primary mb-3" type="submit" value="Reset Password"/>
                </form>
            </Modal.Body>
        </Modal>
     );
}


export default ResetPasswordModal;