import React, { useState, useEffect, useRef } from 'react';
import { Layout, Input, Button, List, Avatar, message } from 'antd';
import { UserOutlined, SendOutlined, LoadingOutlined } from '@ant-design/icons';
import { useLocation } from 'react-router-dom';
import '../index.css'; // Ensure to have your CSS for styling
import Navigator from '../components/Navgator';

const { Header, Content, Footer } = Layout;

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const ChatbotScreen = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [cooldown, setCooldown] = useState(false);
  const query = useQuery();
  const initialQuery = query.get('query');
  const initialQueryProcessed = useRef(false); // Ref to track if the initial query has been processed

  useEffect(() => {
    if (initialQuery && !initialQueryProcessed.current) {
      sendMessage(initialQuery);
      initialQueryProcessed.current = true; // Mark the initial query as processed
    }
  }, [initialQuery]);

  const sendMessage = async (messageText) => {
    setMessages((prevMessages) => [...prevMessages, { text: messageText, sender: 'You' }]);
    setLoading(true);

    const systemMessage = `You are an eco-sustainable travel advisor specializing in Thailand. Your role is to provide recommendations for eco-friendly travel destinations and activities to users who ask. Before giving any recommendations, you should ask about their travel preferences, such as the type of places they like or specific activities they are interested in. You should also inquire whether they prefer a peaceful or adventurous trip. Respond in the same language that the user uses to ask their questions, and maintain a friendly, conversational tone to make users feel comfortable and welcome.\n\nThis is the message from the customer that wants you to answer:\n\n${messageText}`;

    try {
      const response = await fetch('https://server.podsawee.com/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ prompt: systemMessage })
      });

      const data = await response.json();
      const botMessage = data.message;

      setMessages((prevMessages) => [
        ...prevMessages,
        { text: botMessage, sender: 'Bot' }
      ]);
    } catch (error) {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: 'Sorry, something went wrong. Please try again.', sender: 'Bot' }
      ]);
    } finally {
      setLoading(false);
      setCooldown(true);
      setTimeout(() => {
        setCooldown(false);
      }, 5000);
    }
  };

  const handleSend = () => {
    if (!inputValue.trim()) return;
    if (cooldown) {
      message.warning('Please wait for 5 seconds before sending another message.');
      return;
    }

    sendMessage(inputValue);
    setInputValue('');
  };

  return (
    <section>
      <Navigator />
      <Layout style={{ height: '100vh' }}>
        <Header style={{ background: '#001529', padding: 0, color: 'white', textAlign: 'center' }}>
          Chat Application
        </Header>
        <Content style={{ padding: '20px', overflowY: 'auto', flex: 1 }}>
          <List
            itemLayout="horizontal"
            dataSource={messages}
            renderItem={(item, index) => (
              <List.Item key={index}>
                <List.Item.Meta
                  avatar={<Avatar icon={<UserOutlined />} />}
                  title={item.sender}
                  description={item.text}
                />
              </List.Item>
            )}
          />
          {loading && (
            <div style={{ textAlign: 'center', marginTop: 20 }}>
              <LoadingOutlined style={{ fontSize: 24 }} spin />
            </div>
          )}
        </Content>
        <Footer style={{ padding: '10px', background: '#f0f2f5' }}>
          <Input.Group compact>
            <Input
              style={{ width: 'calc(100% - 50px)' }}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onPressEnter={handleSend}
              disabled={loading || cooldown}
            />
            <Button
              type="primary"
              onClick={handleSend}
              icon={<SendOutlined />}
              disabled={loading || cooldown}
            />
          </Input.Group>
        </Footer>
      </Layout>
    </section>
  );
};

export default ChatbotScreen;
