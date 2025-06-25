import React, { useContext, useState } from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button,  Form, Input } from 'antd';
import { Context } from '../context/Context';
import toast, { Toaster } from 'react-hot-toast';

const SignInForm: React.FC = () => {
    const [isloading, setIsloading] = useState(false)
    const {setToken} = useContext(Context)
  const onFinish = ( values: {username: string, password: string}) => {
    setIsloading(true)
    fetch("http://localhost:3000/users").then(res => res.json()).then(data => {
        const isUser = data.some((item: {username: string, password: string}) => item.username == values.username && item.password == values.password)
        setTimeout(() => {
            if(isUser){
                setTimeout(() => {
                    setToken(true)
                }, 1000)
            }else{
                toast.error("No user")
            }
            setIsloading(false)
            
        }, 1000)
    })
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