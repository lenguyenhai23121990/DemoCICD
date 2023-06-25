import React, { useEffect, useRef, useState } from 'react';
import { connect } from 'react-redux';
import { ApplicationState } from 'store';
import { ActionCreators as AuthActions } from 'store/auth';
import { InputText } from 'primereact/inputtext'
import { Button } from 'primereact/button';
import { Form, Field } from 'react-final-form'
import classNames from 'classnames';
import { Password } from 'primereact/password';
import Captcha, { CaptchaRef } from 'components/captcha/Captcha';
import ENV from 'services';
interface State {
    user?: string,
    password?: string,
    config?: any,
    isAuthenticated: any,
    dispatch?: any,
    login: any,
}
type Props = State
const Login = (props: Props) => {
    const [isValidCaptcha, setIsValidCaptcha] = useState(false)
    const captchaRef = useRef<CaptchaRef>(null)
    useEffect(()=>{
        if(ENV.USE_CAPTCHA + "" === "false") setIsValidCaptcha(true)
    },[])
    const onSubmit = async (values: any) => {
        props.login(values.User, values.Password)
    }
    const validate = (data: any) => {
        let errors: any = {};
        if (!data.User) {
            errors.User = 'Tên đăng nhập bắt buộc nhập.';
        }
        if(!isValidCaptcha){
            errors.IsValidCaptcha = 'Mã captcha không chính xác.'
        }
        return errors;
    }
    const isFormFieldValid = (meta: any) => !!(meta.touched && meta.error);
    // const getFormErrorMessage = (meta) => {
    //     return isFormFieldValid(meta) && <small className="p-error">{meta.error}</small>
    // }
    return (
        <React.Fragment>
            <div className="pages-body login-page flex flex-column">
                <div className="flex flex-column align-self-center mt-auto mb-auto m-2 px-5">
                    <div className="pages-panel card flex flex-column">
                        <div className="pages-header px-3 py-1">
                            <h2>ĐĂNG NHẬP</h2>
                        </div>
                        <div style={{paddingTop: '1rem', paddingBottom: '1rem'}}><img src="assets/brand/footer-light.png" style={{ width: 'auto', height: '3.5rem' }} alt="" /></div>
                        {/* <h4>Hành trình kết nối tri thức</h4> */}

                        <div className="pages-detail mb-6 px-6 p-text-bold">HÀNH TRÌNH KẾT NỐI TRI THỨC</div>

                        <Form onSubmit={onSubmit}
                            initialValues={{ User: "", Password: "" }}
                            subscription={{ submitting: false, pristine: true }}
                            validate={validate}
                            render={({ handleSubmit, form, submitting, pristine, values }) => (
                                <form onSubmit={handleSubmit}>
                                    <div className="input-panel flex flex-column px-3">
                                        <Field name="User" render={({ input, meta }) => (
                                            <div className="p-inputgroup">
                                                <span className="p-inputgroup-addon">
                                                    <i className="pi pi-user"></i>
                                                </span>
                                                <span className="p-float-label">
                                                    <InputText type="text" id="User" {...input} autoFocus className={classNames({ 'p-invalid': isFormFieldValid(meta) })} />
                                                    <label htmlFor="User">User</label>
                                                </span>
                                            </div>
                                        )} />
                                        <Field name="Password" render={({ input, meta }) => (
                                            <div className="p-inputgroup mt-3 mb-1">
                                                <span className="p-inputgroup-addon">
                                                    <i className="pi pi-lock"></i>
                                                </span>
                                                <span className="p-float-label">
                                                    <Password id="Password" {...input} toggleMask={true} feedback={false} className={classNames({ 'p-invalid': isFormFieldValid(meta) })} style={{borderTopLeftRadius: "0px", borderBottomLeftRadius: "0px"}} />
                                                    <label htmlFor="Password">Password</label>
                                                </span>
                                            </div>
                                        )} />
                                        {
                                            (ENV.USE_CAPTCHA + "" === "true") && <Captcha ref={captchaRef}
                                                OnChange={(isValid)=>{ setIsValidCaptcha(isValid)}}
                                                OnRefresh={()=>{}}
                                                Placeholder="Nhập captcha"
                                                InvalidMessage="Mã captcha không chính xác."
                                                MinLength={6}
                                                MaxLength={8}
                                            />
                                        }
                                        <Button type="submit" className={"login-button mt-3 mb-3 px-3"} label="Đăng nhập" disabled={submitting} onClick={()=>{ captchaRef?.current?.SetTouched(true) }} />
                                        <p className="pages-detail">Chưa có tài khoản, click vào đây để đăng ký.</p>
                                        <div className="pages-detail">Phiên bản {props.config.application.version}</div>
                                    </div>
                                </form>
                            )}
                        />
                    </div>
                </div>
                <div style={{padding: '10px'}}>
                    <span style={{float:'left'}}><img src="assets/brand/footer-dark.png" style={{ width: 'auto', height: '2.25rem' }} alt="" /></span>
                    <span style={{float:'right', color:'white'}}>© 1997 - {new Date().getFullYear() + ""} by CMC. All rights reserved.</span>
                </div>
            </div>
        </React.Fragment>
    )
}

const mapStateToProps = (state: ApplicationState) => {
    return {
        config: state.ConfigState,
        isAuthenticated: localStorage.getItem("user") !== undefined,
    }
}
const mapDispatchToProps = {
    login: AuthActions.LoginRequest,
}
export default connect(mapStateToProps, mapDispatchToProps)(Login)