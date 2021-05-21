import React from 'react';
import {Link} from 'react-router-dom';
import {Col, Row, Typography, Button, Form, Input} from 'antd';
import {GoogleOutlined, FacebookOutlined} from '@ant-design/icons';
import './styles.scss';
import {checkEmail} from '../../shared/utils';

const {Title, Paragraph, Text} = Typography;

const LoginPage = () => {
  const handleForm = (values: any) => {
    console.log(values);
  };

  return (
    <>
      <Title>Войти</Title>
      <Paragraph>Добро пожаловать, рады видеть вас снова 👋</Paragraph>
      <Row justify="center">
        <Col span={12}>
          <Button shape="round" icon={<FacebookOutlined />} size="large">
            Войти через Facebook
          </Button>
        </Col>
        <Col span={12}>
          <Button shape="round" icon={<GoogleOutlined />} size="large">
            Войти через Google
          </Button>
        </Col>
      </Row>
      <Text>или</Text>
      <Form name="login" layout="horizontal" onFinish={handleForm}>
        <Form.Item
          name="email"
          rules={[
            {required: true, message: 'Введите email'},
            {validator: checkEmail},
          ]}
        >
          <Input size="large" placeholder="Email" />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{required: true, message: 'Введите пароль'}]}
        >
          <Input.Password size="large" placeholder="Пароль" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" shape="round" size="large" htmlType="submit">
            Войти в аккаунт
          </Button>
        </Form.Item>

        <Form.Item>
          <Link to="/forgot">Забыли пароль?</Link>
        </Form.Item>
      </Form>
    </>
  );
};

export default LoginPage;
