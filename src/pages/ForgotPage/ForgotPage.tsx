import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {Typography, Button, Form, Input} from 'antd';
import {KeyOutlined, MailOutlined, LoadingOutlined} from '@ant-design/icons';
import './styles.scss';
import {checkEmail} from '../../shared/utils';

const {Title, Paragraph} = Typography;

const ForgotPage = () => {
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleForm = (values: any) => {
    setLoading(true);
    setTimeout(() => {
      setSent(true);
      setLoading(false);
    }, 1000);
  };

  return (
    <>
      {sent ? (
        <>
          <MailOutlined className="forgot-page__icon" />
          <Title>Письмо отправлено</Title>
          <Paragraph>
            На указанный вами e-mail было отправлено письмо для смены пароля
          </Paragraph>
          <Link to="/">
            <Button type="primary" size="large">
              Вернуться на главную
            </Button>
          </Link>
        </>
      ) : (
        <>
          <KeyOutlined className="forgot-page__icon" />
          <Title>Восстановить пароль</Title>
          <Paragraph>
            Введите e-mail, на который регистрировались ранее
          </Paragraph>
          <Form name="forgot" layout="horizontal" onFinish={handleForm}>
            <Form.Item
              name="email"
              rules={[
                {required: true, message: 'Введите email'},
                {validator: checkEmail},
              ]}
            >
              <Input size="large" placeholder="Email" />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                shape="round"
                size="large"
                htmlType="submit"
                icon={loading && <LoadingOutlined />}
              >
                Отправить
              </Button>
            </Form.Item>

            <Form.Item>
              <Button type="link" onClick={() => history.goBack()}>
                Отменить
              </Button>
            </Form.Item>
          </Form>
        </>
      )}
    </>
  );
};

export default ForgotPage;
