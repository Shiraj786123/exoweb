import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaPaperPlane, FaRobot, FaTimes, FaWhatsapp } from 'react-icons/fa';
import {
  CONTACT_EMAIL,
  CONTACT_PHONE,
  CONTACT_PHONE_HREF,
  WHATSAPP_CHAT_HREF,
  WHATSAPP_HREF,
} from '../lib/contactInfo';
import {
  getChatbotReply,
  getQuickReplyLabel,
  getQuickReplyResponse,
  QUICK_REPLIES,
  WELCOME_MESSAGE,
} from '../content/chatbotKnowledge';

function createMessage(role, payload) {
  return {
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    role,
    ...payload,
  };
}

const CHATBOT_ICON = '/images/chatbot-icon.png';

const ChatbotIcon = ({ className = '', size = 22 }) => (
  <Image
    src={CHATBOT_ICON}
    alt=""
    width={size}
    height={size}
    className={className}
    aria-hidden="true"
  />
);

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState([
    createMessage('bot', {
      text: WELCOME_MESSAGE,
      quickReplies: QUICK_REPLIES.map((q) => q.id),
    }),
  ]);

  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  const pushBotReply = (replyData, delay = 500) => {
    setIsTyping(true);
    window.setTimeout(() => {
      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        createMessage('bot', {
          text: replyData.reply,
          links: replyData.links || [],
          contact: replyData.contact || false,
          whatsapp: replyData.whatsapp || false,
          quickReplies: replyData.quickReplies || [],
        }),
      ]);
    }, delay);
  };

  const handleUserMessage = (text) => {
    const trimmed = text.trim();
    if (!trimmed) return;

    setMessages((prev) => [...prev, createMessage('user', { text: trimmed })]);
    setInput('');
    pushBotReply(getChatbotReply(trimmed));
  };

  const handleQuickReply = (quickId) => {
    const label = getQuickReplyLabel(quickId);
    setMessages((prev) => [...prev, createMessage('user', { text: label })]);
    pushBotReply(getQuickReplyResponse(quickId));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleUserMessage(input);
  };

  return (
    <div className="vexoweb-chatbot" aria-live="polite">
      {isOpen ? (
        <div className="vexoweb-chatbot__panel" role="dialog" aria-label="Vexoweb chat assistant">
          <header className="vexoweb-chatbot__header">
            <button
              type="button"
              className="vexoweb-chatbot__close"
              onClick={() => setIsOpen(false)}
              aria-label="Close chat"
            >
              <FaTimes />
            </button>

            <div className="vexoweb-chatbot__header-brand">
              <span className="vexoweb-chatbot__avatar" aria-hidden="true">
                <ChatbotIcon size={30} className="vexoweb-chatbot__avatar-icon" />
              </span>
              <strong>Vexoweb Assistant</strong>
              <span>Usually replies instantly</span>
            </div>
          </header>

          <div className="vexoweb-chatbot__messages">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`vexoweb-chatbot__message vexoweb-chatbot__message--${message.role}`}
              >
                <div className="vexoweb-chatbot__bubble">{message.text}</div>

                {message.links?.length > 0 ? (
                  <div className="vexoweb-chatbot__links">
                    {message.links.map((link) => (
                      <Link key={link.href} href={link.href} className="vexoweb-chatbot__link">
                        {link.label}
                      </Link>
                    ))}
                  </div>
                ) : null}

                {message.contact ? (
                  <div className="vexoweb-chatbot__contact-card">
                    <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
                    <a href={CONTACT_PHONE_HREF}>{CONTACT_PHONE}</a>
                    <a href={WHATSAPP_HREF} target="_blank" rel="noopener noreferrer">
                      Chat on WhatsApp
                    </a>
                  </div>
                ) : null}

                {message.whatsapp ? (
                  <a
                    href={WHATSAPP_CHAT_HREF}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="vexoweb-chatbot__whatsapp-btn"
                  >
                    <FaWhatsapp aria-hidden="true" />
                    Continue on WhatsApp
                  </a>
                ) : null}

                {message.quickReplies?.length > 0 ? (
                  <div className="vexoweb-chatbot__quick-replies">
                    {message.quickReplies.map((quickId) => (
                      <button
                        key={quickId}
                        type="button"
                        className="vexoweb-chatbot__quick-reply"
                        onClick={() => handleQuickReply(quickId)}
                      >
                        {getQuickReplyLabel(quickId)}
                      </button>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}

            {isTyping ? (
              <div className="vexoweb-chatbot__message vexoweb-chatbot__message--bot">
                <div className="vexoweb-chatbot__bubble vexoweb-chatbot__typing">
                  <span />
                  <span />
                  <span />
                </div>
              </div>
            ) : null}

            <div ref={messagesEndRef} />
          </div>

          <form className="vexoweb-chatbot__composer" onSubmit={handleSubmit}>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about services, pricing, SEO..."
              aria-label="Chat message"
              autoComplete="off"
            />
            <button type="submit" aria-label="Send message" disabled={!input.trim()}>
              <FaPaperPlane />
            </button>
          </form>
        </div>
      ) : null}

      <button
        type="button"
        className={`vexoweb-chatbot__launcher ${isOpen ? 'is-open' : ''}`}
        onClick={() => setIsOpen((open) => !open)}
        aria-expanded={isOpen}
        aria-label={isOpen ? 'Close chat assistant' : 'Open chat assistant'}
      >
        {isOpen ? <FaTimes /> : <FaRobot />}
        {!isOpen ? <span className="vexoweb-chatbot__launcher-label">Chat</span> : null}
      </button>
    </div>
  );
};

export default Chatbot;
