import React, {useContext, useState} from 'react';
import {Col, Row, Typography, Button, Form, Input} from 'antd';
import {
  GoogleOutlined,
  FacebookOutlined,
  LoadingOutlined,
} from '@ant-design/icons';
import './styles.scss';
import {checkEmail} from '../../shared/utils';
import {UserContext} from '../../App';

const {Title, Paragraph, Text} = Typography;

const RegisterPage = () => {
  const [hasPromocode, setHasPromocode] = useState(false);
  const [sent, setSent] = useState(false);
  const [needAgain, setNeedAgain] = useState(false);
  const [loading, setLoading] = useState(false);
  const [user, changeUser] = useContext(UserContext);

  const handleRegisterForm = (values: any) => {
    setLoading(true);
    setTimeout(() => {
      changeUser({
        name: values.name,
        email: values.email,
      });
      setSent(true);
      setLoading(false);
    }, 1000);
  };

  const handleConfirmForm = (values: any) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  return (
    <>
      {sent ? (
        <>
          {needAgain ? (
            <>
              <Title>Мне не пришло письмо</Title>
              <Paragraph>
                Письмо может прийти с задержкой в 5-10 минут. Также проверьте
                разные папки почтового ящика (актуально для gmail.com) и папку
                "Спам".Если письмо все же не пришло, повторите попытку или
                напишите об этом в тех.поддержку &nbsp;
                <Typography.Link href="mailto:support@livedune.ru">
                  support@livedune.ru
                </Typography.Link>
                &nbsp; и мы активируем ваш аккаунт.
              </Paragraph>
              <Form
                name="confirm"
                layout="horizontal"
                onFinish={handleConfirmForm}
              >
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
                  >
                    Отправить заново
                  </Button>
                </Form.Item>

                <Form.Item>
                  <Button type="link" onClick={() => setNeedAgain(false)}>
                    Отменить
                  </Button>
                </Form.Item>
              </Form>
            </>
          ) : (
            <>
              <Title>Подтвердите ваш e-mail</Title>
              <Paragraph>
                {user?.name}, на ваш E-mail отправлено письмо со ссылкой для
                подтверждения. Перейдите по ней, чтобы активировать вашу учетную
                запись и получить 7 дней бесплатного доступа.
              </Paragraph>
              <Button type="primary" size="large">
                Перейти к почте
              </Button>
              <br />
              <Button type="link" onClick={() => setNeedAgain(true)}>
                Мне не пришло письмо
              </Button>
            </>
          )}
        </>
      ) : (
        <>
          <Title>Регистрация</Title>
          <Paragraph>
            Зарегистрируйся и получи доступ к аналитике аккаунтов.
          </Paragraph>
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
          <Form
            name="register"
            layout="horizontal"
            onFinish={handleRegisterForm}
          >
            <Form.Item
              name="name"
              rules={[{required: true, message: 'Введите имя'}]}
            >
              <Input size="large" placeholder="Имя" />
            </Form.Item>

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

            {hasPromocode ? (
              <Form.Item name="promocode">
                <Input size="large" placeholder="Промокод" />
              </Form.Item>
            ) : (
              <Form.Item>
                <Button type="link" onClick={() => setHasPromocode(true)}>
                  У меня есть промокод
                </Button>
              </Form.Item>
            )}

            <Form.Item>
              <Button
                type="primary"
                shape="round"
                size="large"
                htmlType="submit"
                icon={loading && <LoadingOutlined />}
              >
                Войти в аккаунт
              </Button>
            </Form.Item>

            <Form.Item>
              <Text>
                Создавая аккаунт, я согласен c&nbsp;
                <Typography.Link>условиями оферты</Typography.Link>
              </Text>
            </Form.Item>
          </Form>
        </>
      )}
    </>
  );
};

export default RegisterPage;
