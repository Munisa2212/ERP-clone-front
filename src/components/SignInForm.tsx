import React, { useContext, useState } from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button,  Form, Input } from 'antd';
import { Context } from '../context/Context';
import toast, { Toaster } from 'react-hot-toast';
import { instance } from '../hooks/instance';
import type { valueType } from 'antd/es/statistic/utils';
import { useCookies } from 'react-cookie';

const SignInForm: React.FC = () => {
    const [_, setCookie] = useCookies(["token"])
    const [isloading, setIsloading] = useState(false)
    const {setToken} = useContext(Context)

  const onFinish = ( values: valueType) => {
    setIsloading(true)
    instance.post("/user/login", values).then(data => {
        setIsloading(false)
        toast.success("Welcome")
        setTimeout(() => {
            setCookie("token", data.data.accessToken)
            setToken(data.data.accessToken)
            location.pathname = "/"
        }, 500)}).catch(() => toast.error("No user found"))
  };

  return (
    <>
        <Toaster position="top-center" reverseOrder={false}/>
        <Form
            autoComplete='off'
            name="login"
            initialValues={{ remember: true }}
            style={{ maxWidth: 360 }}
            onFinish={onFinish}
            >
            <Form.Item
                name="username"
                rules={[{ required: true, message: 'Iltimos foydalanuvchi nomingizni kiriting!' }]}
            >
                <Input name='username' allowClear size='large' prefix={<UserOutlined />} placeholder="Username" />
            </Form.Item>
            <Form.Item
                name="password"
                rules={[{ required: true, message: 'Iltimos maxfiy raqamingizni kiriting!' }]}
            >
                <Input.Password name='password' size='large' prefix={<LockOutlined />} type="password" placeholder="Password" />
            </Form.Item>

            <Form.Item>
                <Button loading={isloading} size='large' block type="primary" htmlType="submit">
                Log in
                </Button>
            </Form.Item>
        </Form>
    </>
    
  );
};

export default SignInForm;